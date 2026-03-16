import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const socialLinks = [
  {
    href: "https://www.instagram.com/aranchiy_/",
    icon: "ri-instagram-line",
    label: "Instagram Сергія Аранчія",
  },
  {
    href: "https://www.tiktok.com/@aranchiy_",
    icon: "ri-tiktok-line",
    label: "TikTok Сергія Аранчія",
  },
  {
    href: "https://t.me/aranchiy",
    icon: "ri-telegram-2-line",
    label: "Telegram Сергія Аранчія",
  },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBgText} aria-hidden="true">
        Аранчій
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroRight}>
          <Image
            src="/img/hero/hero-bg.png"
            alt="Ведучий Сергій Аранчій у костюмі"
            className={styles.heroImgMain}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 60vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        <div className={styles.heroLeft}>
          <div className={styles.heroTop}>
            <p className={styles.heroDescrBold}>
              Ведучий,
              <br />
              вашої
              <br />
              події
            </p>
          </div>

          <div className={styles.heroBottom}>
            <div className={styles.heroTitleWrapper}>
              <span className={styles.heroName}>Сергій</span>
              <h1 className={styles.heroSurname}>Аранчій</h1>
            </div>

            <ul className={styles.heroSocials}>
              {socialLinks.map(({ href, icon, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={styles.heroSocialLink}
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
      </div>
    </section>
  );
}
