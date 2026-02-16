import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Star, Shield, Zap, Thermometer } from "lucide-react";

const product = {
  id: 1,
  name: "AML-FL200 Industrial Flood Light",
  category: "Flood Lights",
  price: 4500,
  rating: 4.8,
  reviews: 124,
  description: "High-performance 200W industrial flood light designed for demanding environments. Features advanced thermal management, IP67 waterproof rating, and precision optics for uniform light distribution.",
  specs: [
    { label: "Wattage", value: "200W" },
    { label: "Luminous Flux", value: "24,000 lm" },
    { label: "Color Temp", value: "5000K (Daylight)" },
    { label: "IP Rating", value: "IP67" },
    { label: "Beam Angle", value: "120°" },
    { label: "Lifespan", value: "50,000 hrs" },
    { label: "Input Voltage", value: "AC 100-277V" },
    { label: "CRI", value: "> 80" },
    { label: "Material", value: "Die-cast Aluminum" },
    { label: "Weight", value: "3.2 kg" },
  ],
  features: [
    { icon: Shield, label: "IP67 Waterproof" },
    { icon: Zap, label: "Surge Protection 6kV" },
    { icon: Thermometer, label: "Advanced Thermal Management" },
  ],
};

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-card py-6">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Catalog
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
          {/* Image / 360 View */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex aspect-square items-center justify-center rounded-lg border border-border bg-card"
          >
            <div className="text-center">
              <div className="mx-auto mb-3 h-20 w-20 animate-glow-pulse rounded-full bg-primary/20" />
              <p className="font-mono text-sm text-muted-foreground">360° Product View</p>
              <p className="font-mono text-xs text-muted-foreground">Drag to rotate</p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="tech-badge mb-3 inline-block">{product.category}</span>
            <h1 className="mb-2 text-3xl font-black">{product.name}</h1>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-accent" /> {product.rating}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="mb-6 text-muted-foreground">{product.description}</p>

            <div className="mb-6 flex items-center gap-4">
              <span className="text-4xl font-black text-gradient-indigo">₹{product.price.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">excl. GST</span>
            </div>

            {/* Features */}
            <div className="mb-6 flex flex-wrap gap-3">
              {product.features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2">
                  <f.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold">{f.label}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground glow-indigo">
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </button>

            {/* AEO Intelligence */}
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
                <Zap className="h-4 w-4" /> AEO Intelligence
              </h3>
              <p className="text-sm text-muted-foreground">
                This product is optimized for large-scale warehouse installations. Its 120° beam angle provides uniform illumination across 15m mounting heights. Compatible with 0-10V dimming systems and smart building controllers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Spec Table */}
        <div className="container mx-auto mt-16 px-4">
          <h2 className="mb-6 text-2xl font-black">
            Technical <span className="text-gradient-indigo">Specifications</span>
          </h2>
          <div className="overflow-hidden rounded-lg border border-border">
            {product.specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center justify-between px-6 py-3 font-mono text-sm ${
                  i % 2 === 0 ? "bg-card" : "bg-secondary"
                }`}
              >
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
