import { Shirt, Sparkles, Wind, Clock, Truck, Shield, Star, Droplets, Scissors } from "lucide-react";

export const services = [
  {
    icon: "Shirt",
    title: "Wash & Fold",
    description: "Expert washing with premium detergents. Clothes returned fresh, neatly folded, and ready to wear.",
    price: "₦2,500",
    unit: "per bag",
  },
  {
    icon: "Sparkles",
    title: "Dry Cleaning",
    description: "Professional dry cleaning for suits, gowns, and delicate fabrics. Stain removal included.",
    price: "₦3,500",
    unit: "per item",
  },
  {
    icon: "Wind",
    title: "Ironing & Pressing",
    description: "Crisp, wrinkle-free results. Perfect for corporate wear and special occasions.",
    price: "₦500",
    unit: "per item",
  },
  {
    icon: "Droplets",
    title: "Stain Treatment",
    description: "Specialized stain removal for tough spots. We tackle wine, oil, ink, and more.",
    price: "₦1,500",
    unit: "per item",
  },
  {
    icon: "Scissors",
    title: "Alterations & Repairs",
    description: "Minor clothing repairs, hemming, and adjustments by skilled tailors.",
    price: "₦2,000",
    unit: "per item",
  },
  {
    icon: "Truck",
    title: "Pickup & Delivery",
    description: "Free pickup and delivery across Eket. Schedule at your convenience.",
    price: "Free",
    unit: "with subscription",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: 12500,
    quarterlyPrice: 33750,
    features: [
      "Up to 20 items/month",
      "Wash & fold included",
      "48-hour turnaround",
      "Free pickup & delivery",
      "WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "Premium",
    monthlyPrice: 25000,
    quarterlyPrice: 67500,
    features: [
      "Up to 50 items/month",
      "Wash, fold & ironing",
      "24-hour turnaround",
      "Free pickup & delivery",
      "Priority WhatsApp support",
      "Dry cleaning (5 items)",
      "Stain treatment included",
    ],
    popular: true,
  },
  {
    name: "Executive",
    monthlyPrice: 45000,
    quarterlyPrice: 121500,
    features: [
      "Unlimited items",
      "All services included",
      "Same-day turnaround",
      "Free pickup & delivery",
      "Dedicated account manager",
      "Dry cleaning (unlimited)",
      "Garment storage",
      "Emergency service",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Chioma Adeyemi",
    role: "Marketing Director",
    content: "Rx Laundry has been a game-changer for my busy schedule. My clothes always come back looking brand new. The pickup service is incredibly convenient.",
    rating: 5,
  },
  {
    name: "Emeka Okafor",
    role: "Software Engineer",
    content: "I switched from doing my own laundry to Rx Laundry's monthly subscription. Best decision I've made this year. The quality is top-notch.",
    rating: 5,
  },
  {
    name: "Aisha Mohammed",
    role: "Entrepreneur",
    content: "They handled my wedding outfits with such care. The attention to detail on my aso-oke was impressive. Highly recommend!",
    rating: 5,
  },
  {
    name: "Tunde Bakare",
    role: "Corporate Lawyer",
    content: "As a lawyer, I need my suits crisp every day. Rx Laundry delivers consistently. Their Executive plan is worth every naira.",
    rating: 5,
  },
  {
    name: "Funke Adeola",
    role: "Fashion Designer",
    content: "I trust Rx Laundry with my delicate fabrics and designer pieces. They understand quality garment care like no other in Eket.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How does pickup and delivery work?",
    answer: "Simply schedule a pickup through our booking form or WhatsApp. Our rider will come to your location, collect your laundry, and deliver it back clean and fresh within the agreed timeframe.",
  },
  {
    question: "What areas in Eket do you cover?",
    answer: "We currently serve all major areas in Eket and surrounding areas. We're expanding to more locations soon!",
  },
  {
    question: "How long does it take to get my clothes back?",
    answer: "Standard turnaround is 48 hours. Premium subscribers enjoy 24-hour turnaround, and Executive subscribers get same-day service for items dropped off before 10 AM.",
  },
  {
    question: "What if my clothes get damaged?",
    answer: "We take utmost care with every garment. In the rare event of damage, we have a comprehensive insurance policy that covers the full replacement value of your items.",
  },
  {
    question: "Can I pause or cancel my subscription?",
    answer: "Yes! You can pause your subscription for up to 30 days or cancel anytime. No long-term contracts or hidden fees.",
  },
  {
    question: "Do you handle traditional/native attire?",
    answer: "Absolutely! We specialize in caring for all types of fabrics including aso-oke, ankara, lace, and other traditional Nigerian fabrics.",
  },
];

export const blogPosts = [
  {
    slug: "how-to-care-for-native-attire",
    title: "How to Care for Your Native Attire: Tips from the Experts",
    excerpt: "Your aso-oke, agbada, and lace pieces deserve special attention. Learn how professionals keep traditional fabrics looking stunning.",
    date: "March 15, 2024",
    readTime: "5 min read",
    content: `Your traditional Nigerian fabrics are more than just clothes — they're investments and cultural treasures. Here's how to keep them in pristine condition.

**1. Always dry clean aso-oke**
Aso-oke is a handwoven fabric that can shrink or lose its texture when machine washed. Professional dry cleaning preserves the weave and colour.

**2. Store lace properly**
Hang lace garments on padded hangers to prevent creasing. Never fold heavy lace — the weight can create permanent fold lines.

**3. Iron ankara on the reverse side**
To preserve the vibrant prints on your ankara, always iron on the reverse side with a medium heat setting.

**4. Treat stains immediately**
The longer a stain sits on fabric, the harder it becomes to remove. Blot (don't rub!) stains immediately and bring the garment to a professional cleaner as soon as possible.

At Rx Laundry, we have dedicated specialists for traditional fabrics who understand the unique care requirements of every Nigerian textile.`,
  },
  {
    slug: "why-subscription-laundry-saves-time",
    title: "Why Subscription Laundry is the Smartest Move for Eket Professionals",
    excerpt: "Traffic is stressful enough. Here's why letting professionals handle your laundry is the productivity hack you need.",
    date: "March 8, 2024",
    readTime: "4 min read",
    content: `If you live and work in Eket, you know that time is your most valuable resource. Between navigating traffic, managing deadlines, and maintaining relationships, something has to give. For most professionals, that something is laundry.

**The math is simple:**
The average Eket professional spends 4-6 hours per week on laundry. That's over 250 hours a year — more than 10 full days!

**What subscription laundry offers:**
- Predictable monthly costs (no surprise expenses)
- Scheduled pickups that fit your calendar
- Professional results every time
- More time for what truly matters

**The Rx Laundry advantage:**
Our subscription plans start at just ₦12,500/month. That's less than what most people spend eating out twice. But the time you get back? Priceless.

Join hundreds of Eket professionals who've already made the switch. Your future self will thank you.`,
  },
  {
    slug: "stain-removal-guide",
    title: "The Ultimate Stain Removal Guide: What to Do Before the Pros Arrive",
    excerpt: "Spilled jollof rice on your white shirt? Don't panic. Here's what to do (and what NOT to do) before calling us.",
    date: "February 28, 2024",
    readTime: "6 min read",
    content: `We've all been there — you're at a party, enjoying your plate of jollof rice, and suddenly your favourite white shirt has an orange badge of honour. Here's your emergency stain guide:

**Oil-based stains (palm oil, stew, groundnut oil):**
- Sprinkle cornstarch or talcum powder on the stain immediately
- Let it sit for 15-20 minutes to absorb the oil
- Gently brush off the powder
- Do NOT rub or use water — this will spread the stain

**Red wine or zobo:**
- Blot with a clean cloth (never rub!)
- Apply salt generously to absorb the liquid
- Keep the garment dry until you can get it to a professional

**Ink stains:**
- Place a paper towel under the stain
- Dab with rubbing alcohol using a cotton ball
- Move to a clean area of the cotton ball frequently

**Mud:**
- Let it dry completely (yes, really!)
- Brush off as much dried mud as possible
- Then bring it to us

**The golden rule:** When in doubt, don't attempt to fix it yourself. Bring it to Rx Laundry and let our stain specialists work their magic. We've saved countless garments that owners thought were beyond help.`,
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=400&fit=crop", alt: "Freshly pressed shirts" },
  { src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=400&fit=crop", alt: "Professional ironing" },
  { src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop", alt: "Clean folded towels" },
  { src: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&h=400&fit=crop", alt: "Laundry delivery service" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", alt: "Premium garment care" },
  { src: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop", alt: "Modern laundry facility" },
  { src: "https://images.unsplash.com/photo-1469504512102-900f29606341?w=600&h=400&fit=crop", alt: "Stain treatment process" },
  { src: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&h=400&fit=crop", alt: "Dry cleaning rack" },
  { src: "https://images.unsplash.com/photo-1521556942006-2580a8274d75?w=600&h=400&fit=crop", alt: "Special care for wedding gowns & suits" },
  { src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop", alt: "Sneaker cleaning and restoration" },
  { src: "https://images.unsplash.com/photo-1583847268964-b28ce8f25e63?w=600&h=400&fit=crop", alt: "Suits passing strict quality checks" },
  { src: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=600&h=400&fit=crop", alt: "High-tech washing machines in action" },
  { src: "https://images.unsplash.com/photo-1509819875429-cdab9a081da2?w=600&h=400&fit=crop", alt: "Our dedicated Rx team at work" },
  { src: "https://images.unsplash.com/photo-1605652599602-5e4baabc52b6?w=600&h=400&fit=crop", alt: "Happy customer receiving fresh laundry delivery" },
  { src: "https://images.unsplash.com/photo-1565513813957-c812c3f87c53?w=600&h=400&fit=crop", alt: "Before and after pristine shirts" }
];

export const chatbotResponses: Record<string, string> = {
  pricing: "Our plans start at ₦12,500/month for Basic, ₦25,000/month for Premium, and ₦45,000/month for Executive. Visit our pricing page for details!",
  pickup: "We offer free pickup and delivery across Eket! Simply book through our website or WhatsApp us at +234 916 188 6063.",
  hours: "We're open Monday to Saturday, 7 AM – 8 PM. Sunday pickups available by appointment.",
  turnaround: "Standard turnaround is 48 hours. Premium subscribers get 24-hour, and Executive subscribers get same-day service!",
  location: "We serve all major areas in Eket and surrounding areas. We're expanding weekly!",
  stain: "We specialize in tough stain removal! Our experts handle oil, wine, ink, and more. Bring it to us or schedule a pickup.",
  subscription: "We offer Monthly and Quarterly subscriptions. Quarterly saves you 10%! You can pause or cancel anytime.",
  default: "Thanks for reaching out! For specific questions, please WhatsApp us or visit our contact page. We're happy to help!",
};

export const howItWorks = [
  { step: 1, title: "Schedule Pickup", description: "Book online or via WhatsApp. Choose a time that works for you." },
  { step: 2, title: "We Collect", description: "Our rider arrives at your door to pick up your laundry." },
  { step: 3, title: "Expert Care", description: "Your clothes are cleaned, pressed, and inspected by our team." },
  { step: 4, title: "Delivered Fresh", description: "Clean clothes delivered back to you, right on schedule." },
];

export const trustBadges = [
  { icon: "Shield", label: "Insured Garments" },
  { icon: "Clock", label: "On-Time Delivery" },
  { icon: "Star", label: "5-Star Rated" },
  { icon: "Truck", label: "Free Pickup" },
];

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}
