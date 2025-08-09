import Image from "next/image";
import Link from "next/link";
import { getListingById } from "@/lib/store";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-red-600">Listing not found.</p>
        <Link href="/market" className="text-green-700 hover:underline">
          Back to market
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
        <Image
          src={listing.imageUrl}
          alt={listing.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{listing.title}</h1>
        <p className="mt-2 text-muted-foreground">{listing.category} • {listing.location}</p>
        <div className="mt-4 text-2xl font-semibold text-green-700">
          ₹{listing.pricePerUnit}
          <span className="text-base text-muted-foreground">/{listing.unit}</span>
        </div>
        <p className="mt-6 leading-7 text-foreground/90">{listing.description}</p>
        <div className="mt-6 text-sm text-muted-foreground">
          Quantity available: {listing.quantityAvailable} {listing.unit}
        </div>
        <div className="mt-8 rounded-xl border p-4 bg-green-50/60">
          <div className="font-medium">Farmer</div>
          <div className="text-sm text-foreground/90">{listing.farmerName || "Anonymous"}</div>
          <div className="text-sm text-muted-foreground">{listing.location}</div>
        </div>
        <div className="mt-8 flex gap-3">
          <a
            href={`mailto:${encodeURIComponent("farmer@example.com")}?subject=Enquiry about ${encodeURIComponent(listing.title)}`}
            className="rounded-lg bg-green-600 text-white px-5 py-3 font-medium hover:bg-green-700"
          >
            Contact Farmer
          </a>
          <Link href="/market" className="rounded-lg border px-5 py-3 hover:bg-green-50">
            Back to Market
          </Link>
        </div>
      </div>
    </div>
  );
}