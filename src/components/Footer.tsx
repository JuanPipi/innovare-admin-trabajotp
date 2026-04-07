import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-blue-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg font-serif">I</span>
            </div>
            <span className="text-xl font-serif font-bold">Innovare</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Consultoría organizacional especializada en estrategia, liderazgo e
            innovación. Acompañamos a las empresas en su camino hacia la
            excelencia.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-sans font-semibold text-sm tracking-wide uppercase mb-4 text-primary-foreground/80">
            Links rápidos
          </h4>
          <ul className="space-y-2">
            {["Inicio", "Nosotros", "Servicios", "Metodología", "Beneficios", "Contacto"].map(
              (l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace("í", "i")}`}
                    className="text-primary-foreground/60 text-sm hover:text-blue-accent transition-colors"
                  >
                    {l}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-sans font-semibold text-sm tracking-wide uppercase mb-4 text-primary-foreground/80">
            Seguinos
          </h4>
          <div className="flex gap-3">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-blue-accent transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-primary-foreground/40 text-xs">
          © 2025 Innovare S.A. Todos los derechos reservados.
        </p>
        <p className="text-primary-foreground/40 text-xs">
          Consultoría Organizacional — Buenos Aires, Argentina
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
