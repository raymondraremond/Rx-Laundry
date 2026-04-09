import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Contact form:", data);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setSent(true);
  };

  return (
    <Section>
      <SectionHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out anytime." />
      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
        {/* Info */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">Get in Touch</h3>
            <p className="text-muted-foreground">
              Whether you have a question about our services, pricing, or anything else, our team is ready to answer.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Phone, label: "+234 800 RX LAUNDRY" },
              { icon: Mail, label: "hello@rxlaundry.ng" },
              { icon: MapPin, label: "Eket, Akwa Ibom" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div className="flex items-center justify-center rounded-xl border border-border bg-card p-8 text-center shadow-card">
            <div>
              <Send className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">We'll respond within 24 hours.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-card">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="you@email.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" {...register("subject")} placeholder="How can we help?" />
              {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                placeholder="Your message..."
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
