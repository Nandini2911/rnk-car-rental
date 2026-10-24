import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Existing navigation redirects
      {
        source: "/services/fleet",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-network",
        destination: "/network",
        permanent: true,
      },
      {
        source: "/blog/fleet",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },

      // Incorrect blog URLs
      {
        source: "/blog/services/corporate-car-rental",
        destination: "/blog/corporate-travel",
        permanent: true,
      },
      {
        source: "/blog/corporate-car-rental-services",
        destination: "/blog/corporate-travel",
        permanent: true,
      },
      {
        source:
          "/blog/event-transportation-checklist-for-hr-admin-teams",
        destination:
          "/blog/event-transportation-checklist-for-admin-teams",
        permanent: true,
      },
      {
        source:
          "/blog/luxury-wedding-car-decoration-ideas--themes-flowers-lighting",
        destination:
          "/blog/luxury-wedding-car-decoration-ideas-themes-flowers-lighting",
        permanent: true,
      },
      {
        source:
          "/blog/luxury-aar-rental-fleet-guide-top-new-models-evs-in-india",
        destination:
          "/blog/luxury-car-rental-fleet-guide-top-new-models-evs-in-india",
        permanent: true,
      },
      {
        source:
          "/blog/business-class-airport-transfers-for-executive",
        destination:
          "/blog/business-class-airport-transfers-for-executives",
        permanent: true,
      },
      {
        source: "/blog/luxury-car-rental-cost-in-india-explaine",
        destination:
          "/blog/luxury-car-rental-cost-in-india-explained",
        permanent: true,
      },

      // Broken website and email links
      {
        source: "/blog/rnk.com",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/rnk.com/contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog/info@rnk.com",
        destination: "/contact",
        permanent: true,
      },

      // Old service URLs
      {
        source: "/event-wedding-transport",
        destination: "/services/event-wedding-transport",
        permanent: true,
      },
      {
        source: "/corporate-car-rental",
        destination: "/services/corporate-car-rental",
        permanent: true,
      },
      {
        source: "/luxury-travel",
        destination: "/services/luxury-travel",
        permanent: true,
      },
      {
        source: "/airport-and-railway-transfers",
        destination: "/services/airport-railway-transfers",
        permanent: true,
      },
      {
        source: "/long-term-car-rental",
        destination: "/services/long-term-car-rental",
        permanent: true,
      },
      {
        source: "/airport",
        destination: "/services/airport-railway-transfers",
        permanent: true,
      },
      {
        source: "/vacation-rentals",
        destination: "/services/vacation-rentals",
        permanent: true,
      },
      {
        source: "/vip-movements",
        destination: "/services/vip-movements",
        permanent: true,
      },
      {
        source: "/localduty",
        destination: "/services/corporate-car-rental",
        permanent: true,
      },
      {
        source: "/hotel-operations",
        destination: "/services/hotel-operations",
        permanent: true,
      },
      {
        source: "/longtermcarrent",
        destination: "/services/long-term-car-rental",
        permanent: true,
      },
      {
        source: "/luxurytravel",
        destination: "/services/luxury-travel",
        permanent: true,
      },
      {
        source: "/vipservices",
        destination: "/services/vip-movements",
        permanent: true,
      },
      {
        source: "/services/luxury-chauffeur-service",
        destination: "/services/vip-movements",
        permanent: true,
      },
      {
        source: "/services/event-wedding-transport/\\[\\]",
        destination: "/services/event-wedding-transport",
        permanent: true,
      },

      // Old informational and booking pages
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/LocalCarBookingForm",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/TermsCondition",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/OurNetwork",
        destination: "/network",
        permanent: true,
      },
      {
        source: "/terms-and-condition.php",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/why-us-old",
        destination: "/why-us",
        permanent: true,
      },
      {
        source: "/privacy-policy.php",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/PrivecyPolicy",
        destination: "/privacy-policy",
        permanent: true,
      },

      // Old individual vehicle URLs
      {
        source: "/fleet/suv-muv/toyota-hycross",
        destination: "/fleet/hycross",
        permanent: true,
      },
      {
        source: "/fleet/suv-muv/toyota-crysta",
        destination: "/fleet/innova-crysta",
        permanent: true,
      },
      {
        source: "/fleet/suv-muv/kia-carens",
        destination: "/fleet/kia-carens",
        permanent: true,
      },
      {
        source: "/fleet/mini-vans/urbania",
        destination: "/fleet/urbania",
        permanent: true,
      },
      {
        source: "/fleet/suv-muv/byd-e6-electric-vehicle",
        destination: "/fleet/byd-E6-electric-vehicle",
        permanent: true,
      },
      {
        source: "/fleet/coaches/27-seater-bus",
        destination: "/fleet/27-seater",
        permanent: true,
      },
      {
        source: "/fleet/suv-muv/toyota-fortuner",
        destination: "/fleet/fortuner",
        permanent: true,
      },
      {
        source: "/fleet/super-luxury-cars/rolls-royce",
        destination: "/fleet/rolls-royce",
        permanent: true,
      },
      {
        source: "/fleet/luxury-cars/mercedes-benz-e-class",
        destination: "/fleet/mb-e-class",
        permanent: true,
      },
      {
        source: "/fleet/mini-vans/toyota-commuter",
        destination: "/fleet/toyota-commuter",
        permanent: true,
      },
      {
        source: "/fleet/luxury-cars/mercedes-benz-gls",
        destination: "/fleet/mb-gls",
        permanent: true,
      },
      {
        source: "/fleet/luxury-cars/mercedes-benz-v-class",
        destination: "/fleet/mb-v-class",
        permanent: true,
      },
      {
        source: "/fleet/luxury-cars/mercedes-benz-s-class",
        destination: "/fleet/mb-s-class",
        permanent: true,
      },
      {
        source: "/fleet/luxury-cars/mercedes-benz-gle",
        destination: "/fleet/mb-gle",
        permanent: true,
      },
      {
        source: "/fleet/super-luxury-cars/hummer",
        destination: "/fleet/hummer",
        permanent: true,
      },
      {
        source: "/fleet/luxury-cars/toyota-camry",
        destination: "/fleet/toyota-camry",
        permanent: true,
      },
      {
        source: "/fleet/sedan/maruti-swift-dzire",
        destination: "/fleet/dzire",
        permanent: true,
      },
      {
        source: "/fleet/coaches/volvo-9600",
        destination: "/fleet/volvo-9600",
        permanent: true,
      },
      {
        source: "/fleet/mini-vans/toyota-coaster",
        destination: "/fleet/toyota-coaster",
        permanent: true,
      },
      {
        source: "/fleet/coaches/43-seater-bus",
        destination: "/fleet/43-seater",
        permanent: true,
      },
      {
        source: "/fleet/sedan/maruti-ciaz",
        destination: "/fleet/ciaz",
        permanent: true,
      },

      // Old fleet categories and unavailable vehicle pages
      {
        source: "/fleets/coaches",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleets/suv-muv",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleets/luxury-cars",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleet/mini-vans/standard-foton",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleet/mini-vans/luxury-foton",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleets/super-luxury-cars",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleets/mini-vans",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleets/sedan",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleet/sedan/hyundai-aura",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/fleet.php",
        destination: "/fleet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;