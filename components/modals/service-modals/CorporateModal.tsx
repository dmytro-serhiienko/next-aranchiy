"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  corporate1Photos,
  corporate1Reels,
  corporate1Thanks,
} from "./corporate-data";
import CorporateIntro from "@/components/ui/CorporateIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "./WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function CorporateModal({ onIntroEnd }: Props) {
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
      {showIntro && <CorporateIntro />}

      <h2 className={styles.title}>Корпоративні заходи</h2>

      <article className={styles.event}>
        <h3 className={styles.eventTitle}>Меблевий салон Dubok.ua</h3>
        <p className={styles.eventDesc}>
          Кажуть, дерево — це про стабільність. Але корпоратив dubok.ua довів:
          це ще й про неймовірну гнучкість на танцполі та вибуховий гумор! Бути
          частиною вашого свята — це кайф. Моя місія як ведучого — розкрити
          кожного, і з цією командою це було легко.
          <br /> Від щирих усмішок до гучних аплодисментів — цей вечір точно
          піде в скарбничку найкращих спогадів сезону.
        </p>

        <SwiperGallery id="swiper-corporate-1" photos={corporate1Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {corporate1Reels.map((src, i) => (
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

      {/* Thanks */}
      <div className={styles.thanks}>
        <h2 className={styles.thanksTitle}>Творці атмосфери</h2>
        <ul className={styles.thanksList}>
          {corporate1Thanks.map(({ handle, avatar }) => (
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
    </>
  );
}
