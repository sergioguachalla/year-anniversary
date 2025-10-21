import TabsSection, { TabItem } from "./components/TabsSection";

const ITEMS: TabItem[] = [
  {
    key: "mensaje",
    title: "Mensaje",
    content: (
      <div className="space-y-3">
        {/* TODO: reemplazar por el texto real */}
        <h2 className="text-2xl md:text-3xl font-bold">[TÍTULO PENDIENTE]</h2>
        <p className="opacity-80">
          [Placeholder] Aquí irá el mensaje principal del inicio. Mantén 1–2
          líneas máximo. Ejemplo: “Texto pendiente…”.
        </p>
      </div>
    ),
  },
  {
    key: "acciones",
    title: "Acciones",
    content: (
      <div className="space-y-2">
        {/* TODO: define las acciones exactas (ej: enlaces a /historia, /cartas, etc.) */}
        <p className="opacity-80">
          [Placeholder] Aquí irán las acciones/CTAs. Indícame etiquetas y rutas
          exactas cuando las tengas.
        </p>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
        Inicio
      </h1>

      <TabsSection
        ariaLabel="Secciones de Inicio"
        items={ITEMS}
        // variant="underlined" // puedes cambiar a "solid" o "bordered" cuando quieras
      />
    </main>
  );
}
