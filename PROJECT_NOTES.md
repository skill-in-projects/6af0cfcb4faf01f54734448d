# WorkHarbor: project notes

## What the app is for
A local employment marketplace. Businesses post short-term and part-time jobs, and workers find shifts near them and apply.

## Main screens
- **Find work** (`/`): search box, type filter chips (All, Full-time, Part-time, Contract) and job cards with an Apply button. Jobs posted in this session appear first.
- **Post a job** (`/#/post`): form for title, company, location, type, pay and description. Adds the job to Find work.
- **My applications** (`/#/applications`): list of jobs the user applied to in this session.

## API endpoints
- None yet. The first version uses sample jobs in `src/data/jobs.js`.

## Free trial: screens that are not saved yet
Saving needs a paid workspace. These changes live only in page state and are lost on reload:
- Post a job: new jobs (`App.jsx` state `jobs`).
- Find work: Apply button state (`App.jsx` state `appliedIds`).
- My applications: the list that comes from Apply.
Each screen shows "Not saved yet: upgrade to keep ..." so the user knows. After upgrading, switch these to real saving through the backend.

## Decisions from the user
- Employment marketplace, first version: browse and apply for workers, post jobs for employers.
- Name: WorkHarbor. Colours: teal on light grey.
- A decorative winged lion and a winged cow fly across every page (they ignore clicks and hide for users who reduce motion).
