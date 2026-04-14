import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Haircut & Styling",
  "Bridal Makeup",
  "Party Makeup",
  "Facial & Cleanup",
  "Hair Spa",
  "Smoothening / Keratin",
  "Waxing",
  "Manicure / Pedicure",
  "Other",
];

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Contact form:", data);
    toast.success("Message sent! We'll get back to you soon.");
    reset();
  };

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <span className="font-script text-2xl text-gold">Get in Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-2">Contact Us</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground font-body">383, Devi Nagar, In front of St. Mary's School, New Sanganer Rd, near Metro Pillar 79, Jaipur, Rajasthan 302019</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">Phone</h3>
                    <a href="tel:+919413373335" className="text-sm text-muted-foreground font-body hover:text-gold transition-colors">094133 73335</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919413373335" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground font-body hover:text-gold transition-colors">Chat with us</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">Hours</h3>
                    <p className="text-sm text-muted-foreground font-body">Mon–Sat: 9:00 AM – 8:00 PM</p>
                    <p className="text-sm text-muted-foreground font-body">Sunday: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden gold-border mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.78!3d26.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzM2LjAiTiA3NcKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Meena's Beauty Salon Location"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-xl p-8 gold-border space-y-5">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-2">Send us a Message</h2>

                <div>
                  <label className="block text-sm font-body text-charcoal mb-1.5">Full Name *</label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-body text-charcoal mb-1.5">Phone Number *</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-body text-charcoal mb-1.5">Select Service *</label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Choose a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-destructive text-xs mt-1 font-body">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-body text-charcoal mb-1.5">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                    placeholder="Any special requests or questions?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground font-body text-sm rounded-full hover:bg-rose transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
