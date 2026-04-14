import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Scissors, Sparkles, Droplets, Hand } from "lucide-react";

const categories = [
  {
    icon: Scissors,
    title: "Hair Services",
    services: [
      { name: "Haircut (Women)", desc: "Precision cuts for every style" },
      { name: "Haircut (Men)", desc: "Classic and modern men's cuts" },
      { name: "Blow Dry", desc: "Smooth, voluminous blowouts" },
      { name: "Hair Spa", desc: "Deep conditioning treatment" },
      { name: "Smoothening", desc: "Frizz-free silky smooth hair" },
      { name: "Keratin Treatment", desc: "Long-lasting smooth finish" },
      { name: "Balayage", desc: "Hand-painted color highlights" },
      { name: "Highlights", desc: "Dimensional color effects" },
      { name: "Hair Color", desc: "Full and root color services" },
    ],
  },
  {
    icon: Sparkles,
    title: "Makeup Services",
    services: [
      { name: "Bridal Makeup", desc: "Complete bridal transformation" },
      { name: "Party Makeup", desc: "Glamorous looks for events" },
      { name: "Engagement Makeup", desc: "Radiant engagement look" },
      { name: "HD Makeup", desc: "High-definition flawless finish" },
      { name: "Saree Draping", desc: "Elegant traditional draping" },
    ],
  },
  {
    icon: Droplets,
    title: "Skin Treatments",
    services: [
      { name: "Facial", desc: "Revitalizing skin treatments" },
      { name: "Cleanup", desc: "Deep cleansing for clear skin" },
      { name: "D-Tan", desc: "Remove tan and restore glow" },
      { name: "Bleach", desc: "Skin lightening treatment" },
      { name: "Under-Eye Treatment", desc: "Reduce dark circles" },
      { name: "Detan Pack", desc: "Full body de-tan treatment" },
      { name: "Fruit Facial", desc: "Natural fruit-based glow" },
    ],
  },
  {
    icon: Hand,
    title: "Grooming Services",
    services: [
      { name: "Waxing (Full Body)", desc: "Complete body waxing" },
      { name: "Waxing (Half Body)", desc: "Targeted area waxing" },
      { name: "Threading", desc: "Precise eyebrow & face threading" },
      { name: "Eyebrow Shaping", desc: "Perfect brow architecture" },
      { name: "Manicure", desc: "Nails, cuticles & hand care" },
      { name: "Pedicure", desc: "Complete foot care treatment" },
      { name: "Body Polishing", desc: "Full body exfoliation & glow" },
    ],
  },
];

const ServicesPage = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-28 pb-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <span className="font-script text-2xl text-gold">What We Offer</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-2">Our Services</h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            From bridal makeup to everyday grooming, we offer a complete range of beauty services for men and women.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Categories */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={ci * 0.1}>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                    <cat.icon size={22} className="text-gold" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal">{cat.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.services.map((s) => (
                    <div key={s.name} className="flex items-start gap-4 p-5 rounded-xl bg-card gold-border hover:gold-glow transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <div>
                        <h3 className="font-heading text-lg font-medium text-charcoal">{s.name}</h3>
                        <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
