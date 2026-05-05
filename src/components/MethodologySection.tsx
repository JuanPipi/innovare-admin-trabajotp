import { useState, useEffect, useRef } from "react";
import { Compass, Search, Lightbulb, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Explorar",
    desc: "Relevamos información, observamos procesos y comprendemos la realidad organizacional a través de entrevistas y análisis documental.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Diagnosticar",
    desc: "Identificamos causas, brechas y oportunidades desde una mirada sistémica que contempla todas las dimensiones de la organización.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Diseñar",
    desc: "Creamos propuestas de mejora alineadas con los objetivos y recursos disponibles, priorizando acciones de alto impacto.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Implementar",
    desc: "Acompañamos la ejecución, asegurando una transición efectiva con indicadores claros y resultados medibles.",
  },
];

// Horizontal center of each of the 4 equal columns
const colCenters = ["12.5%", "37.5%", "62.5%", "87.5%"];

const MethodologySection = () => {
  const [active, setActive] = useState(0);
  const innerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const triggerJump = () => {
    const el = innerRef.current;
    if (!el) return;
    el.classList.remove("animate-ball-jump");
    void el.offsetWidth;
    el.classList.add("animate-ball-jump");
  };

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
              Un enfoque estructurado que garantiza claridad, coherencia y
              resultados concretos en cada etapa del proyecto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-accent/20 via-blue-accent/40 to-blue-accent/20" />

          {/* BALL — desktop only */}
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
              <span className="absolute inset-0 rounded-full bg-blue-accent opacity-40 animate-ping" />
              <span className="relative block w-4 h-4 rounded-full bg-blue-accent shadow-[0_0_14px_6px_rgba(52,168,83,0.6)]" />
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
                      ? "border-blue-accent shadow-[0_0_28px_8px_rgba(52,168,83,0.22)]"
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
