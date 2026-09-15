# 🛠️ Free Business Tools

**40 free instant business calculators + generators. No signup, no ads, no tracking.**

Zero-dependency vanilla JavaScript. Runs entirely in the browser. Fork it, embed it, use it anywhere.

Live demo → **[businessos.biz/tools/](https://businessos.biz/tools/)**

---

## What's inside

### 💰 Finance & investment
- Compound Interest Calculator
- Simple Interest Calculator
- Loan Payment Calculator
- ROI Calculator
- Inflation Calculator
- Tip Calculator
- Commission Calculator
- Markup Calculator
- Gross Margin Calculator
- Discount Calculator
- Profit Margin Calculator

### 📊 SaaS metrics (for founders)
- MRR Calculator
- ARR Calculator
- Churn Rate Calculator
- Customer Lifetime Value (LTV) Calculator
- Customer Acquisition Cost (CAC) Calculator
- Days Sales Outstanding (DSO) Calculator

### 🧾 Invoicing & tax
- Invoice Number Generator
- Invoice Due Date Calculator
- Net 30 Calculator
- VAT Calculator
- GST Calculator (India CGST/SGST/IGST split)
- Sales Tax Calculator
- Reverse Sales Tax Calculator
- Late Fee Calculator
- Invoice Payment Terms Generator
- Quote to Invoice Converter
- Receipt Generator
- Purchase Order Generator

### 💼 Small business & freelance
- Freelance Hourly Rate Calculator
- Hourly to Salary Converter
- Salary to Hourly Converter
- Break-Even Calculator
- Cash Flow Runway Calculator
- Mileage Reimbursement Calculator
- Currency Conversion Log
- Expense Category Suggester
- Business Name Generator
- Tagline Generator
- Email Signature Generator

---

## Why this exists

Most business calculators online are 3 MB of JavaScript, want your email, and are ad-riddled.

These are the opposite:
- **Zero dependencies** — pure browser JavaScript
- **Zero tracking** — no analytics, no cookies, no ads
- **Zero signup** — try any tool without registering
- **Zero cost** — free forever
- **Each tool < 30 KB** — loads in a blink on 3G

Every tool is a full solution for one problem, on one screen. Copy the answer. Close the tab.

---

## Embed anywhere for free

Every calculator has an embed endpoint. Copy-paste this into any blog, SaaS, or agency site:

```html
<iframe src="https://businessos.biz/embed/vat-calculator/" 
        width="100%" height="420" frameborder="0"
        style="border:1px solid #2a4147;border-radius:12px;max-width:520px;"
        title="Free VAT Calculator">
</iframe>
```

Attribution is included in the widget footer.

---

## Use in your own project

Each tool is a self-contained HTML + JS pair. Fork this repo, delete what you don't need, deploy.

```bash
git clone https://github.com/businessos/free-business-tools.git
cd free-business-tools
python -m http.server 8000
# Open http://localhost:8000/tools/vat-calculator/
```

---

## Behind the tools

Built with the same discipline as the full business platform at **[businessos.biz](https://businessos.biz)** — private, offline-first, encrypted business software for freelancers and small business.

- Works offline (PWA)
- Zero-knowledge encryption
- Voice-to-invoice in 3 seconds
- WhatsApp send on every invoice
- Free during limited early access

The tools here are the calculator subset — the full app adds invoicing, expenses, cash flow forecasting, and financial reports.

### Regional editions

BusinessOS is tuned for specific regulatory and currency environments:

- 🇸🇦 **[Saudi Arabia (ZATCA e-invoicing, VAT 15%)](https://businessos.biz/saudi-arabia/)**
- 🇦🇪 **[UAE (FTA VAT 5%)](https://businessos.biz/uae/)**
- 🇮🇳 **[India (GST CGST/SGST/IGST)](https://businessos.biz/india/)**
- 🇬🇧 **[United Kingdom (HMRC MTD)](https://businessos.biz/united-kingdom/)**
- 🇺🇸 **[USA (state sales tax)](https://businessos.biz/usa/)**
- 🇦🇺 **[Australia (ATO GST)](https://businessos.biz/australia/)**
- 🇨🇦 **[Canada (CRA GST/HST/PST)](https://businessos.biz/canada/)**
- 🇩🇪 **[Germany (Umsatzsteuer)](https://businessos.biz/germany/)**
- 🇫🇷 **[France (TVA)](https://businessos.biz/france/)**
- 🇪🇸 **[Spain (IVA)](https://businessos.biz/spain/)**
- 🇳🇱 **[Netherlands (BTW)](https://businessos.biz/netherlands/)**
- 🇵🇰 **[Pakistan (FBR)](https://businessos.biz/pakistan/)**

### Related resources

- **[Free invoice generator](https://businessos.biz/free-invoice/)** — send a compliant invoice in under a minute, no signup.
- **[Invoice templates](https://businessos.biz/invoice-template/)** — clean, printable, VAT/GST-ready.
- **[BusinessOS blog](https://businessos.biz/blog/)** — offline accounting, freelance invoicing, cash flow, small-business finance.
- **[Free QuickBooks alternative](https://businessos.biz/blog/free-quickbooks-alternative/)**
- **[Offline accounting software guide](https://businessos.biz/blog/offline-accounting-software/)**
- **[Send invoices via WhatsApp](https://businessos.biz/blog/whatsapp-invoice/)**
- **[Voice-to-invoice: dictate an invoice in 3 seconds](https://businessos.biz/blog/voice-to-invoice/)**

---

## License

MIT. Do whatever. Attribution appreciated but not required.

---

## Contributing

PRs welcome for:
- New tool ideas (open an issue first)
- Bug fixes to existing math
- Better i18n / translations
- Smaller bundle wins

---

## Star history

If you find these useful, a star helps this reach other people who could use them.

⭐ **Star this repo** if you'd embed one of these on your own site.
