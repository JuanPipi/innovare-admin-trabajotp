import ctaBg from "@/assets/cta-bg.jpg";
import ScrollReveal from "./ScrollReveal";

const CtaBanner = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={ctaBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero opacity-90" />
    </div>
    <div className="relative container mx-auto px-4 lg:px-8 text-center">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
        Impulsá el crecimiento de tu organización con una consultoría estratégica
        pensada para tus desafíos reales.
      </h2>
      <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
        Potenciamos tus proyectos, sin límites.
      </p>
      <a
        href="#contacto"
        className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-accent text-accent-foreground font-semibold text-lg shadow-btn-accent hover:brightness-110 transition-all"
      >
        Hablemos
      </a>
    </div>
  </section>
);

export default CtaBanner;
