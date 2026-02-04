export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  size: number; // m2
  monthlyPayment: number;
  description: string;
  image: string;
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
  termMonths: number;
}