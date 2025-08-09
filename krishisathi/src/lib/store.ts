import { Listing } from "./types";
import { randomUUID } from "crypto";

const initialListings: Listing[] = [
  {
    id: randomUUID(),
    title: "Organic Tomatoes",
    description: "Fresh, juicy tomatoes grown without pesticides.",
    category: "Vegetables",
    pricePerUnit: 60,
    unit: "kg",
    quantityAvailable: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    farmerName: "Rahul Sharma",
    location: "Nashik, MH",
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
  },
  {
    id: randomUUID(),
    title: "Alphonso Mangoes",
    description: "Sweet and aromatic Alphonso mangoes, perfect for desserts.",
    category: "Fruits",
    pricePerUnit: 300,
    unit: "dozen",
    quantityAvailable: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop",
    farmerName: "Sunita Patil",
    location: "Ratnagiri, MH",
    createdAt: Date.now() - 1000 * 60 * 60 * 12,
  },
  {
    id: randomUUID(),
    title: "Raw Forest Honey",
    description: "Unprocessed honey collected sustainably from forest hives.",
    category: "Honey",
    pricePerUnit: 550,
    unit: "kg",
    quantityAvailable: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop",
    farmerName: "Aman Verma",
    location: "Dehradun, UK",
    createdAt: Date.now() - 1000 * 60 * 30,
  },
];

let listings: Listing[] = [...initialListings];

export function listListings(): Listing[] {
  return [...listings].sort((a, b) => b.createdAt - a.createdAt);
}

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function createListing(partial: Omit<Listing, "id" | "createdAt">): Listing {
  const newListing: Listing = {
    id: randomUUID(),
    createdAt: Date.now(),
    ...partial,
  };
  listings = [newListing, ...listings];
  return newListing;
}