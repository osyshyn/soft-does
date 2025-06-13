"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

interface HeaderProps {
  posts?: boolean;
  isLanding?: boolean;
}

export default function Header({ posts, isLanding }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLandingDomain = typeof window !== "undefined" && window.location.hostname.startsWith("landing.");
  const homeLink = isLandingDomain ? "https://softdoes.com" : "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContacts = () => {
    const element = document.getElementById("contacts");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.main} id="header">
      {isLandingDomain ? (
        <a href={homeLink} className={`${styles.main_header} ${posts ? styles.postPage : ""}`}>
          SOFT DOES
        </a>
      ) : (
        <Link href={homeLink} className={`${styles.main_header} ${posts ? styles.postPage : ""}`}>
          SOFT DOES
        </Link>
      )}

      <div className={`${styles.main_nav} ${isMenuOpen ? styles.main_nav_open : ""}`}>
        {!isLanding && (
          <>
            <Link href="/services">Services</Link>
            <Link href="/expertise">Expertise</Link>
            <Link href="/industries">Industies</Link>
            <Link href="/portfolio">Success Stories</Link>
            <Link href="/">Solution Hub</Link>
            <Link href="/company">Company</Link>
            <Link href="/insights">Insights</Link>
          </>
        )}
        <button onClick={scrollToContacts}>Contact us</button>
      </div>
      <div className={styles.main_button}>
        <button onClick={scrollToContacts}>Contact us</button>
      </div>
      <div className={styles.main_burger} onClick={toggleMenu}>
        <div className={`${styles.main_burger_line} ${isMenuOpen ? styles.main_burger_line_open : ""}`}></div>
        <div className={`${styles.main_burger_line} ${isMenuOpen ? styles.main_burger_line_open : ""}`}></div>
        <div className={`${styles.main_burger_line} ${isMenuOpen ? styles.main_burger_line_open : ""}`}></div>
      </div>
    </header>
  );
}
