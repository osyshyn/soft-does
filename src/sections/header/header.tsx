"use client";

import { useLockScroll } from "@shared/components/lenis/lenis";
import { ROUTES } from "@shared/constants/routes";
import useIsMobile from "@shared/hooks/useIsMobile";
import clsx from "clsx";
import { useState } from "react";
import s from "./Header.module.scss";
import MenuBurger from "./menu-burger/menu-burger";
import ServicesModalMobile from "./sercices-modal-mobile/sercices-modal-mobile";
import { ServicesModal } from "./sercices-modal/sercices-modal";
import PreservingLink from "@shared/components/preserving-link/preserving-link";
import { useNoContacts } from "providers/NoContactProvider";

interface HeaderProps {
  posts?: boolean;
  isLanding?: boolean;
}

const navItems = [
  { label: "Services", isModal: true },
  { label: "Expertise", href: "/expertise" },
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/portfolio" },
  // { label: "Solution Hub", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Insights", href: "/insights" },
];

export default function Header({ posts, isLanding }: HeaderProps) {
  const { noContacts } = useNoContacts();

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

  const handleServicesModalOpen = () => {
    if (isMobile) {
      setIsServicesModalMobileOpen(true);
    } else {
      setIsServicesModalOpen(true);
    }
  };

  const scrollToContacts = () => {
    const element = document.getElementById("contacts");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // element.scrollIntoView({ behavior: "smooth" });
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
          <PreservingLink
            href={homeLink}
            className={`${s.main_header} ${posts ? s.postPage : ""}`}
          >
            SOFT DOES
          </PreservingLink>
        ) : (
          <PreservingLink
            href={homeLink}
            className={`${s.main_header} ${posts ? s.postPage : ""}`}
          >
            SOFT DOES
          </PreservingLink>
        )}

        {!isLanding && (
          <div className={`${s.main_nav} ${isMenuOpen ? s.main_nav_open : ""}`}>
            <>
              {navItems.map((item) =>
                item.isModal ? (
                  <div
                    key={item.label}
                    onMouseEnter={handleServicesModalOpen}
                    className={s.main_nav_item}
                  >
                    {item.label}
                  </div>
                ) : (
                  <PreservingLink
                    key={item.label}
                    href={item.href!}
                    className={s.main_nav_item}
                  >
                    {item.label}
                  </PreservingLink>
                )
              )}
            </>

            <div>
              {noContacts && !isLanding ? (
                <div></div>
              ) : (
                <PreservingLink href={ROUTES.contact}>
                  <button>Contact us</button>
                </PreservingLink>
              )}
            </div>
          </div>
        )}

        {isLanding && !noContacts && (
          <div className={clsx(s.main_button, s.main_button_landing)}>
            <button onClick={scrollToContacts}>Contact us</button>
          </div>
        )}

        {noContacts && !isLanding ? (
          <div></div>
        ) : (
          <PreservingLink href={ROUTES.contact} className={s.main_button}>
            <button>Contact us</button>
          </PreservingLink>
        )}

        {!isLanding && (
          <MenuBurger toggleMenu={onClickCloseMenu} isMenuOpen={isMenuOpen} />
        )}

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
