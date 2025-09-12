"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Ctx = { noContacts: boolean };

const Ctx = createContext<Ctx>({ noContacts: false });

export const useNoContacts = () => useContext(Ctx);

const NoContactsProvider = ({ children }: { children: React.ReactNode }) => {
  const [noContacts, setNoContacts] = useState(false);

  useEffect(() => {
    const read = () =>
      setNoContacts(window.location.hash.includes("nocontacts"));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  return <Ctx.Provider value={{ noContacts }}>{children}</Ctx.Provider>;
};

export default NoContactsProvider;

export const HideContacts = ({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const { noContacts } = useNoContacts();

  if (noContacts) {
    return fallback || null;
  }

  return children;
};
