import { useRef } from "react"
import { useAnimationFrame } from "motion/react"
import heroBg from "@/assets/hero-bg-new.jpg"
import float1  from "@/assets/float-1.jpg"
import float2  from "@/assets/float-2.jpg"
import float3  from "@/assets/float-3.jpg"
import float4  from "@/assets/float-4.jpg"
import float5  from "@/assets/float-5.jpg"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"

const PERIOD = 28 // segundos por vuelta completa

const photoDefs = [
  { src: float1, cls: "w-80 md:w-[26rem] aspect-video",  phase: 0,                      depth: 1.0 },
  { src: float2, cls: "w-80 md:w-[26rem] aspect-video",  phase: (2 * Math.PI) / 5,      depth: 1.4 },
  { src: float3, cls: "w-72 md:w-96     aspect-video",   phase: (4 * Math.PI) / 5,      depth: 0.9 },
  { src: float4, cls: "w-80 md:w-[26rem] aspect-video",  phase: (6 * Math.PI) / 5,      depth: 1.2 },
  { src: float5, cls: "w-56 md:w-72     aspect-[3/4]",   phase: (8 * Math.PI) / 5,      depth: 1.0 },
]

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRefs      = useRef<(HTMLImageElement | null)[]>([])
  const mousePos     = useMousePositionRef(containerRef)

  useAnimationFrame((time) => {
    if (!containerRef.current) return
    const { width, height } = containerRef.current.getBoundingClientRect()

    // Ejes de la elipse: 28% ancho × 19% alto del contenedor
    const Ax = width  * 0.28
    const Ay = height * 0.19

    const t = (time / 1000 / PERIOD) * 2 * Math.PI

    photoDefs.forEach((p, i) => {
      const el = imgRefs.current[i]
      if (!el) return

      const angle = t + p.phase

      // Órbita elíptica
      const ox = Ax * Math.cos(angle)
      const oy = Ay * Math.sin(angle)

      // Bob suave encima de la órbita
      const bob = 12 * Math.sin(t * 2.2 + p.phase)

      // Parallax con el mouse
      const mx = mousePos.current.x * p.depth * 0.025
      const my = mousePos.current.y * p.depth * 0.025

      // Centrar la foto en su punto orbital
      el.style.transform = `translate(calc(-50% + ${ox + mx}px), calc(-50% + ${oy + bob + my}px))`
    })
  })

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

      {/* Fotos orbitando — z-0 para ir DETRÁS del título */}
      <div ref={containerRef} className="absolute inset-0 z-0">
        {photoDefs.map((p, i) => (
          <img
            key={i}
            ref={(el) => { imgRefs.current[i] = el }}
            src={p.src}
            alt=""
            className={`absolute top-1/2 left-1/2 will-change-transform object-cover rounded-2xl shadow-2xl ring-1 ring-white/10 opacity-80 ${p.cls}`}
          />
        ))}
      </div>

      {/* Main content — z-10 para ir DELANTE de las fotos */}
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
