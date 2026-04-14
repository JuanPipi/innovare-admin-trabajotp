import { Eye, Target, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Target,
    tag: "Misión",
    title: "Concretando sueños",
    desc: "La gran cantidad de obras de la más diversa escala en las que participamos continuamente nos impulsa a superar metas, objetivos y estándares de calidad.",
  },
  {
    icon: Eye,
    tag: "Visión",
    title: "Liderazgo con propósito",
    desc: "Ser una empresa líder en soluciones integrales para la industria, reconocida por su calidad, innovación y compromiso con los más altos estándares.",
  },
  {
    icon: Heart,
    tag: "Valores",
    title: "Nuestros principios",
    desc: null,
  },
];

const AboutSection = () => (
  <section id="nosotros" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Sobre nosotros
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Consultoría con propósito e impacto
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            En <span className="font-semibold text-foreground">Innovare</span>{" "}
            acompañamos a organizaciones en el análisis y mejora de su gestión,
            ayudando a alinear estrategia, cultura, estructura, personas y
            procesos. Nuestro enfoque integral permite identificar oportunidades
            de mejora y diseñar soluciones que impulsen el crecimiento y la
            eficiencia organizacional.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <ScrollReveal key={c.tag} delay={i * 150}>
            <div className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-blue-accent/30 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-accent/10 flex items-center justify-center group-hover:bg-blue-accent/20 transition-colors shrink-0">
                  <c.icon className="text-blue-accent" size={24} />
                </div>
                <span className="text-blue-accent text-xs font-bold tracking-widest uppercase">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{c.title}</h3>
              {c.desc ? (
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              ) : (
                <p className="text-muted-foreground/40 text-sm italic">Próximamente…</p>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
