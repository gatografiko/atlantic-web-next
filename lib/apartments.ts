export type ApartmentCategory = "luxury" | "executive" | "presidential";
export type ApartmentOperation = "rent" | "sale";

export type Apartment = {
  slug: string;
  title: string;
  category: ApartmentCategory;
  operation: ApartmentOperation;
  summary: string;
};

export const APARTMENTS: Apartment[] = [
  {
    slug: "lujo-aurora",
    title: "Aurora Suite",
    category: "luxury",
    operation: "rent",
    summary: "Vista abierta al litoral y acceso discreto para estadias privadas.",
  },
  {
    slug: "lujo-brisa",
    title: "Brisa Alta",
    category: "luxury",
    operation: "sale",
    summary: "Planta amplia con terraza y detalles premium en materiales.",
  },
  {
    slug: "ejecutivo-zenit",
    title: "Zenit Ejecutivo",
    category: "executive",
    operation: "rent",
    summary: "Ambientes funcionales y cercania a servicios corporativos.",
  },
  {
    slug: "ejecutivo-terra",
    title: "Terra Business",
    category: "executive",
    operation: "sale",
    summary: "Distribucion eficiente con enfoque institucional y privacidad.",
  },
  {
    slug: "presidencial-coral",
    title: "Coral Presidencial",
    category: "presidential",
    operation: "rent",
    summary: "Maxima discrecion con espacios pensados para protocolos altos.",
  },
  {
    slug: "presidencial-olimpo",
    title: "Olimpo Residencia",
    category: "presidential",
    operation: "sale",
    summary: "Suite principal con areas sociales para recepciones privadas.",
  },
];

export function getApartmentsByCategory(category: ApartmentCategory) {
  return APARTMENTS.filter((apartment) => apartment.category === category);
}

export function getApartmentBySlug(slug: string) {
  return APARTMENTS.find((apartment) => apartment.slug === slug) ?? null;
}
