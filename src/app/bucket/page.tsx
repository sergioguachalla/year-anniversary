"use client";
import TabsSection, { TabItem } from "../components/TabsSection";

const ITEMS: TabItem[] = [
  // TODO: insertar pestañas exactas de Planes
  // { key: "todo", title: "Por hacer", content: <ListaTodo /> },
  // { key: "done", title: "Hechos", content: <ListaDone /> },
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuestros planes</h1>
      <TabsSection ariaLabel="Secciones de Planes" items={ITEMS} fullWidth />
    </main>
  );
}
