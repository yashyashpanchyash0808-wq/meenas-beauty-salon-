import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Heart, Users } from "lucide-react";

const replacementImage = "https://5.imimg.com/data5/FH/RD/TP/ANDROID-15813856/product-jpeg.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To enhance your natural beauty with expert care, premium products, and a warm, welcoming environment." },
  { icon: Heart, title: "Our Promise", desc: "Every client receives personalized attention, hygienic services, and results they'll love." },
  { icon: Users, title: "Our Team", desc: "A talented team of beauty professionals passionate about staying ahead of the latest trends." },
];

const team = [
  { name: "Meena Ji", role: "Founder & Head Stylist", img: replacementImage },
  { name: "Anjali", role: "Senior Makeup Artist", img: replacementImage },
  { name: "Ritu", role: "Hair Specialist", img: replacementImage },
];

const AboutPage = () => (
  <Layout>
    <section className="pt-28 pb-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <span className="font-script text-2xl text-gold">Our Story</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-2">About Meena's Beauty Salon</h1>
        </ScrollReveal>
      </div>
    </section>

    {/* About section */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="rounded-xl overflow-hidden gold-border">
              <img src={replacementImage} alt="Meena's Beauty Salon interior" className="w-full h-[400px] object-cover" loading="lazy" width={1024} height={640} />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">A Trusted Name in Jaipur</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Meena's Beauty Unisex Salon has been a trusted name in Jaipur's Devi Nagar area, offering premium beauty and grooming services for both men and women.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              With a passion for enhancing natural beauty and a commitment to hygiene and customer satisfaction, we've built a loyal community of clients who trust us for every special occasion — from weddings to everyday care.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.15}>
              <div className="text-center p-8 rounded-xl bg-card gold-border">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="font-script text-2xl text-gold">The Team</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mt-2">Meet Our Experts</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 gold-border">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">{t.name}</h3>
                <p className="text-sm text-muted-foreground font-body">{t.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
