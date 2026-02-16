import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <span className="tech-badge mb-4 inline-block">Get in Touch</span>
          <h1 className="text-3xl font-black md:text-4xl">
            Contact <span className="text-gradient-indigo">Us</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Reach our team for quotes, support, or partnership inquiries.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg border border-border bg-card p-8"
          >
            <h2 className="mb-6 text-xl font-bold">Send a Message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    type="email"
                    className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-primary"
                  placeholder="Describe your requirements..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-indigo"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold">Office & Warehouse</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>AERO MOTOLITE, Industrial Area, Vasai East, Palghar, Maharashtra 401208, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  info@aeromotolite.com
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  Mon – Sat, 9:00 AM – 6:00 PM IST
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-64 items-center justify-center rounded-lg border border-border bg-secondary">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                <p className="font-mono text-xs text-muted-foreground">Vasai East, Mumbai</p>
                <p className="font-mono text-xs text-muted-foreground">19.3919° N, 72.8397° E</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
