import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  const metrics = [
    {
      value: '+100',
      label: 'Aplicaciones internas desarrolladas',
    },
    {
      value: '13',
      label: 'Años de evolución en entorno industrial',
    },
    {
      value: 'OT/IT',
      label: 'Integración entre planta, ERP y sistemas',
    },
    {
      value: 'ERP',
      label: 'Plataformas internas críticas',
    },
  ]

  const systems = [
    {
      name: 'Conexión',
      status: 'OK',
      detail: 'Red interna estable',
      type: 'ok',
    },
    {
      name: 'Base de datos',
      status: 'OK',
      detail: 'MySQL / Oracle operativo',
      type: 'ok',
    },
    {
      name: 'Servidor',
      status: 'OK',
      detail: 'Servicios internos activos',
      type: 'ok',
    },
    {
      name: 'ERP',
      status: 'OK',
      detail: 'Gestión corporativa disponible',
      type: 'ok',
    },
    {
      name: 'PLC / OPC UA',
      status: 'SYNC',
      detail: 'Datos de planta sincronizados',
      type: 'sync',
    },
    {
      name: 'Mantenimiento',
      status: '3 averías',
      detail: 'Incidencias activas en seguimiento',
      type: 'warning',
    },
    {
      name: 'Seguridad',
      status: 'OK',
      detail: 'CCTV / control interno activo',
      type: 'ok',
    },
    {
      name: 'Producción',
      status: 'Activa',
      detail: 'Máquinas y operarios en curso',
      type: 'sync',
    },
  ]

  const statusClass = {
    ok: 'bg-green-500/10 text-green-300 border-green-500/20',
    sync: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    warning: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  }

  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div>
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.9)]" />
          <span className="text-sm text-violet-200">
            Responsable IT · Tech Lead · Software Industrial
          </span>
        </div>

        <h1 className="mb-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl">
          Digitalizo
          <span className="block bg-gradient-to-r from-violet-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            Industria Real
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Perfil IT-industrial especializado en desarrollo de software interno,
          integración IT/OT, automatización, ERP, trazabilidad, infraestructura,
          seguridad y coordinación técnica en entornos productivos reales.
        </p>

        <div className="mb-14 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-2xl bg-violet-600 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-violet-500"
          >
            Ver casos reales
          </a>

          <a
            href="#responsabilidades"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-gray-200 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500"
          >
            Responsabilidades
          </a>
<a
  href="/cv-noe-perez-blanco.pdf"
  target="_blank"
  className="rounded-2xl border border-violet-500/30 bg-violet-500/10 px-7 py-4 font-semibold text-violet-200 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/20"
>
  Ver CV
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

      <div className="relative">
        <div className="absolute inset-0 rounded-[2.5rem] bg-violet-600/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-semibold text-green-300">
              Sistema en producción
            </span>
          </div>

          <div className="mb-6 rounded-2xl border border-white/5 bg-black/25 p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm text-gray-500">
                  Panel operativo industrial
                </p>

                <h2 className="text-2xl font-black text-white">
                  Estado general de fábrica
                </h2>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Última sync
                </p>

                <p className="mt-1 text-sm font-semibold text-cyan-300">
                  hace 12s
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="mb-2 text-xs text-gray-500">
                  OEE medio
                </p>

                <p className="text-3xl font-black text-white">
                  84%
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="mb-2 text-xs text-gray-500">
                  Máquinas activas
                </p>

                <p className="text-3xl font-black text-white">
                  12
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="mb-2 text-xs text-gray-500">
                  Averías abiertas
                </p>

                <p className="text-3xl font-black text-yellow-300">
                  3
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {systems.map((system) => (
              <div
                key={system.name}
                className="rounded-2xl border border-white/5 bg-black/25 p-4"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">
                    {system.name}
                  </p>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold ${
                      statusClass[system.type]
                    }`}
                  >
                    {system.status}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-gray-500">
                  {system.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-violet-500/10 bg-violet-500/10 p-4">
            <p className="text-sm leading-relaxed text-violet-100">
              ERP interno, trazabilidad, producción, mantenimiento, usuarios,
              bases de datos, servidores y maquinaria conectados en una misma
              visión operativa.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero