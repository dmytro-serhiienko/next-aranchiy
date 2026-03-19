"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  presentation1Photos,
  presentation1Reels,
  presentation1Thanks,
  presentation2Photos,
  presentation2Reels,
  presentation2Thanks,
} from "./presentation-data";
import PresentationIntro from "@/components/ui/IntroModal/Presentation/PresentationIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "../WeddingModal/WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function PresentationModal({ onIntroEnd }: Props) {
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
      {showIntro && <PresentationIntro />}

      <h2 className={styles.title}>Презентації, конференції, форуми</h2>

      {/* IT Rivne */}
      <article className={styles.event}>
        <h3 className={styles.eventTitle}>
          IT Rivne Conference: Епіцентр технологій та ідей
        </h3>
        <p className={styles.eventDesc}>
          Коли в одному місці збираються найкращі фахівці галузі, подія перестає
          бути просто конференцією — це був справжній дводенний марафон знань,
          нетворкінгу та енергії, що надихає. Масштабний IT-форум із виступами
          спікерів, презентаціями продуктів та відкритими дискусіями. Живе
          спілкування, де інновації зустрічаються з драйвом. Моя роль була
          модерація потоків, підтримка високого темпу конференції та створення
          комфортної атмосфери для обміну досвідом. Бути `голосом` події, що
          обʼєднує сотні профі. Чіткий таймінг, задоволені партнери та
          спільнота, яка вже чекає на наступний рік.
        </p>

        <SwiperGallery
          id="swiper-presentation-1"
          photos={presentation1Photos}
        />
      </article>

      {presentation1Reels.length > 0 && (
        <div className={styles.reels}>
          <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
          <div className={styles.reelsGrid}>
            {presentation1Reels.map((src, i) => (
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

      {presentation1Thanks.length > 0 && (
        <div className={styles.thanks}>
          <h2 className={styles.thanksTitle}>Творці атмосфери</h2>
          <ul className={styles.thanksList}>
            {presentation1Thanks.map(({ handle, avatar }) => (
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
      {/*  */}

      {/* Top 100 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "50px",
          }}
        >
          Епіцентр краси: Велика Bauty-конференція
        </h3>
        <p className={styles.eventDesc}>
          Коли в одному залі збираються сотні фахівців індустрії краси, подія
          автоматично стає головним трендсеттером сезону. Це був день,
          присвячений естетиці, навчанню та натхненню. Масштабна конференція з
          майстер-класами від топ-спікерів, презентаціями інноваційних продуктів
          та великою зоною нетворкінгу. Вишуканий стиль, професійний азарт та
          нескінченна кількість краси в кожній деталі. Модерація головної сцени,
          комунікація зі спікерами та підтримка високої залученості аудиторії.
          Бути ведучим на такій події — це вміти говорити однією мовою з тими,
          хто створює красу щодня.
        </p>

        <SwiperGallery
          id="swiper-presentation-1"
          photos={presentation2Photos}
        />
      </article>

      {presentation2Reels.length > 0 && (
        <div className={styles.reels}>
          <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
          <div className={styles.reelsGrid}>
            {presentation2Reels.map((src, i) => (
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

      {presentation2Thanks.length > 0 && (
        <div className={styles.thanks}>
          <h2 className={styles.thanksTitle}>Творці атмосфери</h2>
          <ul className={styles.thanksList}>
            {presentation2Thanks.map(({ handle, avatar }) => (
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
      {/*  */}
    </>
  );
}
