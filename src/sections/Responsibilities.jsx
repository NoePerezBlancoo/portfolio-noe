import { motion } from 'framer-motion'

function Responsibilities() {
  const responsibilities = [
    {
      title: 'Digitalización y desarrollo interno',
      description:
        'Transformación de procesos manuales en aplicaciones internas para producción, administración, mantenimiento, calidad, dirección y operarios.',
      scope: 'ERP interno · Trazabilidad · Aplicaciones departamentales',
    },
    {
      title: 'Integración industrial IT/OT',
      description:
        'Conexión entre datos de planta, PLC/OPC UA, MySQL, ERP Oracle y sistemas internos para convertir señales industriales en información operativa.',
      scope: 'OPC UA · PLC · MySQL · Oracle · Datos industriales',
    },
    {
      title: 'Coordinación de proyectos y proveedores',
      description:
        'Definición de requisitos, priorización de mejoras, seguimiento técnico y comunicación con dirección, departamentos y proveedores críticos.',
      scope: 'Dirección · Proveedores · Departamentos · Usuarios',
    },
    {
      title: 'Infraestructura, seguridad y sistemas',
      description:
        'Gestión de servidores, red, conectividad, hardware, CCTV, sistemas de vigilancia del grupo y procesos relacionados con seguridad e ISO 27001.',
      scope: 'Servidores · Redes · CCTV · ISO 27001',
    },
    {
      title: 'Soporte, formación y continuidad',
      description:
        'Formación a operarios y nuevos integrantes, soporte a usuarios, resolución de incidencias y evolución de aplicaciones en producción.',
      scope: 'Usuarios · Formación · Soporte · Operación diaria',
    },
  ]

  return (
    <section id="responsabilidades" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 text-violet-300">
          Responsabilidades clave
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Tecnología, personas y operación trabajando en la misma dirección
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {responsibilities.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500/50"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-xl font-black text-violet-300">
              {index + 1}
            </div>

            <h3 className="mb-4 text-xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              {item.description}
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
              {item.scope}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Responsibilities