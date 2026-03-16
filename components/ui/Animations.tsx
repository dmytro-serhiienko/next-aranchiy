"use client";
import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // ─── HERO ───────────────────────────────────────────────
      const hero = document.querySelector("#hero");
      if (hero) {
        const bgText = hero.querySelector("[class*='heroBgText']");
        const quote = hero.querySelector("[class*='heroDescrBold']");
        const socials = hero.querySelectorAll("[class*='heroSocialLink']");
        const img = hero.querySelector("[class*='heroImgMain']");
        const nameEl = hero.querySelector("[class*='heroName']");
        const surnameEl = hero.querySelector("[class*='heroSurname']");

        function splitToLetters(el: Element | null) {
          if (!el) return [];
          const text = el.textContent || "";
          el.textContent = "";
          return text.split("").map((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            el.appendChild(span);
            return span;
          });
        }

        const nameLetters = splitToLetters(nameEl);
        const surnameLetters = splitToLetters(surnameEl);

        const tl = gsap.timeline();

        if (bgText) {
          tl.from(bgText, {
            opacity: 0,
            y: 100,
            scale: 2.2,
            rotateX: 80,
            duration: 1.1,
            ease: "expo.out",
          });
        }

        if (quote) {
          tl.from(
            quote,
            {
              opacity: 0,
              y: 40,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.3",
          );
        }

        if (nameLetters.length) {
          tl.from(
            nameLetters,
            {
              opacity: 0,
              y: 30,
              rotateX: 90,
              duration: 0.4,
              stagger: 0.06,
              ease: "back.out(2)",
            },
            "-=0.2",
          );
        }

        if (surnameLetters.length) {
          tl.from(
            surnameLetters,
            {
              opacity: 0,
              y: 50,
              rotateX: 90,
              scale: 0.5,
              duration: 0.5,
              stagger: 0.05,
              ease: "expo.out",
            },
            "-=0.3",
          );
        }

        if (socials.length) {
          tl.from(
            socials,
            {
              opacity: 0,
              y: 18,
              scale: 0.85,
              duration: 0.45,
              stagger: 0.12,
              ease: "back.out(2)",
              clearProps: "all",
            },
            "-=0.2",
          );
        }

        if (img) {
          tl.from(
            img,
            {
              opacity: 0,
              y: 120,
              scale: 0.7,
              rotate: 30,
              duration: 0.8,
              ease: "expo.out",
            },
            "-=0.5",
          );
        }
      }

      // ─── СЕКЦІЇ ─────────────────────────────────────────────
      const sectionSelectors = [
        "#about",
        "#services",
        "#reviews",
        "#faq",
        "#contacts",
        "#partners",
      ];

      sectionSelectors.forEach((selector) => {
        const el = document.querySelector(selector);
        if (!el) return;

        let children = Array.from(el.children) as HTMLElement[];
        if (children.length === 1) {
          children = Array.from(children[0].children) as HTMLElement[];
        }
        if (!children.length) children = [el as HTMLElement];

        gsap.from(children, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 80,
          scale: 0.7,
          rotate: 10,
          duration: 0.8,
          stagger: 0.18,
          ease: "expo.out",
        });
      });
    }

    init();
  }, []);

  return null;
}
