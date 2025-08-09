import { NextResponse } from "next/server";
import { createListing, listListings } from "@/lib/store";
import { Listing } from "@/lib/types";

export async function GET() {
  return NextResponse.json(listListings());
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<Listing>;
    if (!data.title || !data.category || !data.pricePerUnit || !data.unit) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const created = createListing({
      title: data.title!,
      description: data.description ?? "",
      category: data.category!,
      pricePerUnit: Number(data.pricePerUnit),
      unit: data.unit!,
      quantityAvailable: Number(data.quantityAvailable ?? 0),
      imageUrl:
        data.imageUrl ??
        "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop",
      farmerName: data.farmerName ?? "Anonymous Farmer",
      location: data.location ?? "",
    });
    return NextResponse.json(created, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}