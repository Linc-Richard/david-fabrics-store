# David Fabrics Store - Independent Concept Preview

This Stage 1 foundation is a static HTML, CSS, and JavaScript preview for David Fabrics Store. It is not affiliated with, endorsed by, or approved by the business.

## Run locally

From this directory, start any static server. For example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

## Structure

- `index.html` - semantic document shell and foundation header, language control, and footer
- `css/style.css` - design tokens, typography, base components, and core layout
- `css/responsive.css` - responsive navigation, layouts, and motion preferences
- `js/main.js` - mobile navigation and footer year behavior
- `js/language.js` - foundation language control state
- `js/gallery.js` - reserved initialization module for approved future gallery content
- `assets/` - reserved location for approved images, logo assets, and icons

## Hosting

The project is suitable for direct deployment to Cloudflare Pages. No build step or backend is required for Stage 1. Set the project directory or deploy directory to this `david-fabrics` folder.

## Missing approved assets

The project does not contain approved business photography, a logo, confirmed service copy, or translated homepage copy. Placeholder areas must not be treated as genuine David Fabrics content.
