import TabsSection, { TabItem } from "../components/TabsSection";

const ITEMS: TabItem[] = [
  // TODO: insertar pestañas exactas de Galería (categorías/filtros)
  // { key: "nosotros", title: "Nosotros", content: <GaleriaNosotros /> },
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Galería</h1>
      <TabsSection ariaLabel="Secciones de Galería" items={ITEMS} fullWidth />
    </main>
  );
}
