import { useState, useEffect, useRef } from "react";
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

// Horizontal center of each of the 4 equal columns
const colCenters = ["12.5%", "37.5%", "62.5%", "87.5%"];

const MethodologySection = () => {
  const [active, setActive] = useState(0);
  // Ref on the INNER div — only translateY animation, no transform conflict
  const innerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const triggerJump = () => {
    const el = innerRef.current;
    if (!el) return;
    el.classList.remove("animate-ball-jump");
    void el.offsetWidth; // force reflow so browser re-registers the animation
    el.classList.add("animate-ball-jump");
  };

  // Fire jump animation whenever active changes (skip very first render)
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return;
    }
    triggerJump();
  }, [active]);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
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
          {/* Connector line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-accent/20 via-blue-accent/40 to-blue-accent/20" />

          {/*
            BALL — desktop only.

            Architecture (two divs, no transform conflict):
            · Outer div  → controls LEFT (horizontal via CSS transition). No transform.
                           marginLeft: -8px centers the 16px ball on the column.
            · Inner div  → carries only the jump animation (translateY only).
                           No inline transform → keyframe has full ownership of `transform`.

            top: 1rem puts the ball just above the circle top edge.
            (connector line is at 4.5rem = 72px → circle centers at 72px →
             circle tops at 72-40 = 32px = 2rem → ball bottom at 2rem → top = 2rem - 1rem = 1rem)
          */}
          <div
            className="hidden md:block absolute z-20"
            style={{
              left: colCenters[active],
              top: "-12px",
              marginLeft: "-8px",
              transition: "left 0.8s linear",
            }}
          >
            <div ref={innerRef}>
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-blue-accent opacity-40 animate-ping" />
              {/* Ball */}
              <span className="relative block w-4 h-4 rounded-full bg-blue-accent shadow-[0_0_14px_6px_rgba(59,130,246,0.6)]" />
            </div>
          </div>

          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 150}>
              <div
                className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                  active === i ? "md:scale-105" : ""
                }`}
              >
                {/* Number circle */}
                <div
                  className={`relative z-10 w-20 h-20 rounded-full bg-card border-2 flex items-center justify-center mb-6 transition-all duration-500 ${
                    active === i
                      ? "border-blue-accent shadow-[0_0_28px_8px_rgba(59,130,246,0.22)]"
                      : "border-blue-accent/30 shadow-card"
                  }`}
                >
                  <span
                    className={`font-bold text-2xl font-sans transition-colors duration-500 ${
                      active === i ? "text-blue-accent" : "text-blue-accent/40"
                    }`}
                  >
                    {s.num}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${
                    active === i ? "bg-blue-accent" : "bg-blue-accent/10"
                  }`}
                >
                  <s.icon
                    className={`transition-colors duration-500 ${
                      active === i ? "text-white" : "text-blue-accent"
                    }`}
                    size={20}
                  />
                </div>

                <h3
                  className={`font-sans text-lg font-bold mb-2 transition-colors duration-500 ${
                    active === i ? "text-blue-accent" : "text-primary"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed max-w-xs transition-colors duration-500 ${
                    active === i ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
