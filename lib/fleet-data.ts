// lib/fleet-data.ts

export type FleetCategoryId =
  | "all"
  | "super-luxury"
  | "luxury"
  | "suv-muv"
  | "sedan"
  | "mini-vans"
  | "coaches";

export type FleetCategory = {
  id: FleetCategoryId;
  label: string;
  tagline: string;
};

export type FleetCar = {
  id: string;
  name: string;
  category: FleetCategoryId;
  seating: string;
  doors: string;
  luggage: string;
  image?: string;
};

export const CATEGORIES: FleetCategory[] = [
   {
    id: "all",
    label: "All Fleet",
    tagline: "Explore the complete RNK fleet across all categories.",
  },
  {
    id: "super-luxury",
    label: "Super Luxury Cars",
    tagline: "Rolls Royce & Hummer for the most exclusive movements.",
  },
  {
    id: "luxury",
    label: "Luxury Cars",
    tagline: "Mercedes-Benz luxury range for business, events & more.",
  },
  {
    id: "suv-muv",
    label: "SUV / MUV",
    tagline: "Premium SUVs & MUVs for family, group & leisure travel.",
  },
  {
    id: "sedan",
    label: "Sedan",
    tagline: "Smart, efficient sedans for everyday corporate mobility.",
  },
  {
    id: "mini-vans",
    label: "Mini Vans",
    tagline: "High-comfort vans for crew, artists & intimate groups.",
  },
  {
    id: "coaches",
    label: "Coaches",
    tagline: "Mini & large coaches for conferences, weddings & tours.",
  },
];

export const FLEET_CARS: FleetCar[] = [
  // SUPER LUXURY (2)
  {
    id: "rolls-royce",
    name: "Rolls Royce",
    category: "super-luxury",
    seating: "3+1",
    doors: "4",
    luggage: "2",
    image: "/RollsRoyals_1.webp",
  },
  {
    id: "hummer",
    name: "Hummer",
    category: "super-luxury",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    image: "/Hummer_1.webp",
  },

  // LUXURY (6)
  {
    id: "mb-s-class",
    name: "Mercedes Benz S Class",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Mercedes_Sclass_1.webp",
  },
  {
    id: "mb-gls",
    name: "Mercedes Benz GLS",
    category: "luxury",
    seating: "5+1",
    doors: "4",
    luggage: "2",
    image: "/Mercedes_GLS_1.webp",
  },
  {
    id: "mb-v-class",
    name: "Mercedes Benz V Class",
    category: "luxury",
    seating: "5+1",
    doors: "4",
    luggage: "4",
    image: "/Mercedes_V_Class_1.webp",
  },
  {
    id: "mb-gle",
    name: "Mercedes Benz GLE",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    image: "/Mercedes_GLE_1.webp",
  },
  {
    id: "mb-e-class",
    name: "Mercedes Benz E Class",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Mercedes_E_Class_1.webp",
  },
  {
    id: "toyota-camry",
    name: "Toyota Camry",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    image: "/toyota_camry_1.webp",
  },

  // SUV / MUV (3)
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    category: "suv-muv",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    image: "/Toyota_Fortuner_1.webp",
  },
  {
    id: "hycross",
    name: "Toyota Hycross",
    category: "suv-muv",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    image: "/Toyota_Hycross_1.webp",
  },
  {
    id: "innova-crysta",
    name: "Toyota Crysta",
    category: "suv-muv",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    image: "/Toyota_Crysta_1.webp",
  },
  {
    id: "byd-E6-electric-vehicle",
    name: "Byd E6 Electric Vehicle",
    category: "suv-muv",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    image: "/Byd_E6_Electric_Vehicle_1.webp",
  },
{
    id: "kia-cares",
    name: "Kia Cares",
    category: "suv-muv",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    image: "/Kia_Cares_1.webp",
  },

  // SEDAN (3)
  {
    id: "ciaz",
    name: "Maruti Ciaz",
    category: "sedan",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Maruti_Ciaz_1.webp",
  },
  {
    id: "honda-city",
    name: "Honda City",
    category: "sedan",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Honda_City_1.webp",
  },
  {
    id: "dzire",
    name: "Maruti Swift Dzire",
    category: "sedan",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Maruti_Swift_Dzire_1.webp",
  },

  // MINI VANS (5)
  {
    id: "toyota-coaster",
    name: "Toyota Coaster",
    category: "mini-vans",
    seating: "13+1",
    doors: "1",
    luggage: "9",
    image: "/Toyota_Coaster_1.webp",
  },
  {
    id: "toyota-commuter",
    name: "Toyota Commuter",
    category: "mini-vans",
    seating: "9+1",
    doors: "1",
    luggage: "4",
    image: "/Toyota_Commuter_1.webp",
  },
  

  
  {
    id: "urbania",
    name: "Urbania",
    category: "mini-vans",
    seating: "15+1",
    doors: "1",
    luggage: "NA",
    image: "/Urbania_1.webp",
  },

  // COACHES (3)
  {
    id: "volvo-9600",
    name: "Volvo 9600",
    category: "coaches",
    seating: "42+1",
    doors: "1",
    luggage: "30",
    image: "/Coaches-1.webp",
  },
  {
    id: "43-seater",
    name: "43 Seater Bus",
    category: "coaches",
    seating: "42+1",
    doors: "1",
    luggage: "25",
    image: "/Coaches-2.webp",
  },
  {
    id: "27-seater",
    name: "27 Seater Bus",
    category: "coaches",
    seating: "26+1",
    doors: "1",
    luggage: "15",
    image: "/Coaches-3.webp",
  },
];

export function getCarById(id: string) {
  return FLEET_CARS.find((car) => car.id === id);
}
