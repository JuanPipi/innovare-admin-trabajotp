import { useEffect, useState } from "react"
import heroBg  from "@/assets/hero-bg-new.jpg"
import float1  from "@/assets/float-1.jpg"
import float2  from "@/assets/float-2.jpg"
import float3  from "@/assets/float-3.jpg"
import float4  from "@/assets/float-4.jpg"
import float5  from "@/assets/float-5.jpg"

const SLIDES = [heroBg, float1, float2, float3, float4, float5]
const INTERVAL = 5000 // ms entre slides

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState<number | null>(null)
  const [fading, setFading]   = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % SLIDES.length
        setPrev(c)
        setFading(true)
        return next
      })
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  // Una vez termina la transición, limpiamos el prev
  useEffect(() => {
    if (!fading) return
    const t = setTimeout(() => {
      setPrev(null)
      setFading(false)
    }, 1000)
    return () => clearTimeout(t)
  }, [fading, current])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Carrusel de fondo */}
      <div className="absolute inset-0">
        {/* Slide saliente — se queda quieto mientras el nuevo aparece encima */}
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={SLIDES[prev]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Slide entrante — hace fade-in */}
        <img
          key={`curr-${current}`}
          src={SLIDES[current]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            animation: "hero-fade-in 1s ease forwards",
          }}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-hero opacity-80" />
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); setFading(true) }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Contenido principal */}
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
