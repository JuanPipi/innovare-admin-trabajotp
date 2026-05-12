import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/amazonas-bg.webp";

const TITLE = "Impulsamos empresas como la naturaleza impulsa vida.";
const words = TITLE.split(" ");
const half = Math.ceil(words.length / 2);
const LEFT_TEXT  = words.slice(0, half).join(" ");
const RIGHT_TEXT = words.slice(half).join(" ");

const ANIM_DURATION = 1400; // ms

const HeroSection = () => {
  const [progress, setProgress] = useState(0);   // 0 → 1
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const rafRef = useRef<number | null>(null);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-animate on mount
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / ANIM_DURATION, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setShowContent(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // How far each half slides (in vw)
  const slide = progress * (isMobile ? 22 : 30);
  const contentOpacity = showContent ? 1 : 0;

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

      {/* Content */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-screen px-4">

        {/* Badge */}
        <p
          className="text-blue-glow text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-center"
          style={{ opacity: Math.max(0, 1 - progress * 2.5), transition: "none" }}
        >
          Innovare S.A. — Consultoría Ecosistémica
        </p>

        {/* Split title */}
        <div className="flex flex-col items-center text-center gap-1 overflow-hidden w-full">
          <h1
            className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-primary-foreground leading-tight"
            style={{ transform: `translateX(-${slide}vw)`, transition: "none" }}
          >
            {LEFT_TEXT}
          </h1>
          <h1
            className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-primary-foreground leading-tight"
            style={{ transform: `translateX(${slide}vw)`, transition: "none" }}
          >
            {RIGHT_TEXT}
          </h1>
        </div>

        {/* Subtitle + buttons — appear once fully open */}
        <div
          className="flex flex-col items-center text-center mt-10 max-w-xl"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${showContent ? 0 : 20}px)`,
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10">
            Estrategia, cultura, procesos y tecnología trabajando como un
            ecosistema: conectado, adaptable y preparado para crecer.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#nosotros"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-accent text-accent-foreground text-sm font-semibold shadow-btn-accent hover:brightness-110 transition-all"
              onClick={(e) => {
                e.preventDefault();
                import("@/lib/smoothScroll").then((m) =>
                  m.smoothScrollTo("#nosotros")
                );
              }}
            >
              Conocer nuestro enfoque
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary-foreground/25 text-primary-foreground text-sm font-semibold hover:bg-primary-foreground/10 transition-all"
              onClick={(e) => {
                e.preventDefault();
                import("@/lib/smoothScroll").then((m) =>
                  m.smoothScrollTo("#contacto")
                );
              }}
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade — funde hacia la primera sección */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
