"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SellPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Vegetables",
    pricePerUnit: "",
    unit: "kg",
    quantityAvailable: "",
    imageUrl: "",
    farmerName: "",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pricePerUnit: Number(form.pricePerUnit),
          quantityAvailable: Number(form.quantityAvailable || 0),
        }),
      });
      if (!res.ok) throw new Error("Failed to create listing");
      router.push("/market");
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Sell your produce</h1>
      <p className="text-muted-foreground">Create a listing so customers can find and buy directly from you.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="e.g., Organic Tomatoes"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {["Vegetables", "Fruits", "Grains", "Dairy", "Spices", "Honey"].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Price per unit (₹)</label>
            <input
              type="number"
              min="0"
              required
              value={form.pricePerUnit}
              onChange={(e) => setForm({ ...form, pricePerUnit: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="e.g., 60"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Unit</label>
            <select
              value={form.unit}
              onChange={(e) => setForm({ ...form, unit: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {["kg", "dozen", "litre", "bundle"].map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Quantity available</label>
            <input
              type="number"
              min="0"
              value={form.quantityAvailable}
              onChange={(e) => setForm({ ...form, quantityAvailable: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="e.g., 50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Image URL (optional)</label>
            <input
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="https://images.unsplash.com/..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            rows={4}
            placeholder="Tell customers about your produce, how it's grown, and any special qualities."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Farmer name</label>
            <input
              value={form.farmerName}
              onChange={(e) => setForm({ ...form, farmerName: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="City, State"
            />
          </div>
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-2 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 disabled:opacity-50"
        >
          {submitting ? "Publishing..." : "Publish listing"}
        </button>
      </form>
    </div>
  );
}