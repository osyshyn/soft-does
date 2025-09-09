"use client";

import s from "./pagination.module.scss";

import { paginArrowActive as PaginArrowActive } from "@assets/icons/paginArrowActive";
import { paginArrowDis as PaginArrowDis } from "@assets/icons/paginArrowDis";
import { TextXl } from "../typography";

interface PaginationProps {
  page: number;
  onChangePage: (page: (p: number) => number) => void;
  total: number;
  limit: number;
  totalPages: number;
}

const Pagination = ({
  page,
  onChangePage,
  total,
  limit,
  totalPages,
}: PaginationProps) => {
  return (
    <div className={s.pagination}>
      <button
        onClick={() => onChangePage((p: number) => Math.max(1, p - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        className={s.arrowBtn}
      >
        <span style={{ display: "inline-block", transform: "rotate(180deg)" }}>
          {page === 1 ? (
            <span
              style={{ display: "inline-block", transform: "rotate(180deg)" }}
            >
              <PaginArrowDis />
            </span>
          ) : (
            <PaginArrowActive />
          )}
        </span>
      </button>

      <TextXl className={s.pageInfo}>
        {String(page).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}{" "}
        Pages
      </TextXl>

      <button
        onClick={() =>
          onChangePage((p: number) => (p * limit < total ? p + 1 : p))
        }
        disabled={page * limit >= total}
        aria-label="Next page"
        className={s.arrowBtn}
      >
        <span style={{ display: "inline-block" }}>
          {page * limit >= total ? (
            <span
              style={{ display: "inline-block", transform: "rotate(180deg)" }}
            >
              <PaginArrowDis />
            </span>
          ) : (
            <PaginArrowActive />
          )}
        </span>
      </button>
    </div>
  );
};

export default Pagination;
