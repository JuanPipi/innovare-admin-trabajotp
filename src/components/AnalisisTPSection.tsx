import ScrollReveal from "./ScrollReveal";
import {
  LayoutGrid,
  UserCircle2,
  Layers3,
  Sprout,
  BookOpen,
  Target,
  CheckCircle2,
  Compass,
  Users,
  BarChart2,
} from "lucide-react";

/* ── Placeholder visual ─────────────────────────────────────────── */
const Placeholder = ({ label = "— Por completar —", minH = "min-h-[96px]" }: { label?: string; minH?: string }) => (
  <div
    className={`rounded-lg border-2 border-dashed border-border bg-muted/30 ${minH} flex items-center justify-center px-4`}
  >
    <span className="text-muted-foreground/60 text-sm italic select-none">{label}</span>
  </div>
);

/* ── Wrapper de cada "capítulo" ─────────────────────────────────── */
const Chapter = ({
  num,
  icon: Icon,
  tag,
  title,
  children,
  alt = false,
}: {
  num: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <ScrollReveal>
    <div
      className={`rounded-2xl border border-border shadow-card overflow-hidden ${
        alt ? "bg-muted/40" : "bg-card"
      }`}
    >
      {/* Header del capítulo */}
      <div className="flex items-start gap-5 p-6 md:p-8 border-b border-border">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-accent/10 flex items-center justify-center">
          <Icon className="text-blue-accent" size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-bold text-blue-accent font-sans text-2xl leading-none">
              {num}
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              {tag}
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary leading-snug">
            {title}
          </h3>
        </div>
      </div>
      {/* Cuerpo */}
      <div className="p-6 md:p-8">{children}</div>
    </div>
  </ScrollReveal>
);

/* ── Componente principal ───────────────────────────────────────── */
const AnalisisTPSection = () => (
  <section id="analisis" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">

      {/* Encabezado de sección */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Trabajo Práctico
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Análisis Organizacional
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estudio integral de <span className="font-semibold text-foreground">Innovare S.A.</span> desde
            múltiples perspectivas teóricas de la administración.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-6 max-w-5xl mx-auto">

        {/* ── 1. Funciones de Administración ──────────────────── */}
        <Chapter
          num="01"
          icon={LayoutGrid}
          tag="Funciones de Administración"
          title="Cómo se llevan a cabo las funciones administrativas"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Planeación", icon: Compass },
              { label: "Organización", icon: LayoutGrid },
              { label: "Dirección", icon: UserCircle2 },
              { label: "Control", icon: CheckCircle2 },
            ].map(({ label, icon: SubIcon }) => (
              <div key={label} className="rounded-xl border border-border bg-background p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-accent/10 flex items-center justify-center shrink-0">
                    <SubIcon className="text-blue-accent" size={16} />
                  </div>
                  <span className="font-sans font-bold text-primary text-sm">{label}</span>
                </div>
                <Placeholder minH="min-h-[72px]" />
              </div>
            ))}
          </div>
        </Chapter>

        {/* ── 2. Roles Gerenciales de Mintzberg ───────────────── */}
        <Chapter
          num="02"
          icon={UserCircle2}
          tag="Roles Gerenciales de Mintzberg"
          title="Análisis del CEO / Gerente de área"
          alt
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { group: "Interpersonales", roles: ["Figura directiva", "Líder", "Enlace"] },
              { group: "Informativos",    roles: ["Monitor", "Difusor", "Portavoz"] },
              {
                group: "Decisorios",
                roles: ["Emprendedor", "Gestor de conflictos", "Asignador de recursos", "Negociador"],
              },
            ].map(({ group, roles }) => (
              <div key={group} className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-accent mb-3">
                  {group}
                </p>
                <ul className="space-y-2">
                  {roles.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-accent/40 shrink-0" />
                      <span className="text-muted-foreground text-xs">{r}</span>
                    </li>
                  ))}
                </ul>
                <Placeholder label="— Aplicación al gerente —" minH="min-h-[80px]" />
              </div>
            ))}
          </div>
        </Chapter>

        {/* ── 3. Modelo Tridimensional (Empresa Familiar) ─────── */}
        <Chapter
          num="03"
          icon={Layers3}
          tag="Empresa Familiar"
          title="Modelo Tridimensional de Desarrollo"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { axis: "Eje Empresa",  stages: ["Arranque", "Expansión / Formalización", "Madurez"] },
              { axis: "Eje Familia",  stages: ["Joven familia empresaria", "Entrada a la empresa", "Traspaso"] },
              { axis: "Eje Propiedad", stages: ["Propietario controlador", "Sociedad de hermanos", "Consorcio de primos"] },
            ].map(({ axis, stages }) => (
              <div key={axis} className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-accent mb-3">
                  {axis}
                </p>
                <ul className="space-y-1 mb-3">
                  {stages.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-accent/30 shrink-0" />
                      <span className="text-muted-foreground text-xs">{s}</span>
                    </li>
                  ))}
                </ul>
                <Placeholder label="— Etapa identificada —" minH="min-h-[64px]" />
              </div>
            ))}
          </div>
        </Chapter>

        {/* ── 4. RSE / Empresa B ──────────────────────────────── */}
        <Chapter
          num="04"
          icon={Sprout}
          tag="Responsabilidad Social"
          title="RSE, Sensibilidad Social u Obligación Social / Empresa B"
          alt
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {[
              "Obligación Social",
              "Sensibilidad Social",
              "RSE Plena",
              "Empresa B",
            ].map((lvl) => (
              <div
                key={lvl}
                className="rounded-lg border border-border bg-card px-4 py-3 text-center"
              >
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                  {lvl}
                </span>
              </div>
            ))}
          </div>
          <Placeholder label="— Determinación y justificación —" minH="min-h-[120px]" />
        </Chapter>

        {/* ── 5. Escuelas de Administración ───────────────────── */}
        <Chapter
          num="05"
          icon={BookOpen}
          tag="Escuelas de Administración"
          title="Justificación de conceptos por Escuela"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Administración Científica (Taylor)",
              "Administración Clásica (Fayol)",
              "Relaciones Humanas (Mayo / Maslow)",
              "Escuela Sistémica / Contingencial",
            ].map((school) => (
              <div key={school} className="rounded-xl border border-border bg-background p-5">
                <p className="font-sans font-semibold text-primary text-sm mb-3">{school}</p>
                <Placeholder minH="min-h-[72px]" />
              </div>
            ))}
          </div>
        </Chapter>

        {/* ── 6. Misión ───────────────────────────────────────── */}
        <Chapter
          num="06"
          icon={Target}
          tag="Definir el Fin"
          title="Análisis y reformulación de la Misión"
          alt
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                Misión actual
              </p>
              <Placeholder label="— Misión según la empresa —" minH="min-h-[100px]" />
            </div>
            <div className="rounded-xl border-2 border-blue-accent/40 bg-blue-accent/5 p-5">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-accent mb-3">
                Misión reformulada
              </p>
              <Placeholder label="— Nueva misión propuesta —" minH="min-h-[100px]" />
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-background p-5">
            <p className="font-sans font-semibold text-primary text-sm mb-3">
              Análisis y justificación
            </p>
            <Placeholder minH="min-h-[80px]" />
          </div>
        </Chapter>

      </div>
    </div>
  </section>
);

export default AnalisisTPSection;
