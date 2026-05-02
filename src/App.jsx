import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import ResumeRequestModal from './components/ResumeRequestModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero onRequestResume={openModal} />
        <Impact />
        <CaseStudies />
        <Skills />
        <Certifications />
        <Blogs />
        <Contact onRequestResume={openModal} />
      </main>
      <ResumeRequestModal open={modalOpen} onClose={closeModal} />
    </div>
  )
}
