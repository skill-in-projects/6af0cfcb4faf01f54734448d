export default function Applications({ jobs, appliedIds }) {
  const applied = jobs.filter((job) => appliedIds.includes(job.id))

  return (
    <main>
      <section className="narrow">
        <h1>My applications</h1>
        {applied.length === 0 && <p className="empty">You have not applied to any job yet. Find one on Find work.</p>}
        <ul className="list">
          {applied.map((job) => (
            <li key={job.id} className="list-item">
              <div>
                <strong>{job.title}</strong>
                <p className="meta">{job.company} · {job.location}</p>
              </div>
              <span className="status">Sent</span>
            </li>
          ))}
        </ul>
        <p className="note">Not saved yet: upgrade to keep your applications after a reload.</p>
      </section>
    </main>
  )
}
