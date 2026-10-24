# Chamal Agro (Pvt) Ltd — Website

A responsive, vanilla HTML/CSS/JavaScript plant nursery catalogue and shopping-inquiry website.

## Files

- `index.html` — main integrated website sections, drawers and dialogs
- `style.css` — responsive premium green design system
- `script.js` — catalogue, search, filters, product detail, LocalStorage cart/wishlist, WhatsApp order inquiry, language toggle and local catalogue admin
- `assets/leaf.svg` — simple original brand mark

## Run locally

1. Extract `chamal-Agro.zip`.
2. Open `index.html` in a modern browser.
3. For more reliable local image/file handling, run a static local server from the project folder, for example:
   - Python installed: `python -m http.server 8000`
   - Then visit `http://localhost:8000`
4. No build step, package manager, framework or paid API is required.

The requested “Java” in the final message is implemented as **JavaScript** (`script.js`), as specified in the project requirements. Java is a different language and is not used.

## Features implemented

- Responsive navigation and mobile menu
- Premium botanical homepage and original layout
- Category cards and category filtering
- Search by English/Sinhala name, scientific name, category, description and keywords
- Search suggestions, Enter/Escape handling and clear search
- Sort by featured, price, name and newest
- Sale-only filter, load more, product detail dialog and related catalogue discovery
- Demonstration product catalogue with editable fields
- Add/remove/update cart quantities and estimated subtotal
- Wishlist persisted in the same browser
- WhatsApp product inquiry and pre-filled cart/order inquiry
- Email, telephone and Google Maps search links
- English/Sinhala toggle for key interface copy, persisted locally
- Local admin catalogue interface: create, edit, publish/unpublish, delete, JSON import/export and reset demo data
- Input validation, safe text escaping for generated content, image fallback, reduced-motion support and keyboard-accessible controls
- SEO title, description, Open Graph metadata, semantic sections, lazy-loaded below-the-fold images and favicon

## Important demonstration limitations

This is a **static frontend**, not a production e-commerce backend.

- Product records, cart, wishlist, selected language and categories are stored in the current browser's `LocalStorage`. They do not sync across devices or customers and may be cleared by browser settings.
- The Admin view is **not authenticated**. Anyone who can access the browser can open it. Do not treat it as secure administration or store secrets in it.
- Sample products, prices, images and stock counts are illustrative demo data only. Confirm real stock, prices, varieties and product details with the business before publishing.
- The site does not take payments, reserve stock, calculate delivery charges, send automatic emails, or store orders centrally.
- WhatsApp opens a prepared message; the customer must review and send it. Opening WhatsApp does not confirm an order.
- Email uses a `mailto:` link and depends on the customer's configured email app.
- External image URLs and Google Fonts require internet access. If an image fails, a fallback image is used.
- The exact nursery address, verified opening hours, and actual delivery/collection policies have not been supplied. The map button performs a business-name search rather than claiming a verified pin.

## Before production deployment

1. Replace demonstration catalogue data and imagery with verified business-owned product information and appropriately licensed images.
2. Confirm business address, hours, delivery terms, prices and stock.
3. Add a secure backend and database for centralized products, customer orders and inquiries (for example, a maintained server-side API and MySQL/PostgreSQL).
4. Implement server-side administrator authentication, authorization, rate limiting, CSRF protection where applicable, input validation, audit logging, secure uploads and backups.
5. Use a trusted payment provider if online payments are required; never collect card details directly in this static site.
6. Configure a real domain, HTTPS, production canonical URL, favicon/social preview assets, privacy notice and any legally required business policies.
7. Test on current Android/iOS browsers and desktop browsers, including screen-reader and keyboard workflows.

## Tested / not tested checklist

Implemented in source; manual browser testing is still recommended before launch.

- [x] Responsive navigation and section anchors
- [x] Search, suggestions, category filter, sort, sale-only and load-more logic
- [x] Product detail modal and product inquiry link
- [x] Cart quantity, removal, subtotal and persistence logic
- [x] Wishlist and persistence logic
- [x] Local catalogue add/edit/delete/publish/unpublish
- [x] JSON import/export logic
- [x] Discount and stock validation logic
- [x] WhatsApp pre-filled order inquiry workflow
- [x] Language preference persistence
- [x] Image fallbacks and reduced-motion CSS
- [ ] Cross-browser manual QA on physical Android/iOS devices
- [ ] Verification of every external image URL in the target hosting environment
- [ ] Real business catalogue, prices, stock and business details verified by owner
- [ ] Secure backend, admin login, database, centralized order storage and automatic message delivery (not included)

## Contact details configured

- WhatsApp: `0702799202` (WhatsApp URL uses `94702799202`)
- Email: `whosting787@gmail.com`
- Google Maps business-name search: configured in the page

All content and sample records should be checked and approved by the business owner before the site is used publicly.
