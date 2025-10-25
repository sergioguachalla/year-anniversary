"use client";
import TabsSection, { TabItem } from "../components/TabsSection";
import Gallery, { Photo } from "../components/Gallery";


const PHOTOS: Photo[] = [
  { src:"/images/galeria/1.jpg", alt: "Nuestra primera foto juntitos", width: 1200, height: 1600, caption: "Nosostros" },
  { src:"/images/galeria/2.jpg", alt: "Nuestra segunda foto juntitos", width: 1200, height: 1600, caption: "Tus ojitos preciosos y prácticamente la priemra foto que te tomé" },
  { src:"/images/galeria/3.jpg", alt: "Nuestra tercera foto juntitos", width: 1200, height: 1600, caption: "Nuestra casita de gengibre" },
  { src:"/images/galeria/4.jpg", alt: "Nuestra cuarta foto juntitos", width: 1200, height: 1600, caption: "Las lasagnas de san valentin" },
  { src:"/images/galeria/5.jpg", alt: "Nuestra quinta foto juntitos", width: 1200, height: 1600, caption: "El postrecito que hiciste para mi" },
  { src:"/images/galeria/6.jpg", alt: "Nuestra sexta foto juntitos", width: 1200, height: 1600, caption: "Nuestra obra de arte jajaja" },
  { src:"/images/galeria/7.jpg", alt: "Nuestra séptima foto juntitos", width: 1200, height: 1600, caption: "Más feliz no puedes estar :p" },
  { src:"/images/galeria/8.jpg", alt: "Nuestra octava foto juntitos", width: 1200, height: 1600, caption: "Nuestra futura hijita" },
  { src:"/images/galeria/9.jpg", alt: "Nuestra novena foto juntitos", width: 1200, height: 1600, caption: "Nuestra wawa 😼" },
  { src:"/images/galeria/10.jpg", alt: "Nuestra décima foto juntitos", width: 1200, height: 1600, caption: "Tu comiendo tu desayunito americano y la vez que me diste las galletas en navidad"  },
  { src:"/images/galeria/11.jpg", alt: "Nuestra onceava foto juntitos", width: 1200, height: 1600, caption: "Mi bebé preciosa" },
  { src:"/images/galeria/12.jpg", alt: "Nuestra doceava foto juntitos", width: 1200, height: 1600, caption: "Las pizzitas que hicimos, tu mesa nunca olvidará ese día jajaja" },
  


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
