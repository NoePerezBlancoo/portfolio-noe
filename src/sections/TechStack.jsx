import { motion } from 'framer-motion'

function TechStack() {
  const groups = [
    {
      title: 'Backend & Data',
      items: ['Python', 'PHP', 'MySQL', 'APIs', 'Backend', 'Bases de datos'],
    },
    {
      title: 'Frontend',
      items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'UI Engineering'],
    },
    {
      title: 'Industrial OT/IT',
      items: ['OPC UA', 'PLC', 'Trazabilidad', 'Producción', 'Automatización'],
    },
    {
      title: 'Systems & Infrastructure',
      items: ['Linux', 'Docker', 'Git', 'Servidores locales', 'Redes', 'CCTV'],
    },
    {
      title: 'IoT & Hardware',
      items: ['Raspberry Pi', 'RFID', 'Lectores UID', 'Control de accesos'],
    },
    {
      title: 'Business Systems',
      items: ['Oracle ERP', 'ERP interno', 'Reporting', 'Documentación técnica'],
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
          Stack técnico
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Tecnología aplicada a operaciones reales
        </h2>
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
            <h3 className="mb-6 text-2xl font-bold text-white">
              {group.title}
            </h3>

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