export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  category: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const CATEGORIES = [
  "Newborn (0-6m)",
  "Infant (6-12m)",
  "Toddler (12-36m)",
  "Gender Neutral",
  "Sale"
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Cashmere Pointelle Cardigan",
    slug: "cashmere-pointelle-cardigan",
    price: 85,
    category: "Infant (6-12m)",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
      "https://images.unsplash.com/photo-1522771930-78848d92871d?w=800&q=80"
    ],
    description: "Crafted from incredibly soft Mongolian cashmere, this delicate pointelle cardigan keeps your little one warm without overheating. Features pearlized buttons and scalloped edges.",
    sizes: ["6-9m", "9-12m"],
    colors: ["Cream", "Dusty Pink"],
    isNew: true,
  },
  {
    id: "2",
    name: "Organic Cotton Ribbed Onesie",
    slug: "organic-cotton-ribbed-onesie",
    price: 35,
    category: "Newborn (0-6m)",
    images: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80"
    ],
    description: "Our signature everyday essential. Made with GOTS-certified organic cotton with a gentle ribbed texture for stretch and comfort.",
    sizes: ["0-3m", "3-6m"],
    colors: ["Sage", "Oatmeal", "White"],
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Linen Romper Suit",
    slug: "linen-romper-suit",
    price: 55,
    category: "Toddler (12-36m)",
    images: [
      "https://images.unsplash.com/photo-1604467794349-0b74285afc0c?w=800&q=80"
    ],
    description: "Breathable European linen romper perfect for summer days or layering. Relaxed fit allows for easy movement.",
    sizes: ["12-18m", "18-24m", "2T", "3T"],
    colors: ["Sky Blue", "Sand"],
  },
  {
    id: "4",
    name: "Merino Wool Booties",
    slug: "merino-wool-booties",
    price: 28,
    category: "Gender Neutral",
    images: [
      "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?w=800&q=80"
    ],
    description: "Hand-knitted from temperature-regulating merino wool. Features an adjustable tie to ensure they stay on tiny kicking feet.",
    sizes: ["0-6m", "6-12m"],
    colors: ["Ivory", "Charcoal"],
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Hand-Smocked Party Dress",
    slug: "hand-smocked-party-dress",
    price: 110,
    category: "Toddler (12-36m)",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d92871d?w=800&q=80"
    ],
    description: "A timeless classic. This hand-smocked dress features delicate floral embroidery and a Peter Pan collar. Fully lined in cotton.",
    sizes: ["18-24m", "2T", "3T"],
    colors: ["Vintage Rose"],
  },
  {
    id: "6",
    name: "Chunky Knit Sweater",
    slug: "chunky-knit-sweater",
    price: 68,
    salePrice: 52,
    category: "Sale",
    images: [
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&q=80"
    ],
    description: "Cozy oversized knit sweater for cooler days. Dropped shoulder design with wooden buttons at the neckline.",
    sizes: ["12-18m", "2T", "3T"],
    colors: ["Terracotta", "Mustard"],
  }
];
