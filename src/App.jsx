import { useState } from 'react'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import CareerTimeline from './components/CareerTimeline'
import ClientWork from './components/ClientWork'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Blogs from './components/Blogs'
import Contact from './components/Contact'

export default function App() {
  const [activeView, setActiveView] = useState('overview')
  const [contactIntent, setContactIntent] = useState({ purpose: '', focusKey: 0 })

  const navigateTo = (view) => {
    setActiveView(view)
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  const requestResume = () => {
    setContactIntent((current) => ({
      purpose: 'Resume Request',
      focusKey: current.focusKey + 1,
    }))
    navigateTo('contact')
  }

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
          contactIntent={contactIntent}
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
        {renderView()}
      </main>
    </div>
  )
}
