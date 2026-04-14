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
    title: "Diagnóstico organizacional",
    desc: "Evaluamos la situación actual de tu organización para identificar fortalezas, debilidades y oportunidades de mejora.",
  },
  {
    icon: Target,
    title: "Consultoría estratégica",
    desc: "Diseñamos planes estratégicos alineados con tu visión, misión y objetivos para potenciar el crecimiento sostenible.",
  },
  {
    icon: GitBranch,
    title: "Análisis de estructura y procesos",
    desc: "Optimizamos la arquitectura organizacional y los flujos de trabajo para ganar eficiencia y agilidad operativa.",
  },
  {
    icon: Users,
    title: "Cultura organizacional y liderazgo",
    desc: "Fortalecemos la cultura interna y desarrollamos capacidades de liderazgo para equipos de alto rendimiento.",
  },
  {
    icon: Monitor,
    title: "Mejora de gestión con TICs",
    desc: "Incorporamos tecnologías de la información para modernizar procesos, mejorar la toma de decisiones y aumentar la productividad.",
  },
  {
    icon: TrendingUp,
    title: "Propuestas de optimización empresarial",
    desc: "Elaboramos propuestas concretas y accionables para optimizar recursos, reducir costos y maximizar resultados.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24 md:py-32 bg-muted/50">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Nuestros servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Soluciones integrales para tu organización
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un portfolio completo de servicios de consultoría diseñados
            para abordar los desafíos organizacionales desde múltiples
            perspectivas.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
          <div
            key={s.title}
            className="group bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-blue-accent/30 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-accent/10 flex items-center justify-center mb-5 group-hover:bg-blue-accent group-hover:text-accent-foreground transition-colors">
              <s.icon className="text-blue-accent group-hover:text-accent-foreground transition-colors" size={24} />
            </div>
            <h3 className="font-sans text-lg font-bold text-primary mb-2">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
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
