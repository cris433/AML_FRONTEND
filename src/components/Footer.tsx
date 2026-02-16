import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
      <div>
        <h3 className="mb-3 text-lg font-bold tracking-tight">AERO MOTOLITE</h3>
        <p className="text-sm text-muted-foreground">
          Your Trusted Source for Automotive, Lights and Accessories. Industrial-grade power solutions since 2005.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Products", "Services", "Blog", "Contact"].map((l) => (
            <li key={l}>
              <Link to={`/${l.toLowerCase()}`} className="transition-colors hover:text-foreground">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Fabrication", "Bending", "Powder Coating", "Punching & Stamping"].map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Contact</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Vasai, Mumbai, Maharashtra, India
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            +91 98765 43210
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            info@aeromotolite.com
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} AERO MOTOLITE. All rights reserved.
    </div>
  </footer>
);

export default Footer;
