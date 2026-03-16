"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./BurgerMenu.module.css";

const CLOSE_DURATION = 320;

const navLinks = [
  { href: "#about", label: "Про мене" },
  { href: "#services", label: "Послуги" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#faq", label: "Питання" },
  { href: "#contacts", label: "Контакти" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/aranchiy_/",
    icon: "ri-instagram-line",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@aranchiy_",
    icon: "ri-tiktok-line",
    label: "TikTok",
  },
  {
    href: "https://t.me/aranchiy",
    icon: "ri-telegram-2-line",
    label: "Telegram",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onReserveClick: () => void;
}

export default function BurgerMenu({ isOpen, onClose, onReserveClick }: Props) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, CLOSE_DURATION);
  }, [onClose]);

  const handleReserve = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleClose();
      setTimeout(() => {
        onReserveClick();
      }, CLOSE_DURATION);
    },
    [handleClose, onReserveClick],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, handleClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const menuClass = [
    styles.burgerMenu,
    isOpen ? styles.isOpen : "",
    isClosing ? styles.isClosing : "",
  ].join(" ");

  return (
    <div
      id="burgerMenu"
      className={menuClass}
      role="dialog"
      aria-modal={true}
      aria-hidden={!isOpen}
    >
      <div className={styles.overlay} onClick={handleClose} />
      <div className={styles.drawer}>
        <button
          className={styles.close}
          onClick={handleClose}
          aria-label="Закрити меню"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link} onClick={handleClose}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles.socials}>
            {socialLinks.map(({ href, icon, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <i className={icon} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
