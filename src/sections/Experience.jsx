import { motion } from 'framer-motion'

function Experience() {
  const experience = [
    {
      role: 'Responsable IT / Coordinador de Proyectos IT',
      company: 'AMG · Aníbal Metalmecánica Gallega',
      period: 'Mar 2025 - Actualidad',
      description:
        'Coordinación de proyectos IT, desarrollo de soluciones internas, soporte transversal a departamentos, interlocución con dirección y proveedores, formación de usuarios, mejora de infraestructura y participación en decisiones técnicas.',
      highlights: [
        'Coordinación entre producción, mantenimiento, calidad, administración, ingeniería, RRHH y dirección.',
        'Soporte con proveedor ERP, base de datos Oracle, infraestructura, CCTV y sistemas de vigilancia.',
        'Participación en procesos relacionados con ISO 27001 y mejora de seguridad interna.',
      ],
    },
    {
      role: 'Full Stack Developer / Automatización Industrial',
      company: 'AMG · Desarrollo interno',
      period: 'Ene 2022 - Mar 2025',
      description:
        'Desarrollo de aplicaciones internas, ERP industrial, sistemas de trazabilidad, automatizaciones, integración OPC UA, sincronización con bases de datos y mantenimiento evolutivo de herramientas críticas en producción.',
      highlights: [
        'Desarrollo de más de 100 aplicaciones internas orientadas a necesidades reales de fábrica.',
        'Creación de ERP interno, trazabilidad, dashboards, reporting y herramientas departamentales.',
        'Integración de datos industriales desde maquinaria y PLC hacia sistemas internos.',
      ],
    },
    {
      role: 'Técnico de redes, bases de datos y soporte IT',
      company: 'AMG · Transición hacia IT',
      period: 'Etapa previa, Feb 2020 - Dic 2021',
      description:
        'Soporte técnico a usuarios y departamentos, administración de datos, resolución de incidencias, configuración de equipos, mejora de red, servidores locales y digitalización progresiva de procesos manuales.',
      highlights: [
        'Mejora de conectividad, hardware de red y estabilidad de servicios internos.',
        'Apoyo a usuarios y departamentos en herramientas internas y sistemas corporativos.',
        'Base técnica en soporte, infraestructura, datos y operación diaria.',
      ],
    },
    {
      role: 'Mantenimiento industrial / Automatismos',
      company: 'AMG · Planta industrial',
      period: 'Etapa inicial, Ene 2013 - Ene 2020',
      description:
        'Experiencia directa en planta, maquinaria, producción, mantenimiento y necesidades reales de operarios, aportando una visión práctica para transformar problemas industriales en soluciones software útiles.',
      highlights: [
        'Conocimiento real de fábrica, operarios, maquinaria y procesos productivos.',
        'Visión funcional para traducir necesidades de planta en aplicaciones mantenibles.',
        'Base industrial para conectar producción, mantenimiento, calidad y sistemas IT.',
      ],
    },
  ]

  return (
    <section id="experiencia" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 text-violet-300">
          Trayectoria
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Evolución desde planta industrial hasta liderazgo IT.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-500">
          Mi valor diferencial está en haber vivido la operación desde dentro:
          producción, mantenimiento, usuarios, sistemas, datos, proveedores y
          dirección. Eso me permite crear software que encaja con la realidad
          diaria de una fábrica con más de 13 años de experiencia.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-white/10 to-transparent md:block" />

        <div className="space-y-7">
          {experience.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] border border-white/5 bg-white/[0.03] p-7 backdrop-blur-xl md:ml-12"
            >
              <div className="absolute -left-[3.25rem] top-8 hidden h-4 w-4 rounded-full border border-violet-300 bg-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.8)] md:block" />

              <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-violet-300">
                    {item.company}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                  {item.period}
                </span>
              </div>

              <p className="mb-6 leading-relaxed text-gray-400">
                {item.description}
              </p>

              <div className="grid gap-3 md:grid-cols-3">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/5 bg-black/20 p-4 text-sm leading-relaxed text-gray-400"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience