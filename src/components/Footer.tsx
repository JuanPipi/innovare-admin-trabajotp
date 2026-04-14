import { Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/consultora_innovare?igsh=MWV1NTV3OTJoNGw4Ng==",
    label: "Instagram",
  },
  { Icon: Twitter, href: "#", label: "X / Twitter" },
];

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center bg-white">
              <img src="/logo.png" alt="Innovare SA" className="w-full h-full object-contain" />
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
            {socialLinks.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
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
