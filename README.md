# edwardkot.com

Photography portfolio and mobile imaging services site for Edward Kot.

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
├── mobile-imaging.html — Smartphone camera sample photography service
├── about.html          — About page
├── collaborate.html    — Collaborate page
├── contact.html        — Contact page
├── robots.txt          — Search and AI crawler rules
├── sitemap.xml         — Public page index
├── favicon.svg         — Browser icon
├── _data/
│   └── works.json      — Photo library data
└── admin/
    ├── index.html      — CMS entry point
    └── config.yml      — CMS configuration
```

## R2 image naming convention

Use lowercase, hyphens, no spaces: `milan-street-01.jpg`

## Works data format

`_data/works.json` uses an `items` array so it remains compatible with Decap CMS:

```json
{
  "items": []
}
```
