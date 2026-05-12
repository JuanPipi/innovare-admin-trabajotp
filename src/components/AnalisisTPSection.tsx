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
  Settings2,
  Users,
} from "lucide-react";

/* ── Bloque de texto con etiqueta ───────────────────────────────── */
const Block = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-border bg-background p-5">
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1.5 h-5 rounded-full bg-blue-accent/60 shrink-0" />
      <span className="font-sans font-bold text-primary text-sm">{label}</span>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
  </div>
);

/* ── Wrapper de cada capítulo ───────────────────────────────────── */
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
      <div className="flex items-start gap-5 p-6 md:p-8 border-b border-border">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-accent/10 flex items-center justify-center">
          <Icon className="text-blue-accent" size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-bold text-blue-accent font-sans text-2xl leading-none">{num}</span>
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{tag}</span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary leading-snug">{title}</h3>
        </div>
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  </ScrollReveal>
);

/* ── Componente principal ───────────────────────────────────────── */
const AnalisisTPSection = () => (
  <section id="analisis" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">

      {/* Encabezado */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-blue-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Análisis
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Análisis Organizacional
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estudio integral de{" "}
            <span className="font-semibold text-foreground">Sullair Argentina</span> desde
            múltiples perspectivas teóricas de la administración.
          </p>
          <p className="text-muted-foreground/70 text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Sullair Argentina S.A. es una empresa privada fundada en 1979, dedicada a la
            fabricación, venta, alquiler y servicio técnico de compresores de aire y
            soluciones de energía para industria, construcción, minería, Oil & Gas y más.
            Cuenta con entre 501 y 1.000 empleados y sede en Buenos Aires.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-6 max-w-5xl mx-auto">

        {/* ── 01. Funciones de Administración ─────────────────── */}
        <Chapter
          num="01"
          icon={LayoutGrid}
          tag="Funciones de Administración"
          title="Cómo se llevan a cabo las funciones administrativas en Sullair"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Block label="Planeación">
              Se observa en la anticipación de necesidades de múltiples mercados: industria,
              construcción, minería, energía y Oil & Gas. La empresa proyecta demanda, disponibilidad
              de flota, mantenimiento, cobertura territorial e inversión tecnológica. También evidencia
              planificación de largo plazo en sus políticas de sustentabilidad: medición de huella de
              carbono, energía solar y compensación ambiental.
            </Block>
            <Block label="Organización">
              Combina una estructura funcional y geográfica. Funcional, porque opera con áreas de
              ventas, alquileres, postventa, energía, servicio técnico, logística, compras,
              administración y recursos humanos. Geográfica, porque posee oficinas, bases de
              alquiler y distribuidores en distintas provincias y presencia regional. Esta organización
              le permite atender clientes industriales distribuidos y sostener una operación compleja.
            </Block>
            <Block label="Dirección">
              Se vincula con la conducción de equipos técnicos, comerciales y administrativos orientados
              al cumplimiento de objetivos. Se observa un estilo de gestión apoyado en la mejora
              continua, la orientación al cliente y la innovación. Esto se refleja en sus valores
              institucionales, en programas de formación, en el desarrollo de comunidades internas de
              inteligencia artificial y datos, y en la importancia dada a la experiencia del cliente.
            </Block>
            <Block label="Control">
              Función clave dada la naturaleza industrial de la empresa. Sullair controla calidad,
              seguridad, ambiente, tiempos de respuesta, mantenimiento y desempeño operativo. Se
              evidencia en su Sistema de Gestión Conjunta, en certificaciones ISO 9001, ISO 14001 e
              ISO 45001, en procesos digitalizados de postventa y en la medición de impacto ambiental
              mediante huella de carbono.
            </Block>
          </div>
        </Chapter>

        {/* ── 02. Roles de Mintzberg ───────────────────────────── */}
        <Chapter
          num="02"
          icon={UserCircle2}
          tag="Roles Gerenciales de Mintzberg"
          title="Análisis de Anahí Traba — Head of Business Transformation"
          alt
        >
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            Se analiza a <span className="font-semibold text-foreground">Anahí Traba</span>, Head of
            Business Transformation de Sullair Argentina, por la disponibilidad de evidencia pública
            sobre su rol en transformación de negocios, datos, inteligencia artificial, cambio
            organizacional y cultura. La consigna habilita el análisis de un gerente de área cuando
            hay mayor información disponible que sobre el CEO.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Interpersonales */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-accent">
                Interpersonales
              </p>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Figura representativa</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Participa en espacios institucionales y externos vinculados a innovación,
                  cultura y experiencia del cliente.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Líder</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Impulsa iniciativas de transformación cultural y aprendizaje interno, como la
                  comunidad de IA y Datos.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Enlace</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Conecta áreas internas, universidad, comunidad, proyectos culturales y actores
                  externos.
                </p>
              </div>
            </div>

            {/* Informativos */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-accent">
                Informativos
              </p>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Monitor</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Su área trabaja con datos, inteligencia artificial, gobierno de datos y
                  transformación organizacional.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Difusora</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Promueve aprendizajes y nuevas formas de trabajo dentro de la organización.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Portavoz</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Comunica hacia afuera la mirada de Sullair sobre transformación, tecnología y
                  cultura organizacional.
                </p>
              </div>
            </div>

            {/* Decisorios */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-accent">
                Decisorios
              </p>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Emprendedora</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Impulsa cambios e iniciativas nuevas dentro de la empresa vinculadas a datos,
                  IA y transformación cultural.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Manejadora de perturbaciones</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  La transformación cultural implica gestionar resistencias, adaptación y
                  aprendizaje organizacional.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Asignadora / Negociadora</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Articula proyectos que requieren tiempo, personas, prioridades y coordinación
                  entre áreas y actores externos.
                </p>
              </div>
            </div>
          </div>
        </Chapter>

        {/* ── 03. Modelo Tridimensional ───────────────────────── */}
        <Chapter
          num="03"
          icon={Layers3}
          tag="Empresa Familiar"
          title="Modelo Tridimensional de Desarrollo"
        >
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            El modelo es aplicable a Sullair Argentina como empresa privada de gran escala con
            control familiar. En registros públicos aparece la familia Oxenford vinculada al
            directorio y a la propiedad. No se trata de una pequeña empresa familiar, sino de una
            organización formalizada y diversificada con gestión profesionalizada.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                axis: "Eje Empresa",
                selected: "Madurez",
                stages: ["Arranque", "Expansión / Formalización", "Madurez"],
                justification:
                  "Opera desde 1979 con estructura industrial consolidada, presencia territorial, variedad de negocios (fabricación, alquiler, venta, postventa y generación de energía) y organización formalizada.",
              },
              {
                axis: "Eje Familia",
                selected: "Trabajo conjunto",
                stages: ["Joven familia empresaria", "Trabajo conjunto", "Traspaso generacional"],
                justification:
                  "Empresa de control familiar con participación de miembros de la familia Oxenford en la propiedad y/o dirección. No se confirma transición generacional cerrada con fuente directa.",
              },
              {
                axis: "Eje Propiedad",
                selected: "Propietario controlador",
                stages: ["Propietario controlador", "Sociedad de hermanos", "Consorcio de primos"],
                justification:
                  "La propiedad presenta concentración en la familia empresaria, lo que corresponde a la etapa de propietario controlador, con alta participación en el capital social.",
              },
            ].map(({ axis, selected, stages, justification }) => (
              <div key={axis} className="rounded-xl border border-border bg-background p-5 space-y-3">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-accent">{axis}</p>
                <ul className="space-y-1">
                  {stages.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          s === selected ? "bg-blue-accent" : "bg-border"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          s === selected
                            ? "font-semibold text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {s}
                        {s === selected && (
                          <span className="ml-2 text-[10px] font-bold text-blue-accent uppercase tracking-wide">
                            ← seleccionada
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">
                  {justification}
                </p>
              </div>
            ))}
          </div>
        </Chapter>

        {/* ── 04. RSE ─────────────────────────────────────────── */}
        <Chapter
          num="04"
          icon={Sprout}
          tag="Responsabilidad Social"
          title="Nivel de Responsabilidad Social Empresaria"
          alt
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {[
              {
                lvl: "Obligación Social",
                desc: "Solo cumple lo que exige la ley.",
                selected: false,
              },
              {
                lvl: "Sensibilidad Social",
                desc: "Va más allá de la ley de forma reactiva.",
                selected: false,
              },
              {
                lvl: "RSE Estructurada",
                desc: "Políticas sostenidas, proactivas y medibles.",
                selected: true,
              },
              {
                lvl: "Empresa B",
                desc: "Certificación B Corp verificada.",
                selected: false,
              },
            ].map(({ lvl, desc, selected }) => (
              <div
                key={lvl}
                className={`rounded-lg border px-4 py-4 text-center ${
                  selected
                    ? "border-blue-accent bg-blue-accent/10"
                    : "border-border bg-card"
                }`}
              >
                {selected && (
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-blue-accent mb-1">
                    Nivel identificado
                  </span>
                )}
                <p
                  className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                    selected ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {lvl}
                </p>
                <p className="text-[11px] text-muted-foreground leading-snug">{desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <p className="font-sans font-semibold text-primary text-sm">Justificación</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sullair Argentina no solo cumple obligaciones legales vinculadas a calidad, seguridad,
              salud y ambiente, sino que también desarrolla políticas y programas de impacto social y
              ambiental de manera sostenida y proactiva. Entre sus acciones se destacan:{" "}
              <span className="text-foreground font-medium">
                medición de huella de carbono, reducción y compensación de emisiones, instalación de
                parque solar, proyectos de reforestación, certificaciones ISO 9001, ISO 14001 e ISO
                45001, programa de pasantías técnicas y universitarias, y actividades culturales
                comunitarias.
              </span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              No se encontró evidencia pública suficiente para clasificarla como Empresa B, ya que no
              consta certificación B Corp verificada. Por lo tanto, corresponde ubicarla como empresa
              que realiza <strong className="text-foreground">RSE de manera estructurada</strong>.
            </p>
          </div>
        </Chapter>

        {/* ── 05. Escuelas de Administración ──────────────────── */}
        <Chapter
          num="05"
          icon={BookOpen}
          tag="Escuelas de Administración"
          title="Justificación de conceptos por Escuela"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-background p-5">
              <p className="font-sans font-semibold text-primary text-sm mb-3">
                Administración Científica — Taylor
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Se observa en la búsqueda de eficiencia operativa, estandarización y control técnico.
                En Sullair aparece en los procesos de postventa, mantenimiento planificado, metodología
                5S, digitalización de servicios, control de tiempos de respuesta y organización técnica
                de talleres. Todo ello se vincula con la idea taylorista de mejorar la productividad
                mediante métodos, medición y especialización del trabajo.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-5">
              <p className="font-sans font-semibold text-primary text-sm mb-3">
                Administración Clásica — Fayol
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Se refleja en las funciones de planear, organizar, dirigir, coordinar y controlar.
                Sullair posee áreas diferenciadas, red territorial, políticas de calidad, gestión
                de proveedores, controles de seguridad y ambiente, y coordinación entre ventas,
                alquileres, postventa y servicio técnico. Esto evidencia una administración
                formalizada con división de funciones y coordinación interna.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-5">
              <p className="font-sans font-semibold text-primary text-sm mb-3">
                Relaciones Humanas — Mayo / Maslow
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Se evidencia en la importancia que la empresa otorga al desarrollo de las personas,
                la formación y el sentido de pertenencia. El programa de pasantías, la capacitación
                técnica, la comunidad interna de IA y Datos, y las acciones culturales como Umbral
                muestran preocupación por el aprendizaje, la integración y el crecimiento personal
                dentro y fuera de la organización.
              </p>
            </div>
            <div className="rounded-xl border border-2 border-blue-accent/30 bg-blue-accent/5 p-5">
              <p className="font-sans font-semibold text-primary text-sm mb-1">
                Escuela Sistémica
              </p>
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-accent mb-3 inline-block">
                Enfoque más representativo
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Es probablemente la escuela que mejor explica a Sullair como organización. Funciona
                como un sistema abierto que integra fabricación, alquiler, venta, postventa, energía,
                proveedores, clientes industriales, tecnología, ambiente y comunidad. Cada área
                depende de las demás: si falla la logística, el mantenimiento, la disponibilidad de
                equipos o la atención técnica, se afecta el resultado final para el cliente.
              </p>
            </div>
          </div>
        </Chapter>

        {/* ── 06. Misión ──────────────────────────────────────── */}
        <Chapter
          num="06"
          icon={Target}
          tag="Definir el Fin"
          title="Análisis y reformulación de la Misión"
          alt
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                Misión implícita (sin formulación formal)
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "Hacemos que las cosas sucedan" — conectar proyectos con soluciones, pensar
                primero en el otro y desarrollar soluciones a medida.
              </p>
              <p className="text-muted-foreground/70 text-xs mt-3 leading-relaxed">
                Funciona como identidad o lema institucional, pero no está formulada como misión
                académica: no define qué hace la empresa, para quién, en qué mercados opera,
                cuál es su diferencial ni qué compromiso asume con personas y ambiente.
              </p>
            </div>
            <div className="rounded-xl border-2 border-blue-accent/40 bg-blue-accent/5 p-5">
              <p className="text-xs font-bold tracking-widest uppercase text-blue-accent mb-3">
                Misión reformulada
              </p>
              <p className="text-foreground text-sm leading-relaxed font-medium">
                Brindar soluciones integrales de maquinaria, aire comprimido y generación de
                energía para la industria, la construcción, la minería, Oil & Gas y otros
                proyectos críticos de Sudamérica, mediante fabricación, venta, alquiler y
                servicio técnico especializado, asegurando productividad, continuidad operativa,
                seguridad, innovación y compromiso ambiental, contribuyendo al desarrollo de
                sus clientes, colaboradores y comunidades vinculadas.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-background p-5">
            <p className="font-sans font-semibold text-primary text-sm mb-2">
              ¿Por qué se reformuló?
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La misión implícita comunica orientación al cliente, confianza y servicio, pero
              resulta incompleta desde una perspectiva académica. La reformulación incorpora los
              elementos que toda misión debe incluir: actividad de la empresa, mercados atendidos,
              propuesta de valor, diferencial competitivo y compromiso con las personas y el
              ambiente. De este modo, la misión deja de ser un lema para convertirse en una
              declaración estratégica integral.
            </p>
          </div>
        </Chapter>

        {/* ── Conclusión ──────────────────────────────────────── */}
        <ScrollReveal>
          <div className="rounded-2xl border border-blue-accent/30 bg-blue-accent/5 p-8 md:p-10 text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-accent mb-4">
              Conclusión del análisis
            </p>
            <p className="text-foreground text-base md:text-lg leading-relaxed font-medium">
              Sullair Argentina se presenta como una empresa industrial madura, diversificada y
              profesionalizada. Su administración combina eficiencia operativa, estructura funcional,
              control formalizado y una mirada sistémica orientada al cliente. Muestra acciones
              sostenidas de RSE, aunque no corresponde clasificarla como Empresa B. La escuela
              sistémica es la que mejor explica su modelo de organización.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>
);

export default AnalisisTPSection;
