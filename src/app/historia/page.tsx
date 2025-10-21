import TabsSection, { TabItem } from "../components/TabsSection";
import TimelineList from "../components/TimeLineList";
import type { Moment } from "../components/TimelineItem";

//TODO: AÑADIR IMAGENES A LOS MOMENTOS
const MOMENTOS: Moment[] = [
  // {
  //   id: "m1",
  //   date: "DD/MM/AAAA",
  //   title: "TÍTULO",
  //   text: "Descripción corta (2–4 líneas).",
  //   imageSrc: "/images/archivo.jpg", // opcional
  //   imageAlt: "Descripción de la foto", // opcional si usas imageSrc
  // },
  // ... (total: 10)
  {
   id: "m1",
   date: "13/08/2024",
   title: "La vez que me dijiste 'CURIOSIDAD, YO ESTOY, ASI QUE QUERÍA SABER PARA NO CRUZARME CONTIGO HAHAHA'",
   text: "Recordandolo me da risa que me haya creido tu 'chistesito' pero cuando volvi a mi casa me sentí demasiado feliz por haber salido a tomar heladito contigo. Creo que nunca te lo dije pero pensaba 'ojalá le guste a esta chica porque a mi me encanta'",
  },
  {
   id: "m2",
   date: "17/08/2024",
   title: "La primera vez que te dije que me gustabas",
   text: "Aunque asistido por la Hanan, me siento demasiado feliz de haber agarrado el coraje para confirmar que me gustabas. Me encató pasar la noche contigo viendo el amanecer. Te amo muchisisismo ",
  },
  {
   id: "m3",
   date: "25/08/2024",
   title: "Nuestra primera pelicula juntos",
   text: "Estaba tremendamente nervioso y pensé que no querías que este cerca tuyo jajaja. Aún asi me gustó verla contigo aunque la película haya sido mid",
  },
  {
   id: "m4",
   date: "29/08/2024",
   title: "Los sandwichitos de Chez Tim y el regalo misterioso parte 1",
   text: "Estaba nerviosisisimo por darte tu regalo pero me alegro que te haya gustado. Igual perdón por haberte hecho atrasar esa vez jajaja",
  },
  {
   id: "m5",
   date: "31/08/2024",
   title: "Tu cumpleañitos, digo, aniversario de Uzbekistán",
   text: "Aunque fue breve y llegamos tarde, me gusto pasarlo contigo. Fue bonito poder soltarnos más y ser más cariñosos jajaja. Gracias por llegar a mi vida amor",
  },
  {
   id: "m6",
   date: "25/10/2024",
   title: "Nuestro primer día como novios.",
   text: "TODO: AÑADIR TEXTO",
  },
  {
   id: "m7",
   date: "16/11/2024",
   title: "Nuestro primer te amo y nuestra primera pijamadita",
   text: "TODO: AÑADIR TEXTO",
  },
  {
   id: "m8",
   date: "25/11/2024",
   title: "Nuestro primer aniversario",
   text: "TODO: AÑADIR TEXTO",
  },
  {
   id: "m9",
   date: "22/11/2024",
   title: "Nuestra primera foto juntitos y nuestra casita de gengibre",
   text: "TODO: AÑADIR TEXTO",
  },
  {
   id: "m10",
   date: "14/02/2025",
   title: "Nuestro primer San Valentín juntos",
   text: "TODO: AÑADIR TEXTO",
  },
  {
   id: "m11",
   date: "14/02/2025",
   title: "BONUS: Mi cumpleaños jajaja",
   text: "TODO: AÑADIR TEXTO",
  },

];

const ITEMS: TabItem[] = [
  {
    key: "momentos",
    title: "Momentazos",
    content: (
      <div className="max-w-3xl">
        <TimelineList moments={MOMENTOS} order="asc" />
      </div>
    ),
  },
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuestra historia</h1>
      <TabsSection ariaLabel="Secciones de Historia" items={ITEMS} />
    </main>
  );
}
