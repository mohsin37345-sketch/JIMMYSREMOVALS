export interface SiteConfig {
  siteUrl: string;
  businessName: string;
  legalName: string;
  tradingName: string;
  companyNumber: string;
  companiesHouseUrl: string;
  vatNumber?: string;
  wasteCarrierLicence?: string;
  googleBusinessProfileUrl?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  phone: string;
  phoneHref: string;
  phoneE164: string;
  whatsappEnabled: boolean;
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
    badge: string;
  };
  priceRange: string;
  positioning: string[];
  coverageLine: string;
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://www.jimmysremovalsltd.co.uk',
  businessName: 'Jimmys Removals and Logistics',
  legalName: 'Jimmys Logistics and Removals Limited',
  tradingName: 'Jimmys Removals and Logistics',
  companyNumber: '16876169',
  companiesHouseUrl: 'https://find-and-update.company-information.service.gov.uk/company/16876169',
  vatNumber: '',
  wasteCarrierLicence: '',
  googleBusinessProfileUrl: 'https://maps.app.goo.gl/ygPJdVe7PStKi1k1A',
  aggregateRating: {
    ratingValue: 5.0,
    reviewCount: 5
  },
  phone: '07404 353516',
  phoneHref: 'tel:+447404353516',
  phoneE164: '+447404353516',
  whatsappEnabled: true,
  whatsappE164: '+447404353516',
  whatsappHref: 'https://wa.me/447404353516',
  email: 'jimmyslogisticsandremovals@gmail.com',
  baseLocation: '66 Beaufort Avenue, Birmingham, England, B34 6AE',
  address: {
    streetAddress: '66 Beaufort Avenue',
    addressLocality: 'Birmingham',
    addressRegion: 'West Midlands',
    postalCode: 'B34 6AE',
    addressCountry: 'GB',
    fullAddress: '66 Beaufort Avenue, Birmingham, England, B34 6AE'
  },
  geo: {
    latitude: '52.4975',
    longitude: '-1.7828'
  },
  openingHoursDisplay: 'Open 24 hours, 24 hours, 24 hours, 7 days a week',
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  insurance: {
    badge: 'Fully insured'
  },
  priceRange: '££',
  positioning: [
    'Directly employed, DBS-checked, uniformed crews',
    '3.5-tonne Luton vans with tail lifts',
    'Free, fixed-price, no obligation quotes',
    'Open 24 hours a day, 24 hours, 24 hours, 7 days a week, including bank holidays',
    'Fully insured'
  ],
  coverageLine: 'Birmingham and all West Midlands towns with dedicated nationwide transit across mainland Britain.'
};

export const site = siteConfig;
export default siteConfig;
