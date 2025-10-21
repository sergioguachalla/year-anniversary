import TabsSection, { TabItem } from "../components/TabsSection";
import LoveLetter from "../components/LoveLetter";



const ITEMS: TabItem[] = [
  {
    key: "carta1",
    title: "Gracias",
    content: (
      <LoveLetter title="Gracias">
        <p>Quiero que sepas que estoy profundamente agradecido por todo lo que has hecho y haces por mi.
          Realmente aprecio demasiado tu apoyo y que me hayas entendido y estado para mi cuando a veces no estoy en mi mejor momento.
          También gracias por escucharme siempre y hacerme sentir que te importan las pequeñas cosas que te cuento y también eso como que
          desemboca en que yo me sienta importante para ti. Gracias también por hacerme sentir la paz que siento contigo y por hacerme el hombre más
          feliz del mundo y del universo, te amo mi amor 💓 
        </p>
      </LoveLetter>
    ),
  },
  {
    key: "carta2",
    title: "Lo que aprendí contigo",
    content: (
      <LoveLetter title="Lo que aprendí contigo">
        <p>Creo que he aprendido varias cosas contigo. Siento que aprendi a expresar de mejor manera las cosas, también que lo raro no siempre es malo jajaja.
          Entre otras cosas siento que aprendí cosas de cocina que hicieron que me guste más cocinar y comer más rico y tener más cosas que me recuerden a ti.
          Aprendí como que en confiar más en mi, siento que soy más confiado y más seguro de lo que hago, y todo por la forma en la que me haces sentir.
          También aprendi que a veces "home" no siempre es un lugar sino una persona, cada vez que estoy que estoy contigo me siento en casita.
          Y también aprendi que a pesar de las dificultades o las peleas o lo que sea se que como equipo podemos superar todo y seguir adelante. Te amo mi amor 💓 
        </p>
      </LoveLetter>
    ),
  },
  {
    key: "promesa",
    title: "Mi promesa",
    content: (
      <LoveLetter title="Mi promesa" signature="dudu">
        <p>Quiero decirte acá que prometo estar contigo siempre, y que no improta lo que pase, yo te voy a apoyar, consolar y hacer todo lo posible para que
          te sientas tranquila y segura. También te prometo que JAMÁS de los jameses voy a dejar de verte de la misma manera en la que te veo, siempre vas a ser la mujer más linda,
          hermosa, sexy, inteligente, graciosa, preciosa y tierna del universo para mi y jamás podría pensar en cambiar de persona. Te prometo que voy a tratar de
          ser la mejor versión de mi para ti, te prometo que jamas voy a dejar de amarte y finalmente te prometo que siempre voy a tratar de construir un futuro para nosotros.
          No sabes las ganas que tengo de formar una familia, un hogar y una vida juntos. Te amo mi bebé 💓 
        </p>
        
      </LoveLetter>
    ),
  },
];

export default function Page() {
  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Cartas para ti</h1>
      <TabsSection ariaLabel="Secciones de Cartas" items={ITEMS} />
    </main>
  );
}
