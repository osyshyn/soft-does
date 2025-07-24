"use client";

import { useEffect } from "react";

/**
 * Locks the document body scroll while the component using this hook is mounted (or while `lock` is true).
 * Restores the previous overflow style on unmount.
 *
 * Useful for modals, drawers, etc.
 */
export default function useLockBodyScroll(lock: boolean = true) {
  useEffect(() => {
    if (!lock) return;

    // Save the current overflow so we can restore it later.
    const originalOverflow = document.body.style.overflow;

    // Prevent scrolling on the <body> (which hides scrollbar).
    document.body.style.overflow = "hidden";

    // Cleanup: restore on unmount.
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [lock]);
}
