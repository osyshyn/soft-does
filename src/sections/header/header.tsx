"use client";

import { useState } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import { ServicesModal } from "./sercices-modal/sercices-modal";
import useIsMobile from "@shared/hooks/useIsMobile";
import ServicesModalMobile from "./sercices-modal-mobile/sercices-modal-mobile";
import MenuBurger from "./menu-burger/menu-burger";
import clsx from "clsx";
import { useLockScroll } from "@shared/components/lenis/lenis";

interface HeaderProps {
  posts?: boolean;
  isLanding?: boolean;
}

const navItems = [
  { label: "Services", isModal: true },
  { label: "Expertise", href: "/expertise" },
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/portfolio" },
  { label: "Solution Hub", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Insights", href: "/insights" },
];

export default function Header({ posts, isLanding }: HeaderProps) {
  const isMobile = useIsMobile(1200);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isServicesModalMobileOpen, setIsServicesModalMobileOpen] =
    useState(false);
  useLockScroll(isMenuOpen);

  const isLandingDomain =
    typeof window !== "undefined" &&
    window.location.hostname.startsWith("landing.");
  const homeLink = isLandingDomain ? "https://softdoes.com" : "/";

  const scrollToContacts = () => {
    const element = document.getElementById("contacts");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesModalOpen = () => {
    if (isMobile) {
      setIsServicesModalMobileOpen(true);
    } else {
      setIsServicesModalOpen(true);
    }
  };

  const onClickCloseMenu = () => {
    if (isServicesModalMobileOpen) {
      setIsServicesModalMobileOpen(!isMenuOpen);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header id="header" className={clsx(s.wrapper, "wrapper")}>
      <div
        className={clsx(s.main, isMenuOpen && s.main_open, "container")}
        id="header"
      >
        {isLandingDomain ? (
          <a
            href={homeLink}
            className={`${s.main_header} ${posts ? s.postPage : ""}`}
          >
            SOFT DOES
          </a>
        ) : (
          <Link
            href={homeLink}
            className={`${s.main_header} ${posts ? s.postPage : ""}`}
          >
            SOFT DOES
          </Link>
        )}

        <div className={`${s.main_nav} ${isMenuOpen ? s.main_nav_open : ""}`}>
          {!isLanding && (
            <>
              {navItems.map((item) =>
                item.isModal ? (
                  <div
                    key={item.label}
                    onClick={handleServicesModalOpen}
                    className={s.main_nav_item}
                  >
                    {item.label}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={s.main_nav_item}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </>
          )}
          <button onClick={scrollToContacts}>Contact us</button>
        </div>
        <div className={s.main_button}>
          <button onClick={scrollToContacts}>Contact us</button>
        </div>

        <MenuBurger toggleMenu={onClickCloseMenu} isMenuOpen={isMenuOpen} />

        {isServicesModalOpen && (
          <ServicesModal
            isOpen={isServicesModalOpen}
            onClose={() => setIsServicesModalOpen(false)}
          />
        )}

        {isServicesModalMobileOpen && (
          <ServicesModalMobile
            isOpen={isServicesModalMobileOpen}
            onClose={() => setIsServicesModalMobileOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
