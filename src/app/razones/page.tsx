// app/razones/page.tsx
import TabsSection, { TabItem } from "../components/TabsSection";
import ReasonsList from "../components/ReasonsList";

/**
 * Pega tus frases exactas entre comillas.
 * Puedes mantener solo "TODAS" o crear categorías y tabs extra.
 */

const TODAS: string[] = [
  "Verte después de las eternas 48 hrs que pasan entre los días que nos vemos",
  "Verte sonreir",
  "Escuchar tu risita",
  "Verte dormir",
  "Ver peliculas juntos",
  "Comer juntos",
  "Cocinar juntos aunque solo me ayudes pasandome las cosas jijiji",
  "Tus besitos",
  "Tus abrazos",
  "Tus piecitos",
  "Tu carita preciosa",
  "Tus ojitos preciosos",
  "Tus caricias",
  "Tus besotes",
  "Tu traserito :D",
  "La forma en la que me ves",
  "ABSOLUTAMENTE TODO DE TI MI AMOR",
];


const ITEMS: TabItem[] = [
  { key: "todas", title: "Todas", content: <ReasonsList items={TODAS} /> },
];
export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Cositas que amo de ti</h1>
      <TabsSection ariaLabel="Secciones de Razones" items={ITEMS} />
    </main>
  );
}
