import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Img from "@/components/Img";
import PackageWidget from "@/components/PackageWidget";
import { getPackage, PACKAGES } from "@/lib/data";

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getPackage(params.slug);
  return { title: p ? `${p.name} | Paradise Spa` : "Package" };
}

export default function PackageDetail({
  params,
}: {
  params: { slug: string };
}) {
  const p = getPackage(params.slug);
  if (!p) notFound();

  const index = PACKAGES.indexOf(p);
  return (
    <>
      <section className="detail-hero container split">
        <div>
          <h1>{p.name}</h1>
          <p>{p.description}</p>
          <div className="btn-row">
            <Link
              href={`/booking?package=${p.slug}`}
              className="btn btn-primary"
            >
              Reserve Now
            </Link>
            <Link href="/packages" className="btn btn-outline">
              All Packages
            </Link>
          </div>
        </div>
        <Img
          src={`/images/packages/${index + 1}.jpg`}
          alt={p.name}
          className="detail-img"
        />
      </section>
      <section className="container detail-body">
        <div>
          <h2>What&apos;s Included</h2>
          <ul className="included">
            {p.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <h2>Techniques</h2>
          <p>{p.description}</p>
        </div>
        <PackageWidget pkg={p} />
      </section>
      <section className="container two-img">
        <Img
          src="/images/gallery-1.jpg"
          alt="Spa treatment"
          className="detail-img wide"
        />
        <Img
          src="/images/gallery-2.jpg"
          alt="Spa facial"
          className="detail-img wide"
        />
      </section>
    </>
  );
}
