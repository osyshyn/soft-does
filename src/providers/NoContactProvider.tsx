"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Ctx = { noContacts: boolean };

const Ctx = createContext<Ctx>({ noContacts: false });

export const useNoContacts = () => useContext(Ctx);

export default function NoContactsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [noContacts, setNoContacts] = useState(false);

  useEffect(() => {
    const read = () =>
      setNoContacts(window.location.hash.includes("nocontacts"));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  return <Ctx.Provider value={{ noContacts }}>{children}</Ctx.Provider>;
}

export const HideContacts = ({ children }: { children: React.ReactNode }) => {
  const { noContacts } = useNoContacts();

  if (noContacts) return null;

  return children;
};
