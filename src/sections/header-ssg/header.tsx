import s from "./Header.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { ROUTES } from "@shared/constants/routes";

interface HeaderProps {
  posts?: boolean;
  isLanding?: boolean;
}

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/expertise" },
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/portfolio" },
  // { label: "Solution Hub", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Insights", href: "/insights" },
];

export default function HeaderSSG({}: HeaderProps) {
  return (
    <header id="header" className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.main)} id="header">
        <Link href={ROUTES.root} className={`${s.main_header}`}>
          SOFT DOES
        </Link>

        <div>
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
