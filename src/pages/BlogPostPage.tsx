import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Section from "@/components/Section";
import { blogPosts } from "@/lib/data";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Section>
        <div className="text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Post Not Found</h2>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
        <h1 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">{post.title}</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </Section>
  );
}
