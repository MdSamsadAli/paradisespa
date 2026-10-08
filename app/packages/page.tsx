import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import { fmt, PACKAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Our Packages | Paradise Spa" };

export default function PackagesPage() {
  return (
    <>
      <PageHero title="Our Packages" crumb="Packages" />
      <section className="section">
        <div className="container">
          {PACKAGES.map((p, i) => (
            <article
              key={p.slug}
              className={`package ${i % 2 ? "reverse" : ""}`}
            >
              <Img
                src={`/images/packages/${i + 1}.jpg`}
                alt={p.name}
                className="package-img"
              />
              <div className="package-body">
                <h3>{p.name}</h3>
                <div className="meta">🕒 {p.minutes} mins</div>
                <div className="price big">{fmt(p.price)}</div>
                {p.items.map((it) => (
                  <p key={it} className="item">
                    {it}
                  </p>
                ))}
                <p className="small-p">{p.description}</p>
                <Link href={`/packages/${p.slug}`} className="link-arrow">
                  Reserve Now →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
