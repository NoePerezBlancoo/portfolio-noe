import { motion } from 'framer-motion'

function TechStack() {
  const groups = [
    {
      title: 'Desarrollo y backend',
      description:
        'Construcción de aplicaciones internas, lógica de negocio, automatizaciones, APIs, formularios, paneles y herramientas operativas.',
      items: ['PHP', 'Python', 'MySQL', 'SQL', 'APIs', 'Backend', 'JavaScript'],
    },
    {
      title: 'Frontend y experiencia de usuario',
      description:
        'Interfaces web internas orientadas a usuarios reales: operarios, responsables, administración, calidad, mantenimiento y dirección.',
      items: ['React', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'UI interna'],
    },
    {
      title: 'Industria, planta y OT/IT',
      description:
        'Conexión entre maquinaria, producción, PLC, datos industriales y sistemas internos para control operativo y trazabilidad.',
      items: ['OPC UA', 'PLC', 'Producción', 'Trazabilidad', 'OEE', 'Automatización'],
    },
    {
      title: 'ERP, datos y sistemas corporativos',
      description:
        'Trabajo con sistemas internos, ERP corporativo, bases de datos, reporting, permisos, documentación y procesos departamentales.',
      items: ['ERP Oracle', 'Oracle DB', 'ERP interno', 'Reporting', 'Dashboards', 'Permisos'],
    },
    {
      title: 'Infraestructura y seguridad',
      description:
        'Servidores, red, conectividad, soporte técnico, sistemas de vigilancia, CCTV y procesos relacionados con seguridad de la información.',
      items: ['Linux', 'Servidores', 'Redes', 'CCTV', 'ISO 27001', 'Soporte IT'],
    },
    {
      title: 'IoT y hardware industrial',
      description:
        'Integración de hardware con software, validación de accesos, lectura de identificadores y registro de eventos en base de datos.',
      items: ['Raspberry Pi', 'RFID', 'UID', 'Control de accesos', 'Hardware', 'IoT'],
    },
  ]

  return (
    <section id="stack" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 text-violet-300">
          Stack y áreas técnicas
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Tecnología aplicada a producción, gestión e infraestructura
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-500">
          Mi stack no está enfocado solo a crear interfaces. Está orientado a
          resolver problemas reales de negocio, planta, departamentos,
          trazabilidad, datos, soporte e infraestructura.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/5 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500/50"
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
              {group.title}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default TechStack