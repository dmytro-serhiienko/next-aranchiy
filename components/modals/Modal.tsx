"use client";
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={overlayRef}
      id="modal"
      className={`${styles.modalOverlay} ${isOpen ? styles.isOpen : ""}`}
      role="dialog"
      aria-modal={true}
      aria-labelledby="modalTitle"
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className={styles.modal}>
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Закрити модальне вікно"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>

        <h3 className={styles.modalTitle} id="modalTitle">
          Залишіть заявку
        </h3>
        <p className={styles.modalSubtitle}>
          Заповніть форму — я звʼяжусь з вами найближчим часом
        </p>

        <form
          className={styles.modalForm}
          id="contactForm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="form-name">
              Імʼя
            </label>
            <input
              id="form-name"
              type="text"
              name="name"
              className={styles.formInput}
              placeholder="Ваше ім'я"
              required
              autoComplete="name"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="form-phone">
              Телефон
            </label>
            <input
              id="form-phone"
              type="tel"
              name="phone"
              className={styles.formInput}
              placeholder="+38 (0XX) XXX-XX-XX"
              required
              autoComplete="tel"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="form-date">
              Дата заходу
            </label>
            <input
              id="form-date"
              type="date"
              name="date"
              className={`${styles.formInput} ${styles.formInputDate}`}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="form-type">
              Тип заходу
            </label>
            <input
              id="form-type"
              type="text"
              name="type"
              className={styles.formInput}
              placeholder="Весілля, корпоратив, день народження..."
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="form-city">
              Місто
            </label>
            <input
              id="form-city"
              type="text"
              name="city"
              className={styles.formInput}
              placeholder="Наприклад, Київ"
              autoComplete="address-level2"
            />
          </div>

          <button type="submit" className={styles.btnSubmit}>
            <span>Відправити заявку</span>
            <i className="ri-send-plane-line" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
