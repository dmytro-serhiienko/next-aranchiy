"use client";
import { useCallback, useEffect, useRef } from "react";
import styles from "./ServiceModal.module.css";
import WeddingModal from "./service-modals/WeddingModal";
import CorporateModal from "./service-modals/CorporateModal";
import GenderModal from "./service-modals/GenderModal";

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

    case "corporate":
      return <CorporateModal onIntroEnd={onIntroEnd} />;
    default:
      return <p style={{ padding: 40 }}>Скоро буде...</p>;

    case "gender":
      return <GenderModal onIntroEnd={onIntroEnd} />;
  }
}

export default function ServiceModal({ modalId, onClose }: Props) {
  const isOpen = !!modalId;
  const panelRef = useRef<HTMLDivElement>(null);

  const resetScroll = useCallback(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.scrollTop = 0;
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
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal} role="dialog" aria-modal={true}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.panel} ref={panelRef}>
        <button className={styles.close} onClick={onClose} aria-label="Закрити">
          <i className="ri-close-line" aria-hidden="true" />
        </button>
        <div className={styles.inner}>
          <ModalContent modalId={modalId} onIntroEnd={resetScroll} />
        </div>
      </div>
    </div>
  );
}
