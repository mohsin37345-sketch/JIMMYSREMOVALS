export interface SiteConfig {
  siteUrl: string;
  businessName: string;
  legalName: string;
  companyNumber: string;
  vatNumber: string;
  wasteCarrierLicence: string;
  insuranceUnderwriter: string;
  foundedYear: string;
  googleBusinessProfileUrl: string;
  phone: string;
  phoneHref: string;
  phoneE164: string;
  whatsappE164: string;
  whatsappHref: string;
  email: string;
  baseLocation: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    fullAddress: string;
  };
  geo: {
    latitude: string | number;
    longitude: string | number;
  };
  openingHoursDisplay: string;
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
  companyNumber: '{{COMPANIES_HOUSE_NUMBER}}',
  vatNumber: '{{VAT_NUMBER}}',
  wasteCarrierLicence: '{{WASTE_CARRIER_LICENCE_NUMBER}}',
  insuranceUnderwriter: '{{INSURANCE_UNDERWRITER_NAME}}',
  foundedYear: '{{FOUNDED_YEAR}}',
  googleBusinessProfileUrl: '{{GOOGLE_BUSINESS_PROFILE_URL}}',
  phone: '0121 517 1227',
  phoneHref: 'tel:+441215171227',
  phoneE164: '+441215171227',
  whatsappE164: '+447000000000',
  whatsappHref: 'https://wa.me/447000000000',
  email: 'info@jimmysremovalsltd.co.uk',
  baseLocation: 'Phoenix Business Park, Birmingham',
  address: {
    streetAddress: 'Phoenix Business Park',
    addressLocality: 'Birmingham',
    addressRegion: 'West Midlands',
    postalCode: '{{FULL_ADDRESS_WITH_POSTCODE}}',
    addressCountry: 'GB',
    fullAddress: 'Phoenix Business Park, Birmingham, {{FULL_ADDRESS_WITH_POSTCODE}}'
  },
  geo: {
    latitude: '{{LAT}}',
    longitude: '{{LNG}}'
  },
  openingHoursDisplay: '{{OPENING_HOURS}}',
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
  accreditations: [], // Empty per spec — no fabricated trade logos or unverified accreditations
  positioning: [
    '£50,000 Goods in Transit & £2,000,000 Public Liability',
    'DBS-Checked, Uniformed Directly Employed Crews',
    'Euro 6 Clean Air Zone Compliant Luton Vans',
    'Fixed Upfront Quotes Following Video or In-Person Survey',
    'Operating 7 Days a Week Across All 37 West Midlands Towns'
  ],
  coverageLine: 'All 37 West Midlands towns with dedicated nationwide transit across mainland Britain.'
};

export const site = siteConfig;
export default siteConfig;
