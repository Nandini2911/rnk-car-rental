import type { Metadata } from "next";
import Link from "next/link";

import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rnk.com"
).replace(/\/$/, "");

const FAQ_URL = `${SITE_URL}/faq`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;
const SERVICE_CATALOG_ID = `${SITE_URL}/#service-catalog`;
const FAQ_PAGE_ID = `${FAQ_URL}#webpage`;
const FAQ_SCHEMA_ID = `${FAQ_URL}#faq`;
const FAQ_CATEGORIES_ID = `${FAQ_URL}#categories`;
const FAQ_OG_IMAGE_URL = `${SITE_URL}/og-home.jpeg`;
const FAQ_TWITTER_IMAGE_URL = `${SITE_URL}/og-home-page.webp`;
const LAST_REVIEWED = "2026-08-06";

const PAGE_TITLE =
  "Car Rental FAQs India | Chauffeur-Driven Cars | RNK Rentals";
const PAGE_DESCRIPTION =
  "Find answers about chauffeur-driven car rentals in India, including pricing, airport transfers, corporate mobility, luxury cars, weddings and long-term rentals.";

const SEO_KEYWORDS = [
  "car rental FAQs India",
  "chauffeur driven car rental India",
  "chauffeur car rental Mumbai",
  "luxury car rental India",
  "corporate car rental India",
  "airport transfer car rental India",
  "railway station transfer car rental",
  "VIP movement car rental India",
  "wedding car rental India",
  "event transport services India",
  "long term car rental India",
  "hotel car rental operations",
  "vacation car rental with chauffeur",
  "premium car rental Mumbai",
  "Pan India car rental services",
  "RNK Rentals FAQ",
];

const SERVICE_DEFINITIONS = [
  {
    name: "Corporate Car Rental",
    serviceType: "Corporate chauffeur-driven car rental",
    href: "/services/corporate-car-rental",
    description:
      "Chauffeur-driven mobility for executives, employees, clients, meetings, site visits and recurring corporate travel.",
  },
  {
    name: "Airport & Railway Transfers",
    serviceType: "Airport and railway transfer service",
    href: "/services/airport-railway-transfers",
    description:
      "Pre-planned chauffeur-driven pickups and drops for airports, railway stations, business travellers, families and groups.",
  },
  {
    name: "Luxury Travel",
    serviceType: "Luxury chauffeur-driven travel",
    href: "/services/luxury-travel",
    description:
      "Premium chauffeur-driven cars for leisure journeys, business travel, special occasions and high-comfort mobility.",
  },
  {
    name: "Hotel Operations",
    serviceType: "Hotel transportation operations",
    href: "/services/hotel-operations",
    description:
      "Managed hotel transport desks, guest airport transfers, local travel and VIP arrival coordination.",
  },
  {
    name: "Vacation Rentals",
    serviceType: "Chauffeur-driven vacation car rental",
    href: "/services/vacation-rentals",
    description:
      "Multi-day chauffeur-driven cars for leisure travel, family vacations, destination trips and curated itineraries.",
  },
  {
    name: "VIP Movements",
    serviceType: "VIP movement and convoy coordination",
    href: "/services/vip-movements",
    description:
      "Discreet vehicle, chauffeur, route and multi-car coordination for VIP guests, leaders, artists and delegations.",
  },
  {
    name: "Long Term Car Rental",
    serviceType: "Long-term chauffeur-driven car rental",
    href: "/services/long-term-car-rental",
    description:
      "Extended vehicle and chauffeur programmes for companies, executives, projects, hotels and recurring travel.",
  },
  {
    name: "Event / Wedding Transport",
    serviceType: "Event and wedding transportation",
    href: "/services/event-wedding-transport",
    description:
      "Fleet planning and guest movement coordination for weddings, conferences, launches, celebrations and corporate events.",
  },
] as const;

const SOCIAL_PROFILES = [
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_URL,
].filter((url): url is string => Boolean(url));

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  applicationName: "RNK Rentals",
  authors: [
    {
      name: "RNK Rentals",
      url: SITE_URL,
    },
  ],
  creator: "RNK Rentals",
  publisher: "Ramniranjan Kedia Rent A Car Pvt. Ltd.",
  category: "Chauffeur-Driven Car Rental",
  alternates: {
    canonical: FAQ_URL,
    languages: {
      "en-IN": FAQ_URL,
    },
  },
  keywords: SEO_KEYWORDS,
 openGraph: {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: FAQ_URL,
  siteName: "RNK Rentals",
  locale: "en_IN",
  type: "website",
  images: [
    {
      url: FAQ_OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "RNK Rentals chauffeur-driven car rental FAQs in India",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  images: [FAQ_TWITTER_IMAGE_URL],
},
 robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
  },
};

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    eyebrow: "Getting Started",
    title: "Car rental basics",
    description:
      "Simple answers for first-time customers planning a local, airport, business or special-event journey.",
    items: [
      {
        question: "What is a chauffeur-driven car rental?",
        answer:
          "A chauffeur-driven car rental includes a vehicle with a professional driver for the confirmed route, duration and schedule. The rental company coordinates the vehicle, chauffeur and journey plan, so the customer does not need to drive.",
      },
      {
        question: "How does booking a car with RNK Rentals work?",
        answer:
          "Share your route, date, timings, passenger count, occasion and preferred vehicle category. RNK then recommends a suitable fleet option, shares a quotation, confirms the itinerary after approval and assigns the vehicle, chauffeur and coordinator.",
      },
      {
        question: "What information should I provide when requesting a car?",
        answer:
          "Provide the pickup and drop locations, travel date, reporting time, estimated duration, passenger count, luggage requirement, preferred car category and any special instructions such as VIP protocol, child seats or multiple stops.",
      },
      {
        question: "Can I book a car for a few hours, a full day or multiple days?",
        answer:
          "Yes. RNK can structure hourly, full-day, multi-day and long-term chauffeur-driven rental requirements. The most suitable package depends on the route, usage hours, kilometres, city and vehicle category.",
      },
      {
        question: "Does RNK offer self-drive cars?",
        answer:
          "RNK primarily focuses on premium chauffeur-driven mobility. Contact the team directly to confirm whether any self-drive option is available for your location and dates.",
      },
    ],
  },
  {
    id: "pricing-booking",
    eyebrow: "Pricing & Booking",
    title: "Cost, quotations and confirmations",
    description:
      "Understand what affects the price and what to review before confirming a rental.",
    items: [
      {
        question: "How much does a chauffeur-driven car rental cost in India?",
        answer:
          "Pricing depends on the city, vehicle category, rental duration, kilometres, route, reporting time and any special coordination required. RNK shares a customised quotation after reviewing the complete journey requirement.",
      },
      {
        question: "What factors affect luxury car rental pricing?",
        answer:
          "The main factors are the selected vehicle, availability, city, duty hours, distance, pickup and drop locations, outstation travel, overnight use, event logistics and additional requests. Premium and super-luxury vehicles may require earlier confirmation.",
      },
      {
        question: "Are tolls, parking, interstate taxes and chauffeur allowances included?",
        answer:
          "Inclusions vary by quotation and route. Review the confirmed proposal for base rental, kilometre and hour limits, tolls, parking, taxes, chauffeur allowances, night charges and any outstation expenses before booking.",
      },
      {
        question: "How far in advance should I book a rental car?",
        answer:
          "Book as early as possible for weddings, events, VIP movements, peak travel dates and premium vehicle categories. Standard airport and corporate bookings may be possible at shorter notice, subject to fleet availability.",
      },
      {
        question: "Can I change or cancel a confirmed booking?",
        answer:
          "Changes and cancellations are handled according to vehicle availability and the terms stated in the confirmed quotation. Share any change immediately so the RNK team can review the schedule, fleet allocation and applicable charges.",
      },
      {
        question: "Will I receive booking and billing documentation?",
        answer:
          "RNK confirms the agreed itinerary, vehicle category, commercial terms and operational details before the journey. Billing documentation is provided according to the confirmed booking and applicable tax requirements.",
      },
    ],
  },
  {
    id: "chauffeurs-safety",
    eyebrow: "Chauffeurs & Journey Support",
    title: "Comfort, coordination and safety",
    description:
      "What customers can expect before, during and after a chauffeur-driven journey.",
    items: [
      {
        question: "Does every RNK rental include a chauffeur?",
        answer:
          "RNK's core service is chauffeur-driven car rental. The chauffeur assignment, reporting time, route and duty schedule are coordinated as part of the confirmed booking.",
      },
      {
        question: "How does RNK help ensure an on-time pickup?",
        answer:
          "The itinerary is confirmed in advance, the vehicle is reserved and the route is planned before reporting. For larger requirements, RNK can also assign a dedicated coordinator to manage vehicle movements and timing.",
      },
      {
        question: "Can I request multiple stops or itinerary changes during the journey?",
        answer:
          "Yes, but changes should be shared as early as possible. Additional stops, extended hours or route changes may affect availability, kilometres, duty time and the final billing.",
      },
      {
        question: "Does RNK provide 24/7 customer support?",
        answer:
          "RNK highlights 24/7 support for active travel requirements. The exact support and escalation contacts are shared during booking or journey coordination.",
      },
      {
        question: "Can I request child seats, GPS or other add-on services?",
        answer:
          "Add-ons such as child seats and other travel requirements may be requested at the time of booking. Availability can vary by city, vehicle and travel date, so early confirmation is recommended.",
      },
    ],
  },
  {
    id: "corporate-mobility",
    eyebrow: "Corporate Mobility",
    title: "Business and employee transportation",
    description:
      "Answers for companies that need reliable cars for executives, teams, clients and regular operations.",
    items: [
      {
        question: "What is corporate car rental?",
        answer:
          "Corporate car rental is a planned chauffeur-driven transport service for executives, employees, clients, airport transfers, meetings, site visits and recurring business travel. It can cover individual rides or coordinated fleet requirements.",
      },
      {
        question: "Can RNK manage regular employee and executive travel?",
        answer:
          "Yes. RNK provides corporate car rental and can structure recurring mobility around company routes, schedules, vehicle preferences, reporting requirements and service locations.",
      },
      {
        question: "Can a company book multiple cars for meetings or conferences?",
        answer:
          "Yes. Share the guest list, arrival schedule, venues, route plan and vehicle categories. RNK can recommend a fleet mix and coordinate multiple vehicles under one movement plan.",
      },
      {
        question: "Does RNK support monthly or long-term corporate rentals?",
        answer:
          "Yes. Long-term car rental solutions can be planned for ongoing business use. The programme is customised according to vehicle category, city, duty pattern, kilometres, operating hours and contract duration.",
      },
      {
        question: "Can RNK manage transport across more than one Indian city?",
        answer:
          "Yes. RNK states that its network covers more than 170 cities across India. Multi-city requirements should be shared in advance so availability and local coordination can be planned city by city.",
      },
    ],
  },
  {
    id: "airport-transfers",
    eyebrow: "Airport & Railway Transfers",
    title: "Reliable arrival and departure travel",
    description:
      "Planning pickups for flights, trains, business guests, families and groups.",
    items: [
      {
        question: "Can I book RNK for an airport pickup or drop?",
        answer:
          "Yes. RNK provides airport and railway transfer services. Share the flight or train details, terminal or station, reporting time, passenger count, luggage and destination when requesting the booking.",
      },
      {
        question: "What happens if my flight or train is delayed?",
        answer:
          "Share the updated arrival information as soon as possible. The RNK team can review the chauffeur schedule and adjust coordination subject to vehicle availability and the confirmed booking terms.",
      },
      {
        question: "Which car should I book for an airport transfer?",
        answer:
          "Choose according to passenger count, luggage and comfort preference. A sedan may suit one or two travellers, while an SUV, MUV, mini van or coach may be better for families, groups or additional luggage.",
      },
      {
        question: "Can RNK manage airport transfers for corporate guests or delegations?",
        answer:
          "Yes. RNK can coordinate multiple arrivals and departures for executives, clients, speakers, delegates and event guests. A consolidated manifest and clear arrival schedule help the team plan the fleet efficiently.",
      },
      {
        question: "Can I book a return airport transfer in advance?",
        answer:
          "Yes. Pickup and return journeys can be planned together. Share both itineraries so the quotation and vehicle allocation can be confirmed accurately.",
      },
    ],
  },
  {
    id: "luxury-vip",
    eyebrow: "Luxury & VIP Travel",
    title: "Premium journeys and discreet movements",
    description:
      "Vehicle selection and coordination for premium guests, leaders, artists and special occasions.",
    items: [
      {
        question: "What is included in a luxury car rental service?",
        answer:
          "A luxury rental generally includes a premium vehicle, professional chauffeur and pre-planned journey coordination. Exact inclusions depend on the selected model, city, duration, route and confirmed quotation.",
      },
      {
        question: "Can I request a specific luxury car model?",
        answer:
          "You can request a preferred make, model or category. Final allocation depends on availability, location and date. RNK may recommend a comparable alternative when the exact model is unavailable.",
      },
      {
        question: "What are VIP movement services?",
        answer:
          "VIP movement services coordinate vehicles, chauffeurs, schedules, routes and on-ground communication for high-profile travellers. The objective is to maintain punctuality, comfort, discretion and smooth movement between locations.",
      },
      {
        question: "Can RNK arrange a convoy for VIP guests?",
        answer:
          "Yes. RNK can plan multi-vehicle movements for VIP guests, delegations and events. Share the complete schedule, passenger hierarchy, security instructions and venue access information during planning.",
      },
      {
        question: "Does RNK provide cars for luxury leisure travel and vacations?",
        answer:
          "Yes. RNK lists luxury travel and vacation rentals among its services. Journeys can be planned around the destination, travel duration, number of passengers and preferred level of comfort.",
      },
    ],
  },
  {
    id: "events-weddings",
    eyebrow: "Events & Weddings",
    title: "Guest cars, convoys and celebration transport",
    description:
      "Practical answers for weddings, launches, conferences and large-scale guest movements.",
    items: [
      {
        question: "Does RNK provide wedding car rental services?",
        answer:
          "Yes. RNK provides event and wedding transport, including cars for the couple, families, VIP guests and coordinated guest movements. The fleet plan is created around the venue, schedule, guest count and route requirements.",
      },
      {
        question: "Can RNK manage a wedding convoy with multiple cars?",
        answer:
          "Yes. Share the number of guests, pickup points, venues, functions, reporting times and preferred categories. RNK can recommend a mix of luxury cars, SUVs, sedans, mini vans or coaches.",
      },
      {
        question: "How early should wedding transport be booked?",
        answer:
          "Book as early as possible, especially during the wedding season or when you need premium models and multiple matching vehicles. Early planning gives more time for route checks, vehicle allocation and guest manifests.",
      },
      {
        question: "Can RNK handle transport for corporate events and conferences?",
        answer:
          "Yes. RNK can coordinate airport arrivals, hotel transfers, venue shuttles, VIP cars and group movements for conferences, launches, award functions and corporate events.",
      },
      {
        question: "What details are needed for an event transport plan?",
        answer:
          "Share the event dates, venues, guest count, arrival and departure schedules, pickup points, vehicle preferences, VIP list and contact persons. A clear movement chart helps RNK plan the right fleet and coordination team.",
      },
    ],
  },
  {
    id: "long-term-hotel",
    eyebrow: "Long-Term & Hospitality",
    title: "Extended rentals and hotel operations",
    description:
      "Solutions for recurring travel, hospitality desks, guest transfers and longer mobility programmes.",
    items: [
      {
        question: "What is a long-term car rental?",
        answer:
          "A long-term car rental provides a vehicle and chauffeur for an extended period under an agreed usage plan. It can support executives, projects, temporary assignments, hospitality operations or ongoing business travel.",
      },
      {
        question: "Is long-term rental better than booking separate daily rides?",
        answer:
          "It can be more practical when travel is frequent and predictable. A long-term plan can simplify vehicle availability, chauffeur coordination, billing and service consistency, depending on the agreed scope.",
      },
      {
        question: "What does hotel car rental operation mean?",
        answer:
          "Hotel operations involve coordinating chauffeur-driven cars for hotel guests, airport transfers, local travel, VIP arrivals and other transport needs linked to the property. The operating model is customised to the hotel and expected demand.",
      },
      {
        question: "Can RNK support hotels with guest airport transfers?",
        answer:
          "Yes. RNK lists hotel operations and airport transfers among its services. Hotels can share guest itineraries and service standards so vehicles and chauffeurs can be planned accordingly.",
      },
      {
        question: "Can a long-term rental programme use different vehicle categories?",
        answer:
          "Yes. The fleet mix can be planned around passenger profiles, routes, operating needs and availability. RNK can recommend sedans, SUVs, MUVs, luxury cars, mini vans or coaches for different duties.",
      },
    ],
  },
  {
    id: "fleet-network",
    eyebrow: "Fleet & Network",
    title: "Vehicles, cities and availability",
    description:
      "Choosing the right category and understanding RNK's India-wide service network.",
    items: [
      {
        question: "What types of vehicles are available with RNK Rentals?",
        answer:
          "RNK presents a fleet that includes super-luxury cars, luxury cars, SUVs and MUVs, sedans, mini vans and coaches. Availability depends on the city, date and exact booking requirement.",
      },
      {
        question: "How do I choose the right rental vehicle?",
        answer:
          "Consider the number of passengers, luggage, distance, road conditions, occasion and desired comfort level. Share these details with RNK so the team can recommend a suitable vehicle category.",
      },
      {
        question: "Does RNK provide car rentals across India?",
        answer:
          "Yes. RNK states that it serves more than 170 cities across India. Confirm the exact pickup city, route and dates with the team because fleet availability may differ by location.",
      },
      {
        question: "Can I book a car in one city and travel to another city?",
        answer:
          "Outstation and intercity travel can be requested. The route, state taxes, kilometres, duration, chauffeur allowance and return plan will be considered in the quotation.",
      },
      {
        question: "Can RNK arrange cars for large groups?",
        answer:
          "Yes. For larger groups, RNK can recommend MUVs, mini vans, coaches or a combination of vehicles. Share the passenger count, luggage and movement schedule during planning.",
      },
    ],
  },
  {
    id: "about-rnk",
    eyebrow: "About RNK",
    title: "Company, experience and contact details",
    description:
      "Key information about Ramniranjan Kedia Rent A Car Pvt. Ltd. and how to reach the team.",
    items: [
      {
        question: "What is RNK Rentals?",
        answer:
          "RNK Rentals is the chauffeur-driven car rental service of Ramniranjan Kedia Rent A Car Pvt. Ltd. It provides corporate travel, airport and railway transfers, luxury travel, hotel operations, vacation rentals, VIP movements, long-term rentals and event or wedding transport.",
      },
      {
        question: "How long has RNK been in the car rental industry?",
        answer:
          "RNK states that it has been offering car rental services since 1969, representing more than five decades of experience in chauffeur-driven mobility.",
      },
      {
        question: "Where is RNK Rentals located?",
        answer:
          "RNK's head office address is Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi, Mumbai 400025, Maharashtra, India.",
      },
      {
        question: "How can I contact RNK Rentals?",
        answer:
          "You can call RNK at +91 9167977799 or email info@rnk.com. For a faster quotation, include your travel date, route, passenger count, preferred vehicle and required timings.",
      },
      {
        question: "Why do customers choose RNK Rentals?",
        answer:
          "RNK positions its service around professionalism, punctuality, a wide vehicle selection, transparent packages, customer support, flexible rentals and premium chauffeur-driven travel across India.",
      },
    ],
  },
];

const allFaqItems = faqCategories.flatMap((category) => category.items);

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const serviceEntities = SERVICE_DEFINITIONS.map((service) => {
  const serviceUrl = `${SITE_URL}${service.href}`;

  return {
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: serviceUrl,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+91 9167977799",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
    },
  };
});

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${SITE_URL}/rnk_logo.webp`,
      contentUrl: `${SITE_URL}/rnk_logo.webp`,
      caption: "RNK Rentals Logo",
      representativeOfPage: false,
    },
    {
      "@type": "ImageObject",
      "@id": `${FAQ_URL}#primaryimage`,
      url: FAQ_OG_IMAGE_URL,
      contentUrl: FAQ_OG_IMAGE_URL,
      caption: "RNK Rentals chauffeur-driven car rental FAQs in India",
      representativeOfPage: true,
    },
    {
      "@type": "AutoRental",
      "@id": ORGANIZATION_ID,
      name: "RNK Rentals",
      legalName: "Ramniranjan Kedia Rent A Car Pvt. Ltd.",
      alternateName: [
        "Ramniranjan Kedia Rent A Car",
        "RNK Rent A Car",
        "RNK",
      ],
      url: SITE_URL,
      slogan: "Drive Luxury. Not Just a Car.",
      description:
        "RNK Rentals provides premium chauffeur-driven car rentals, corporate mobility, airport and railway transfers, luxury travel, hotel operations, vacation rentals, VIP movements, long-term rentals and event or wedding transport across India.",
      logo: {
        "@id": LOGO_ID,
      },
      image: {
        "@id": `${FAQ_URL}#primaryimage`,
      },
      foundingDate: "1969",
      telephone: "+91 9167977799",
      email: "info@rnk.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+91 9167977799",
          email: "info@rnk.com",
          areaServed: "IN",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+91 9167977799",
          email: "info@rnk.com",
          areaServed: "IN",
          availableLanguage: ["English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400025",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceArea: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "Chauffeur-driven car rentals",
        "Corporate mobility",
        "Airport and railway transfers",
        "Luxury travel",
        "VIP movements",
        "Wedding transport",
        "Long-term car rentals",
        "Hotel transportation operations",
      ],
      hasOfferCatalog: {
        "@id": SERVICE_CATALOG_ID,
      },
      ...(SOCIAL_PROFILES.length > 0
        ? {
            sameAs: SOCIAL_PROFILES,
          }
        : {}),
    },
    {
      "@type": "OfferCatalog",
      "@id": SERVICE_CATALOG_ID,
      name: "RNK Chauffeur-Driven Car Rental Services",
      description:
        "RNK Rentals service catalogue covering corporate mobility, airport transfers, luxury travel, hotel operations, vacation rentals, VIP movements, long-term rentals and event or wedding transport.",
      url: `${SITE_URL}/services`,
      numberOfItems: SERVICE_DEFINITIONS.length,
      itemListElement: SERVICE_DEFINITIONS.map((service, index) => {
        const serviceUrl = `${SITE_URL}${service.href}`;

        return {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Offer",
            url: serviceUrl,
            itemOffered: {
              "@id": `${serviceUrl}#service`,
            },
          },
        };
      }),
    },
    ...serviceEntities,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "RNK Rentals",
      alternateName: "RNK Rent A Car",
      description:
        "Premium chauffeur-driven car rental services for corporate, airport, luxury, VIP, wedding, event and long-term travel across India.",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${FAQ_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Frequently Asked Questions",
          item: FAQ_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": FAQ_CATEGORIES_ID,
      name: "RNK Rentals FAQ Categories",
      numberOfItems: faqCategories.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: faqCategories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: category.eyebrow,
        url: `${FAQ_URL}#${category.id}`,
      })),
    },
    {
      "@type": "WebPage",
      "@id": FAQ_PAGE_ID,
      url: FAQ_URL,
      name: PAGE_TITLE,
      headline: "Car Rental Questions, Clearly Answered by RNK Rentals",
      description: PAGE_DESCRIPTION,
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      breadcrumb: {
        "@id": `${FAQ_URL}#breadcrumb`,
      },
      primaryImageOfPage: {
        "@id": `${FAQ_URL}#primaryimage`,
      },
      mainEntity: {
        "@id": FAQ_SCHEMA_ID,
      },
      hasPart: [
        {
          "@id": FAQ_SCHEMA_ID,
        },
        {
          "@id": FAQ_CATEGORIES_ID,
        },
      ],
      mentions: SERVICE_DEFINITIONS.map((service) => ({
        "@id": `${SITE_URL}${service.href}#service`,
      })),
      keywords: SEO_KEYWORDS.join(", "),
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      datePublished: LAST_REVIEWED,
      dateModified: LAST_REVIEWED,
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": FAQ_SCHEMA_ID,
  url: FAQ_URL,
  name: "RNK Rentals Frequently Asked Questions",
  headline: "Chauffeur-Driven Car Rental FAQs for India",
  description: PAGE_DESCRIPTION,
  isPartOf: {
    "@id": WEBSITE_ID,
  },
  about: {
    "@id": ORGANIZATION_ID,
  },
  publisher: {
    "@id": ORGANIZATION_ID,
  },
  primaryImageOfPage: {
    "@id": `${FAQ_URL}#primaryimage`,
  },
  breadcrumb: {
    "@id": `${FAQ_URL}#breadcrumb`,
  },
  keywords: SEO_KEYWORDS.join(", "),
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  datePublished: LAST_REVIEWED,
  dateModified: LAST_REVIEWED,
  mainEntity: allFaqItems.map((faq, index) => ({
    "@type": "Question",
    "@id": `${FAQ_URL}#question-${index + 1}`,
    url: `${FAQ_URL}#question-${index + 1}`,
    name: faq.question,
    answerCount: 1,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
      inLanguage: "en-IN",
    },
  })),
};

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M7.1 3.5 9.4 8l-2.1 1.6c1.2 2.7 3.4 4.9 6.1 6.1l1.6-2.1 4.5 2.3c.4.2.6.7.5 1.1l-.6 2.7c-.1.5-.6.8-1.1.8C10.1 20.5 3.5 13.9 3.5 5.7c0-.5.3-1 .8-1.1L7 3.5c.1 0 .1 0 .1 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m5 7.5 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.5 18h2.3a3 3 0 0 0 3-3v-1.2a3 3 0 0 1 3-3H18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CarLineArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 560 250"
      fill="none"
      className="h-auto w-full"
    >
      <path
        d="M51 170h22l22-57c7-18 22-29 42-31l165-14c21-2 40 5 55 20l44 43 75 15c19 4 33 21 33 41v12H472"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M108 170h310M144 115l194-16 38 36H126l18-20Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M236 104v31M357 105l-21 30M91 157h40M421 149l46 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="143" cy="184" r="31" stroke="currentColor" strokeWidth="3" />
      <circle cx="143" cy="184" r="12" stroke="currentColor" strokeWidth="3" />
      <circle cx="416" cy="184" r="31" stroke="currentColor" strokeWidth="3" />
      <circle cx="416" cy="184" r="12" stroke="currentColor" strokeWidth="3" />
      <path
        d="M76 199h34M176 199h207M449 199h43"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F3EFEA] text-[#171717]">
      <NavBar />

      <script
        id="rnk-faq-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(pageStructuredData),
        }}
      />

      <script
        id="rnk-faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(faqStructuredData),
        }}
      />

      {/* PREMIUM HERO */}
      <section className="relative isolate overflow-hidden bg-[#090909] px-5 pb-28 pt-36 text-white sm:px-7 sm:pb-32 sm:pt-40 lg:px-10 lg:pb-40 lg:pt-48">
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_83%_18%,rgba(127,29,29,0.58),transparent_25%),radial-gradient(circle_at_16%_82%,rgba(127,29,29,0.22),transparent_28%),linear-gradient(135deg,#080808_0%,#111111_58%,#080808_100%)]" />
        <div className="absolute inset-0 -z-20 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-20 top-24 -z-10 h-[430px] w-[430px] rounded-full border border-white/10" />
        <div className="absolute -right-2 top-44 -z-10 h-[270px] w-[270px] rounded-full border border-white/10" />
        <div className="absolute left-[7%] top-[45%] -z-10 h-px w-32 bg-gradient-to-r from-transparent via-red-700 to-transparent" />
        <div className="absolute bottom-8 right-2 select-none text-[150px] font-black leading-none tracking-[-0.09em] text-white/[0.025] sm:text-[220px] lg:text-[310px]">
          RNK
        </div>

        <div className="mx-auto max-w-[1450px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/45"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="h-px w-7 bg-red-700" aria-hidden="true" />
            <span aria-current="page" className="text-white">
              Frequently Asked Questions
            </span>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] xl:gap-20">
            <div className="relative z-10">
              <div className="mb-7 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.23em] text-white/80 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,.9)]" />
                  RNK Rentals · India
                </span>
                <span className="text-xs font-medium text-white/45">
                  Since 1969
                </span>
              </div>

              <h1 className="max-w-5xl text-[48px] font-black leading-[0.91] tracking-[-0.072em] text-white sm:text-[68px] md:text-[82px] lg:text-[88px] xl:text-[106px]">
                Every journey
                <span className="block text-red-700">starts with clarity.</span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-lg lg:text-xl lg:leading-9">
                Clear, practical answers about chauffeur-driven rentals, luxury
                vehicles, corporate mobility, airport transfers, VIP movements,
                weddings, pricing and booking across India.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-red-800 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_45px_rgba(127,29,29,.35)] transition duration-300 hover:-translate-y-1 hover:bg-red-700"
                >
                  Request a quotation
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRightIcon />
                  </span>
                </Link>

                <Link
                  href="/fleet"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/10"
                >
                  Explore the fleet
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-8 -z-10 rounded-full bg-red-900/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[38px] border border-white/15 bg-white/[0.075] p-5 shadow-[0_40px_120px_rgba(0,0,0,.5)] backdrop-blur-2xl sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="rounded-[30px] border border-white/10 bg-black/35 p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                        RNK Journey Desk
                      </p>
                      <p className="mt-2 text-lg font-bold text-white">
                        Premium mobility, thoughtfully managed.
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-700/40 bg-red-900/25 text-red-500">
                      <RouteIcon />
                    </div>
                  </div>

                  <div className="mt-8 text-red-700">
                    <CarLineArt />
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {[
                      ["1969", "Established"],
                      ["170+", "Cities"],
                      ["24/7", "Support"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-[20px] border border-white/10 bg-white/[0.055] p-4"
                      >
                        <p className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
                          {value}
                        </p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 sm:text-[10px]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.045] px-5 py-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      Answers available
                    </p>
                    <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-white">
                      {allFaqItems.length} FAQs
                    </p>
                  </div>
                  <a
                    href="#faq-directory"
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-red-700 hover:text-white"
                    aria-label="Explore frequently asked questions"
                  >
                    <span className="rotate-90 transition-transform group-hover:translate-y-0.5">
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING TRUST STRIP */}
      <section className="relative z-20 -mt-16 overflow-visible px-5 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_28px_80px_rgba(0,0,0,.13)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "One point of contact", "From enquiry to on-ground movement."],
            ["02", "Curated fleet planning", "Vehicle categories matched to your journey."],
            ["03", "Professional chauffeurs", "Planned reporting, routes and coordination."],
            ["04", "Pan-India network", "Mobility support across 170+ cities."],
          ].map(([number, title, copy], index) => (
            <div
              key={title}
              className={`group relative p-6 transition duration-300 hover:bg-[#FCF8F6] sm:p-7 ${
                index < 3 ? "lg:border-r lg:border-black/8" : ""
              } ${index % 2 === 0 ? "sm:border-r sm:border-black/8 lg:border-r" : ""}`}
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-800 transition-all duration-500 group-hover:w-full" />
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-800">
                {number}
              </p>
              <h2 className="mt-3 text-lg font-black tracking-[-0.035em] text-black">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-black/50">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY DIRECTORY */}
      <section
        id="faq-directory"
        className="relative overflow-hidden px-5 pb-14 pt-24 sm:px-7 lg:px-10 lg:pb-20 lg:pt-32"
      >
        <div className="absolute right-[-80px] top-24 -z-10 h-72 w-72 rounded-full bg-red-900/[0.07] blur-3xl" />
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-red-800">
                FAQ Directory
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-black sm:text-5xl">
                Find the right answer faster.
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-black/55 sm:text-base lg:justify-self-end">
              Browse by journey type—from first-time bookings and pricing to
              corporate mobility, VIP travel, weddings, long-term rentals and
              RNK&apos;s nationwide network.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {faqCategories.map((category, index) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="group relative min-h-[170px] overflow-hidden rounded-[26px] border border-black/10 bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,.035)] transition duration-300 hover:-translate-y-1.5 hover:border-red-800/30 hover:shadow-[0_22px_55px_rgba(127,29,29,.10)]"
              >
                <div className="absolute -bottom-9 -right-3 text-[86px] font-black leading-none tracking-[-0.09em] text-black/[0.035] transition duration-500 group-hover:text-red-900/[0.08]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EFEA] text-[10px] font-black text-red-800 transition group-hover:bg-red-800 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-bold text-black/35">
                      {category.items.length} answers
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-black leading-6 tracking-[-0.035em] text-black">
                      {category.eyebrow}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-red-800">
                      Explore
                      <ArrowUpRightIcon />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="!overflow-visible px-5 pb-24 pt-8 sm:px-7 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[330px_minmax(0,1fr)] xl:gap-16">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="overflow-hidden rounded-[32px] bg-[#0A0A0A] p-7 text-white shadow-[0_28px_80px_rgba(0,0,0,.17)] sm:p-8">
                <div className="absolute" />
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500">
                  Personal assistance
                </p>
                <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.06em]">
                  Still need a direct answer?
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/52">
                  Share your city, route, date, passenger count and preferred
                  vehicle. RNK&apos;s team will help plan the right solution.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="tel:+919167977799"
                    className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.055] p-4 transition hover:border-red-700/50 hover:bg-red-900/20"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-800 text-white">
                      <PhoneIcon />
                    </span>
                    <span>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                        Call RNK
                      </span>
                      <span className="mt-1 block text-base font-black text-white">
                        +91 9167977799
                      </span>
                    </span>
                  </a>

                  <a
                    href="mailto:info@rnk.com"
                    className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.055] p-4 transition hover:border-red-700/50 hover:bg-red-900/20"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black">
                      <MailIcon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                        Write to us
                      </span>
                      <span className="mt-1 block truncate text-base font-black text-white">
                        info@rnk.com
                      </span>
                    </span>
                  </a>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Helpful details to share
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Date", "Route", "Passengers", "Vehicle", "Timings"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/55"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[26px] border border-red-900/15 bg-[#FFF9F7] p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-800">
                  Booking note
                </p>
                <p className="mt-3 text-sm leading-7 text-black/55">
                  Final vehicle availability, commercial terms and inclusions are
                  confirmed in your RNK quotation.
                </p>
              </div>
            </aside>

            <div className="space-y-20">
              {faqCategories.map((category, categoryIndex) => (
                <section
                  id={category.id}
                  key={category.id}
                  className="scroll-mt-36 !overflow-visible"
                >
                  <div className="relative mb-8 overflow-hidden rounded-[30px] border border-black/8 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,.045)] sm:p-9">
                    <div className="absolute inset-y-0 left-0 w-1.5 bg-red-800" />
                    <div className="absolute -bottom-14 right-3 text-[150px] font-black leading-none tracking-[-0.1em] text-black/[0.025]">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </div>
                    <div className="relative z-10 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
                      <span className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-black text-sm font-black text-white shadow-[0_10px_25px_rgba(0,0,0,.16)]">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-800">
                          {category.eyebrow}
                        </p>
                        <h2 className="mt-2 max-w-3xl text-3xl font-black leading-[1.02] tracking-[-0.055em] text-black sm:text-4xl lg:text-5xl">
                          {category.title}
                        </h2>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-black/52 sm:text-base">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.items.map((faq, faqIndex) => (
                      <details
                        key={faq.question}
                        className="group overflow-hidden rounded-[24px] border border-black/9 bg-white shadow-[0_10px_30px_rgba(0,0,0,.035)] transition duration-300 open:border-red-800/25 open:shadow-[0_18px_50px_rgba(127,29,29,.09)]"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3EFEA] text-[10px] font-black text-red-800 transition group-open:bg-red-800 group-open:text-white">
                              {String(faqIndex + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-[15px] font-black leading-7 tracking-[-0.025em] text-black sm:text-lg">
                              {faq.question}
                            </h3>
                          </div>

                          <span
                            aria-hidden="true"
                            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#F7F4F0] transition duration-300 group-hover:border-red-800/30 group-open:rotate-45 group-open:border-red-800 group-open:bg-red-800"
                          >
                            <span className="absolute h-px w-4 bg-black transition group-open:bg-white" />
                            <span className="absolute h-4 w-px bg-black transition group-open:bg-white" />
                          </span>
                        </summary>

                        <div className="border-t border-black/7 bg-[#FCFAF8] px-5 pb-7 pt-5 sm:px-7 sm:pb-8">
                          <div className="grid gap-4 sm:grid-cols-[32px_1fr]">
                            <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-red-800 text-[10px] font-black text-white sm:flex">
                              A
                            </span>
                            <p className="max-w-4xl text-[15px] leading-8 text-black/62 sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="relative overflow-hidden bg-red-900 px-5 py-20 text-white sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_35%,rgba(255,255,255,.16),transparent_28%),linear-gradient(135deg,#5f111c_0%,#7f1d1d_58%,#4a0b14_100%)]" />
        <div className="absolute -right-16 top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute -right-1 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute bottom-[-36px] right-7 text-[160px] font-black leading-none tracking-[-0.09em] text-white/[0.045] sm:text-[220px]">
          GO
        </div>

        <div className="relative mx-auto max-w-[1320px]">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.27em] text-white/55">
                Your journey, professionally planned
              </p>
              <h2 className="mt-5 max-w-5xl text-4xl font-black leading-[0.96] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                Tell us where you&apos;re going.
                <span className="block text-white/55">RNK handles the movement.</span>
              </h2>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
                Share your route, date, passenger count and preferred vehicle.
                The RNK team will recommend the right chauffeur-driven rental
                solution and provide a customised quotation.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-red-900 shadow-[0_18px_45px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:px-10 sm:py-5"
            >
              Book your journey
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#0A0A0A] px-5 py-7 text-center text-[10px] font-medium uppercase tracking-[0.13em] text-white/35 sm:px-7 lg:px-10">
        Last reviewed: 6 August 2026 · Service availability, fleet allocation,
        pricing and inclusions remain subject to the confirmed RNK quotation.
      </div>

   <RnkFooter />
    </main>
  );
}