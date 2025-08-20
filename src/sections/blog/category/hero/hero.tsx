"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from "./hero.module.scss";
import { fetchCategoryById } from "../../../../app/api/contentful/api";

export const CategoryHero = () => {
  const router = useRouter();
  const { category } = router.query;
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
    <section className={s.root}>
      <h1 className={s.title}>{categoryName || "Category"}</h1>
    </section>
  );
};
