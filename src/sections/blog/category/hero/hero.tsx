"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import s from "./hero.module.scss";
import { fetchCategoryById } from "../../../../app/api/contentful/api";
import { H2 } from "@shared/components/typography";
import clsx from "clsx";

export const CategoryHero = () => {
  const { category } = useParams();
  const [categoryName, setCategoryName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof category === "string") {
      fetchCategoryById(category)
        .then((data) => {
          if (data && typeof data.name === "string") {
            setCategoryName(data.name);
          } else {
            setCategoryName("Category");
          }
        })
        .catch(() => setCategoryName("Category"));
    }
  }, [category]);

  return (
    <section className={clsx(s.root, "wrapper")}>
      <H2 className={s.title}>{categoryName || "Category"}</H2>
    </section>
  );
};
