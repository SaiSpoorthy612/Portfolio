import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceSection from './components/Experience'
import EducationSection from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terminal from './components/Terminal'

export default function App() {
  return (
    <>
      {/* Decorative hero background: grid plus a soft accent glow, spanning the full viewport width */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-svh overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute top-1/4 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] dark:bg-accent/15" />
      </div>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <section aria-label="Interactive terminal" className="pb-8">
          <Terminal />
        </section>
        <About />
        <ExperienceSection />
        <EducationSection />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
