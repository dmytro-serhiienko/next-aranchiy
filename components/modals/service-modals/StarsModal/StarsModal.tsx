"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { stars1Photos, stars1Thanks } from "./stars-data";
import StarsIntro from "@/components/ui/IntroModal/Stars/StarsIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "../WeddingModal/WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function StarsModal({ onIntroEnd }: Props) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      onIntroEnd?.();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onIntroEnd]);

  return (
    <>
      {showIntro && <StarsIntro />}

      <h2 className={styles.title}>Робота з медійними людьми</h2>

      <article className={styles.event}>
        <h3 className={styles.eventTitle}>
          Більше, ніж просто івенти: Коли професіоналізм обʼєднує
        </h3>
        <p className={styles.eventDesc}>
          Ми провели разом не один десяток заходів — від презентацій масштабних
          проектів до теплих творчих вечорів. Кожна така зустріч — це не просто
          робота, а обмін енергією з людьми, які надихають мільйони. Для мене
          робота з медійними особистостями — це насамперед про відповідальність
          та вміння створити таку атмосферу, де кожна зірка почувається
          комфортно, а глядач — частиною великого дійства. Кожен спільний вихід
          на сцену чи фото в кулуарах — це історія про довіру, драйв та
          професіоналізм без компромісів.
        </p>
        <SwiperGallery id="swiper-stars-1" photos={stars1Photos} />
      </article>

      {/* {stars1Reels.length > 0 && (
        <div className={styles.reels}>
          <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
          <div className={styles.reelsGrid}>
            {stars1Reels.map((src, i) => (
              <div key={i} className={styles.reelsItem}>
                <iframe
                  src={src}
                  className={styles.reelsIframe}
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                />
              </div>
            ))}
          </div>
        </div>
      )} */}

      {stars1Thanks.length > 0 && (
        <div className={styles.thanks}>
          <h2 className={styles.thanksTitle}>Творці атмосфери</h2>
          <ul className={styles.thanksList}>
            {stars1Thanks.map(({ handle, avatar }) => (
              <li key={handle} className={styles.thanksItem}>
                <Link
                  href={`https://www.instagram.com/${handle}/`}
                  className={styles.thanksCard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.thanksAvatarWrap}>
                    <Image
                      src={avatar}
                      alt={`@${handle}`}
                      className={styles.thanksAvatar}
                      width={64}
                      height={64}
                    />
                  </div>
                  <span className={styles.thanksName}>@{handle}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
