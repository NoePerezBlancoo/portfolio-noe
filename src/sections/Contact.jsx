import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12"
      >
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-violet-300">
              Contacto
            </p>

            <h2 className="mb-6 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              ¿Buscas un perfil que una software, industria y operación?
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              Estoy abierto a oportunidades donde pueda aportar experiencia en
              desarrollo full stack, digitalización industrial, integración
              IT/OT, ERP, automatización, infraestructura y coordinación técnica
              en entornos reales de producción.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:noeperezblanco1992@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-5 transition hover:border-violet-500/50"
            >
              <FaEnvelope className="text-2xl text-violet-300" />
              <div>
                <p className="font-semibold text-white">
                  Email
                </p>
                <p className="break-all text-sm text-gray-400">
                  noeperezblanco1992@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/NoePerezBlancoo"
              target="_blank"
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-5 transition hover:border-violet-500/50"
            >
              <FaGithub className="text-2xl text-violet-300" />
              <div>
                <p className="font-semibold text-white">
                  GitHub
                </p>
                <p className="text-sm text-gray-400">
                  github.com/NoePerezBlancoo
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/no%C3%A9-p%C3%A9rez-blanco-b79228187"
              target="_blank"
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-5 transition hover:border-violet-500/50"
            >
              <FaLinkedin className="text-2xl text-violet-300" />
              <div>
                <p className="font-semibold text-white">
                  LinkedIn
                </p>
                <p className="text-sm text-gray-400">
                  Noé Pérez Blanco
                </p>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact