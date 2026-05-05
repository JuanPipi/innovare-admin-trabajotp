import { Eye, Target, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: Target,
    tag: "Misión",
    title: "Cultivar organizaciones eficientes",
    desc: "Acompañar a empresas en el análisis y mejora de su gestión, integrando estrategia, personas, procesos y tecnología para que crezcan de forma sostenible.",
  },
  {
    icon: Eye,
    tag: "Visión",
    title: "Referencia en consultoría ecosistémica",
    desc: "Ser reconocidos por diseñar soluciones organizacionales innovadoras, sostenibles y adaptadas a la realidad de cada empresa.",
  },
  {
    icon: Heart,
    tag: "Valores",
    title: "Nuestros principios",
    desc: "Sustentabilidad, innovación, compromiso, colaboración, transparencia y orientación a resultados.",
  },
];

const AboutSection = () => (
  <section id="nosotros" className="py-24 md:py-32 bg-hero">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-glow text-sm font-semibold tracking-widest uppercase mb-3">
            Sobre nosotros
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Crecimiento con raíces sólidas
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            En <span className="font-semibold text-primary-foreground">Innovare</span>{" "}
            entendemos a cada organización como un ecosistema: personas, procesos,
            cultura, estructura y tecnología interactúan entre sí. Nuestro trabajo
            consiste en diagnosticar esas conexiones, detectar desequilibrios y
            diseñar soluciones que permitan crecer de forma sostenible.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <ScrollReveal key={c.tag} delay={i * 150}>
            <div className="group rounded-xl p-8 h-full flex flex-col border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-blue-glow/40 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-glow/15 flex items-center justify-center group-hover:bg-blue-glow/25 transition-colors shrink-0">
                  <c.icon className="text-blue-glow" size={24} />
                </div>
                <span className="text-blue-glow text-xs font-bold tracking-widest uppercase">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">{c.title}</h3>
              <p className="text-primary-foreground/65 leading-relaxed">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
