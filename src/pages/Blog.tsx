import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Understanding IP Ratings for Industrial Lighting",
    excerpt: "A comprehensive guide to Ingress Protection ratings and what they mean for your industrial lighting installations.",
    date: "Feb 10, 2026",
    category: "Technical",
  },
  {
    id: 2,
    title: "LED vs HID: Which is Right for Your Warehouse?",
    excerpt: "Comparing energy efficiency, longevity, and total cost of ownership for warehouse lighting solutions.",
    date: "Jan 28, 2026",
    category: "Whitepaper",
  },
  {
    id: 3,
    title: "Powder Coating Best Practices for Marine Environments",
    excerpt: "How to ensure maximum corrosion resistance and finish longevity in coastal and marine applications.",
    date: "Jan 15, 2026",
    category: "Guide",
  },
  {
    id: 4,
    title: "New Product Line: AML-FL Series Flood Lights",
    excerpt: "Introducing our latest range of high-performance flood lights with advanced thermal management.",
    date: "Dec 20, 2025",
    category: "News",
  },
];

const Blog = () => (
  <div className="min-h-screen">
    <section className="border-b border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <span className="tech-badge mb-4 inline-block">Knowledge Base</span>
        <h1 className="text-3xl font-black md:text-4xl">
          Technical <span className="text-gradient-indigo">Blog</span>
        </h1>
        <p className="mt-2 text-muted-foreground">Whitepapers, guides, and industry insights.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
        {posts.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="tech-badge">{p.category}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {p.date}
              </span>
            </div>
            <h2 className="mb-2 text-xl font-bold group-hover:text-primary">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Read More <ArrowRight className="h-3 w-3" />
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;
