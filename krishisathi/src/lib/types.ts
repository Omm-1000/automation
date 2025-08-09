export type Listing = {
  id: string;
  title: string;
  description: string;
  category: string;
  pricePerUnit: number; // in local currency
  unit: string; // e.g., kg, dozen, litre
  quantityAvailable: number;
  imageUrl: string;
  farmerName: string;
  location: string;
  createdAt: number;
};