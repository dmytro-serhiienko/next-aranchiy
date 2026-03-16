"use client";
import { useState } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./Header.module.css";

const navLinks = [
  { id: "about", label: "Про мене" },
  { id: "services", label: "Послуги" },
  { id: "reviews", label: "Відгуки" },
  { id: "faq", label: "Питання" },
  { id: "contacts", label: "Контакти" },
];

const SECTION_IDS = navLinks.map((l) => l.id);

interface Props {
  onReserveClick: () => void;
}

export default function Header({ onReserveClick }: Props) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerTop} aria-label="Головна навігація">
          <div className={styles.navPill}>
            <ul className={styles.list}>
              {navLinks.map(({ id, label }) => (
                <li key={id} className={styles.listItem}>
                  <Link
                    href={`#${id}`}
                    className={`${styles.itemLink} ${activeId === id ? styles.active : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className={styles.navCta}
              onClick={(e) => {
                e.preventDefault();
                onReserveClick();
              }}
            >
              Забронювати
            </Link>

            <button
              className={styles.burgerBtn}
              onClick={() => setBurgerOpen(true)}
              aria-label="Відкрити меню"
              aria-expanded={burgerOpen}
              aria-controls="burgerMenu"
            >
              <i className="ri-menu-5-line" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <BurgerMenu isOpen={burgerOpen} onClose={() => setBurgerOpen(false)} />
    </>
  );
}
