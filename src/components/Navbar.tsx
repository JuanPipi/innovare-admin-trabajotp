import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg font-serif">I</span>
          </div>
          <span
            className={`text-xl font-serif font-bold tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Innovare
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-blue-accent ${
                  scrolled ? "text-foreground" : "text-primary-foreground/80"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-accent text-accent-foreground text-sm font-semibold shadow-btn-accent hover:brightness-110 transition-all"
        >
          Solicitar asesoría
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-up">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-3 text-foreground text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block text-center py-3 rounded-lg bg-blue-accent text-accent-foreground text-sm font-semibold"
              >
                Solicitar asesoría
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
