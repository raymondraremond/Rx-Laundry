import { MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "2348001234567"; // Replace with actual number
const MESSAGE = "Hello Rx Laundry! I'd like to schedule a pickup.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-elevated transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
}
