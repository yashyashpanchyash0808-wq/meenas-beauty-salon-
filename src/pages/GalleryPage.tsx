import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const replacementImage = "https://5.imimg.com/data5/FH/RD/TP/ANDROID-15813856/product-jpeg.jpg";

const galleryItems = [
  { src: replacementImage, category: "Hair", alt: "Luxury salon interior" },
  { src: replacementImage, category: "Makeup", alt: "Bridal makeup" },
  { src: replacementImage, category: "Hair", alt: "Hair styling" },
  { src: replacementImage, category: "Skin", alt: "Facial treatment products" },
  { src: replacementImage, category: "Hair", alt: "Hair spa treatment" },
  { src: replacementImage, category: "Makeup", alt: "Party makeup" },
  { src: replacementImage, category: "Nails", alt: "Nail art" },
  { src: replacementImage, category: "Hair", alt: "Salon interior" },
  { src: replacementImage, category: "Makeup", alt: "Bridal look" },
  { src: replacementImage, category: "Hair", alt: "Hair styling session" },
  { src: replacementImage, category: "Nails", alt: "Manicure" },
  { src: replacementImage, category: "Skin", alt: "Spa treatment" },
];

const filters = ["All", "Hair", "Makeup", "Skin", "Nails"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <span className="font-script text-2xl text-gold">Our Work</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-2">Gallery</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                  filter === f
                    ? "bg-gold text-primary-foreground"
                    : "bg-card border border-gold/20 text-charcoal hover:border-gold/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${item.alt}-${i}`} delay={(i % 6) * 0.05}>
                <div
                  className="break-inside-avoid rounded-xl overflow-hidden gold-border cursor-pointer hover:gold-glow transition-all duration-500 hover:scale-[1.02]"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full object-cover ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"}`}
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default GalleryPage;
