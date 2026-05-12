import heroBg from "@/assets/amazonas-bg.webp"
import Floating, { FloatingElement } from "@/components/Floating"

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-85" />
      </div>

      {/* Floating decorative elements */}
      <Floating sensitivity={1} easingFactor={0.04}>
        {/* Orbe grande — fondo, se mueve poco */}
        <FloatingElement depth={0.5} className="top-[10%] left-[5%]">
          <div className="w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />
        </FloatingElement>

        {/* Orbe azul medio */}
        <FloatingElement depth={1.5} className="top-[20%] right-[8%]">
          <div className="w-40 h-40 rounded-full bg-blue-400/15 blur-2xl" />
        </FloatingElement>

        {/* Anillo decorativo */}
        <FloatingElement depth={2} className="bottom-[25%] left-[10%]">
          <div className="w-24 h-24 rounded-full border border-emerald-400/20" />
        </FloatingElement>

        {/* Punto brillante */}
        <FloatingElement depth={3} className="top-[35%] left-[20%]">
          <div className="w-3 h-3 rounded-full bg-emerald-300/60 shadow-[0_0_12px_3px_rgba(110,231,183,0.4)]" />
        </FloatingElement>

        {/* Punto azul */}
        <FloatingElement depth={2.5} className="top-[55%] right-[18%]">
          <div className="w-2 h-2 rounded-full bg-blue-300/70 shadow-[0_0_10px_3px_rgba(147,197,253,0.4)]" />
        </FloatingElement>

        {/* Línea diagonal sutil */}
        <FloatingElement depth={1} className="bottom-[30%] right-[12%]">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent rotate-45" />
        </FloatingElement>

        {/* Orbe verde pequeño */}
        <FloatingElement depth={2} className="top-[65%] left-[30%]">
          <div className="w-16 h-16 rounded-full bg-emerald-400/10 blur-xl" />
        </FloatingElement>
      </Floating>

      {/* Main content — estático, centrado */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <p className="text-blue-glow text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6">
          Innovare S.A. — Consultoría Ecosistémica
        </p>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-primary-foreground leading-tight max-w-3xl">
          Impulsamos empresas como la naturaleza impulsa vida.
        </h1>

        <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mt-8 mb-10 max-w-xl">
          Estrategia, cultura, procesos y tecnología trabajando como un
          ecosistema: conectado, adaptable y preparado para crecer.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#nosotros"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-accent text-accent-foreground text-sm font-semibold shadow-btn-accent hover:brightness-110 transition-all"
            onClick={(e) => {
              e.preventDefault()
              import("@/lib/smoothScroll").then((m) => m.smoothScrollTo("#nosotros"))
            }}
          >
            Conocer nuestro enfoque
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-primary-foreground/25 text-primary-foreground text-sm font-semibold hover:bg-primary-foreground/10 transition-all"
            onClick={(e) => {
              e.preventDefault()
              import("@/lib/smoothScroll").then((m) => m.smoothScrollTo("#contacto"))
            }}
          >
            Solicitar diagnóstico
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export default HeroSection
