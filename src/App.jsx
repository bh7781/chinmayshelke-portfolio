import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import CareerTimeline from './components/CareerTimeline'
import ClientWork from './components/ClientWork'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import ScrollTopButton from './components/ScrollTopButton'
import { navItems } from './data'

const validViews = navItems.map((item) => item.id)

function viewFromHash() {
  const hash = window.location.hash.replace('#', '')
  return validViews.includes(hash) ? hash : 'overview'
}

export default function App() {
  const [activeView, setActiveView] = useState(viewFromHash)
  const [contactForm, setContactForm] = useState({ open: false, purpose: '', instance: 0 })

  useEffect(() => {
    const onHashChange = () => {
      setActiveView(viewFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigateTo = (view) => {
    if (view === activeView) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.location.hash = view
  }

  const openContactForm = (purpose = '') => {
    setContactForm((current) => ({
      open: true,
      purpose,
      instance: current.instance + 1,
    }))
  }

  const closeContactForm = () => {
    setContactForm((current) => ({ ...current, open: false }))
  }

  const requestResume = () => openContactForm('Resume Request')

  const renderView = () => {
    if (activeView === 'timeline') return <CareerTimeline />
    if (activeView === 'client-work') return <ClientWork />
    if (activeView === 'skills') {
      return (
        <>
          <Skills />
          <Certifications />
        </>
      )
    }
    if (activeView === 'writing') return <Blogs />
    if (activeView === 'contact') {
      return (
        <Contact
          onOpenForm={openContactForm}
          onRequestResume={requestResume}
        />
      )
    }

    return (
      <Overview
        onNavigate={navigateTo}
        onRequestResume={requestResume}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#050505_0%,#0d1117_42%,#15101f_100%)] text-zinc-200">
      <Navbar activeView={activeView} onNavigate={navigateTo} />
      <main className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-6xl px-5 sm:px-6">
        <div key={activeView} className="animate-view">
          {renderView()}
        </div>
      </main>
      <Footer onNavigate={navigateTo} />
      <ScrollTopButton />
      <ContactModal
        open={contactForm.open}
        purpose={contactForm.purpose}
        instance={contactForm.instance}
        onClose={closeContactForm}
      />
    </div>
  )
}
