import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Fresh from farm to table — with zero middlemen
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                KrishiSathi connects farmers directly with customers. Discover seasonal produce, fair prices, and a transparent marketplace.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/market"
                  className="inline-flex items-center rounded-lg bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition-colors"
                >
                  Browse Market
                </Link>
                <Link
                  href="/sell"
                  className="inline-flex items-center rounded-lg border border-green-600 text-green-700 px-6 py-3 font-medium hover:bg-green-50 transition-colors"
                >
                  Sell Produce
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-sm text-muted-foreground">Middlemen Fees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Fresh</div>
                  <div className="text-sm text-muted-foreground">Farm-to-Home</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Fair</div>
                  <div className="text-sm text-muted-foreground">Prices for All</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                {/* Decorative collage */}
                <div className="grid h-full w-full grid-cols-3">
                  <div className="bg-[url('https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="bg-[url('https://images.unsplash.com/photo-1439127989242-c3749a012eac?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur rounded-xl shadow p-4 border">
                <p className="text-sm">
                  Join thousands of farmers and customers bringing fresh produce to every home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Popular categories</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Vegetables", emoji: "🥬" },
            { name: "Fruits", emoji: "🍎" },
            { name: "Grains", emoji: "🌾" },
            { name: "Dairy", emoji: "🧀" },
            { name: "Spices", emoji: "🌶️" },
            { name: "Honey", emoji: "🍯" },
          ].map((c) => (
            <Link
              key={c.name}
              href="/market"
              className="group rounded-xl border p-4 hover:border-green-600 hover:shadow-sm transition-colors flex flex-col items-center"
            >
              <div className="text-3xl">{c.emoji}</div>
              <div className="mt-2 font-medium group-hover:text-green-700">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white p-10 flex items-center justify-between flex-col sm:flex-row gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Are you a farmer?</h3>
            <p className="text-white/90 mt-1">Create a listing in minutes and reach customers directly.</p>
          </div>
          <Link
            href="/sell"
            className="inline-flex items-center rounded-lg bg-white text-green-700 px-6 py-3 font-medium hover:bg-white/90 transition-colors"
          >
            Start Selling
          </Link>
        </div>
      </section>
    </div>
  );
}
