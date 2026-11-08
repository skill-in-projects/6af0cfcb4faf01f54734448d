import { useState } from 'react'
import { jobTypes } from '../data/jobs.js'

export default function Home({ jobs, appliedIds, onApply }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  const shown = jobs.filter((job) => {
    const text = `${job.title} ${job.company} ${job.location}`.toLowerCase()
    return text.includes(query.toLowerCase()) && (type === 'All' || job.type === type)
  })

  return (
    <main>
      <section className="hero">
        <h1>Find your next shift</h1>
        <p>Local jobs for students, freelancers and anyone looking for flexible work.</p>
        <input
          className="search"
          type="search"
          placeholder="Search by job, company or area"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="chips">
          {jobTypes.map((item) => (
            <button
              key={item}
              className={item === type ? 'chip chip-active' : 'chip'}
              onClick={() => setType(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="grid">
        {shown.length === 0 && <p className="empty">No jobs match your search yet.</p>}
        {shown.map((job) => {
          const applied = appliedIds.includes(job.id)
          return (
            <article className="card" key={job.id}>
              <div className="card-top">
                <h2>{job.title}</h2>
                <span className="pay">{job.pay}</span>
              </div>
              <p className="meta">{job.company} · {job.location} · {job.type}</p>
              <p>{job.description}</p>
              <button className="button" disabled={applied} onClick={() => onApply(job.id)}>
                {applied ? 'Applied' : 'Apply'}
              </button>
            </article>
          )
        })}
      </section>
      <p className="note">Not saved yet: upgrade to keep your applications.</p>
    </main>
  )
}
