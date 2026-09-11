# Web Analytics, Conversion Tracking & Search Console Architecture
**Brand:** Jimmys Removals and Logistics LTD  
**Primary Domain:** https://www.jimmysremovalsltd.co.uk  
**Compliance Mandate:** UK GDPR, PECR & Google Consent Mode v2

---

## 1. Google Consent Mode v2 Implementation

Consent Mode v2 is hard-coded as the very first script inside `<head>` in `theme/components/ConsentInit.astro`:

```html
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
</script>
```

When a visitor consents via the CMP banner:
```javascript
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted'
});
```

---

## 2. Google Analytics 4 (GA4) Key Conversion Events

All key commercial actions dispatch custom `dataLayer` events that map to GA4 conversions:

| Event Name | Trigger Condition | Event Parameters Passed | Business Value |
| :--- | :--- | :--- | :--- |
| `phone_call_click` | Click on any `tel:` link (header, hero, sticky bar, footer) | `placement` (e.g. `sticky_bar`, `header`, `cta`), `phone_number` | Direct phone enquiry |
| `whatsapp_click` | Click on any WhatsApp deep link or sticky action | `placement`, `page_context` (URL pathname) | High-intent mobile lead |
| `quote_form_start` | Visitor enters Step 1 of the multi-step form | `form_id`, `referral_source` | Pipeline engagement |
| `quote_form_submit` | Successful completion of `/get-a-quote/` | `move_type`, `property_size`, `collection_postcode` | Primary sales quote lead |
| `generate_lead` | Contact form `/contact-us/` or callback submission | `form_type` (contact / callback), `lead_id` | General commercial lead |
| `calculator_complete` | User adjusts calculator and clicks "Lock In This Estimate" | `property_size`, `estimated_cuft`, `distance_miles`, `caz_flag` | High-intent quote funnel |
| `checklist_download` | User submits email for moving day checklist PDF | `document_name`, `email_opt_in` | Email list acquisition |

---

## 3. Google Search Console & Bing Webmaster Setup

### Google Search Console (GSC) Domain Property Verification
Create a unified **Domain Property** (`jimmysremovalsltd.co.uk`) via DNS TXT record verification through your DNS registrar (Cloudflare / Namecheap):
```text
Host: @
Type: TXT
Value: google-site-verification=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Additionally, register all four URL-prefix variants to monitor redirect behaviour:
1. `https://www.jimmysremovalsltd.co.uk/` **(Canonical Primary)**
2. `https://jimmysremovalsltd.co.uk/` (Verifies single-hop 301 redirect to WWW)
3. `http://www.jimmysremovalsltd.co.uk/` (Verifies 301 redirect to HTTPS)
4. `http://jimmysremovalsltd.co.uk/` (Verifies 301 redirect to HTTPS WWW)

**Sitemap Submission in GSC:**
Submit: `https://www.jimmysremovalsltd.co.uk/sitemap-index.xml`

### Bing Webmaster Tools
Import directly from verified Google Search Console account for immediate verification, indexation, and Bing Places syncing.

---

## 4. Call Tracking & Dynamic Number Insertion (DNI) Configuration

To preserve NAP consistency across external directories while accurately tracking paid and organic phone conversions:

1. **The Static Canonical Number (`0121 000 0000`):**
   * This number is permanently embedded on all external directories (GBP, Bing, Yell, Thomson Local, Facebook).
   * It is never dynamically swapped for direct organic visitors who arrive directly from directory citations.
2. **Dynamic Number Insertion (DNI) Rules (via CallRail or Ruler Analytics):**
   * **Organic Search (Google / Bing):** Swaps to Tracking Pool A (local 0121 number) solely when the referral string indicates organic search engine arrival.
   * **Google Ads (PPC):** Swaps to Tracking Pool B to track campaign/ad-group keywords.
   * **NAP Protection Rule:** Default hardcoded HTML always renders `0121 000 0000` in initial server-side rendered markup so web scrapers and Googlebot index the true canonical NAP number without discrepancy.

---

## 5. Monthly Executive Reporting Dashboard Template

Use this structure for monthly performance reviews:

### A. Lead Generation & Revenue Metrics
* **Total Form Quote Submissions (`quote_form_submit`):** [Count / MoM %]
* **Total Inbound Phone Calls (`phone_call_click` + call tracking):** [Count / MoM %]
* **Total WhatsApp Enquiries (`whatsapp_click`):** [Count / MoM %]
* **Total Leads Generated:** [Sum]
* **Quote-to-Booking Conversion Rate:** [Percentage %]

### B. Organic Search & Local Pack Visibility
* **Top 5 Town Rankings (Google Local 3-Pack):**
  * Birmingham (`removals birmingham`): Position [X]
  * Solihull (`removals solihull`): Position [X]
  * Wolverhampton (`removals wolverhampton`): Position [X]
  * Coventry (`removals coventry`): Position [X]
  * Dudley (`removals dudley`): Position [X]
* **Google Business Profile Performance:**
  * Direct discovery searches: [Count]
  * Profile views: [Count]
  * Website clicks: [Count]
  * Direction requests: [Count]
  * Phone call clicks from profile: [Count]

### C. Technical Health & Indexation
* Total indexed static routes in GSC: [82/82 Target]
* Core Web Vitals status: 100% "Good" on Mobile and Desktop
* 404 error anomalies: [0 Target]
