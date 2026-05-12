import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import heroBg from "@/assets/hero-bg-new.jpg"
import float1  from "@/assets/float-1.jpg"
import float2  from "@/assets/float-2.jpg"
import float3  from "@/assets/float-3.jpg"
import float4  from "@/assets/float-4.jpg"
import float5  from "@/assets/float-5.jpg"

/* ── 5 posiciones fijas en la sección ──────────────────────────── */
// Las posiciones derechas usan right-safe: foto ancho ~280px → left máx ≈ 58% en 768px
const SLOTS = [
  { top: "7%",  left: "2%"  },  // top-left
  { top: "5%",  left: "58%" },  // top-right
  { top: "34%", left: "1%"  },  // mid-left
  { top: "63%", left: "2%"  },  // bottom-left
  { top: "62%", left: "58%" },  // bottom-right
]

/* ── Definición de cada foto: src + tamaño + tiempo de bob ──────── */
const PHOTOS = [
  { src: float1, cls: "w-64 md:w-80 aspect-video",  bobDur: 5.2, bobDelay: 0   },
  { src: float2, cls: "w-64 md:w-80 aspect-video",  bobDur: 6.0, bobDelay: 0.8 },
  { src: float3, cls: "w-64 md:w-80 aspect-video",  bobDur: 4.8, bobDelay: 1.6 },
  { src: float4, cls: "w-64 md:w-80 aspect-video",  bobDur: 5.6, bobDelay: 2.4 },
  { src: float5, cls: "w-40 md:w-56 aspect-[3/4]",  bobDur: 4.4, bobDelay: 3.2 },
]

const HeroSection = () => {
  // assignments[i] = índice de slot donde está la foto i
  const [assignments, setAssignments] = useState([0, 1, 2, 3, 4])
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const scheduleSwap = () => {
      const delay = 2000 + Math.random() * 1500  // 2 – 3.5 s

      timerRef.current = setTimeout(() => {
        setAssignments((prev) => {
          const next = [...prev]
          // Elegir dos fotos distintas al azar
          const a = Math.floor(Math.random() * 5)
          let b = Math.floor(Math.random() * 4)
          if (b >= a) b++
          ;[next[a], next[b]] = [next[b], next[a]]
          return next
        })
        scheduleSwap()
      }, delay)
    }

    scheduleSwap()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

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

      {/* Fotos — z-0, van DETRÁS del título cuando cruzan el centro */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {PHOTOS.map((photo, i) => {
          const slot = SLOTS[assignments[i]]
          return (
            <motion.div
              key={i}                                   // key fijo = sin re-mount
              className="absolute"
              initial={{ top: SLOTS[i].top, left: SLOTS[i].left }}
              animate={{ top: slot.top, left: slot.left }}
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src={photo.src}
                alt=""
                className={`object-cover rounded-2xl shadow-2xl ring-1 ring-white/10 opacity-80 ${photo.cls}`}
                style={{
                  animation: `float-bob ${photo.bobDur}s ${photo.bobDelay}s ease-in-out infinite`,
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Contenido principal — z-10, siempre delante */}
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
