# Contributing to Free Business Tools

Thanks for wanting to help. These are the 40 free calculator tools that ship alongside [BusinessOS](https://businessos.biz) — an offline-first, encrypted business platform. The tools are MIT-licensed, zero-dependency, and meant to be forked, embedded, and improved.

## Ways to contribute

### 1. Report a math bug

If a calculator gives a wrong result:
- [Open an issue](https://github.com/ytinsta1741-ops/free-business-tools/issues/new) with the tool name, input values, expected output, and actual output.
- Include the source of truth if it's a tax formula (HMRC page, IRS publication, ZATCA doc, FTA circular, GST portal, etc.).

Priority tools where accuracy matters most:
- [VAT Calculator](https://businessos.biz/tools/vat-calculator/) — regional VAT rules change often
- [GST Calculator](https://businessos.biz/tools/gst-calculator/) — India CGST/SGST/IGST split
- [Sales Tax Calculator](https://businessos.biz/tools/sales-tax-calculator/) — USA state rates
- [Compound Interest Calculator](https://businessos.biz/tools/compound-interest-calculator/)
- [Loan Payment Calculator](https://businessos.biz/tools/loan-payment-calculator/)
- [MRR Calculator](https://businessos.biz/tools/mrr-calculator/) — SaaS metrics conventions

### 2. Suggest a new tool

Open an issue first with:
- Tool name
- One-sentence purpose
- Example inputs + expected output
- Who it's for (freelancer? SaaS founder? small business owner?)

Tools that fit this repo are:
- Single-purpose (one problem, one screen)
- Deterministic (given inputs X, always returns Y)
- Under 30 KB (no bundlers, no dependencies)
- No signup, no tracking, no ads

### 3. Improve i18n

Every tool is currently English + Latin-numeral output. PRs welcome for:
- Arabic (right-to-left) translations
- Numeral display for locale-specific groupings (12,34,567.89 vs 1,234,567.89)
- Currency formatting per country

### 4. Smaller bundle wins

Every KB counts. If you can shave bytes off:
- The shared JS runtime
- The embed page CSS
- The per-tool markup

Send a PR with before/after byte counts.

## Style

- Vanilla JavaScript. No React, no Vue, no build step.
- Semantic HTML. Form inputs must be labeled.
- Accessibility: every interactive element keyboard-reachable. Colors pass WCAG AA.
- No third-party fetches at runtime. Everything runs in the browser.

## About BusinessOS

These 40 tools are a subset of the calculator work that ships inside [BusinessOS](https://businessos.biz) — a full offline-first business platform with:

- Encrypted invoicing (VAT/GST/sales-tax handled automatically)
- Expense tracking
- Cash flow forecasting
- Financial reports (P&L, balance sheet, cash flow statement)
- Voice-to-invoice
- WhatsApp send
- Zero-knowledge encryption before optional sync

Multi-region tax engines (UK VAT, UAE VAT, Saudi ZATCA, India GST, USA sales tax, EU VAT, and more).

**[https://businessos.biz](https://businessos.biz)** — free during limited early access.

## License

By contributing, you agree your contribution will be MIT-licensed.

## Questions?

Open an issue or reach out via [businessos.biz](https://businessos.biz).
