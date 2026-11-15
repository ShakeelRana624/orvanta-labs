# Orvanta Labs website security review

Reviewed 15 November 2026. Scope: the static website source, packaged files, contact draft flow, query filtering, external links, media and third-party embeds. This is a focused source review and functional check, not a penetration test or security certification.

## Findings and fixes

- No credential-pattern matches found in deployable HTML, CSS, JavaScript or JSON. The deployment directory contains no .env, Git metadata, private research or server credentials.
- All runtime application code and fonts are local. Google Fonts requests removed.
- Every page has an enforced meta Content Security Policy: local scripts/styles/fonts/media; no fetch/XHR destinations; no objects, base URLs or form posts; LinkedIn is the sole permitted frame host.
- Additional HTTP header rules are supplied in dist/_headers for MIME sniffing, referrer privacy, browser permissions, CSP and permitted framing. The hosting provider's application of this file has not been independently verified; the review does not count those HTTP controls as confirmed.
- Contact form uses native validity checks and bounded fields. It opens a URL-encoded WhatsApp draft with noopener/noreferrer; there is no form database, server-side submission or email sending.
- Project search is treated as text, never HTML, and URL input is bounded. Hostile markup in the query was tested as text.
- LinkedIn frames are not present on initial load. Creation requires an explicit visitor click, and only two reviewed post IDs are accepted. Frames have no top-navigation capability and send no referrer. LinkedIn's own playback/login behavior has not been verified in a browser.
- All external new-tab links have noopener/noreferrer. No inline event handlers or inline executable scripts.
- Original academic poster preserves team credit. No hidden fields or backend access routes were added.

## Validation

Passed: JS syntax, 20-page navigation and asset references, unique IDs, 10 project/category counts, empty results/search behavior, mobile menu state, form validation and draft encoding, unapproved iframe ID rejection, repeat-click frame deduplication, secret-pattern scan, 3840x2160 thumbnail dimensions, media format checks.

Limits: managed preview relay was unavailable in this environment, so visual browser QA and actual CSP behavior were not observed. Owner-private hosting access is preserved. No auth bypass, live exploitation or third-party account testing was performed. Account/domain security and any future backend need separate review.

## Media import status

- web.mp4: downloaded and encoded into the surveillance dashboard demo.
- Smart Surveillance System.mp4, Resume Analyzer1.mp4, Resturant agent.mp4: supplied uploads exceed the download tool's 32 MiB limit. Not imported. A repository detection demo is available on the surveillance page.
- Inline fraud and surveillance screenshots have no local file attachments exposed to the executor; the exact supplied screenshots were not imported. Original surveillance poster was obtained from the matching public repository.
- LinkedIn short links were expanded and their public post descriptions verified. The voice assistant was added as the tenth project with optional native LinkedIn embed and an original-post fallback. Drone retains its local repository demo and optional field-showcase access.
- 4K thumbnails are authored editorial layouts using real assets or labelled workflow diagrams. Existing low-resolution screenshots remain low-resolution source material within the 4K layout.

## Product-thumbnail revision

Replaced branded title-card layouts with full-frame product views. Surveillance uses the matching original weapon/aiming frame extracted from its public repository recording. Drone, pose and churn use existing repository images. Fraud, resume, restaurant, phishing, memory and voice use explicitly labelled interface previews with sample data; these are not claimed as captured running applications. Supplied inline fraud image still needs an accessible file attachment for exact replacement. Both local surveillance videos remain on the detail page.

Managed preview still fails at relay readiness. Source/asset/navigation checks and interaction checks pass after the revision.

## Email contact and responsive update

Contact now submits client name, reply email, optional company, service and message to FormSubmit for delivery to shakeelrana6240@gmail.com. Meta and HTTP-file CSP allow only https://formsubmit.co for connections/form submission in addition to existing local assets and click-loaded LinkedIn frames. Privacy text updated. Native form fallback retains provider default anti-spam behavior; no CAPTCHA-disabling option added.

Client validation, bounded fields, honeypot, duplicate-submit lock, timeout, clear failures and input preservation were checked with mocked provider responses. Success means accepted by the provider, not verified delivery. One real setup request was blocked by FormSubmit with Cloudflare 1010 browser_signature_banned. No bypass/retry attempted. Activation and inbox delivery remain unverified; recipient must confirm the first-use activation before relying on the form.

Visible phone text removed. WhatsApp destination remains in the link as required for it to work. Responsive contact layout is one column below 540px, with 16px inputs to avoid mobile zoom and accessible-sized controls. Source checks pass; visual device QA unavailable.

## Competitor-informed content and navigation revision

Added a buying guide, FAQs, service deliverable/evaluation guidance and related project links. Service preselection accepts only six fixed keys; unknown/prototype/markup values were tested and ignored. No query data is used as HTML. Native FAQ controls require no additional JavaScript. No third-party scripts, tracking, email provider or sharing-policy changes were introduced. Page metadata, sitemap and robots data only describe existing public-facing content; hosting access remains owner-private.

21-page link/anchor/srcset, unique ID/H1/metadata and sitemap checks pass. Contact behavior tests still pass. Live browser performance and visual QA were not measured due to existing preview infrastructure limitation.
