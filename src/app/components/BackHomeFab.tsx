// app/components/BackHomeFab.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackHomeFab() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      className="fixed right-4 bottom-4 rounded-full px-4 py-2 shadow-lg
                 bg-[var(--primary)] text-white hover:opacity-90 transition"
      aria-label="Volver al inicio"
    >
      Inicio ↑
    </Link>
  );
}
