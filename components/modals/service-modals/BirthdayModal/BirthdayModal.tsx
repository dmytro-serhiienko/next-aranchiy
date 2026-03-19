"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  birthday1Photos,
  birthday1Reels,
  birthday1Thanks,
} from "./birthday-data";
import BirthdayIntro from "@/components/ui/IntroModal/Birthday/BirthdayIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "../WeddingModal/WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function BirthdayModal({ onIntroEnd }: Props) {
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
      {showIntro && <BirthdayIntro />}

      <h2 className={styles.title}>Дні народження</h2>

      {/* ДЕНЬ НАРОДЖЕННЯ 1 */}
      <article className={styles.event}>
        <h3 className={styles.eventTitle}>Сяйво, що захоплює</h3>
        <p className={styles.eventDesc}>
          Коли замовник просить про «вау-ефект», ми створюємо цілий всесвіт. Цей
          день народження став справжнім перформансом, де кожна секунда була
          наповнена естетикою та драйвом. Поєднання небесної чистоти та
          вечірнього глянцю. Шоу-балет у футуристичних костюмах ангелів,
          кришталеві люстри та срібний дрес-код.
          <br /> Результат: Іменинниця в центрі уваги, гості в захваті, а
          стрічки соцмереж переповнені контентом, про які хочеться знімати кіно.
        </p>

        <SwiperGallery id="swiper-birthday-1" photos={birthday1Photos} />
      </article>

      {/* Reels */}
      {birthday1Reels.length > 0 && (
        <div className={styles.reels}>
          <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
          <div className={styles.reelsGrid}>
            {birthday1Reels.map((src, i) => (
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

      {/* Thanks */}
      {birthday1Thanks.length > 0 && (
        <div className={styles.thanks}>
          <h2 className={styles.thanksTitle}>Творці атмосфери</h2>
          <ul className={styles.thanksList}>
            {birthday1Thanks.map(({ handle, avatar }) => (
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
