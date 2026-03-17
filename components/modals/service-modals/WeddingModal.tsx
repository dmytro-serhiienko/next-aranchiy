"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  wedding1Photos,
  wedding1Reels,
  wedding1Thanks,
  wedding2Photos,
  wedding2Reels,
  wedding2Thanks,
  wedding3Photos,
  wedding3Reels,
  wedding3Thanks,
  wedding4Photos,
  wedding4Reels,
  wedding4Thanks,
} from "./wedding-data";

import WeddingIntro from "@/components/ui/WeddingIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "./WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function WeddingModal({ onIntroEnd }: Props) {
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
      {showIntro && <WeddingIntro />}

      <h2 className={styles.title}>Весілля</h2>

      {/* ВЕСІЛЛЯ 1 */}
      <article className={styles.event}>
        <h3 className={styles.eventTitle}>Олександр & Катерина</h3>
        <p className={styles.eventDesc}>
          Весілля, де класика зустрілася з сучасністю. Білосніжний декор,
          легкість літнього вечора та атмосфера, яку неможливо передати словами
          — лише відчути. Це була історія не про свято, а про людей: про
          посмішки друзів, теплі обійми та особливий ритм джазу, що задавав
          настрій цьому незабутньому дню.
        </p>

        <SwiperGallery id="swiper-wedding-1" photos={wedding1Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {wedding1Reels.map((src, i) => (
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
          {wedding1Thanks.map(({ handle, avatar }) => (
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

      {/* ВЕСІЛЛЯ 2 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "50px",
          }}
        >
          Максим та Олександра
        </h3>
        <p className={styles.eventDesc}>
          Коли поруч твоя людина - не треба нічого вигадувати, все складається
          само собою. Від перших слів і перших подарунків до особливих подорожей
          у «Ріо де Рибалка». Вони легко перетворюють звичайні миті на спогади,
          чи то пошук кріплення в горах, чи приготування фруктового салату. І
          саме в цій простоті відчувається головне, справжня любов, яка робить
          будь-який день святом. Ще одне прекрасне весілля, ще одна прекрасна
          пара.
        </p>

        <SwiperGallery id="swiper-wedding-2" photos={wedding2Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {wedding2Reels.map((src, i) => (
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
          {wedding2Thanks.map(({ handle, avatar }) => (
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

      {/* ВЕСІЛЛЯ 3 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "50px",
          }}
        >
          Дмитро та Наталія
        </h3>
        <p className={styles.eventDesc}>
          Це весілля — ідеальний приклад того, як сучасна класика оживає завдяки
          правильній атмосфері. Білосніжний мінімалізм у декорі став лише фоном
          для головного — щирої енергії та емоцій, що зашкалювали.
        </p>

        <SwiperGallery id="swiper-wedding-3" photos={wedding3Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {wedding3Reels.map((src, i) => (
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
          {wedding3Thanks.map(({ handle, avatar }) => (
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

      {/* ВЕСІЛЛЯ 4 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "50px",
          }}
        >
          Владислав та Соня
        </h3>
        <p className={styles.eventDesc}>
          Любов — це не постійна ейфорія. Це коли в тебе поганий день, а вона
          просто мовчки робить чай. Це коли він поряд і ти вже спокійна. Це не
          феєрверки. Це тиша, в якій добре.
          <br />
          Перед нами не ідеальна пара з фільму. А справжні люди. З характером. З
          вибором. З пройденими етапами. Вони не одразу стали «ми» Але коли
          стали, то не тому що треба, а тому що інакше вже не хочеться.
        </p>

        <SwiperGallery id="swiper-wedding-4" photos={wedding4Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {wedding4Reels.map((src, i) => (
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
          {wedding4Thanks.map(({ handle, avatar }) => (
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
