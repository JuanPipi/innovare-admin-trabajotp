import heroBg from "@/assets/hero-bg.jpg";
import SplitText from "@/components/SplitText";
import ScrollReveal from "@/components/ScrollReveal";

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

    <div className="relative container mx-auto px-4 lg:px-8 py-28 md:py-36 lg:py-44">
      <div className="max-w-2xl">
        <ScrollReveal>
          <p className="text-blue-glow text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Innovare S.A. — Consultoría Organizacional
          </p>
        </ScrollReveal>

        <div className="mb-8 text-primary-foreground">
          <SplitText
            text="Transformamos empresas con estrategia, liderazgo e innovación."
            tag="h1"
            splitType="chars"
            delay={28}
            duration={1.1}
            textAlign="left"
            className="font-serif text-3xl sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem] font-bold leading-[1.15]"
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        <SplitText
          text="Acompañamos a organizaciones en el análisis y mejora integral de su gestión: estrategia, estructura, cultura, procesos e innovación para potenciar tus proyectos, sin límites."
          tag="p"
          splitType="words, chars"
          delay={12}
          duration={0.9}
          textAlign="left"
          className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-xl mb-12"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
        />

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-3">
            <a
              href="#servicios"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-accent text-accent-foreground text-sm font-semibold shadow-btn-accent hover:brightness-110 transition-all"
              onClick={(e) => { e.preventDefault(); import("@/lib/smoothScroll").then(m => m.smoothScrollTo("#servicios")); }}
            >
              Conocer servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary-foreground/25 text-primary-foreground text-sm font-semibold hover:bg-primary-foreground/8 transition-all"
              onClick={(e) => { e.preventDefault(); import("@/lib/smoothScroll").then(m => m.smoothScrollTo("#contacto")); }}
            >
              Contactanos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
