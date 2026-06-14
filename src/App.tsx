import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Research } from './sections/Research'
import { Projects } from './sections/Projects'
import { Publications } from './sections/Publications'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { ProjectDetail } from './pages/ProjectDetail'

const mainLayoutStyle: React.CSSProperties = {
  backgroundColor: 'var(--paper-1)',
  backgroundImage: 'var(--paper-grain)',
  color: 'var(--ink-900)',
  fontFamily: 'var(--font-body)',
  minHeight: '100vh',
}

function MainLayout() {
  return (
    <div style={mainLayoutStyle}>
      <Nav />
      <Hero />
      <Research />
      <Projects />
      <Publications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
