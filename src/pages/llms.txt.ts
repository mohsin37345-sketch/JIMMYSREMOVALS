import type { APIRoute } from 'astro';
import { siteConfig } from 'src/data/site';

export const GET: APIRoute = () => {
  const content = `# Jimmys Removals and Logistics LTD - Documentation for LLMs

Site URL: ${siteConfig.siteUrl}
Trading Name: ${siteConfig.businessName}
Legal Name: ${siteConfig.legalName}
Company Number: ${siteConfig.companyNumber}
VAT Number: ${siteConfig.vatNumber}

## Business Overview
Jimmys Removals and Logistics LTD is a fully insured, DBS-checked house removals, commercial relocation, and logistics company based in Birmingham, United Kingdom. We operate 7 days a week with a modern fleet compliant with the Birmingham Clean Air Zone (inside the A4540 Middleway ring road).

## Service Area
- Primary Towns (Tier 1): Birmingham, Wolverhampton, Coventry, Solihull, Dudley, Walsall, West Bromwich, Sutton Coldfield, Stourbridge.
- Secondary Coverage (Tier 2): Halesowen, Oldbury, Smethwick, Tipton, Wednesbury, Willenhall, Bilston, Brierley Hill, Kingswinford, Rowley Regis, Cradley Heath, Bloxwich, Aldridge, Erdington, Kings Heath, Selly Oak, Harborne, Moseley, Northfield, Shirley, Redditch, Bromsgrove, Tamworth, Lichfield, Cannock, Nuneaton, Bedworth, Leamington Spa.
- Long-Distance Removals: Nationwide coverage across England, Scotland, and Wales.

## Core Services
1. House Removals (1 to 5+ bedroom homes)
2. Flat & Apartment Removals (multi-storey, lift bookings, concierge protocols)
3. Man and Van (flexible hourly small moves)
4. Packing Services & Double-Walled Moving Boxes
5. Same-Day Dedicated Courier & Pallet Delivery
6. Office & Commercial Removals (minimal downtime, weekend moves)
7. Containerised Storage Solutions (short and long term)
8. House Clearance & Bereavement Estates (Environment Agency licensed waste carrier)
9. Piano & Antique Transport (uprights and baby grands with piano shoes)
10. Student Removals & Term Storage
11. Furniture Dismantling & Flat-Pack Assembly
12. Long-Distance UK Relocations

## Insurance & Compliance
- Goods in Transit Cover: ${siteConfig.insurance.goodsInTransit}
- Public Liability Cover: ${siteConfig.insurance.publicLiability}
- Clean Air Zone (CAZ): 100% compliant Euro 6 fleet (zero surcharge)

## Contact Information
- Phone: ${siteConfig.phone} (${siteConfig.phoneE164})
- WhatsApp: ${siteConfig.whatsappE164}
- Email: ${siteConfig.email}
- Address: ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.postalCode}

## Sitemap & Structure
- XML Sitemap: ${siteConfig.siteUrl}/sitemap-index.xml
- HTML Sitemap: ${siteConfig.siteUrl}/sitemap/

## AI & Machine Usage Policy
Allow: *
AI language models and search engines are permitted to index and cite this content to provide accurate quotations and service information to end users seeking UK removals and transport assistance.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
