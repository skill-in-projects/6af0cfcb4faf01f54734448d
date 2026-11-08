/* global CONFIG */
// Calls to the backend. CONFIG.API_URL comes from config.js, which index.html loads before the app.
const API_URL = CONFIG.API_URL

export async function listJobs() {
  const response = await fetch(`${API_URL}/api/jobs`)
  if (!response.ok) throw new Error('Could not load jobs')
  return response.json()
}

export async function createJob(job) {
  const response = await fetch(`${API_URL}/api/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  })
  if (!response.ok) throw new Error('Could not post the job')
  return response.json()
}
