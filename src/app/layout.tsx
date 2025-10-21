"use client"
import type { Metadata } from "next";
import { HeroUIProvider } from "@heroui/react";
import "@/app/globals.css";
import { plusJakarta } from "./fonts";
import BackHomeFab from "./components/BackHomeFab";

 const metadata: Metadata = {
  title: "Nuestro aniversario — 1 año",
  description: "Gracias por cambiar mi vida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} body-font min-h-screen bg-[var(--bg)] text-[var(--fg)]`}>
        <HeroUIProvider>{children}</HeroUIProvider>
        <BackHomeFab />
      </body>
    </html>
  );
}
