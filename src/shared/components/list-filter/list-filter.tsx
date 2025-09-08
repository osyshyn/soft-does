"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../buttons";
import clsx from "clsx";

import s from "./list-filter.module.scss";

interface ListFilterProps {
  value: string;
  onChange: (tab: string) => void;
  categories: string[];
  queryParam?: string;
}

const ListFilter = ({
  categories,
  value,
  onChange,
  queryParam = "filter",
}: ListFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(value);

  useEffect(() => {
    const urlFilter = searchParams.get(queryParam);
    if (urlFilter && categories.includes(urlFilter)) {
      setActiveTab(urlFilter);
      onChange(urlFilter);
    }
  }, [searchParams, queryParam, categories, onChange]);

  useEffect(() => {
    setActiveTab(value);
  }, [value]);

  const handleChange = (tab: string) => {
    setActiveTab(tab);
    onChange(tab);

    const params = new URLSearchParams(searchParams.toString());
    if (tab === categories[0]) {
      params.delete(queryParam);
    } else {
      params.set(queryParam, tab);
    }

    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className={s.block}>
      {categories.map((category) => (
        <Button
          key={category}
          variant="outlined"
          className={clsx(s.tab, activeTab === category && s.active)}
          onClick={() => handleChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ListFilter;
