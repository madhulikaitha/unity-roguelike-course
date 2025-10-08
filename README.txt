
# Unity Roguelike — Micro Tasks Hub (Final, Drive-configured)

Student pages: `index.html`, `submissions.html`, `grades.html`  
Admin pages: `admin.html`, `review.html` (keep private / not published)

## Pre-configured Google Drive
- Web App URL: https://script.google.com/macros/s/AKfycbytHku4oBSEolmxpsbI4z635ITvFe9uTJWf7NoUAKSujtyihck_v9jqX3Rt4UFplaTABw/exec
- Drive Folder ID: 1cn66XZFyYYF2TTly8J_EWCnZDafDmwDd
- Shared Secret: i-love-madhu
Upload fields are hidden by default on `submissions.html`. Reveal them by opening `submissions.html?admin=1`.

## Local run
- Open `index.html` in a browser (or use VS Code Live Server).

## Publish only student pages on GitHub Pages
1) Create a `docs/` folder in your repo.
2) Move `index.html`, `submissions.html`, `grades.html`, and the `assets/`, `js/`, `data/` folders into `docs/`.
3) Leave `admin.html` and `review.html` **outside** `docs/` (they won't be published).
4) GitHub → Settings → Pages → Source: `Deploy from a branch` → `main` → `/docs`.

Share the site URL (root of Pages) with your student.

## Student flow
1) Open the link you provide (lands on `index.html`).
2) Do Week 1 tasks, check off micro-steps (XP/badges/streak track automatically).
3) Submit screen recordings/images via **Submit Work** (uploads to your Drive).
4) View **Grades & Reviews** when available.

## Editing weeks each Monday
1) Open `admin.html` locally, edit tasks/links/summaries.
2) Click **Export JSON**, replace `data/weeks.js` with the new file, commit/push.

## Grading (demo)
- Open `review.html` locally → enter Score & Feedback → Save (local demo).
- Ask me when you want to sync grades to Google Sheets (easy add-on).
