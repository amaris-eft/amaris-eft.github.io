# Amaris Meléna Efthimiou — Portfolio

Static portfolio site (plain HTML + CSS, no build step) for GitHub Pages.

## Pages
- `index.html` — Home
- `work.html` — Selected Works
- `about.html` — About
- `student-concierge.html`, `tailored-tracks.html`, `crime-analytics-agent.html` — case studies

## Setup
1. Create a repo named **`<your-github-username>.github.io`** (gives you `https://<username>.github.io`), or any repo name for `https://<username>.github.io/<repo>`.
2. Add these files to the repo root.
3. Pull the images from the current site: `bash download-assets.sh`
4. In `about.html`, replace `RESUME_URL` and `GITHUB_URL`.
5. Commit and push, then go to **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root**.

## Custom domain (optional)
To serve this at amarisefthimiou.com instead of the Figma site, add a `CNAME` file containing `amarisefthimiou.com`, set the domain under Settings → Pages, and point your DNS at GitHub Pages (A records to GitHub's IPs, or a CNAME for `www`).
