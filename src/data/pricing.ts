export interface PropertyPricingTier {
  propertyType: string;
  guideRange: string;
  description: string;
}

export interface PricingConfig {
  houseRemovals: {
    tiers: PropertyPricingTier[];
    summary: string;
  };
  manAndVan: {
    startingPrice: string;
    summary: string;
  };
  storage: {
    startingWeekly: string;
    summary: string;
  };
  customQuoteServices: {
    [key: string]: {
      title: string;
      pricingText: string;
      summary: string;
    };
  };
  priceFactors: Array<{
    title: string;
    description: string;
  }>;
  fixedPricePromise: string;
  disclaimer: string;
}

export const pricingData: PricingConfig = {
  houseRemovals: {
    tiers: [
      {
        propertyType: 'Studio or 1-bedroom flat',
        guideRange: '£220 to £400',
        description: 'Ideal for smaller apartment relocations with compact furniture and boxed items.'
      },
      {
        propertyType: '2-bedroom property',
        guideRange: '£320 to £600',
        description: 'Covers typical mid-terrace houses and standard two-bedroom flats with living suites.'
      },
      {
        propertyType: '3-bedroom property',
        guideRange: '£500 to £850',
        description: 'Suits standard family semi-detached and detached homes with full room contents.'
      },
      {
        propertyType: '4-bedroom property or larger',
        guideRange: 'from £800',
        description: 'Larger family homes requiring dedicated loading plans, multiple vans, or full crews.'
      }
    ],
    summary: 'Every house move is individually evaluated so your written quote is fixed before move day.'
  },
  manAndVan: {
    startingPrice: 'from £55',
    summary: 'Flexible hourly or job-based transport in a 3.5-tonne Luton van with an experienced driver.'
  },
  storage: {
    startingWeekly: 'from £18 per week',
    summary: 'Secure containerised storage arrangements with direct collection and redelivery.'
  },
  customQuoteServices: {
    'packing-services': {
      title: 'Packing Services',
      pricingText: 'Priced per job after a quick survey',
      summary: 'Calculated from the quantity of rooms and volume of protective packing materials needed.'
    },
    'furniture-removals': {
      title: 'Furniture Removals',
      pricingText: 'Priced per job after a quick survey',
      summary: 'Based on the dimensions, weight, and handling requirements of individual furniture items.'
    },
    'furniture-dismantling': {
      title: 'Furniture Dismantling and Reassembly',
      pricingText: 'Priced per job after a quick survey',
      summary: 'Priced according to the number of wardrobes, bed frames, or complex flat-pack units.'
    },
    'office-removals': {
      title: 'Office Removals',
      pricingText: 'Priced per job after a quick survey',
      summary: 'Tailored to desk count, filing, IT hardware, access windows, and building management rules.'
    },
    'student-removals': {
      title: 'Student Removals',
      pricingText: 'Priced per job after a quick survey',
      summary: 'Cost-effective room moves between halls, private rented housing, or family homes.'
    },
    'same-day-delivery': {
      title: 'Same Day Delivery',
      pricingText: 'Priced per job after a quick survey',
      summary: 'Point-to-point urgent dispatch calculated from mileage and immediate vehicle availability.'
    }
  },
  priceFactors: [
    {
      title: 'Property size and inventory volume',
      description: 'The overall cubic volume of furniture and boxed belongings determines vehicle and crew requirements.'
    },
    {
      title: 'Travel distance between addresses',
      description: 'Mileage between your collection address and destination property across the West Midlands or UK.'
    },
    {
      title: 'Stairs, lifts and access pathways',
      description: 'The presence of working service lifts, narrow internal stairs, or long walking carries to the vehicle.'
    },
    {
      title: 'Parking and loading bay clearance',
      description: 'Proximity of legal parking outside entrance doors and any council permit requirements.'
    },
    {
      title: 'Packing and dismantling services',
      description: 'Whether you require professional packing materials, fragile-item wrapping, or furniture assembly.'
    },
    {
      title: 'Bulky or unusually heavy items',
      description: 'Specialist handling for items such as upright pianos, double-door fridge-freezers, or stone tables.'
    },
    {
      title: 'Date and scheduling urgency',
      description: 'Moves scheduled during peak end-of-month completion windows or arranged at very short notice.'
    },
    {
      title: 'Storage between completion dates',
      description: 'Short-term holding requirements when sale and purchase completion dates do not coincide.'
    }
  ],
  fixedPricePromise: 'The price we quote is the price you pay.',
  disclaimer: 'Guide prices for local moves. Your fixed quote depends on your move details.'
};

export default pricingData;
