import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const pricingData = [
  {
    category: "Hair Services",
    items: [
      { service: "Haircut (Women)", price: "₹200 – ₹500" },
      { service: "Haircut (Men)", price: "₹100 – ₹250" },
      { service: "Blow Dry", price: "₹200 – ₹400" },
      { service: "Hair Spa", price: "₹500 – ₹1,500" },
      { service: "Smoothening", price: "₹2,000 – ₹6,000" },
      { service: "Keratin Treatment", price: "₹3,000 – ₹8,000" },
      { service: "Hair Color", price: "₹500 – ₹2,000" },
      { service: "Highlights / Balayage", price: "₹1,500 – ₹5,000" },
    ],
  },
  {
    category: "Makeup Services",
    items: [
      { service: "Bridal Makeup", price: "₹3,000 – ₹8,000" },
      { service: "Party Makeup", price: "₹1,000 – ₹3,000" },
      { service: "Engagement Makeup", price: "₹2,000 – ₹5,000" },
      { service: "HD Makeup", price: "₹2,500 – ₹6,000" },
      { service: "Saree Draping", price: "₹300 – ₹500" },
    ],
  },
  {
    category: "Skin Treatments",
    items: [
      { service: "Facial (Basic)", price: "₹300 – ₹600" },
      { service: "Fruit Facial", price: "₹500 – ₹1,000" },
      { service: "Cleanup", price: "₹250 – ₹500" },
      { service: "D-Tan", price: "₹300 – ₹800" },
      { service: "Bleach", price: "₹200 – ₹500" },
      { service: "Under-Eye Treatment", price: "₹400 – ₹800" },
    ],
  },
  {
    category: "Grooming Services",
    items: [
      { service: "Waxing (Full Body)", price: "₹800 – ₹1,500" },
      { service: "Waxing (Half Body)", price: "₹400 – ₹800" },
      { service: "Threading", price: "₹30 – ₹60" },
      { service: "Manicure", price: "₹250 – ₹400" },
      { service: "Pedicure", price: "₹300 – ₹600" },
      { service: "Body Polishing", price: "₹1,000 – ₹2,500" },
    ],
  },
];

const PricingPage = () => (
  <Layout>
    <section className="pt-28 pb-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <span className="font-script text-2xl text-gold">Our Rates</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-2">Transparent & Affordable Pricing</h1>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            Quality salon services at prices that won't surprise you.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {pricingData.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 0.1}>
              <div className="rounded-xl overflow-hidden gold-border bg-card">
                <div className="bg-gold/10 px-6 py-4 border-b border-gold/20">
                  <h2 className="font-heading text-xl font-semibold text-charcoal">{cat.category}</h2>
                </div>
                <div>
                  {cat.items.map((item, i) => (
                    <div
                      key={item.service}
                      className={`flex justify-between items-center px-6 py-3.5 ${
                        i % 2 === 0 ? "bg-card" : "bg-ivory"
                      } ${i < cat.items.length - 1 ? "border-b border-border/50" : ""}`}
                    >
                      <span className="font-body text-sm text-charcoal">{item.service}</span>
                      <span className="font-body text-sm font-medium text-gold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground font-body mt-12 max-w-lg mx-auto italic">
            Prices may vary based on hair length and product used. Contact us for exact quotes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default PricingPage;
