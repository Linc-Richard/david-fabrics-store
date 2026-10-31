# David Fabrics Store - Independent Concept Preview

This is a static HTML, CSS, and JavaScript concept preview for David Fabrics Store. It is an independent design concept and is not affiliated with, endorsed by, or approved by the business. All "Fashion Inspiration" imagery is AI-generated concept art, not business photography.

## Run locally

From this directory, start any static server. For example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` in a browser. No build step or dependencies are required.

## Features

- Editorial single-page layout: hero, about, services/our craft, gallery, contact, and footer
- English/Kiswahili language switcher with `localStorage` persistence
- Light/dark theme switcher with system-preference default, `localStorage` persistence, and no flash on load
- Responsive navigation with a keyboard-accessible mobile menu (focus trap, Escape, focus restore)
- Scroll reveals, image masks, and hover motion that respect `prefers-reduced-motion`
- Skip link, visible focus styles, semantic landmarks, and WCAG AA colour contrast in both themes
- Progressive enhancement: content and navigation remain usable without JavaScript

## Structure

- `index.html` - semantic page markup, theme bootstrap, and content
- `css/style.css` - design tokens, light/dark themes, typography, components, and layout
- `css/responsive.css` - responsive navigation, mobile typography, and touch target rules
- `css/motion.css` - reveal, hero, navigation, and hover motion with reduced-motion fallbacks
- `js/theme.js` - theme persistence, system preference, and accessible toggle labels
- `js/main.js` - mobile navigation and footer year behaviour
- `js/language.js` - English/Kiswahili dictionary and language switcher
- `js/motion.js` - reveal observer, header state, active navigation, and menu focus management
- `js/gallery.js` - reserved initialization module for approved future gallery content
- `assets/logo/` - the supplied David Fabrics Store logo (unmodified)
- `assets/images/` - the supplied about photograph and AI-generated fashion inspiration images
- `assets/images/optimized/` - smaller copies of the inspiration images used by the page; originals are unchanged

## Theme and language storage

- Theme: `localStorage` key `david-fabrics-theme` (`light` or `dark`)
- Language: `localStorage` key `david-fabrics-language` (`en` or `sw`)

Both settings fall back safely when storage is unavailable.

## Hosting

The project is suitable for direct deployment to Cloudflare Pages or any static host. Set the project or deploy directory to this `david-fabrics` folder.

## Content notes

- The logo and about photograph are the supplied assets, used without redrawing or recolouring.
- The WhatsApp and Instagram destinations, contact details, and existing business copy are preserved.
- Gallery captions and the concept-preview notice must remain visible. Do not present AI-generated imagery as real business photography.
