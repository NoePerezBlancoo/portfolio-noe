import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  const metrics = [
    {
      value: '+100',
      label: 'Aplicaciones internas',
    },
    {
      value: '13',
      label: 'Años en entorno industrial',
    },
    {
      value: 'ERP',
      label: 'Sistemas internos',
    },
    {
      value: 'OPC UA',
      label: 'Integración industrial',
    },
  ]

  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div>
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.9)]" />
          <span className="text-sm text-violet-200">
            Responsable IT · Full Stack Developer · Industrial Automation
          </span>
        </div>

        <h1 className="mb-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl">
          Software para
          <span className="block bg-gradient-to-r from-violet-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            industria real
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Desarrollo plataformas internas, sistemas de trazabilidad,
          automatizaciones e integraciones OT/IT para producción,
          operaciones y entornos industriales reales.
        </p>

        <div className="mb-14 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-2xl bg-violet-600 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-violet-500"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-gray-200 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500"
          >
            Contactar
          </a>

          <a
            href="https://github.com/NoePerezBlancoo"
            target="_blank"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-gray-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-300"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/no%C3%A9-p%C3%A9rez-blanco-b79228187"
            target="_blank"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-gray-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>

        <div className="grid max-w-5xl grid-cols-2 gap-4 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <h3 className="mb-2 text-3xl font-black text-violet-300">
                {metric.value}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-violet-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
                <p className="mb-3 text-sm text-gray-500">
                  Production Systems
                </p>
                <div className="h-3 w-3/4 rounded-full bg-violet-400/70" />
                <div className="mt-3 h-3 w-1/2 rounded-full bg-cyan-400/50" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
                  <p className="text-sm text-gray-500">
                    Traceability
                  </p>
                  <p className="mt-4 text-3xl font-black text-white">
                    98%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
                  <p className="text-sm text-gray-500">
                    Automation
                  </p>
                  <p className="mt-4 text-3xl font-black text-white">
                    ON
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    OT / IT Integration
                  </p>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-300">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="h-16 rounded-xl bg-violet-500/20" />
                  <div className="h-16 rounded-xl bg-cyan-500/20" />
                  <div className="h-16 rounded-xl bg-blue-500/20" />
                  <div className="h-16 rounded-xl bg-violet-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero