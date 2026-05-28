import { motion } from 'framer-motion'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="mb-3 text-violet-300">
            Casos reales
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
            Software creado para operaciones industriales reales
          </h2>
        </div>

        <p className="max-w-md text-gray-500">
          Proyectos internos aplicados a producción, trazabilidad,
          mantenimiento, RRHH, calidad, ingeniería, gerencia, automatización e
          infraestructura.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-white/[0.05]"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl transition group-hover:bg-violet-600/20" />

            <div className="relative flex h-full flex-col">
              <p className="mb-4 text-sm text-violet-300">
                {project.category}
              </p>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mb-5 leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mb-7 rounded-2xl border border-white/5 bg-black/20 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Impacto
                </p>

                <p className="text-sm leading-relaxed text-gray-400">
                  {project.impact}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-violet-500/10 bg-violet-500/10 px-3 py-1 text-sm text-violet-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects