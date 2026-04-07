import { ClipboardList, Stethoscope, FileCheck, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Relevamiento",
    desc: "Recopilamos información clave a través de entrevistas, observación y análisis documental para comprender la realidad organizacional.",
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Diagnóstico",
    desc: "Procesamos los datos obtenidos para identificar problemáticas, causas raíz y áreas de oportunidad con una mirada sistémica.",
  },
  {
    num: "03",
    icon: FileCheck,
    title: "Propuesta de mejora",
    desc: "Diseñamos un plan de acción con recomendaciones concretas, priorizadas y adaptadas a los recursos y objetivos de la organización.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Implementación",
    desc: "Acompañamos la ejecución de las recomendaciones, asegurando una transición efectiva y resultados medibles.",
  },
];

const MethodologySection = () => (
  <section id="metodologia" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Metodología
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-muted-foreground text-lg">
            Un enfoque estructurado y probado que garantiza resultados en cada
            etapa del proyecto.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-4 gap-6 relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-accent/20 via-blue-accent/40 to-blue-accent/20" />

        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 150}>
          <div key={s.num} className="relative flex flex-col items-center text-center">
            {/* Number circle */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-blue-accent/30 flex items-center justify-center mb-6 shadow-card">
              <span className="text-blue-accent font-bold text-2xl font-sans">
                {s.num}
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-accent/10 flex items-center justify-center mb-4">
              <s.icon className="text-blue-accent" size={20} />
            </div>
            <h3 className="font-sans text-lg font-bold text-primary mb-2">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {s.desc}
            </p>
          </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default MethodologySection;
