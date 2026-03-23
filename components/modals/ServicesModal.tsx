"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import styles from "./ServiceModal.module.css";
import WeddingModal from "./service-modals/WeddingModal/WeddingModal";
import EventsModal from "./service-modals/Events/EventsModal";

interface Props {
  modalId: string | null;
  onClose: () => void;
}

function ModalContent({
  modalId,
  onIntroEnd,
}: {
  modalId: string;
  onIntroEnd: () => void;
}) {
  switch (modalId) {
    case "wedding":
      return <WeddingModal onIntroEnd={onIntroEnd} />;
    case "events":
      return <EventsModal onIntroEnd={onIntroEnd} />;
    default:
      return <p style={{ padding: 40 }}>Скоро буде...</p>;
  }
}

export default function ServicesModal({ modalId, onClose }: Props) {
  const isOpen = !!modalId;
  const panelRef = useRef<LenisRef>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const resetScroll = useCallback(() => {
    panelRef.current?.lenis?.scrollTo(0, { immediate: true });
    setIsAnimating(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => setIsAnimating(true), 0);
      panelRef.current?.lenis?.scrollTo(0, { immediate: true });
      return () => clearTimeout(id);
    }
  }, [isOpen, modalId]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new Event("lenis:stop"));
    } else {
      window.dispatchEvent(new Event("lenis:start"));
    }
    return () => {
      window.dispatchEvent(new Event("lenis:start"));
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal} role="dialog" aria-modal={true}>
      <div className={styles.overlay} onClick={onClose} />
      <ReactLenis
        className={styles.panel}
        ref={panelRef}
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
      >
        {isAnimating && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 50,
              cursor: "default",
            }}
          />
        )}
        <button className={styles.close} onClick={onClose} aria-label="Закрити">
          <i className="ri-close-line" aria-hidden="true" />
        </button>
        <div className={styles.inner}>
          <ModalContent modalId={modalId} onIntroEnd={resetScroll} />
        </div>
      </ReactLenis>
    </div>
  );
}
