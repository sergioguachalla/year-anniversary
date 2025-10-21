import TabsSection, { TabItem } from "../components/TabsSection";

const ITEMS: TabItem[] = [
  // TODO: insertar pestañas exactas de Cartas
  // { key: "carta1", title: "Carta 1", content: <p>...</p> },
  // { key: "carta2", title: "Carta 2", content: <p>...</p> },
  // { key: "promesa", title: "Mi promesa", content: <p>...</p> },
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Cartas para ti</h1>
      <TabsSection ariaLabel="Secciones de Cartas" items={ITEMS} />
    </main>
  );
}
