"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { gender1Photos, gender1Reels, gender1Thanks } from "./gender-data";
import GenderIntro from "@/components/ui/GenderIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "./WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function GenderModal({ onIntroEnd }: Props) {
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
      {showIntro && <GenderIntro />}

      <h2 className={styles.title}>Гендер паті</h2>

      <article className={styles.event}>
        <h3 className={styles.eventTitle}> It`s a BOY! 💙</h3>
        <p className={styles.eventDesc}>
          Мить, коли час зупиняється, a повітря наповнюється блакитним димом. Це
          була історія про очікування, щирі сльози радості та неймовірну
          підтримку близьких. Цей день запам`ятається не лише кольором конфеті,
          a справжнім вибухом емоцій. Попереду нова подорож, сповнена драйву,
          сили та безмежного кохання. Ще один майбутній захисник, ще одна велика
          історія.
        </p>

        <SwiperGallery id="swiper-gender-1" photos={gender1Photos} />
      </article>

      {gender1Reels.length > 0 && (
        <div className={styles.reels}>
          <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
          <div className={styles.reelsGrid}>
            {gender1Reels.map((src, i) => (
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

      {gender1Thanks.length > 0 && (
        <div className={styles.thanks}>
          <h2 className={styles.thanksTitle}>Творці атмосфери</h2>
          <ul className={styles.thanksList}>
            {gender1Thanks.map(({ handle, avatar }) => (
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
