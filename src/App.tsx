import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceSection from './components/Experience'
import EducationSection from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { profile } from './data/content'

export default function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <About />
        <ExperienceSection />
        <EducationSection />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
