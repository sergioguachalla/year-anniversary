import TabsSection, { TabItem } from "../components/TabsSection";
import TimelineList from "../components/TimeLineList";
import type { Moment } from "../components/TimelineItem";

//TODO: AÑADIR IMAGENES A LOS MOMENTOS
const MOMENTOS: Moment[] = [

  {
   id: "m1",
   date: "13/08/2024",
   title: "La vez que me dijiste 'CURIOSIDAD, YO ESTOY, ASI QUE QUERÍA SABER PARA NO CRUZARME CONTIGO HAHAHA'",
   text: "Recordandolo me da risa que me haya creido tu 'chistesito'. Cuando volvi a mi casa me sentí demasiado feliz por haber salido a tomar heladito contigo. Creo que nunca te lo dije pero pensaba 'ojalá le guste a esta chica porque a mi si me gusta mucho'",
    imageSrc: "/images/historia/1.jpg",
  },
  {
   id: "m2",
   date: "17/08/2024",
   title: "La primera vez que te dije que me gustabas",
   text: "Aunque asistido por la Hanan, me siento demasiado feliz de haber agarrado el coraje para confirmar que me gustabas. Me encató pasar la noche contigo viendo el amanecer. Te amo muchisisismo ",
    imageSrc: "/images/historia/2.gif",
  },
  {
   id: "m3",
   date: "25/08/2024",
   title: "Nuestra primera pelicula juntos",
   text: "Estaba tremendamente nervioso y pensé que no querías que este cerca tuyo jajaja. Aún asi me gustó verla contigo aunque la película haya sido mid",
    imageSrc: "/images/historia/3.jpg",
  },
  {
   id: "m4",
   date: "29/08/2024",
   title: "Los sandwichitos de Chez Tim y el regalo misterioso parte 1",
   text: "Estaba nerviosisisimo por darte tu regalo pero me alegro que te haya gustado. Igual perdón por haberte hecho atrasar esa vez jajaja",
    imageSrc: "/images/historia/4.jpg",
  },
  {
   id: "m5",
   date: "31/08/2024",
   title: "Tu cumpleañitos, digo, aniversario de Uzbekistán",
   text: "Aunque fue breve y llegamos tarde, me gusto pasarlo contigo. Fue bonito poder soltarnos más y ser más cariñosos jajaja. Gracias por llegar a mi vida amor",
    imageSrc: "/images/historia/5.jpg",
  },
  {
   id: "m6",
   date: "25/10/2024",
   title: "Nuestro primer día como novios.",
   text: "Estaba un poquitin nervioso jajaja y tarde un poquitititito pero me alegro de que hayas aceptado ver los simpsons conmigo y también ser mi novia. Te amo amorcito",
    imageSrc: "/images/historia/6.jpg",
  },
  {
   id: "m7",
   date: "16/11/2024",
   title: "Nuestro primer te amo y nuestra primera pijamadita",
   text: "Tenía un poco de miedo de decirte que te amaba y también de que no digas lo mismo. También tenía miedito a que no me dejes quedarme a dormir en tu casita. Fue tremendo día, te amo amorcito ",
    imageSrc: "/images/historia/7.jpg",
  },
  {
   id: "m8",
   date: "25/11/2024",
   title: "Nuestro primer aniversario",
   text: "Me encató pasarlo contigo y también me enncantó el pastel que hiciste, estaba deliciosisisismo y me lo comi yo solito jajaja",
    imageSrc: "/images/historia/8.jpg",
  },
  {
   id: "m9",
   date: "22/11/2024",
   title: "Nuestra primera foto juntitos y nuestra casita de gengibre",
   text: "Me gustó mucho la idea de hacer una casita de gengibre aunque me senti un poco inutil porque no hice mucho, aún asi estaba tan feliz por nuestra fotito y por pasar el tiempo contigo. Te amo mi vdai",
    imageSrc: "/images/historia/9.jpg",
  },
  {
   id: "m10",
   date: "14/02/2025",
   title: "Nuestro primer San Valentín juntos",
   text: "Aunque empezó mal, me encantó hacer la lasagnita, estaba delicioso y me lo comi yo solito jajaja. Sabes que toda la comida que haces es mi favorita mi vida",
    imageSrc: "/images/historia/10.jpg",
  },
  {
   id: "m11",
   date: "14/02/2025",
   title: "BONUS: Mi cumpleaños jajaja",
   text: "Me encantaron los regalos que me diste y también me hicieron sentir super amado y bienvenido y no sé, me hizo pensar en cuando vivamos juntos. Gracias por los mejores regalo del mundo amoricto",
    imageSrc: "/images/historia/11.png",
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
