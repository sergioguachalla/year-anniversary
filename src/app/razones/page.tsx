import TabsSection, { TabItem } from "../components/TabsSection";

const ITEMS: TabItem[] = [
  // TODO: insertar pestañas exactas de Razones (si las segmentas por categorías)
  // { key: "tiernuras", title: "Ternuras", content: <ListaRazones items={...} /> },
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Cositas que amo de ti</h1>
      <TabsSection ariaLabel="Secciones de Razones" items={ITEMS} />
    </main>
  );
}
