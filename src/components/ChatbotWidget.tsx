import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatbotResponses } from "@/lib/data";

interface Message {
  from: "user" | "bot";
  text: string;
}

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const key of Object.keys(chatbotResponses)) {
    if (key !== "default" && lower.includes(key)) return chatbotResponses[key];
  }
  return chatbotResponses.default;
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi there! 👋 I'm Rx Bot. Ask me about pricing, pickup, locations, or anything else!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [...m, { from: "bot", text: getResponse(userMsg) }]);
    }, 800);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`chatbot-toggle fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-400 ${
          open
            ? "bg-muted text-muted-foreground rotate-0 scale-90"
            : "bg-primary text-primary-foreground shadow-primary/30"
        }`}
        aria-label="Chat with us"
      >
        <div className="relative w-6 h-6">
          <MessageCircle
            className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
              open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
              open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </div>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chatbot-panel-enter fixed bottom-40 right-4 z-50 flex h-[420px] w-[340px] flex-col overflow-hidden rounded-2xl border border-border/50 bg-background shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Rx Bot</p>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-xs opacity-80">Online now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                style={{
                  animation: "chatbotSlideUp 0.3s ease-out forwards",
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border/50 text-foreground rounded-bl-md shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-card border border-border/50 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border/50 p-3 bg-background flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-input bg-muted/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
            />
            <Button
              size="icon"
              onClick={send}
              aria-label="Send"
              className="rounded-xl h-10 w-10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
