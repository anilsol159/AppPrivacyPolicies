# KegelCore — Legal Site

Static website for the KegelCore Android app: privacy policy, terms of
service, account-deletion instructions, and contact info. Designed to be
hosted on **GitHub Pages** at zero cost.

## Pages

| File | Purpose | Suggested public URL |
|------|---------|----------------------|
| `index.html` | Privacy Policy (Play Store + in-app link) | `/` |
| `account-deletion.html` | Account & data deletion instructions (Play Store required URL) | `/account-deletion.html` |
| `terms.html` | Terms of Service | `/terms.html` |
| `contact.html` | Contact information | `/contact.html` |
| `styles.css` | Single shared stylesheet | — |
| `favicon.svg` | Site icon | — |

No build step, no dependencies, no JavaScript framework, no trackers.
Works offline, loads in one round-trip per page.

## Deploy on GitHub Pages

1. Create a new public GitHub repo, e.g. `kegelcore-legal`.
2. Copy the contents of this folder into the repo root.
3. Commit and push.
4. In the repo settings → **Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `(root)`
   - Save.
5. Your site is live at `https://<your-username>.github.io/kegelcore-legal/`
   within ~1 minute.

### Custom domain (optional)

If you want `https://kegelcore.app/privacy` instead:

1. Add a `CNAME` file to the repo root containing your domain on a single
   line, e.g. `kegelcore.app`.
2. In your DNS provider, add a `CNAME` record for the chosen subdomain
   pointing to `<your-username>.github.io`.
3. Enable **Enforce HTTPS** in the Pages settings once the SSL cert is
   issued (usually within an hour).

## Update checklist before publishing

Edit these placeholders in the HTML files to match your final details:

- [ ] Contact email — currently `coderanil0@gmail.com`.
- [ ] Publisher name — currently "ASD Media".
- [ ] Effective date — set in `index.html` and `terms.html`.
- [ ] Play Store URL — used inside the in-app share text only; check
      it points to your live listing once the app is published.

## Linking from the app

In `ImprovedProfile2.kt → openPrivacyPolicy2()` update the URL to the
GitHub Pages host:

```kotlin
Uri.parse("https://<your-username>.github.io/kegelcore-legal/")
```

For the Play Console listing fields:

- **Privacy policy URL**:  `https://<…>/index.html`
- **Account deletion URL**: `https://<…>/account-deletion.html`
- **Contact email**: `coderanil0@gmail.com`

