import { motion } from "motion/react"
import heroBg from "@/assets/hero-bg-new.jpg"
import float1  from "@/assets/float-1.jpg"
import float2  from "@/assets/float-2.jpg"
import float3  from "@/assets/float-3.jpg"
import float4  from "@/assets/float-4.jpg"
import float5  from "@/assets/float-5.jpg"
import Floating, { FloatingElement } from "@/components/Floating"

/* Foto flotante con animación autónoma de subida y bajada */
const FloatImg = ({
  src,
  className,
  duration = 5,
  delay = 0,
  amplitude = 14,
}: {
  src: string
  className: string
  duration?: number
  delay?: number
  amplitude?: number
}) => (
  <motion.img
    src={src}
    alt=""
    className={className}
    animate={{ y: [0, -amplitude, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
)

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero opacity-85" />
    </div>

    {/* Floating photos — sensitivity baja para que no salgan del margen */}
    <Floating sensitivity={0.6} easingFactor={0.05}>

      {/* 1 — superior izquierda */}
      <FloatingElement depth={1.2} className="top-[6%] left-[3%]">
        <FloatImg
          src={float1}
          duration={5.5} delay={0} amplitude={12}
          className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-2xl opacity-85 ring-1 ring-white/10"
        />
      </FloatingElement>

      {/* 2 — superior derecha */}
      <FloatingElement depth={1.8} className="top-[5%] right-[3%]">
        <FloatImg
          src={float2}
          duration={6} delay={1} amplitude={16}
          className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-2xl opacity-80 ring-1 ring-white/10"
        />
      </FloatingElement>

      {/* 3 — inferior derecha */}
      <FloatingElement depth={0.8} className="bottom-[7%] right-[3%]">
        <FloatImg
          src={float3}
          duration={5} delay={0.5} amplitude={10}
          className="w-72 md:w-[22rem] aspect-video object-cover rounded-2xl shadow-2xl opacity-75 ring-1 ring-white/10"
        />
      </FloatingElement>

      {/* 4 — inferior izquierda */}
      <FloatingElement depth={1.5} className="bottom-[7%] left-[3%]">
        <FloatImg
          src={float4}
          duration={6.5} delay={1.5} amplitude={14}
          className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-2xl opacity-80 ring-1 ring-white/10"
        />
      </FloatingElement>

      {/* 5 — centro izquierda, formato vertical */}
      <FloatingElement depth={1.2} className="top-[28%] left-[2%]">
        <FloatImg
          src={float5}
          duration={4.5} delay={2} amplitude={18}
          className="w-52 md:w-64 aspect-[3/4] object-cover rounded-2xl shadow-2xl opacity-75 ring-1 ring-white/10"
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

export default HeroSection
