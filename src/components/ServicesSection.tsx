import ScrollReveal from "./ScrollReveal";
import {
  Search,
  Target,
  GitBranch,
  Users,
  Monitor,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnóstico del ecosistema organizacional",
    desc: "Analizamos cómo interactúan las áreas, procesos, personas y recursos para detectar oportunidades de mejora con una mirada sistémica.",
  },
  {
    icon: Target,
    title: "Estrategia para crecimiento sostenible",
    desc: "Diseñamos planes estratégicos alineados con los objetivos, capacidades y contexto de cada organización.",
  },
  {
    icon: GitBranch,
    title: "Optimización de procesos y estructura",
    desc: "Rediseñamos flujos de trabajo para mejorar eficiencia, coordinación y toma de decisiones en toda la organización.",
  },
  {
    icon: Users,
    title: "Cultura y liderazgo adaptativo",
    desc: "Fortalecemos estilos de gestión, motivación y liderazgo para construir equipos más comprometidos y resilientes.",
  },
  {
    icon: Monitor,
    title: "Gestión con TICs",
    desc: "Incorporamos herramientas digitales para ordenar información, agilizar procesos y mejorar la productividad sin perder realismo operativo.",
  },
  {
    icon: TrendingUp,
    title: "Propuestas de mejora medibles",
    desc: "Traducimos el diagnóstico en acciones concretas, indicadores claros y prioridades de implementación con impacto real.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24 md:py-32 bg-primary">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-glow text-sm font-semibold tracking-widest uppercase mb-3">
            Nuestros servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Soluciones para cada dimensión del ecosistema
          </h2>
          <p className="text-primary-foreground/65 text-lg">
            Un portfolio completo de servicios de consultoría diseñados para
            abordar los desafíos organizacionales desde múltiples perspectivas
            y con resultados concretos.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <div className="group rounded-xl p-7 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-glow/35 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-glow/15 flex items-center justify-center mb-5 group-hover:bg-blue-glow transition-colors">
                <s.icon className="text-blue-glow group-hover:text-primary transition-colors" size={24} />
              </div>
              <h3 className="font-sans text-lg font-bold text-primary-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
