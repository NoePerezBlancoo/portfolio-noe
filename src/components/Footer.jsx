import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-12">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Noé Pérez Blanco
          </h3>

          <p className="mt-2 text-gray-500">
            Industrial Software Engineer · Full Stack Developer · Responsable IT
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-400">
          <a
            href="https://github.com/NoePerezBlancoo"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/no%C3%A9-p%C3%A9rez-blanco-b79228187"
            target="_blank"
            className="transition hover:text-violet-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:noeperezblanco1992@gmail.com"
            className="transition hover:text-violet-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer