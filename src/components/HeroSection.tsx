import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    {/* Background image + overlay */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero opacity-85" />
    </div>

    <div className="relative container mx-auto px-4 lg:px-8 py-32 md:py-40">
      <div className="max-w-3xl">
        <p className="text-blue-glow text-sm md:text-base font-semibold tracking-widest uppercase mb-4 animate-fade-up">
          Innovare S.A. — Consultoría Organizacional
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay-1">
          Transformamos tu empresa con{" "}
          <span className="text-gradient">estrategia, liderazgo e innovación.</span>
        </h1>
        <p className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-up-delay-2">
          Acompañamos a organizaciones en el análisis y mejora integral de su
          gestión: estrategia, estructura, cultura, procesos e innovación para
          potenciar tus proyectos, sin límites.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
          <a
            href="#servicios"
            className="inline-flex items-center px-7 py-3.5 rounded-lg bg-blue-accent text-accent-foreground font-semibold shadow-btn-accent hover:brightness-110 transition-all"
          >
            Conocer servicios
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center px-7 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
          >
            Contactanos
          </a>
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
