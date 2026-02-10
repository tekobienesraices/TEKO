export interface Zone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mapUrl: string;
  heroImage: string;
  highlights: string[];
}

export interface Property {
  id: string;
  zoneId: string;
  title: string;
  location: string;
  price: number;
  originalPrice?: number;
  size?: number; // m2 (Optional now)
  dimensions?: string; // e.g. "12x30" (Optional now)
  monthlyPayment: number;
  description: string;
  image: string;
  gallery?: string[];
  videoUrl?: string;
  features: string[];
  type: 'terreno' | 'casa';
  coordinates: { lat: number; lng: number };
  status: 'available' | 'reserved' | 'sold';
}

export interface ConstructionPlan {
  id: string;
  name: string;
  description: string;
  pricePerSqm: number;
  features: string[];
  image: string;
}

export interface LeadForm {
  name: string;
  phone: string;
  email: string;
  interest: 'comprar' | 'construir' | 'inversion' | 'otro';
  budget?: string;
}

export interface CalculatorState {
  propertyPrice: number;
  downPaymentPercent: number;
  reinforcementPercent: number;
  reinforcementPayments: number;
  termMonths: number;
}

export interface FinancingPlan {
  name: string;
  description: string;
  downPayment: number;
  reinforcement: number;
  monthlyPayment: number;
  totalPaid: number;
  recommended?: boolean;
}