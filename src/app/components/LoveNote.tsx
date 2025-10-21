"use client";
import { Card, CardBody, Chip } from "@heroui/react";
import { ReactNode } from "react";

type LoveNoteProps = {
  title: ReactNode;          // tu H2 exacto
  children: ReactNode;       // tu párrafo(s)
  chipText?: string;         // opcional: texto del chip superior
  className?: string;
};

export default function LoveNote({ title, children, chipText, className }: LoveNoteProps) {
  return (
    <div className={className}>
      {chipText ? (
        <Chip className="mb-4 bg-[var(--secondary)] text-[var(--primary)] border-none">
          {chipText}
        </Chip>
      ) : null}

      <div className="mb-3">
        {/* Degradado sutil en el título (usa tu H2 exacto) */}
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
          {title}
        </div>
      </div>

      <Card className="border-0 bg-white/80 dark:bg-white/5 backdrop-blur">
        <CardBody className="text-left">
          {children}
        </CardBody>
      </Card>

      {/* Separador sutil con corazón */}
      <div className="mt-5 flex items-center gap-3 opacity-60">
        <span className="h-[1px] flex-1 bg-[var(--secondary)]" />
        <span aria-hidden>♥</span>
        <span className="h-[1px] flex-1 bg-[var(--secondary)]" />
      </div>
    </div>
  );
}
