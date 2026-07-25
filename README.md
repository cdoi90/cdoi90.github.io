# Cloe Doi — Portfolio Website

Navy · Antique Gold · Deep Violet — Finance Fintech personal brand site.

## Folder Structure

```
/
├── index.html           ← Home page
├── about.html           ← About / career story
├── portfolio.html       ← Portfolio showcase (3 cards)
├── portfolio-1.html     ← Case study 1
├── portfolio-2.html     ← Case study 2
├── portfolio-3.html     ← Case study 3
├── css/
│   └── style.css        ← All styles (shared across pages)
├── js/
│   └── main.js          ← Shared nav, footer, animations
└── assets/
    ├── images/
    │   └── ha-doi.jpg   ← Profile photo
    └── Doi_Resume.pdf   ← Place your resume PDF here
```

## GitHub Pages Deployment

1. Create a new repository on GitHub (e.g. `cloe-doi-portfolio`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch, `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/your-name-portfolio`

## Before Going Live — Checklist

- [ ] Place your resume PDF at `assets/Doi_Resume.pdf`
- [ ] Replace placeholder images in portfolio detail pages:
  - Find the `<div class="media-box">` elements
  - Add `<img src="assets/images/your-chart.png" alt="description">` inside each
- [ ] Add cover images to portfolio cards in `portfolio.html`:
  - Replace `<div class="portfolio-card-img-placeholder">` with `<img class="portfolio-card-img" src="assets/images/project-cover.jpg" alt="...">`
- [ ] Update LinkedIn URL if different from `https://www.linkedin.com/in/ha-doi/`
- [ ] Review all content for accuracy

## Customization

All colors are CSS variables in `css/style.css` under `:root {}`.
Key variables: `--navy`, `--gold`, `--violet`, `--violet-soft`

