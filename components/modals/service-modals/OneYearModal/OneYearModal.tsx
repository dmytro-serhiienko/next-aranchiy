"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { oneyear1Photos, oneyear1Reels, oneyear1Thanks } from "./oneyear-data";
import OneYearIntro from "@/components/ui/IntroModal/OneYear/OneYearIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "../WeddingModal/WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function OneYearModal({ onIntroEnd }: Props) {
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
      {showIntro && <OneYearIntro />}

      <h2 className={styles.title}>Хрещення & Рочок дитині</h2>

      <article className={styles.event}>
        <h3 className={styles.eventTitle}>
          Перший рік великої історії: День народження маленької принцеси
        </h3>
        <p className={styles.eventDesc}>
          Перший день народження — це свято не лише для дитини, a передусім для
          батьків, які пройшли цей неймовірний рік разом. Це день, наповнений
          теплом, дитячим сміхом та особливою магією. Ніжна пастельна гама,
          повітряні кульки та найрідніші люди поруч. Я, створив легкий та
          невимушений настрій, де увага прикута до іменинниці, a гості
          почуваються частиною однієї великої родини. Проведення зворушливих
          обрядів, перше задування свічки та створення щирих спогадів, які
          залишаться в сімейному архіві назавжди.
        </p>

        <SwiperGallery id="swiper-oneyear-1" photos={oneyear1Photos} />
      </article>

      {oneyear1Reels.length > 0 && (
        <div className={styles.reels}>
          <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
          <div className={styles.reelsGrid}>
            {oneyear1Reels.map((src, i) => (
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
      )}

      {oneyear1Thanks.length > 0 && (
        <div className={styles.thanks}>
          <h2 className={styles.thanksTitle}>Творці атмосфери</h2>
          <ul className={styles.thanksList}>
            {oneyear1Thanks.map(({ handle, avatar }) => (
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
