import heroBg   from "@/assets/hero-bg-new.jpg"
import float1   from "@/assets/float-1.jpg"
import float2   from "@/assets/float-2.jpg"
import float3   from "@/assets/float-3.jpg"
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

      {/* Floating photo elements */}
      <Floating sensitivity={1} easingFactor={0.04}>
        {/* Imagen 1 — superior izquierda */}
        <FloatingElement depth={1.5} className="top-[8%] left-[3%]">
          <img
            src={float1}
            alt=""
            className="w-48 md:w-64 aspect-video object-cover rounded-xl shadow-2xl opacity-80 ring-1 ring-white/10"
          />
        </FloatingElement>

        {/* Imagen 2 — superior derecha */}
        <FloatingElement depth={2.5} className="top-[5%] right-[4%]">
          <img
            src={float2}
            alt=""
            className="w-44 md:w-60 aspect-video object-cover rounded-xl shadow-2xl opacity-75 ring-1 ring-white/10"
          />
        </FloatingElement>

        {/* Imagen 3 — inferior derecha */}
        <FloatingElement depth={1} className="bottom-[12%] right-[5%]">
          <img
            src={float3}
            alt=""
            className="w-48 md:w-72 aspect-video object-cover rounded-xl shadow-2xl opacity-70 ring-1 ring-white/10"
          />
        </FloatingElement>
      </Floating>

      {/* Main content */}
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
