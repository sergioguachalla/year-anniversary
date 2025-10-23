import TabsSection, { TabItem } from "./components/TabsSection";
import LoveNote from "./components/LoveNote";
import HeroPicture from "./components/HeroPicture";
import TermsGate from "./components/TermsGate";
import ActionLinks, {ActionItem} from "./components/ActionLinks";
import { withBasePath } from "./helpers/basePath";
const ACTIONS: ActionItem[] = [
  { href: "/historia", label: "Un timeline de nosotros" },
  { href: "/galeria",  label: "Una galería de nuestras memorias" },
  { href: "/cartas",   label: "Unas cartitas para ti" },
  { href: "/razones",  label: "Razones por las que te amo" },
  { href: "/bucket",   label: "Un bucket list" }, 
];

const ITEMS: TabItem[] = [
  {
    key: "mensaje",
    title: "Mensaje",
    content: (
      <LoveNote
        chipText="1 año juntos"
        title={
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            UN AÑITO SUIIIII
          </h2>
        }
      >
        <HeroPicture
    src="/images/page_1.jpg"   
    alt="Nosotros sonriendo" 
    className="mb-4"
  />
        <p className="opacity-80">
          Feliz aniversario mi amor. Gracias por todo estos maravillosísimos 365 días.
          Quiero que sepas que has cambiado mi vida y que te amo más de lo que puedo expresar.
          Hice esta página para recordarte todo lo que he vivido con ti y para recordarte que
          eres mi mejor amiga, el amor de mi vida y mi todo, te amo demasiadisisisimo ♥
        </p>
      </LoveNote>
    ),
  },
  {
    key: "acciones",
    title: "Dale click acá",
    content: (
      <TermsGate storageKey="acciones-aceptadas">
        <ActionLinks ariaLabel="Acciones de inicio" items={ACTIONS} />
      </TermsGate>
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
      />
    </main>
  );
}
