import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary/50 border-t border-gold/10">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & tagline */}
        <div>
          <div className="flex flex-col leading-none mb-4">
            <span className="font-heading text-2xl font-bold text-charcoal">MEENA'S</span>
            <span className="text-[10px] tracking-[0.25em] text-gold font-body uppercase">Beauty Unisex Salon</span>
          </div>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            Your trusted beauty destination in Jaipur. Premium grooming services for every occasion.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-charcoal mb-4">Quick Links</h4>
          {["Home", "Services", "Pricing", "Gallery", "About", "Contact"].map((l) => (
            <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-gold transition-colors font-body py-1.5">
              {l}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-charcoal mb-4">Services</h4>
          {["Bridal Makeup", "Hair Styling", "Facials", "Hair Spa", "Waxing", "Manicure & Pedicure"].map((s) => (
            <span key={s} className="block text-sm text-muted-foreground font-body py-1.5">{s}</span>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-charcoal mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm text-muted-foreground font-body">
            <div className="flex gap-2">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span>383, Devi Nagar, New Sanganer Rd, near Metro Pillar 79, Jaipur 302019</span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+919413373335" className="hover:text-gold transition-colors">094133 73335</a>
            </div>
            <div className="flex gap-2 items-center">
              <Clock size={16} className="text-gold shrink-0" />
              <span>Mon–Sat 9AM–8PM, Sun 10AM–6PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gold/10 py-5">
      <p className="text-center text-xs text-muted-foreground font-body">
        © 2025 Meena's Beauty Unisex Salon. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
