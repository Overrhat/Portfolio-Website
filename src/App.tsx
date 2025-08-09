import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import './styles/nav.css'

export default function App() {
  // Public files are served from the root at runtime
  const resumeUrl = '/CV.pdf'

  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link'

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-2">
          <NavLink to="/" end className={navCls}>Home</NavLink>
          <NavLink to="/experience" className={navCls}>Experience</NavLink>

          {/* Open resume PDF in a new tab; SPA stays on the same route */}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="nav-link">
            Resume
          </a>

          <NavLink to="/skills" className={navCls}>Skills</NavLink>
          <NavLink to="/contact" className={navCls}>Contact</NavLink>
        </nav>
      </header>

      {/* Smoke-test text so you can see render even if CSS fails */}
      <div className="sr-only">App mounted</div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className="text-2xl font-semibold">Page not found</h1>} />
        </Routes>
      </main>
    </div>
  )
}
