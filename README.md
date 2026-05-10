# edwardkot.com

Photography portfolio for Edward Kot.

## Stack
- Pure HTML/CSS/JS — no build step required
- Cloudflare Pages — hosting
- Cloudflare R2 — image storage
- Decap CMS — admin interface for managing works

## Adding photos (normal workflow)

1. Upload compressed photo to Cloudflare R2 bucket (`edwardkot-images`)
2. Go to `edwardkot.com/admin`
3. Log in with GitHub
4. Open "Works" → add entry with filename + category
5. Save → auto-deploys in ~1 minute

## File structure

```
/
├── index.html          — Homepage
├── works.html          — Photo grid
├── about.html          — About page
├── collaborate.html    — Collaborate page
├── contact.html        — Contact page
├── _data/
│   └── works.json      — Photo library data
└── admin/
    ├── index.html      — CMS entry point
    └── config.yml      — CMS configuration
```

## R2 image naming convention

Use lowercase, hyphens, no spaces: `milan-street-01.jpg`
