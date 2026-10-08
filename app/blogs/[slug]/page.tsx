import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Img from "@/components/Img";
import BlogCard from "@/components/BlogCard";
import { BLOGS } from "@/lib/data";

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const b = BLOGS.find((x) => x.slug === params.slug);
  return { title: b ? `${b.title} | Paradise Spa` : "Blog" };
}

const COUPLE_SECTIONS = [
  {
    h: "What Is a Couple Massage?",
    p: "A couple massage generally means that two people receive massage treatments during the same appointment, usually in the same treatment room, side by side, with separate therapists.",
  },
  {
    h: "Why Choose a Couple Spa Experience in Kathmandu?",
    p: "Kathmandu is a popular destination for couples travelling through Nepal, whether they are visiting cultural attractions, starting a Himalayan trek, celebrating a honeymoon or simply taking time to relax. A spa session is an easy way to unwind after sightseeing.",
  },
  {
    h: "What Makes a Good Couple Massage Spa?",
    p: "Look for a clean, quiet and private treatment room, trained therapists, clear pricing, transparent treatment descriptions and a calm atmosphere.",
  },
  {
    h: "Check Whether Couples Can Be Treated Together",
    p: "Not every spa has a dedicated couple room. Confirm in advance that both guests can be treated at the same time.",
  },
  {
    h: "Look at the Massage Menu",
    p: "Swedish, aromatherapy, deep tissue, Ayurvedic, Thai stretching, hot stone and four-hand therapy are popular choices. Choose what suits both partners.",
  },
  {
    h: "Compare Treatment Duration and Price",
    p: "Sessions typically run from 60 to 120 minutes. Compare the price per person, what is included and whether extras such as steam or sauna are offered.",
  },
  {
    h: "Prioritize Privacy and Comfort",
    p: "A good spa respects your comfort, offers private changing space and explains each step before it begins.",
  },
  {
    h: "Look for Professional Therapists and Hygiene",
    p: "Fresh linen, sanitized equipment and trained therapists who listen to your pressure preferences are signs of a quality spa.",
  },
  {
    h: "Choose a Convenient Location",
    p: "Paradise Spa is located in Sher Bhawan, Chaksibari Marg, Thamel, Kathmandu — within easy reach of most hotels and guesthouses.",
  },
];

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const b = BLOGS.find((x) => x.slug === params.slug);
  if (!b) notFound();
  const couple = b.slug === "best-couple-massage-in-kathmandu";
  const idx = BLOGS.indexOf(b);
  const prev = BLOGS[idx - 1];
  const next = BLOGS[idx + 1];
  const others = BLOGS.filter((x) => x.slug !== b.slug).slice(0, 3);

  return (
    <article className="container article">
      <div className="crumbs dark-crumbs">
        <Link href="/">Home</Link> / <Link href="/blogs">Blogs</Link> /{" "}
        {b.title}
      </div>
      <small className="date">{b.date}</small>
      <h1>{b.title}</h1>
      <Img
        src={`/images/blog/blog-${idx + 1}.jpg`}
        alt={b.title}
        className="article-hero"
      />
      {couple ? (
        COUPLE_SECTIONS.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </section>
        ))
      ) : (
        <>
          <p>
            Planning a relaxing day at a spa in Kathmandu? Knowing what to look
            for makes choosing easier. Consider the treatments offered, the
            experience of the therapists, hygiene, privacy and pricing before
            you book.
          </p>
          <p>
            Paradise Spa offers a wide range of massage and holistic therapies
            in Thamel — from Swedish and deep tissue to Ayurvedic, hot stone and
            four-hand therapy. Our team is happy to help you choose the
            treatment that matches your needs.
          </p>
        </>
      )}
      <div className="article-cta">
        <h3>Ready to book your visit?</h3>
        <Link href="/booking" className="btn btn-primary">
          Book an appointment
        </Link>
      </div>
      <div className="prev-next">
        {prev ? (
          <Link href={`/blogs/${prev.slug}`}>← Previous Post</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/blogs/${next.slug}`}>Next Post →</Link>
        ) : (
          <span />
        )}
      </div>
      <h2>More Articles</h2>
      <div className="grid grid-3">
        {others.map((o, i) => (
          <BlogCard key={o.slug} b={o} i={i + 1} />
        ))}
      </div>
    </article>
  );
}
