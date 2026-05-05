import ScrollReveal from "./ScrollReveal";
import { Compass, Building2, Cpu, Crown, UsersRound, Wrench, Heart } from "lucide-react";

const elements = [
  { icon: Compass,    label: "Estrategia",         desc: "Definimos el rumbo y las prioridades competitivas." },
  { icon: Building2,  label: "Estructura",          desc: "Diseñamos la arquitectura organizacional óptima." },
  { icon: Cpu,        label: "Sistemas",            desc: "Optimizamos procesos, flujos y herramientas de gestión." },
  { icon: Crown,      label: "Estilo de gestión",   desc: "Fortalecemos el liderazgo y la toma de decisiones." },
  { icon: UsersRound, label: "Personal",            desc: "Potenciamos el talento y el capital humano." },
  { icon: Wrench,     label: "Habilidades",         desc: "Desarrollamos competencias clave para el éxito." },
  { icon: Heart,      label: "Valores compartidos", desc: "Alineamos la cultura con la visión organizacional." },
];

const track = [...elements, ...elements];

const SevenSSection = () => (
  <section className="py-24 md:py-32 bg-muted/70 overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Enfoque integral
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Las 7 raíces de una organización sólida
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Toda organización crece cuando sus dimensiones internas están alineadas.
            Por eso analizamos las 7S como raíces conectadas de un mismo ecosistema
            de gestión.
          </p>
        </div>
      </ScrollReveal>
    </div>

    <div className="marquee-track w-full overflow-hidden">
      <div className="animate-marquee flex gap-5 w-max">
        {track.map((e, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center bg-card rounded-xl p-6 shadow-card border border-border w-52 shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center mb-3">
              <e.icon className="text-blue-accent" size={22} />
            </div>
            <h4 className="font-sans text-sm font-bold text-primary mb-1">{e.label}</h4>
            <p className="text-muted-foreground text-xs leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SevenSSection;
