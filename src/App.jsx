import { useState } from 'react'
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PostJob from './pages/PostJob.jsx'
import Applications from './pages/Applications.jsx'
import FlyingLion from './components/FlyingLion.jsx'
import FlyingCow from './components/FlyingCow.jsx'
import { sampleJobs } from './data/jobs.js'
import './styles.css'

export default function App() {
  // Jobs posted and applications made in this session only (not saved; see PROJECT_NOTES.md).
  const [jobs, setJobs] = useState(sampleJobs)
  const [appliedIds, setAppliedIds] = useState([])

  const addJob = (job) => setJobs((current) => [{ ...job, id: Date.now() }, ...current])
  const applyTo = (id) => setAppliedIds((current) => (current.includes(id) ? current : [...current, id]))

  return (
    <HashRouter>
      <div className="app">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">WH</span>
            <span>WorkHarbor</span>
          </div>
          <nav className="nav">
            <NavLink to="/" end>Find work</NavLink>
            <NavLink to="/post">Post a job</NavLink>
            <NavLink to="/applications">My applications ({appliedIds.length})</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home jobs={jobs} appliedIds={appliedIds} onApply={applyTo} />} />
          <Route path="/post" element={<PostJob onPost={addJob} />} />
          <Route path="/applications" element={<Applications jobs={jobs} appliedIds={appliedIds} />} />
        </Routes>

        <FlyingLion />
        <FlyingCow />
      </div>
    </HashRouter>
  )
}
