import { BarChart3, UserCheck, Sparkles, Target } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Análisis integral",
    desc: "Abordamos cada proyecto con una visión 360° que contempla todas las variables críticas de la organización.",
  },
  {
    icon: UserCheck,
    title: "Enfoque personalizado",
    desc: "Cada plan de acción se diseña a medida, considerando el contexto, la cultura y los recursos disponibles.",
  },
  {
    icon: Sparkles,
    title: "Mirada innovadora",
    desc: "Incorporamos las últimas tendencias en gestión, tecnología y liderazgo para generar soluciones de vanguardia.",
  },
  {
    icon: Target,
    title: "Orientación a resultados",
    desc: "Nuestro compromiso es generar impacto tangible con indicadores claros y metas alcanzables.",
  },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
          ¿Por qué elegirnos?
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Nuestros diferenciales
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-accent/10 flex items-center justify-center mx-auto mb-5">
              <b.icon className="text-blue-accent" size={30} />
            </div>
            <h3 className="font-sans text-lg font-bold text-primary mb-2">
              {b.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
