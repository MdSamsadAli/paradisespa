import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { BLOGS } from "@/lib/data";

export const metadata: Metadata = { title: "Articles and News | Paradise Spa" };

export default function BlogsPage() {
  return (
    <>
      <PageHero title="Articles and News" crumb="Blogs" />
      <section className="section">
        <div className="container grid grid-3">
          {BLOGS.map((b, i) => (
            <BlogCard key={b.slug} b={b} i={i + 1} />
          ))}
        </div>
      </section>
    </>
  );
}
