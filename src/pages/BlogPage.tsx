import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <Section>
      <SectionHeader title="The Rx Laundry Blog" subtitle="Tips, guides, and stories from the world of garment care." />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-elevated hover:-translate-y-1"
          >
            <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <span className="inline-flex items-center text-sm font-medium text-primary">
              Read more <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
