import { motion } from "framer-motion";
import { Factory, Wrench, Paintbrush, Stamp, Scissors, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Factory,
    title: "Fabrication",
    desc: "Custom metal fabrication with precision CNC machining for industrial components and enclosures.",
    features: ["CNC Machining", "Sheet Metal Work", "Welding & Assembly"],
  },
  {
    icon: Wrench,
    title: "Bending",
    desc: "Industrial bending services for pipes, tubes, and sheet metal with tight tolerances.",
    features: ["Press Brake Bending", "Pipe Bending", "Roll Forming"],
  },
  {
    icon: Stamp,
    title: "Punching & Stamping",
    desc: "High-speed punching and stamping for mass production of precision components.",
    features: ["CNC Turret Punching", "Progressive Die Stamping", "Deep Drawing"],
  },
  {
    icon: Paintbrush,
    title: "Powder Coating",
    desc: "Durable, high-quality powder coating finishes for corrosion resistance and aesthetics.",
    features: ["Electrostatic Application", "Custom RAL Colors", "UV Resistant Finish"],
  },
  {
    icon: Scissors,
    title: "Shearing",
    desc: "Precision shearing for clean, accurate cuts on sheet metal and plate materials.",
    features: ["Hydraulic Shearing", "Guillotine Cutting", "Tight Tolerances"],
  },
  {
    icon: Stamp,
    title: "Pressing",
    desc: "Heavy-duty pressing operations for forming, forging, and assembly applications.",
    features: ["Hydraulic Pressing", "Mechanical Pressing", "Custom Dies"],
  },
];

const Services = () => (
  <div className="min-h-screen">
    <section className="border-b border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <span className="tech-badge mb-4 inline-block">Our Services</span>
        <h1 className="text-3xl font-black md:text-4xl">
          Industrial <span className="text-gradient-indigo">Services</span>
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          End-to-end manufacturing and finishing services for industrial and automotive applications.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="industrial-border rounded-lg bg-card p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
            <ul className="space-y-1">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-black">
          Ready to <span className="text-gradient-accent">Get Started?</span>
        </h2>
        <p className="mx-auto mb-6 max-w-md text-muted-foreground">
          Contact our engineering team for custom quotes and project consultations.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-bold text-accent-foreground glow-accent"
        >
          Request Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
