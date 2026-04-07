import ScrollReveal from "./ScrollReveal";
import {
  Compass,
  Building2,
  Cpu,
  Crown,
  UsersRound,
  Wrench,
  Heart,
} from "lucide-react";

const elements = [
  { icon: Compass, label: "Estrategia", desc: "Definimos el rumbo y las prioridades competitivas." },
  { icon: Building2, label: "Estructura", desc: "Diseñamos la arquitectura organizacional óptima." },
  { icon: Cpu, label: "Sistemas", desc: "Optimizamos procesos, flujos y herramientas de gestión." },
  { icon: Crown, label: "Estilo de gestión", desc: "Fortalecemos el liderazgo y la toma de decisiones." },
  { icon: UsersRound, label: "Personal", desc: "Potenciamos el talento y el capital humano." },
  { icon: Wrench, label: "Habilidades", desc: "Desarrollamos competencias clave para el éxito." },
  { icon: Heart, label: "Valores compartidos", desc: "Alineamos la cultura con la visión organizacional." },
];

const SevenSSection = () => (
  <section className="py-24 md:py-32 bg-muted/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
          Enfoque integral
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Las 7 dimensiones de la gestión
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Trabajamos con una mirada sistémica que abarca las siete dimensiones
          clave de toda organización, asegurando coherencia y alineación en cada
          intervención.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {elements.map((e) => (
          <div
            key={e.label}
            className="group flex flex-col items-center text-center bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover border border-border hover:border-blue-accent/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center mb-3 group-hover:bg-blue-accent transition-colors">
              <e.icon
                className="text-blue-accent group-hover:text-accent-foreground transition-colors"
                size={22}
              />
            </div>
            <h4 className="font-sans text-sm font-bold text-primary mb-1">
              {e.label}
            </h4>
            <p className="text-muted-foreground text-xs leading-relaxed hidden lg:block">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SevenSSection;
