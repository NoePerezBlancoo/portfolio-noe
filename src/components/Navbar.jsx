import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  const links = [
    {
      label: 'Inicio',
      href: '#inicio',
    },
    {
      label: 'Proyectos',
      href: '#proyectos',
    },
    {
      label: 'Experiencia',
      href: '#experiencia',
    },
    {
      label: 'Stack',
      href: '#stack',
    },
    {
      label: 'Contacto',
      href: '#contacto',
    },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#050816]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 font-black text-violet-300">
            N
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-none text-white">
              Noé Pérez
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Industrial Software
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-gray-400 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-violet-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/NoePerezBlancoo"
            target="_blank"
            className="hidden rounded-xl border border-white/10 p-2.5 text-gray-300 transition hover:border-violet-500 hover:text-violet-300 sm:block"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/no%C3%A9-p%C3%A9rez-blanco-b79228187"
            target="_blank"
            className="hidden rounded-xl border border-white/10 p-2.5 text-gray-300 transition hover:border-violet-500 hover:text-violet-300 sm:block"
          >
            <FaLinkedin />
          </a>

          <a
            href="#contacto"
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500"
          >
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar