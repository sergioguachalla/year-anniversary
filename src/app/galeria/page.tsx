"use client";
import TabsSection, { TabItem } from "../components/TabsSection";
import Gallery, { Photo } from "../components/Gallery";

/**
 * TODO: Reemplaza con tus fotos reales.
 * Colócalas en /public/images/... y ajusta width/height aproximados.
 * Si no tienes muchas, deja 2–6; el componente maneja pocos elementos bien.
 */
const PHOTOS: Photo[] = [
  { src:"/images/page_1.jpg", alt: "Nuestra primera foto juntitos", width: 1200, height: 1600 },
  // { src: "/images/bubu-dudu-cafe.jpg",   alt: "Bubu y Dudu en un café", width: 1200, height: 1600 },
  // { src: "/images/bubu-dudu-parque.jpg", alt: "Paseo en el parque",     width: 1600, height: 1200 },
  // { src: "/images/bubu-dudu-playa.jpg",  alt: "Risa en la playa",       width: 1200, height: 1600 },
];

const ITEMS: TabItem[] = [
  {
    key: "galeria",
    title: "Galería",
    content: <Gallery photos={PHOTOS} />,
  },
  // Si luego quieres categorías, podemos añadir más tabs y pasar distintos arrays.
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Galería</h1>
      <TabsSection ariaLabel="Secciones de Galería" items={ITEMS} fullWidth />
    </main>
  );
}
