"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type SwiperType from "swiper";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import styles from "./SwiperGallery.module.css";

interface Photo {
  src: string;
  alt: string;
}

export interface MediaItem {
  type?: "photo" | "video";
  src: string;
  alt?: string;
}

interface Props {
  id: string;
  photos: Photo[];
}

export default function SwiperGallery({ id, photos }: Props) {
  const mainRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    let mainSwiper: SwiperType | null = null;
    let thumbsSwiper: SwiperType | null = null;

    async function init() {
      const { default: Swiper } = await import("swiper");
      const { Navigation, FreeMode } = await import("swiper/modules");

      if (!mainRef.current) return;

      await new Promise((r) => requestAnimationFrame(r));

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
        observeSlideChildren: true,
        allowTouchMove: true,
        touchRatio: 1,
        threshold: 10,
      });

      mainSwiperRef.current = mainSwiper;
      requestAnimationFrame(() => mainSwiper?.update());

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
          if (mainSwiper) setActive(mainSwiper.activeIndex);
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

  function handleMainSlideClick(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function handleLightboxClose() {
    setLightboxOpen(false);
  }

  function handleLightboxView({ index }: { index: number }) {
    mainSwiperRef.current?.slideTo(index);
  }

  const slides = photos.map((p) => ({ src: p.src, alt: p.alt }));

  return (
    <>
      <div className={styles.gallery}>
        {/* Main Swiper */}
        <div ref={mainRef} className={`swiper ${styles.mainSwiper}`}>
          <div className="swiper-wrapper">
            {photos.map((photo, i) => (
              <div key={i} className="swiper-slide">
                <div
                  className={styles.mainSlide}
                  onClick={() => handleMainSlideClick(i)}
                  style={{ cursor: "zoom-in" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                    // style={{ objectFit: "cover" }}
                    className={styles.mainImg}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

        {/* Thumbs Swiper */}
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

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={handleLightboxClose}
        slides={slides}
        index={lightboxIndex}
        on={{ view: handleLightboxView }}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.92)" },
        }}
      />
    </>
  );
}
