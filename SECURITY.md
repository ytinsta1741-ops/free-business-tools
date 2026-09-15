# Security Policy

Thanks for helping keep the [BusinessOS](https://businessos.biz) free business tools safe.

## Supported versions

All 40 tools in this repo are static, zero-dependency vanilla JavaScript. Whatever's on the `master` branch is what's deployed to [businessos.biz/tools/](https://businessos.biz/tools/) — there are no long-lived version branches.

## Reporting a vulnerability

If you find a security issue in one of these tools — a math bug that produces dangerously wrong output, an XSS vector in an embed, a supply-chain risk, or anything else that could harm a user — please report it privately:

- 🌐 Open a private security advisory: https://github.com/ytinsta1741-ops/free-business-tools/security/advisories/new
- Or reach out via [businessos.biz](https://businessos.biz)

Please **do not** file a public issue for security problems.

## Response timeline

- Acknowledgement: within 3 business days
- Assessment: within 7 business days
- Fix or public disclosure: within 30 days for most issues

## What's in scope

- The 40 calculator tools at [businessos.biz/tools/](https://businessos.biz/tools/)
- The embed endpoints at `/embed/<tool>/`
- Anything served from this repo's source

## What's NOT in scope

- The main BusinessOS app at [businessos.biz](https://businessos.biz) (report those separately via the site)
- Third-party CDN or hosting providers
- Content or math accuracy issues — those belong in regular issues

## Threat model

These tools run **entirely in the user's browser**. There is:

- **No server** — no data leaves the browser
- **No storage** — no cookies, no localStorage, no IndexedDB
- **No third-party network calls** — every asset is served from the same origin
- **No user accounts** — no signup, no login

The main threats to think about:
- Math bugs that produce wrong outputs (financial/tax outcomes)
- XSS via user-supplied inputs reflected in the DOM
- Embed injection via iframe manipulation
- Supply-chain risks from any future dependency

## Bug bounty

We currently do not have a bug bounty program. We do give public credit for responsible disclosure — if you'd like your name on the fix commit / release notes, let us know.

Thank you for helping keep [BusinessOS](https://businessos.biz) users safe.
