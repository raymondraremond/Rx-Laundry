import { MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "2348001234567";
const MESSAGE = "Hello Rx Laundry! I'd like to schedule a pickup.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-background opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
