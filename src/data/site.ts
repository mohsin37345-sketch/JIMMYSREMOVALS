export interface SiteConfig {
  siteUrl: string;
  businessName: string;
  legalName: string;
  companyNumber: string;
  vatNumber: string;
  phone: string;
  phoneHref: string;
  phoneE164: string;
  whatsappE164: string;
  whatsappHref: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: {
    days: string[];
    opens: string;
    closes: string;
  }[];
  insurance: {
    goodsInTransit: string;
    publicLiability: string;
  };
  priceRange: string;
  accreditations: Array<{
    name: string;
    logo?: string;
    url?: string;
  }>;
  positioning: string[];
  coverageLine: string;
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://www.jimmysremovalsltd.co.uk',
  businessName: 'Jimmys Removals',
  legalName: 'Jimmys Removals and Logistics LTD',
  companyNumber: '14829104',
  vatNumber: 'GB 428 9152 30',
  phone: '0121 517 1227',
  phoneHref: 'tel:+441215171227',
  phoneE164: '+441215171227',
  whatsappE164: '+447000000000',
  whatsappHref: 'https://wa.me/447000000000',
  email: 'info@jimmysremovalsltd.co.uk',
  address: {
    streetAddress: 'Unit 4, Phoenix Business Park, Avenue Road',
    addressLocality: 'Birmingham',
    addressRegion: 'West Midlands',
    postalCode: 'B6 4DY',
    addressCountry: 'GB'
  },
  geo: {
    latitude: 52.4862,
    longitude: -1.8904
  },
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00'
    }
  ],
  insurance: {
    goodsInTransit: '£50,000',
    publicLiability: '£2,000,000'
  },
  priceRange: '££',
  accreditations: [], // Empty by default per spec — no fabricated trade logos
  positioning: [
    'Fully Insured (Goods in Transit & Public Liability)',
    'DBS-Checked Removal Teams',
    'Clean Air Zone Compliant Fleet',
    'Transparent Upfront Pricing (No Hidden Fees)',
    'Operating 7 Days a Week'
  ],
  coverageLine: 'Birmingham, the Black Country and the whole West Midlands, with UK-wide long-distance removals.'
};

export const site = siteConfig;
export default siteConfig;
