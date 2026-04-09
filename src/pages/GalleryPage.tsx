import { useState } from "react";
import Section, { SectionHeader } from "@/components/Section";
import { galleryImages } from "@/lib/data";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Section>
      <SectionHeader title="Our Gallery" subtitle="See the quality of our work — fresh, crisp, and ready to wear." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(img.src)}
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-background">{img.alt}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 text-background hover:text-primary"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selected.replace("w=600&h=400", "w=1200&h=800")}
            alt="Gallery preview"
            className="max-h-[80vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </Section>
  );
}
