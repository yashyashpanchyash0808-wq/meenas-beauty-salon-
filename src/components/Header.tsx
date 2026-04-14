import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import floralOrnament from "@/assets/floral-ornament.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl border-b border-gold/20 shadow-[0_8px_35px_hsl(var(--gold)/0.14)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <img
              src={floralOrnament}
              alt=""
              className="w-6 h-6 opacity-75 transition-transform duration-300 group-hover:rotate-6"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-[1.28rem] font-semibold tracking-[0.08em] text-charcoal">
                MEENA'S
              </span>
              <span className="text-[10px] tracking-[0.28em] text-gold/90 font-body uppercase">
                Beauty Unisex Salon
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-gold/35 bg-white/55 px-2 py-1.5 backdrop-blur-md shadow-[0_6px_24px_hsl(var(--gold)/0.1)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-body tracking-wide transition-all duration-300 ${
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground shadow-[0_8px_18px_hsl(var(--rose)/0.35)]"
                    : "text-charcoal hover:text-gold hover:bg-gold/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://wa.me/919413373335"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/70 bg-primary px-5 py-2.5 text-sm font-medium font-body text-primary-foreground shadow-[0_10px_20px_hsl(var(--rose)/0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose"
            >
              <MessageCircle size={15} />
              Book on WhatsApp
            </a>
            <a
              href="tel:+919413373335"
              className="inline-flex items-center gap-2 rounded-full border border-gold/70 bg-white/70 px-5 py-2.5 text-sm font-medium font-body text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-primary-foreground"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-full border border-gold/40 bg-white/70 p-2.5 text-charcoal backdrop-blur-sm transition-colors duration-300 hover:bg-gold/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-b border-gold/20 bg-ivory/85 backdrop-blur-xl"
          >
            <nav className="container mx-auto px-4 py-5">
              <div className="rounded-2xl border border-gold/25 bg-white/75 p-3 shadow-[0_12px_30px_hsl(var(--gold)/0.12)]">
                <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-xl px-3 py-2.5 text-base font-body tracking-wide transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-charcoal hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
                </div>
              <div className="flex gap-3 pt-4">
                <a
                  href="https://wa.me/919413373335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-body font-medium text-primary-foreground shadow-[0_10px_20px_hsl(var(--rose)/0.32)]"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <a
                  href="tel:+919413373335"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 bg-white px-4 py-3 text-sm font-body font-medium text-charcoal"
                >
                  <Phone size={15} />
                  Call Now
                </a>
              </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
