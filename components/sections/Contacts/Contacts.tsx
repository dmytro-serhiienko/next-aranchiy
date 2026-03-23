import Link from "next/link";
import styles from "./Contacts.module.css";

const socialLinks = [
  {
    href: "https://www.instagram.com/aranchiy_/",
    icon: "ri-instagram-line",
    label: "Instagram ведучого",
  },
  {
    href: "https://www.tiktok.com/@aranchiy_",
    icon: "ri-tiktok-line",
    label: "TikTok ведучого",
  },
  {
    href: "https://t.me/aranchiy",
    icon: "ri-telegram-2-line",
    label: "Telegram ведучого",
  },
];

interface Props {
  onReserveClick: () => void;
}

export default function Contacts({ onReserveClick }: Props) {
  return (
    <section
      id="contacts"
      className={styles.section}
      itemScope
      itemType="https://schema.org/ProfessionalService"
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.visuallyHidden}>Забронювати дату та </span>
          Контакти
        </h2>

        <meta itemProp="name" content="Ведучий Сергій Аранчій" />
        <meta itemProp="priceRange" content="$$" />
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <meta itemProp="addressLocality" content="Рівне" />
          <meta itemProp="addressCountry" content="UA" />
        </div>

        <div className={styles.info}>
          <Link
            href="mailto:sergeyaranchij@gmail.com"
            className={styles.contactItem}
            itemProp="email"
          >
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactValue}>
              sergeyaranchij@gmail.com
            </span>
            <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </Link>

          <Link
            href="tel:+380688246933"
            className={styles.contactItem}
            itemProp="telephone"
          >
            <span className={styles.contactLabel}>Телефон</span>
            <span className={styles.contactValue}>+38 (068) 824-69-33</span>
            <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.footerWrap}>
          <button
            className={styles.btnContact}
            onClick={onReserveClick}
            aria-label="Відкрити форму зворотного зв'язку"
          >
            Забронювати
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </button>

          <ul className={styles.socials}>
            {socialLinks.map(({ href, icon, label }) => (
              <li key={label} className={styles.socialItem}>
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
        </div>
      </div>
    </section>
  );
}
