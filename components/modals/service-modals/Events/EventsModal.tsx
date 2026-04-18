"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  birthday1Photos,
  birthday1Reels,
  birthday1Thanks,
  presentation1Photos,
  presentation1Reels,
  presentation1Thanks,
  presentation2Photos,
  presentation2Reels,
  presentation2Thanks,
  corporate1Photos,
  corporate1Reels,
  corporate1Thanks,
  corporate2Photos,
  corporate2Reels,
  corporate2Thanks,
  corporate3Photos,
  corporate3Reels,
  corporate3Thanks,
  gender1Photos,
  gender1Reels,
  gender1Thanks,
  oneyear1Photos,
  oneyear1Reels,
  oneyear1Thanks,
  stars1Photos,
  stars1Thanks,
} from "../Events/events-data";

import EventIntro from "@/components/ui/IntroModal/Event/EventsIntro";
import SwiperGallery from "@/components/ui/SwiperGallery";
import styles from "../WeddingModal/WeddingModal.module.css";

interface Props {
  onIntroEnd?: () => void;
}

export default function EventModal({ onIntroEnd }: Props) {
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
      {showIntro && <EventIntro />}

      <h2 className={styles.title}>Події та проєкти</h2>

      {/* ДР 1 */}
      <article className={styles.event}>
        <h3 className={styles.eventTitle}>
          День народження: Сяйво, що захоплює{" "}
        </h3>
        {/* <p className={styles.eventDesc}>
          Коли замовник просить про «вау-ефект», ми створюємо цілий всесвіт. Цей
          день народження став справжнім перформансом, де кожна секунда була
          наповнена естетикою та драйвом. Поєднання небесної чистоти та
          вечірнього глянцю. Шоу-балет у футуристичних костюмах ангелів,
          кришталеві люстри та срібний дрес-код. Результат: Іменинниця в центрі
          уваги, гості в захваті, а стрічки соцмереж переповнені контентом, про
          які хочеться знімати кіно.
        </p> */}

        <SwiperGallery id="swiper-birthday-1" photos={birthday1Photos} />
      </article>

      {/* Reels */}
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

      {/* Thanks */}
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

      {/* IT RIVNE */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          IT Rivne 2025 Conference: Епіцентр технологій та ідей
        </h3>
        <p className={styles.eventDesc}>
          Подія, що обʼєднала бізнес, освіту та технології навколо штучного
          інтелекту. Це не просто конференція - це простір для нових ідей,
          рішень і людей, які творять майбутнє. Вдячний за довіру бути ведучим
          цього унікального заходу. Для мене це важливий крок уперед, новий
          досвід і сильна мотивація. Два дні змістовних дискусій, цінних
          знайомств та натхнення.
        </p>

        <SwiperGallery id="swiper-it-rivne-1" photos={presentation1Photos} />
      </article>

      {/* Reels */}
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

      {/* Thanks */}
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

      {/* Mokviana */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          Корпоративна подія: Морквяна Марʼяна
        </h3>
        {/* <p className={styles.eventDesc}>
          Є місця, які мають особливу енергію. Для мене це простір, де робочі
          зустрічі із замовниками непомітно переходять у дружні розмови, а за
          філіжанкою кави народжуються найкращі ідеї. Але цього разу привід був
          особливий. Ми зібралися, щоб привітати команду мережі кондитерських з
          їхнім першим великим ювілеєм — 10 років! Знаєте, це той рідкісний
          випадок, коли ми були не в ролі ведучих чи організаторів, а просто
          насолоджувалися моментом як гості та друзі. Це був день чистого
          натхнення, яскравого відпочинку та щирих усмішок команди, яка щодня
          дарує свято рівнянам і гостям нашого міста. Десятиріччя — це не просто
          цифра. Це тисячі щасливих моментів, які ця мережа розділила з кожним
          із нас. Дякуємо за гостинність і за те, що робите наше життя солодшим!
        </p> */}

        <SwiperGallery id="swiper-top-100-1" photos={corporate2Photos} />
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

      {/* GENDER 1 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          Гендер Паті: It`s a BOY! 💙
        </h3>
        {/* <p className={styles.eventDesc}>
          Мить, коли час зупиняється, a повітря наповнюється блакитним димом. Це
          була історія про очікування, щирі сльози радості та неймовірну
          підтримку близьких. Цей день запам`ятається не лише кольором конфеті,
          a справжнім вибухом емоцій. Попереду нова подорож, сповнена драйву,
          сили та безмежного кохання. Ще один майбутній захисник, ще одна велика
          історія.
        </p> */}

        <SwiperGallery id="swiper-gender-1" photos={gender1Photos} />
      </article>

      {/* Reels */}
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

      {/* Thanks */}
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

      {/* TOP 100 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          Beauty-конференція: Be Beauty Top 100
        </h3>
        {/* <p className={styles.eventDesc}>
          Форум Be Beauty став справжнім епіцентром енергії та стилю. Це було
          щось значно більше, ніж просто галузевий захід — це потужна платформа,
          яка зібрала понад 200 учасників, готових творити нові стандарти в
          індустрії. Для мене як для ведучого було особливим викликом і великою
          честю тримати увагу такої великої та прогресивної аудиторії. Масштаб
          події відчувався в усьому: від вишуканих образів у залі до глибини
          тем, що піднімалися на сцені. Дякую за довіру бути голосом цього
          форуму. Це був неймовірний досвід — відчувати драйв і синергію двохсот
          сердець, що бʼються в унісон із ритмом сучасної краси!
        </p> */}

        <SwiperGallery id="swiper-top-100-1" photos={presentation2Photos} />
      </article>

      {/* Reels */}
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

      {/* Thanks */}
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

      {/* ONE YEAR 1 */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          Перший рік великої історії: День народження маленької принцеси
        </h3>
        {/* <p className={styles.eventDesc}>
          Перший день народження — це свято не лише для дитини, a передусім для
          батьків, які пройшли цей неймовірний рік разом. Це день, наповнений
          теплом, дитячим сміхом та особливою магією. Ніжна пастельна гама,
          повітряні кульки та найрідніші люди поруч. Я, створив легкий та
          невимушений настрій, де увага прикута до іменинниці, a гості
          почуваються частиною однієї великої родини. Проведення зворушливих
          обрядів, перше задування свічки та створення щирих спогадів, які
          залишаться в сімейному архіві назавжди.
        </p> */}

        <SwiperGallery id="swiper-one-year-1" photos={oneyear1Photos} />
      </article>

      {/* Reels */}
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

      {/* Thanks */}
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

      {/* Glebivka */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          Pool Party & Chill: Корпоративний драйв у Глібівці
        </h3>
        {/* <p className={styles.eventDesc}>
          Забудьте про краватки та душні офіси. Коли локація — Glibivka Family
          Park, правила гри змінюються! Цей корпоратив став ідеальним поєднанням
          релаксу біля басейну та вибухової енергії команди. Максимальна
          свобода, сонце, вода та щирий сміх. Ніяких навʼязливих конкурсів —
          лише живий інтерактив, актуальний гумор та створення атмосфери, де
          кожен відчуває себе «в своїй тарілці». Моя задача: Перетворити
          звичайний виїзд на природу на подію, яка обʼєднує команду сильніше.
        </p> */}

        <SwiperGallery id="swiper-top-100-1" photos={corporate3Photos} />
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

      {/* Dubok */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          Корпоративна Подія: Dubok.ua
        </h3>
        {/* <p className={styles.eventDesc}>
          Корпоратив @dubok.ua став яскравим прикладом того, як важливо вчасно
          «перезавантажитися» разом із людьми, з якими щодня підкорюєш
          професійні вершини. Бути частиною цього свята в ролі ведучого —
          справжнє задоволення, адже працювати з колективом, де панує така
          щирість і єдність, завжди легко та драйвово. Особлива цінність таких
          подій — це люди, які створюють магію за кадром. Коли на майданчику
          працюють справжні профі, кожен вихід до мікрофона стає частиною
          злагодженого механізму. Дякую @otto.rivne за гостинну локацію та всій
          команді «Дубок» за довіру. Ви неймовірні!
        </p> */}

        <SwiperGallery id="swiper-dubok-1" photos={corporate1Photos} />
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

      {/* STARS */}
      <article className={styles.event}>
        <h3
          className={styles.eventTitle}
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "40px",
          }}
        >
          Більше, ніж просто івенти: Коли професіоналізм обʼєднує
        </h3>
        {/* <p className={styles.eventDesc}>
          Ми провели разом не один десяток заходів — від презентацій масштабних
          проектів до теплих творчих вечорів. Кожна така зустріч — це не просто
          робота, а обмін енергією з людьми, які надихають мільйони. Для мене
          робота з медійними особистостями — це насамперед про відповідальність
          та вміння створити таку атмосферу, де кожна зірка почувається
          комфортно, а глядач — частиною великого дійства. Кожен спільний вихід
          на сцену чи фото в кулуарах — це історія про довіру, драйв та
          професіоналізм без компромісів.
        </p> */}

        <SwiperGallery id="swiper-stars-1" photos={stars1Photos} />
      </article>

      {/* Thanks */}
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
    </>
  );
}
