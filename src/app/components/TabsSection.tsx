"use client";
import { Tabs, Tab } from "@heroui/react";
import { ReactNode } from "react";

export type TabItem = {
  key: string;      // id único de la pestaña
  title: string;    // etiqueta visible
  content: ReactNode; // contenido: texto o componente
};

export type TabsSectionProps = {
  ariaLabel: string;      // ej: "Secciones de Inicio"
  items: TabItem[];       // pestañas en orden exacto
  fullWidth?: boolean;    // opcional
  className?: string;     // opcional
  variant?: "solid" | "bordered" | "underlined"; // opcional
};

export default function TabsSection({
  ariaLabel,
  items,
  fullWidth,
  className,
  variant = "underlined",
}: TabsSectionProps) {
  return (
    <div className={className}>
      <Tabs aria-label={ariaLabel} fullWidth={fullWidth} variant={variant}>
        {items.map((it) => (
          <Tab key={it.key} title={it.title}>
            <div className="py-4">{it.content}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
