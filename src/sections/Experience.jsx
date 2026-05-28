import { motion } from 'framer-motion'

function Experience() {
  const experience = [
    {
      role: 'Responsable IT / Tech Lead',
      company: 'AMG · Aníbal Metalmecánica Gallega',
      period: 'Mar 2025 - Actualidad',
      description:
        'Coordinación de proyectos IT, desarrollo de soluciones internas, soporte a departamentos, interlocución con dirección y proveedores, formación a usuarios y mejora de infraestructura local.',
    },
    {
      role: 'Full Stack Developer / Industrial Automation',
      company: 'AMG · Desarrollo interno',
      period: 'Ene 2022 - Mar 2025',
      description:
        'Desarrollo de más de 100 aplicaciones internas, ERP industrial, trazabilidad de piezas, integración OPC UA, sincronización con MySQL y automatización de procesos operativos.',
    },
    {
      role: 'Sistemas, redes y soporte IT',
      company: 'AMG · Infraestructura industrial',
      period: 'Etapa de transición IT',
      description:
        'Soporte técnico, administración de datos, servidores locales, red, conectividad, CCTV, bases de datos y digitalización progresiva de procesos manuales.',
    },
    {
      role: 'Mantenimiento industrial / Automatismos',
      company: 'AMG · Planta industrial',
      period: 'Etapa inicial',
      description:
        'Experiencia directa en producción, maquinaria, mantenimiento y necesidades reales de operarios, creando una base práctica para transformar problemas de planta en software útil.',
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
          Experiencia
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          De planta industrial a liderazgo técnico
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-white/10 to-transparent md:block" />

        <div className="space-y-6">
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

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                  {item.period}
                </span>
              </div>

              <p className="leading-relaxed text-gray-400">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience