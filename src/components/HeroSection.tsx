import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const TITLE = "Impulsamos empresas como la naturaleza impulsa vida.";
const words = TITLE.split(" ");
const half = Math.ceil(words.length / 2);
const LEFT_TEXT  = words.slice(0, half).join(" ");   // "Impulsamos empresas como la"
const RIGHT_TEXT = words.slice(half).join(" ");       // "naturaleza impulsa vida."

const HeroSection = () => {
  const [progress, setProgress]           = useState(0);   // 0 → 1
  const [unlocked, setUnlocked]           = useState(false);
  const [showContent, setShowContent]     = useState(false);
  const [touchStart, setTouchStart]       = useState(0);
  const [isMobile, setIsMobile]           = useState(false);

  const progressRef     = useRef(0);
  const unlockedRef     = useRef(false);
  const hasScrolledAway = useRef(false); // true después de bajar al menos 50px

  // Keep refs in sync so event handlers always read latest value
  useEffect(() => { progressRef.current = progress; }, [progress]);
  useEffect(() => { unlockedRef.current = unlocked; }, [unlocked]);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll / touch handling
  useEffect(() => {
    const advance = (delta: number) => {
      const step = delta * (isMobile ? 0.006 : 0.0009);
      const next = Math.min(Math.max(progressRef.current + step, 0), 1);
      progressRef.current = next;
      setProgress(next);

      if (next >= 1 && !unlockedRef.current) {
        unlockedRef.current = true;
        hasScrolledAway.current = false; // reset: aún no bajó
        setUnlocked(true);
        setShowContent(true);
      }
      if (next < 0.75) setShowContent(false);
    };

    const onWheel = (e: WheelEvent) => {
      if (unlockedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        reset();
        e.preventDefault();
        return;
      }
      if (!unlockedRef.current) {
        e.preventDefault();
        advance(e.deltaY);
      }
    };

    const onTouchStart = (e: TouchEvent) => setTouchStart(e.touches[0].clientY);

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStart) return;
      const dy = touchStart - e.touches[0].clientY;
      if (unlockedRef.current && dy < -20 && window.scrollY <= 5) {
        reset();
        e.preventDefault();
        return;
      }
      if (!unlockedRef.current) {
        e.preventDefault();
        advance(dy);
        setTouchStart(e.touches[0].clientY);
      }
    };

    const reset = () => {
      unlockedRef.current     = false;
      hasScrolledAway.current = false;
      progressRef.current     = 0;
      setUnlocked(false);
      setShowContent(false);
      setProgress(0);
    };

    const onScroll = () => {
      if (!unlockedRef.current) {
        window.scrollTo(0, 0);
        return;
      }
      // Marcar que el usuario ya bajó la página
      if (window.scrollY > 50) hasScrolledAway.current = true;
      // Si volvió al top después de haber bajado → reiniciar animación
      if (hasScrolledAway.current && window.scrollY <= 5) reset();
    };

    window.addEventListener("wheel",      onWheel,      { passive: false });
    window.addEventListener("scroll",     onScroll);
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove",  onTouchMove,  { passive: false });

    return () => {
      window.removeEventListener("wheel",      onWheel);
      window.removeEventListener("scroll",     onScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove",  onTouchMove);
    };
  }, [isMobile, touchStart]);

  // How far each half slides (in vw)
  const slide = progress * (isMobile ? 22 : 30);
  // Subtitle/badge fade in once content is shown
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

        {/* Badge — fades out as curtain opens */}
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

        {/* Scroll hint — fades out as user scrolls */}
        <p
          className="text-primary-foreground/50 text-xs tracking-widest uppercase mt-8"
          style={{ opacity: Math.max(0, 1 - progress * 3), transition: "none" }}
        >
          ↓ Scrolleá para descubrir
        </p>

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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
