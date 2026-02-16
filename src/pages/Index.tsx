import { motion } from "framer-motion";
import { Search, ArrowRight, Zap, Shield, Factory, Lightbulb, Wrench, Battery } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const categories = [
  { icon: Lightbulb, title: "Flood Lights", desc: "High-lumen industrial LED solutions", count: 42 },
  { icon: Zap, title: "Spotlights", desc: "Precision beam automotive lights", count: 36 },
  { icon: Battery, title: "Power Clamps", desc: "Heavy-duty battery clamp systems", count: 28 },
  { icon: Shield, title: "Safety Lights", desc: "Emergency & warning light systems", count: 19 },
  { icon: Factory, title: "Industrial LEDs", desc: "Factory floor lighting solutions", count: 54 },
  { icon: Wrench, title: "Accessories", desc: "Mounts, brackets & connectors", count: 67 },
];

const stats = [
  { value: "15K+", label: "Products Delivered" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "98%", label: "Quality Rating" },
  { value: "24/7", label: "Technical Support" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 industrial-grid-bg opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="tech-badge mb-6 inline-block">Industrial Grade Solutions</span>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              <span className="text-gradient-indigo">Industrial</span>
              <br />
              Endurance
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted-foreground">
              Premium automotive lights, battery systems, and industrial accessories engineered for maximum performance and reliability.
            </p>

            {/* Search Bar */}
            <div className="mb-8 flex max-w-lg overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex flex-1 items-center gap-3 px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products, specs, categories..."
                  className="w-full bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button className="bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-indigo"
              >
                Browse Catalog <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto grid grid-cols-2 divide-x divide-border px-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-8 text-center"
            >
              <div className="text-3xl font-black text-gradient-indigo">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="tech-badge mb-4 inline-block">Product Categories</span>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Power Solutions <span className="text-gradient-indigo">Catalog</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/products"
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{cat.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
                    <span className="mt-2 inline-block font-mono text-xs text-primary">{cat.count} products →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-black">
            Need a <span className="text-gradient-accent">Custom Solution?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
            Our engineering team specializes in fabrication, powder coating, and custom industrial lighting solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90 glow-accent"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
