# Orvanta Labs

Static multi-page agency website. Serve dist. 21 pages and 10 categorized project case studies. Local fonts and authored 3840x2160 product previews. Original repository captures are used where available; remaining UI previews are labelled with sample data.

Contact submissions use FormSubmit's AJAX email endpoint for shakeelrana6240@gmail.com. Client email is required so the owner can reply. Native HTML POST fallback is configured. Recipient activation is required by FormSubmit. A setup test from this execution environment was rejected by the provider's Cloudflare browser-signature policy, so no activation email or inbox delivery was verified. Do not describe production email delivery as tested until the owner activates the endpoint and completes a real submission test.

Form status reports provider acceptance, not email delivery. Failed or unconfirmed requests preserve user input. Duplicate submits are blocked while sending; requests time out after 25 seconds. A honeypot and native validation are included. No automatic response email is configured.

The phone number is not printed in page text. A wa.me link opens WhatsApp when clicked. Source code necessarily contains the destination number to support that link.

CSP permits same-origin application assets, the fixed FormSubmit endpoint for contact requests, and allowlisted LinkedIn frames after a click. Privacy text describes FormSubmit processing. HTTP header rules are in dist/_headers, subject to hosting support. Audience remains owner-private.

Contact layout, grids, text wrapping and touch targets include mobile/tablet rules. Visual browser QA is still limited by unavailable managed preview relay. Source/interaction/asset checks pass.

Competitor-informed improvements: clearer target users, first-screen proof, separate computer vision entry, service deliverables/evaluation and related work, engagement/pricing-context guide, FAQs, contextual enquiry selection, unique page metadata, sitemap and responsive thumbnail sources. Competitor logos/claims were not added. Source file comparisons are not live speed measurements. Owner-private audience and email-activation limitation remain unchanged.

Visual polish follow-up: real-project hero replaces the generic illustration; repeated homepage philosophy section removed; olive surfaces, typography, card alignment and contact form refined. Sticky navigation supports keyboard/outside-click dismissal, with no-JavaScript navigation fallback. Project filtering includes reset and focus restoration. See QUICK-GAP-REVIEW.md for completed changes and genuine remaining blockers.

## Edit and preview locally

All editable website source is in dist: HTML pages, styles.css, app.js, assets and hosting header rules. It is a buildless site; dist is the authored source, not a missing framework build. Individual AI/ML project implementations remain in their linked project repositories.

From this repository, run `python3 -m http.server 3000 --directory dist`, then visit http://localhost:3000. There is no dependency installation or compilation step.

Run the existing email-form regression checks with `node tests/email-form.test.cjs`. They use mocked provider responses and do not send email. Operational limitations and review notes are in docs.

## Hosting identity

.openai/hosting.json identifies the existing Sites project. This GitHub repository is a source backup and editing home; pushing here does not automatically publish the website. Public launch and domain setup are separate steps. Keep .env files, provider credentials and generated archives out of version control.
