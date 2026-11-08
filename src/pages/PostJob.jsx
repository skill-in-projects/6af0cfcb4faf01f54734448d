import { useState } from 'react'
import { jobTypes } from '../data/jobs.js'

const emptyForm = { title: '', company: '', location: '', type: 'Part-time', pay: '', description: '' }

export default function PostJob({ onPost }) {
  const [form, setForm] = useState(emptyForm)
  const [posted, setPosted] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  const submit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')
    setPosted(false)
    try {
      await onPost(form)
      setForm(emptyForm)
      setPosted(true)
    } catch {
      setError('The job could not be saved. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <main>
      <section className="narrow">
        <h1>Post a job</h1>
        <p>Tell workers what you need. Your job appears on the Find work page.</p>
        <form className="form" onSubmit={submit}>
          <label>
            Job title
            <input required value={form.title} onChange={update('title')} />
          </label>
          <label>
            Company
            <input required value={form.company} onChange={update('company')} />
          </label>
          <label>
            Location
            <input required value={form.location} onChange={update('location')} />
          </label>
          <label>
            Type
            <select value={form.type} onChange={update('type')}>
              {jobTypes.filter((item) => item !== 'All').map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            Pay (for example $20/hr)
            <input required value={form.pay} onChange={update('pay')} />
          </label>
          <label>
            Description
            <textarea rows={4} required value={form.description} onChange={update('description')} />
          </label>
          <button className="button" type="submit" disabled={saving}>
            {saving ? 'Posting...' : 'Post job'}
          </button>
        </form>
        {posted && <p className="success">Job posted. It shows first on Find work.</p>}
        {error && <p className="error">{error}</p>}
      </section>
    </main>
  )
}
