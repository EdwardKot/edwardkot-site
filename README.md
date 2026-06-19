# edwardkot.com

Photography portfolio and mobile imaging services site for Edward Kot.

## Stack
- Pure HTML/CSS/JS — no build step required
- Cloudflare Pages — hosting
- Cloudflare R2 — image storage
- Decap CMS — admin interface for managing works

## Adding photos (normal workflow)

1. Upload compressed display photo to Cloudflare R2 bucket (`edwardkot-images`)
2. Go to `edwardkot.com/admin`
3. Log in with GitHub
4. Open "Works" → add entry with the R2 object key
5. Save → auto-deploys in ~1 minute

## File structure

```
/
├── index.html          — Homepage
├── work/               — Clean-path photo grid
├── mobile-imaging/     — Smartphone sample photography service
├── about/              — About page
├── services/           — Services page
├── contact/            — Contact page
├── zh/                 — Chinese summary page
├── _redirects          — Legacy .html redirects for Cloudflare Pages
├── llms.txt            — AI-readable site summary
├── llms-full.txt       — Extended AI-readable site context
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

Use lowercase, hyphens, no spaces. Current display images use:

`work/display/work-001.jpg`

## Works data format

`_data/works.json` uses an `items` array so it remains compatible with Decap CMS:

```json
{
  "items": []
}
```
