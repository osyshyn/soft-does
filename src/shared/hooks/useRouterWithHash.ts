"use client";

import { useRouter } from "next/navigation";
import { useNoContacts } from "@shared/providers/no-contact-provider";

export function useRouterWithHash() {
  const router = useRouter();
  const { noContacts } = useNoContacts();

  const addHash = (url: string) => {
    if (!noContacts) return url;
    const [path] = url.split("#");
    return `${path}#nocontacts`;
  };

  return {
    push: (url: string) => router.push(addHash(url)),
    replace: (url: string) => router.replace(addHash(url)),
    prefetch: router.prefetch,
    back: router.back,
    forward: () => history.forward(),
  };
}
