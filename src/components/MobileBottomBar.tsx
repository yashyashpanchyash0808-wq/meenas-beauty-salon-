import { Phone, MessageCircle } from "lucide-react";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex">
    <a
      href="tel:+919413373335"
      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gold text-primary-foreground text-sm font-body font-medium"
    >
      <Phone size={16} />
      Call Now
    </a>
    <a
      href="https://wa.me/919413373335"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground text-sm font-body font-medium"
    >
      <MessageCircle size={16} />
      WhatsApp
    </a>
  </div>
);

export default MobileBottomBar;
