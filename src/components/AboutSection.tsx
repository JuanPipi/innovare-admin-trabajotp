import { Eye, Lightbulb, Settings } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Visión estratégica",
    desc: "Analizamos el panorama completo de tu organización para diseñar estrategias que generen impacto real y sostenible.",
  },
  {
    icon: Lightbulb,
    title: "Innovación aplicada",
    desc: "Incorporamos metodologías modernas y herramientas tecnológicas para transformar procesos y generar ventajas competitivas.",
  },
  {
    icon: Settings,
    title: "Soluciones a medida",
    desc: "Cada organización es única. Diseñamos propuestas adaptadas a tu realidad, tus recursos y tus objetivos.",
  },
];

const AboutSection = () => (
  <section id="nosotros" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Header */}
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

      {/* Value blocks */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-blue-accent/30"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-accent/10 flex items-center justify-center mb-6 group-hover:bg-blue-accent/20 transition-colors">
              <v.icon className="text-blue-accent" size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">
              {v.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
