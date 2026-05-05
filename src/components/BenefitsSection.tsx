import { Globe, Sparkles, BarChart3, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: Globe,
    title: "Mirada ecosistémica",
    desc: "No analizamos áreas aisladas: vemos cómo cada decisión afecta al conjunto y diseñamos soluciones que fortalecen el sistema completo.",
  },
  {
    icon: Sparkles,
    title: "Soluciones a medida",
    desc: "Diseñamos propuestas según el contexto, recursos y cultura de cada organización, sin recetas genéricas.",
  },
  {
    icon: BarChart3,
    title: "Innovación aplicable",
    desc: "Incorporamos tecnología y herramientas de gestión actuales sin perder realismo operativo ni adaptabilidad.",
  },
  {
    icon: Target,
    title: "Resultados medibles",
    desc: "Priorizamos acciones concretas con indicadores claros de avance e impacto, para que el progreso sea visible desde el día uno.",
  },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
            ¿Por qué elegirnos?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Por qué nuestro enfoque genera impacto
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 120}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-accent/10 flex items-center justify-center mx-auto mb-5">
                <b.icon className="text-blue-accent" size={30} />
              </div>
              <h3 className="font-sans text-lg font-bold text-primary mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
