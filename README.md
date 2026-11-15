# Orvanta Labs

Static multi-page agency website. Serve dist. 20 pages and 10 categorized project case studies. Local fonts and authored 3840x2160 product previews. Original repository captures are used where available; remaining UI previews are labelled with sample data.

Contact submissions use FormSubmit's AJAX email endpoint for shakeelrana6240@gmail.com. Client email is required so the owner can reply. Native HTML POST fallback is configured. Recipient activation is required by FormSubmit. A setup test from this execution environment was rejected by the provider's Cloudflare browser-signature policy, so no activation email or inbox delivery was verified. Do not describe production email delivery as tested until the owner activates the endpoint and completes a real submission test.

Form status reports provider acceptance, not email delivery. Failed or unconfirmed requests preserve user input. Duplicate submits are blocked while sending; requests time out after 25 seconds. A honeypot and native validation are included. No automatic response email is configured.

The phone number is not printed in page text. A wa.me link opens WhatsApp when clicked. Source code necessarily contains the destination number to support that link.

CSP permits same-origin application assets, the fixed FormSubmit endpoint for contact requests, and allowlisted LinkedIn frames after a click. Privacy text describes FormSubmit processing. HTTP header rules are in dist/_headers, subject to hosting support. Audience remains owner-private.

Contact layout, grids, text wrapping and touch targets include mobile/tablet rules. Visual browser QA is still limited by unavailable managed preview relay. Source/interaction/asset checks pass.
