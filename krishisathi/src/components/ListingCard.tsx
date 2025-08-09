import Link from "next/link";
import Image from "next/image";
import { Listing } from "@/lib/types";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/product/${listing.id}`}
      className="group overflow-hidden rounded-xl border hover:shadow-md transition-shadow bg-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={listing.imageUrl}
          alt={listing.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold line-clamp-1">{listing.title}</h3>
          <div className="text-green-700 font-semibold whitespace-nowrap">
            ₹{listing.pricePerUnit}
            <span className="text-xs text-muted-foreground">/{listing.unit}</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {listing.description}
        </p>
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span className="rounded-full bg-green-50 text-green-700 px-2 py-0.5 border border-green-100">
            {listing.category}
          </span>
          <span>
            {listing.quantityAvailable} {listing.unit} available
          </span>
        </div>
      </div>
    </Link>
  );
}