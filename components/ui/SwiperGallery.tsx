"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import type Swiper from "swiper";
import styles from "./SwiperGallery.module.css";

interface Photo {
  src: string;
  alt: string;
}

interface Props {
  id: string;
  photos: Photo[];
}

export default function SwiperGallery({ id, photos }: Props) {
  const mainRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);

  useEffect(() => {
    let mainSwiper: Swiper | null = null;
    let thumbsSwiper: Swiper | null = null;

    async function init() {
      const { default: Swiper } = await import("swiper");
      const { Navigation, FreeMode } = await import("swiper/modules");
      await import("swiper/css");
      await import("swiper/css/navigation");
      await import("swiper/css/free-mode");

      if (!mainRef.current) return;

      const isDesktop = window.innerWidth >= 1200;

      if (thumbsRef.current && !isDesktop) {
        thumbsSwiper = new Swiper(thumbsRef.current, {
          modules: [FreeMode],
          direction: "horizontal",
          slidesPerView: "auto",
          spaceBetween: 8,
          freeMode: { enabled: true, momentum: true },
          grabCursor: true,
          watchSlidesProgress: true,
          observer: true,
          observeParents: true,
          simulateTouch: true,
          threshold: 5,
          resistance: false,
        });
      }

      mainSwiper = new Swiper(mainRef.current, {
        modules: [Navigation],
        navigation: {
          nextEl: mainRef.current.querySelector<HTMLElement>(
            ".swiper-button-next",
          ),
          prevEl: mainRef.current.querySelector<HTMLElement>(
            ".swiper-button-prev",
          ),
        },
        spaceBetween: 0,
        loop: false,
        observer: true,
        observeParents: true,
        allowTouchMove: true,
        touchRatio: 1,
        threshold: 10,
      });

      if (thumbsRef.current) {
        const thumbSlides = thumbsRef.current.querySelectorAll(".swiper-slide");

        const setActive = (index: number) => {
          activeIndex.current = index;
          thumbSlides.forEach((s, i) =>
            s.classList.toggle("swiper-slide-thumb-active", i === index),
          );
          if (!isDesktop) {
            thumbSlides[index]?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }
        };

        thumbSlides.forEach((slide, index) => {
          slide.addEventListener("click", () => {
            mainSwiper?.slideTo(index);
            setActive(index);
          });
        });

        mainSwiper?.on("slideChange", () => {
          if (mainSwiper) {
            setActive(mainSwiper.activeIndex);
          }
        });
        setActive(0);
      }
    }

    init();

    return () => {
      mainSwiper?.destroy(true, true);
      thumbsSwiper?.destroy(true, true);
    };
  }, [id]);

  return (
    <div className={styles.gallery}>
      {/* Main */}
      <div ref={mainRef} className={`swiper ${styles.mainSwiper}`}>
        <div className="swiper-wrapper">
          {photos.map((photo, i) => (
            <div key={i} className="swiper-slide">
              <div className={styles.mainSlide}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className={styles.mainImg}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      {/* Thumbs */}
      <div ref={thumbsRef} className={`swiper ${styles.thumbsSwiper}`}>
        <div className="swiper-wrapper">
          {photos.map((photo, i) => (
            <div key={i} className={`swiper-slide ${styles.thumbSlide}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="120px"
                style={{ objectFit: "cover" }}
                className={styles.thumbImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
