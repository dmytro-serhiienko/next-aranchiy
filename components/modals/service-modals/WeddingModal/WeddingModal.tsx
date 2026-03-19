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
  wedding5Photos,
  wedding5Reels,
  wedding5Thanks,
} from "./wedding-data";

import WeddingIntro from "@/components/ui/IntroModal/Wedding/WeddingIntro";
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
        <h3 className={styles.eventTitle}>
          Білосніжна класика. Олександр та Катерина
        </h3>
        <p className={styles.eventDesc}>
          Весілля Олександра та Катерини — це бездоганний баланс класичної
          елегантності та сучасного вайбу. Джазовий настрій, обійми друзів та
          лісовий спокій. Мінімалізм у білих тонах, що підкреслив красу та
          характер пари. Подія не про пафос, а про людей. Про щирі посмішки та
          моменти, які хочеться поставити на повтор.
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
          Кохання на висоті: Максим та Олександра
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
          Дмитро та Наталія: Коли емоції зашкалюють
        </h3>
        <p className={styles.eventDesc}>
          Це весілля — той самий випадок, коли сучасна класика оживає завдяки
          людям. Ми обрали шлях білосніжного мінімалізму, щоб нічого не
          відволікало від головного. Декор став лише вишуканою рамою для картини
          їхнього кохання. Від драйвових танців з друзями до цієї магічної тиші
          під час першого танцю у хмарах — кожен момент був просякнутий щирою
          енергією. Це історія про те, що справжні почуття не потребують зайвих
          прикрас, вони самі створюють світло.
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
          Більше, ніж феєрверки. Історія Владислава та Соні
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

      {/* ВЕСІЛЛЯ 5 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "50px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "50px",
          }}
        >
          Симфонія кохання на березі: Сергій та Тетяна
        </h3>
        <p className={styles.eventDesc}>
          Ця виїзна церемонія стала справжнім маніфестом щирості. Серед
          мальовничої природи, на відкритій терасі біля води, ми створили
          момент, який зупинив час. Гармонійне поєднання сучасної класики та
          природної естетики. Зелена арка, сонячні відблиски на воді та
          найрідніші люди поруч. Щирий конферанс, де головний герой — кохання
          пари, a ведучий — надійний провідник через весь спектр емоцій: від
          легкого сміху до сліз радості.
        </p>

        <SwiperGallery id="swiper-wedding-5" photos={wedding5Photos} />
      </article>

      {/* Reels */}
      <div className={styles.reels}>
        <h2 className={styles.reelsTitle}>Моменти, що оживають</h2>
        <div className={styles.reelsGrid}>
          {wedding5Reels.map((src, i) => (
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
          {wedding5Thanks.map(({ handle, avatar }) => (
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
