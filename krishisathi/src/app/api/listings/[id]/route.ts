import { NextResponse } from "next/server";
import { getListingById } from "@/lib/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_req: Request, context: any) {
  const { id } = context.params as { id: string };
  const listing = getListingById(id);
  if (!listing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(listing);
}