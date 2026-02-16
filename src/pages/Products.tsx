import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const filterCategories = ["All", "Flood Lights", "Spotlights", "Clamps", "LED Panels", "Accessories"];

const products = [
  { id: 1, name: "AML-FL200 Flood Light", category: "Flood Lights", price: 4500, rating: 4.8, spec: "200W | 24000lm | IP67", badge: "Best Seller" },
  { id: 2, name: "AML-SP100 Spotlight", category: "Spotlights", price: 2800, rating: 4.6, spec: "100W | 12000lm | IP65", badge: null },
  { id: 3, name: "AML-HC50 Heavy Clamp", category: "Clamps", price: 850, rating: 4.9, spec: "50A | Copper Core | Marine Grade", badge: "New" },
  { id: 4, name: "AML-LP300 LED Panel", category: "LED Panels", price: 6200, rating: 4.7, spec: "300W | 36000lm | IP66", badge: null },
  { id: 5, name: "AML-FL100 Flood Light", category: "Flood Lights", price: 2400, rating: 4.5, spec: "100W | 12000lm | IP65", badge: null },
  { id: 6, name: "AML-MB10 Mount Bracket", category: "Accessories", price: 450, rating: 4.3, spec: "Stainless Steel | 360° Swivel", badge: null },
  { id: 7, name: "AML-SP50 Mini Spot", category: "Spotlights", price: 1500, rating: 4.4, spec: "50W | 6000lm | IP65", badge: "Sale" },
  { id: 8, name: "AML-HC100 Power Clamp", category: "Clamps", price: 1200, rating: 4.8, spec: "100A | Copper Core | Industrial", badge: null },
  { id: 9, name: "AML-FL500 Mega Flood", category: "Flood Lights", price: 12500, rating: 4.9, spec: "500W | 60000lm | IP68", badge: "Premium" },
];

const Products = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <span className="tech-badge mb-4 inline-block">Product Catalog</span>
          <h1 className="text-3xl font-black md:text-4xl">
            Industrial <span className="text-gradient-indigo">Products</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Browse our complete range of industrial-grade lighting and accessories.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-20 space-y-6">
              {/* Search */}
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>

              {/* Filters */}
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  <SlidersHorizontal className="h-4 w-4" /> Categories
                </div>
                <div className="space-y-1">
                  {filterCategories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActive(c)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        active === c
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> products
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/products/${p.id}`}
                    className="group block rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40"
                  >
                    {/* Product Image Placeholder */}
                    <div className="relative mb-4 flex h-40 items-center justify-center rounded-md bg-secondary">
                      <span className="font-mono text-xs text-muted-foreground">360° VIEW</span>
                      {p.badge && (
                        <span className="absolute right-2 top-2 tech-badge">{p.badge}</span>
                      )}
                    </div>

                    <h3 className="font-bold leading-tight group-hover:text-primary">{p.name}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{p.spec}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-black text-gradient-indigo">₹{p.price.toLocaleString()}</span>
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <Star className="h-3 w-3 fill-accent" /> {p.rating}
                      </div>
                    </div>

                    <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-primary/10 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
