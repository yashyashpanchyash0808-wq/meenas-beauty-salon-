import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Users, ShieldCheck, Gem, Sparkles, Heart, Smile, Scissors } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import { MessageCircle, MapPin } from "lucide-react";

const replacementImage = "https://5.imimg.com/data5/FH/RD/TP/ANDROID-15813856/product-jpeg.jpg";

const services = [
  { title: "Bridal Makeup", desc: "Stunning bridal looks for your special day", img: replacementImage },
  { title: "Party Makeup", desc: "Glamorous looks for every celebration", img: replacementImage },
  { title: "Haircut & Styling", desc: "Trendy cuts and styles for all", img: replacementImage },
  { title: "Facial & Cleanup", desc: "Rejuvenating skin care treatments", img: replacementImage },
  { title: "Hair Spa", desc: "Deep nourishment for healthy hair", img: replacementImage },
  { title: "Nail Art", desc: "Beautiful manicure and nail designs", img: replacementImage },
];

const testimonials = [
  { name: "Priya Sharma", text: "Meena's salon transformed my bridal look beyond my dreams. The team is so skilled and caring!", rating: 5 },
  { name: "Sunita Agarwal", text: "I've been coming here for 3 years now. The best salon in Jaipur for facials and hair treatments.", rating: 5 },
  { name: "Ritika Joshi", text: "Amazing experience every time! The ambiance is so relaxing and the results are always perfect.", rating: 5 },
];

const whyUs = [
  { icon: Users, title: "Skilled Professionals", desc: "Our experienced team stays updated with the latest beauty trends and techniques." },
  { icon: Heart, title: "Affordable Pricing", desc: "Premium quality services at prices that are fair and transparent." },
  { icon: ShieldCheck, title: "Clean & Comfortable", desc: "Hygienic practices and a relaxing environment for your peace of mind." },
  { icon: Smile, title: "High Satisfaction", desc: "4.9★ rating from 250+ happy customers speaks for our quality." },
];

const Index = () => (
  <Layout>
    {/* JSON-LD */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: "Meena's Beauty Unisex Salon",
      address: {
        "@type": "PostalAddress",
        streetAddress: "383, Devi Nagar, New Sanganer Rd, near metro pillar -79",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302019",
        addressCountry: "IN",
      },
      telephone: "+919413373335",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "250" },
    }) }} />

    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blush blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-script text-3xl text-gold block mb-3">Welcome to</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              Your Trusted Beauty & Hair Salon in Jaipur
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8 max-w-lg">
              Bridal makeup, facials, hair spa, waxing, and complete grooming services — all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919413373335"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body rounded-full hover:bg-rose transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Meena's+Beauty+Unisex+Salon+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold text-charcoal font-body rounded-full hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="bg-card border-y border-gold/15">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Star, text: "Rated 4.9★ (250+ Reviews)" },
            { icon: Users, text: "Experienced Staff" },
            { icon: ShieldCheck, text: "Hygienic Services" },
            { icon: Gem, text: "Premium Products" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-center gap-3 py-2 ${i < 3 ? "md:border-r md:border-gold/15" : ""}`}>
              <item.icon size={20} className="text-gold" />
              <span className="text-sm font-body text-charcoal">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Services */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="font-script text-2xl text-gold">Discover</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mt-2">Our Most Loved Services</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <Link to="/services" className="group block rounded-xl overflow-hidden gold-border bg-card hover:gold-glow transition-all duration-500 hover:scale-[1.02]">
                <div className="h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={640} height={640} />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="font-script text-2xl text-gold">Why Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mt-2">Why Choose Meena's Salon</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <item.icon size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="font-script text-2xl text-gold">Testimonials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mt-2">What Our Clients Say</h2>
            <p className="text-muted-foreground font-body mt-3 text-sm">4.9 ⭐ Average from 250+ Happy Customers</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="bg-secondary/40 rounded-xl p-8 gold-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-heading text-base italic text-charcoal leading-relaxed mb-5">"{t.text}"</p>
                <p className="font-body text-sm font-medium text-gold">— {t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="section-padding bg-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary/10" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">Ready for a Fresh New Look?</h2>
          <p className="text-muted-foreground font-body text-lg mb-8">Walk in or book your appointment on WhatsApp today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919413373335"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body rounded-full hover:bg-rose transition-all duration-300"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </a>
            <a
              href="tel:+919413373335"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold text-charcoal font-body rounded-full hover:bg-gold hover:text-primary-foreground transition-all duration-300"
            >
              Call: 094133 73335
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
