"use client";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import Contacts from "@/components/sections/Contacts";
import Partners from "@/components/sections/Partners";
import ScrollTop from "@/components/ui/ScrollTop";
import Animations from "@/components/ui/Animations";
import Modal from "@/components/modals/Modal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#292929",
            color: "#f0ede8",
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            borderRadius: "12px",
            padding: "14px 18px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#292929",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#292929",
            },
          },
        }}
      />
      <Header onReserveClick={() => setModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Faq />
        <Contacts onReserveClick={() => setModalOpen(true)} />
        <Partners />
      </main>
      <ScrollTop />
      <Animations />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
