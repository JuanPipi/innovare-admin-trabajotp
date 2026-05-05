import { useState } from "react";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    setForm({ nombre: "", empresa: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-blue-glow text-sm font-semibold tracking-widest uppercase mb-3">
              Contacto
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Conversemos sobre tu organización
            </h2>
            <p className="text-primary-foreground/65 text-lg">
              Contanos sobre tu empresa y te contactaremos para coordinar un
              primer diagnóstico sin cargo.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 rounded-xl p-8 border border-white/10 bg-white/5 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">Nombre</label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-blue-glow/40 transition-shadow"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">Empresa</label>
                  <input
                    type="text"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-blue-glow/40 transition-shadow"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-blue-glow/40 transition-shadow"
                  placeholder="correo@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-foreground/80 mb-1.5">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-blue-glow/40 transition-shadow resize-none"
                  placeholder="Contanos sobre tu organización o consulta..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-blue-accent text-accent-foreground font-semibold shadow-btn-accent hover:brightness-110 transition-all"
              >
                Enviar mensaje
              </button>
            </form>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {[
                { icon: MapPin, label: "Dirección", value: "Av. Corrientes 1250, Buenos Aires, Argentina" },
                { icon: Mail, label: "Email", value: "contacto@innovareconsultora.com" },
                { icon: Phone, label: "Teléfono", value: "+54 11 5555 1234" },
                { icon: Globe, label: "Sitio web", value: "www.innovareconsultora.com" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-blue-glow/15 flex items-center justify-center shrink-0">
                    <item.icon className="text-blue-glow" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">{item.label}</p>
                    <p className="text-primary-foreground/55 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
