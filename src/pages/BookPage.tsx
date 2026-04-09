import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Calendar, MapPin, Shirt } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(8, "Phone number is required").max(20),
  address: z.string().trim().min(5, "Address is required").max(500),
  service: z.string().min(1, "Select a service"),
  date: z.string().min(1, "Select a date"),
  notes: z.string().max(1000).optional(),
});

type BookingData = z.infer<typeof bookingSchema>;

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingData) => {
    // Mock API call
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Booking submitted:", data);
    toast.success("Booking confirmed! We'll contact you shortly.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section>
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Shirt className="h-10 w-10" />
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">Booking Confirmed!</h2>
          <p className="text-muted-foreground">
            Thank you! We'll send you a confirmation via WhatsApp and email. Our rider will arrive at the scheduled time.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeader title="Book a Pickup" subtitle="Schedule your laundry pickup in under 2 minutes." />
      <div className="mx-auto max-w-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-card">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} placeholder="Chioma Adeyemi" />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="chioma@email.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} placeholder="+234 801 234 5678" />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="address">Pickup Address</Label>
            <Input id="address" {...register("address")} placeholder="123 Admiralty Way, Lekki" />
            {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address.message}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="service">Service</Label>
              <select
                id="service"
                {...register("service")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="">Select service</option>
                <option value="wash-fold">Wash & Fold</option>
                <option value="dry-cleaning">Dry Cleaning</option>
                <option value="ironing">Ironing & Pressing</option>
                <option value="stain">Stain Treatment</option>
                <option value="all">All Services</option>
              </select>
              {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>}
            </div>
            <div>
              <Label htmlFor="date">Pickup Date</Label>
              <Input id="date" type="date" {...register("date")} />
              {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date.message}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="notes">Special Instructions (Optional)</Label>
            <textarea
              id="notes"
              {...register("notes")}
              rows={3}
              placeholder="e.g. Delicate fabrics, stain on collar..."
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Confirm Pickup"}
          </Button>
        </form>

        {/* Order Tracking Demo */}
        <div className="mt-12">
          <h3 className="mb-4 font-heading text-xl font-semibold text-foreground text-center">Track Your Order</h3>
          <OrderTracker />
        </div>
      </div>
    </Section>
  );
}

function OrderTracker() {
  const steps = ["Pickup Scheduled", "Collected", "In Progress", "Quality Check", "Out for Delivery", "Delivered"];
  const currentStep = 2; // Demo: In Progress

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card">
      <p className="mb-4 text-sm text-muted-foreground text-center">Demo: Order #RX-2024-0042</p>
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                i <= currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i < currentStep ? "✓" : i + 1}
            </div>
            <span className={`text-sm ${i <= currentStep ? "font-medium text-foreground" : "text-muted-foreground"}`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
