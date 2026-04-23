"use client";
import { useEffect, useRef } from "react";
import type SwiperType from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./Reviews.module.css";

const reviews = [
  {
    text: "Дуже дякуємо за проведення двох корпоративів, для наших команд! Дякуємо за драйв, жарти та круту атмосферу!",
    name: "Вікторія",
    img: "/img/reviews-section/vika.jpeg",
  },
  {
    text: "Дякую за класну, дружню атмосферу на нашому корпоративі. Було весело, драйвово і в кайф.",
    name: "Ірина",
    img: "/img/reviews-section/ira.jpeg",
  },
  {
    text: "Хочемо висловити щиру подяку неймовірному ведучому Сергію! Він створив на нашому святі справжню атмосферу радості!",
    name: "Анастасія",
    img: "/img/reviews-section/anastasiya.jpeg",
  },
  {
    text: "Рекомендуємо Сергія всім, хто хоче, щоб їхнє свято було не просто подією, а справжнім святом душі!",
    name: "Олександр",
    img: "/img/reviews-section/olexandr.jpeg",
  },
  {
    text: "Дякуємо за щирість, енергію та вміння зробити свято незабутнім! Рекомендуємо від щирого серця!",
    name: "Ольга",
    img: "/img/reviews-section/olya.jpeg",
  },
  {
    text: "Всі моменти залишаться в нашій памʼяті назавжди. Це саме той ведучий, якого хочеться рекомендувати від щирого серця!",
    name: "Катерина",
    img: "/img/reviews-section/katya.jpeg",
  },
  {
    text: "Хочемо висловити величезну подяку нашому ведучому, Сергію за неймовірне свято!",
    name: "Тетяна",
    img: "/img/reviews-section/tanya.jpeg",
  },
  {
    text: "Саме завдяки вам цей день став настільки яскравим і щасливим для нас і наших гостей.",
    name: "Анастасія",
    img: "/img/reviews-section/nastya.jpeg",
  },
  {
    text: "Ми щиро вдячні Сергію за проведення нашого корпоративу! Захід пройшов динамічно, легко й без жодних затримок.",
    name: "Олеся",
    img: "/img/reviews-section/olesya.jpeg",
  },
];

export default function Reviews() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: SwiperType | null = null;

    async function init() {
      const { default: Swiper } = await import("swiper");
      const { Pagination, Autoplay } = await import("swiper/modules");

      if (!swiperRef.current) return;

      instance = new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: swiperRef.current.querySelector(
            ".swiper-pagination",
          ) as HTMLElement,
          clickable: true,
        },
        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1.2, centeredSlides: true },
          1024: { slidesPerView: 2, centeredSlides: false },
        },
      });
    }

    init();
    return () => instance?.destroy(true, true);
  }, []);

  return (
    <section
      id="reviews"
      className={styles.section}
      aria-label="Відгуки клієнтів"
    >
      <h2 className={styles.title}>Відгуки клієнтів</h2>

      <div className={styles.swiperWrapper}>
        <div ref={swiperRef} className={`swiper ${styles.swiper}`}>
          <div className="swiper-wrapper">
            {reviews.map((review, i) => (
              <div key={i} className="swiper-slide">
                <div
                  className={styles.card}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div
                    itemProp="itemReviewed"
                    itemScope
                    itemType="https://schema.org/LocalBusiness"
                  >
                    <meta itemProp="name" content="Сергій Аранчій" />
                  </div>

                  <p className={styles.text} itemProp="reviewBody">
                    {review.text}
                  </p>

                  <div
                    className={styles.author}
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/LocalBusiness"
                  >
                    <Image
                      src={review.img}
                      alt={`Клієнт ${review.name}`}
                      width={48}
                      height={48}
                      className={styles.avatar}
                      loading="lazy"
                      itemProp="image"
                    />
                    <strong itemProp="name">{review.name}</strong>
                  </div>

                  <div
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
