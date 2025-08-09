import { listListings } from "@/lib/store";
import { ListingCard } from "@/components/ListingCard";

export default async function MarketPage() {
  const listings = listListings();
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market</h1>
          <p className="text-muted-foreground">Buy directly from farmers near you.</p>
        </div>
        <a
          href="/sell"
          className="rounded-lg bg-green-600 text-white px-4 py-2 hover:bg-green-700"
        >
          Sell Produce
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}