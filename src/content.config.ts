import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortTitle: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroHeading: z.string(),
    heroSubheading: z.string(),
    icon: z.string(),
    summary: z.string(),
    benefits: z.array(z.string()),
    process: z.array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string()
      })
    ),
    whatsIncluded: z.array(z.string()),
    whatsNotIncluded: z.array(z.string()),
    priceFrom: z.number(),
    priceUnit: z.string(),
    priceNotes: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean()
      })
    ),
    relatedServices: z.array(z.string()),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    order: z.number().optional(),
    featured: z.boolean().optional(),
    images: z.object({
      hero: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional(),
      local: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional(),
      team: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional()
    }).optional()
  })
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/locations' }),
  schema: z.object({
    town: z.string(),
    slug: z.string(),
    region: z.string().optional(),
    county: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroHeading: z.string().optional(),
    intro: z.string(),
    localKnowledge: z.string(),
    postcodes: z.array(z.string()),
    nearbyAreas: z.array(
      z.object({
        name: z.string(),
        slug: z.string()
      })
    ),
    travelInfo: z.string().optional(),
    cleanAirZone: z.object({
      enabled: z.boolean(),
      note: z.string().optional()
    }).optional(),
    servicesOffered: z.array(z.string()).optional(),
    localFaqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean()
      })
    ).optional(),
    testimonial: z
      .object({
        name: z.string(),
        text: z.string(),
        service: z.string(),
        date: z.string()
      })
      .optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    tier: z.union([z.literal(1), z.literal(2)]).optional(),
    heroImage: z.string().optional(),
    images: z.object({
      hero: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional(),
      local: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional(),
      team: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional()
    }).optional()
  })
});

const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/service-areas' }),
  schema: z.object({
    service: z.string(),
    location: z.string(),
    uniqueIntro: z.string(),
    localAngle: z.string().optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean()
      })
    ).optional(),
    caseStudy: z
      .object({
        title: z.string(),
        scenario: z.string(),
        outcome: z.string()
      })
      .optional(),
    images: z.object({
      hero: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional(),
      local: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional(),
      team: z.object({ src: z.string().optional(), alt: z.string().optional() }).optional()
    }).optional()
  })
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    town: z.string(),
    service: z.string(),
    rating: z.number(),
    date: z.string(),
    body: z.string(),
    source: z.string(),
    verified: z.boolean(),
    reviewCount: z.string().optional(),
    relativeTime: z.string().optional(),
    isNew: z.boolean().optional(),
    authorUrl: z.string().optional(),
    pricePaid: z.string().optional(),
    ownerResponse: z.object({
      date: z.string().optional(),
      body: z.string()
    }).optional()
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    date: z.union([z.string(), z.date()]),
    updatedDate: z.union([z.string(), z.date()]).optional(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean(),
    featured: z.boolean(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
          display: z.boolean()
        })
      )
      .optional(),
    relatedServices: z.array(z.string()).default([]),
    relatedLocations: z.array(z.string()).default([])
  })
});

export const collections = {
  services,
  locations,
  serviceAreas,
  testimonials,
  blog
};
