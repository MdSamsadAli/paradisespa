import Link from "next/link";
import Img from "./Img";
import type { Blog } from "@/lib/data";

export default function BlogCard({ b, i }: { b: Blog; i: number }) {
  return (
    <Link href={`/blogs/${b.slug}`} className="card blog-card">
      <Img
        src={`/images/blog/blog-${i}.jpg`}
        alt={b.title}
        className="card-img"
      />
      <div className="card-body">
        <h3 className="clamp2">{b.title}</h3>
        <div className="blog-meta">
          <span>
            <strong>{b.tag}</strong> — {b.date}
          </span>
          <span className="circle-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}
