"use client";
import { useEffect, useRef } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const initialValues = {
  name: "",
  phone: "",
  date: "",
  type: "",
  city: "",
};

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

  async function handleSubmit(
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>,
  ) {
    await toast.promise(
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then((res) => {
        if (!res.ok) throw new Error("Помилка відправки");
      }),
      {
        loading: "Відправляємо заявку...",
        success: "Заявку відправлено! Я зв'яжусь з вами найближчим часом 🎉",
        error: "Помилка відправки. Спробуйте ще раз ❌",
      },
    );

    resetForm();
    onClose();
  }

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

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="form-name">
                  Імʼя
                </label>
                <Field
                  id="form-name"
                  name="name"
                  type="text"
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
                <Field
                  id="form-phone"
                  name="phone"
                  type="tel"
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
                <Field
                  id="form-date"
                  name="date"
                  type="date"
                  className={`${styles.formInput} ${styles.formInputDate}`}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="form-type">
                  Тип заходу
                </label>
                <Field
                  id="form-type"
                  name="type"
                  type="text"
                  className={styles.formInput}
                  placeholder="Весілля, корпоратив, день народження..."
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="form-city">
                  Місто
                </label>
                <Field
                  id="form-city"
                  name="city"
                  type="text"
                  className={styles.formInput}
                  placeholder="Наприклад, Рівне"
                  autoComplete="address-level2"
                />
              </div>

              <button
                type="submit"
                className={styles.btnSubmit}
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Відправка..." : "Відправити заявку"}
                </span>
                {!isSubmitting && (
                  <i className="ri-send-plane-line" aria-hidden="true" />
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
