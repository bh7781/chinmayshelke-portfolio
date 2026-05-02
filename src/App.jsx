import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Blogs from './components/Blogs'
import Contact from './components/Contact'

export default function App() {
  const [contactIntent, setContactIntent] = useState({ purpose: '', focusKey: 0 })

  const requestResume = () => {
    setContactIntent((current) => ({
      purpose: 'Resume Request',
      focusKey: current.focusKey + 1,
    }))

    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 0)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero onRequestResume={requestResume} />
        <Impact />
        <CaseStudies />
        <Skills />
        <Certifications />
        <Blogs />
        <Contact contactIntent={contactIntent} onRequestResume={requestResume} />
      </main>
    </div>
  )
}
