"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  corporate1Photos,
  corporate1Reels,
  corporate1Thanks,
  corporate2Photos,
  corporate2Reels,
  corporate2Thanks,
  corporate3Photos,
  corporate3Reels,
  corporate3Thanks,
} from "./corporate-data";
import CorporateIntro from "@/components/ui/CorporateIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "../WeddingModal/WeddingModal.module.css";

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

      {/* GLIBIVKA */}
      <article className={styles.event}>
        <h3 className={styles.eventTitle}>
          Pool Party & Chill: Корпоративний драйв у Глібівці
        </h3>
        <p className={styles.eventDesc}>
          Забудьте про краватки та душні офіси. Коли локація — Glibivka Family
          Park, правила гри змінюються! Цей корпоратив став ідеальним поєднанням
          релаксу біля басейну та вибухової енергії команди. Максимальна
          свобода, сонце, вода та щирий сміх. Ніяких навʼязливих конкурсів —
          лише живий інтерактив, актуальний гумор та створення атмосфери, де
          кожен відчуває себе «в своїй тарілці».
          <br /> Моя задача: Перетворити звичайний виїзд на природу на подію,
          яка обʼєднує команду сильніше.
        </p>

        <SwiperGallery id="swiper-corporate-1" photos={corporate3Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {corporate3Reels.map((src, i) => (
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
          {corporate3Thanks.map(({ handle, avatar }) => (
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
      {/*  */}

      {/* Mariana */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "50px",
          }}
        >
          Естетика успіху: Корпоративна подія: Морквяна Марʼяна
        </h3>
        <p className={styles.eventDesc}>
          Коли лідери ринку збирають команду, це завжди про цінності, масштаб та
          бездоганний смак. Вечір для бренду Морквяна Марʼяна став яскравим
          прикладом того, як офіційна подія перетворюється на вишукане шоу.
          Black & White дрес-код, кришталь, світлові інсталяції та ангельський
          перформанс, що задав тон усьому вечору. <br />
          Моя роль: Створити динамічний сценарій, який обʼєднує команду,
          підкреслює статус бренду та тримає градус уваги до останньої хвилини.
          Інтерактив з гостями, професійне шоу та легкий, інтелектуальний гумор.
          B результаті подія, яка працює на репутацію бренду та заряджає команду
          на нові досягнення.
        </p>

        <SwiperGallery id="swiper-corporate-1" photos={corporate2Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {corporate2Reels.map((src, i) => (
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
          {corporate2Thanks.map(({ handle, avatar }) => (
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
      {/*  */}

      {/* Dubok */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "50px",
          }}
        >
          Меблевий салон Dubok.ua
        </h3>
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
      {/*  */}
    </>
  );
}
