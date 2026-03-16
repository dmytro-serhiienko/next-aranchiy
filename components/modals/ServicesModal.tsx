"use client";
import { useEffect } from "react";
import styles from "./ServiceModal.module.css";
import WeddingModal from "./service-modals/WeddingModal";

interface Props {
  modalId: string | null;
  onClose: () => void;
}

function ModalContent({ modalId }: { modalId: string }) {
  switch (modalId) {
    case "wedding":
      return <WeddingModal />;
    // решту додамо пізніше
    default:
      return <p style={{ padding: 40 }}>Скоро буде...</p>;
  }
}

export default function ServiceModal({ modalId, onClose }: Props) {
  const isOpen = !!modalId;

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
      <div className={styles.panel}>
        <button className={styles.close} onClick={onClose} aria-label="Закрити">
          <i className="ri-close-line" aria-hidden="true" />
        </button>
        <div className={styles.inner}>
          <ModalContent modalId={modalId} />
        </div>
      </div>
    </div>
  );
}
