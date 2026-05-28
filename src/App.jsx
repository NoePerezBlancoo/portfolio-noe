import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Responsibilities from './sections/Responsibilities'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[620px] h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[30%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Responsibilities />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App