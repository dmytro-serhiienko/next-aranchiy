"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [btnState, setBtnState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const TG_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const TG_CHAT = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    const EMAIL_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    let message = `<b>🚀 Нова заявка!</b>\n\n`;
    message += `👤 <b>Ім'я:</b> ${formData.get("name") || "Не вказано"}\n`;
    message += `📞 <b>Телефон:</b> ${formData.get("phone") || "Не вказано"}\n`;
    message += `📅 <b>Дата:</b> ${formData.get("date") || "Не вказано"}\n`;
    message += `🎭 <b>Захід:</b> ${formData.get("type") || "—"}\n`;
    message += `📍 <b>Місто:</b> ${formData.get("city") || "—"}`;

    formData.append("access_key", EMAIL_KEY!);
    formData.append("subject", "Нове замовлення з сайту");
    formData.append("from_name", "Бот Сайту");

    setBtnState("loading");

    try {
      const [tgRes, emailRes] = await Promise.all([
        fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TG_CHAT,
            parse_mode: "html",
            text: message,
          }),
        }),
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        }),
      ]);

      if (tgRes.ok && emailRes.ok) {
        setBtnState("success");
        setTimeout(() => {
          onClose();
          form.reset();
          setBtnState("idle");
        }, 2000);
      } else {
        throw new Error("Помилка при відправці");
      }
    } catch (err) {
      console.error(err);
      setBtnState("error");
      setTimeout(() => setBtnState("idle"), 3000);
    }
  }

  const btnLabel = {
    idle: "Відправити заявку",
    loading: "Відправка...",
    success: "Відправлено ✓",
    error: "Помилка ❌",
  }[btnState];

  const btnStyle = {
    idle: {},
    loading: {},
    success: { backgroundColor: "rgba(40, 167, 69, 0.8)" },
    error: { backgroundColor: "rgba(220, 53, 69, 0.8)" },
  }[btnState];

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

        <form className={styles.modalForm} onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={btnState === "loading"}
            style={btnStyle}
          >
            <span>{btnLabel}</span>
            {btnState === "idle" && (
              <i className="ri-send-plane-line" aria-hidden="true" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
