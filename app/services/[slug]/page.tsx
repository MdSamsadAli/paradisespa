import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Img from "@/components/Img";
import Slider from "@/components/Slider";
import ServiceCard from "@/components/ServiceCard";
import ServiceDetailWidget from "@/components/ServiceDetailWidget";
import Testimonials from "@/components/Testimonials";
import { getService, SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getService(params.slug);
  return { title: s ? `${s.name} | Paradise Spa` : "Service" };
}

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const s = getService(params.slug);
  if (!s) notFound();
  const related = SERVICES.filter((x) => x.slug !== s.slug);

  const index = SERVICES.indexOf(s);
  return (
    <>
      <section className="detail-hero container split">
        <div>
          <h1>{s.name}</h1>
          <p>{s.description}</p>
          <div className="btn-row">
            <Link
              href={`/booking?service=${s.slug}`}
              className="btn btn-primary"
            >
              Reserve Now
            </Link>
            <Link href="/services" className="btn btn-outline">
              All Services
            </Link>
          </div>
        </div>
        <Img
          src={`/images/services/service-${index + 1}.jpg`}
          alt={s.name}
          className="detail-img"
        />
      </section>

      <section className="container detail-body">
        <div>
          <h2>Description of the Materials</h2>
          <p>
            The therapy includes essential materials like oils and other
            technologies. We use warm and aromatic oils for effortless
            massaging. Towels or sarongs keep body parts warm and covered during
            the therapy. All materials are sanitized to minimize exposure to
            uninvited events.
          </p>
          <h2>Techniques</h2>
          {s.techniques.map((t) => (
            <p key={t.title}>
              <strong>{t.title}:</strong> {t.text}
            </p>
          ))}
        </div>
        <ServiceDetailWidget service={s} />
      </section>

      <section className="container two-img">
        <Img
          src={`/images/services/service-2.jpg`}
          alt={`${s.name} 2`}
          className="detail-img wide"
        />
        <Img
          src={`/images/services/service-18.jpg`}
          alt={`${s.name} 3`}
          className="detail-img wide"
        />
      </section>

      <Testimonials />

      <section className="section">
        <div className="container">
          <h2>More Treatments</h2>
          <Slider variant="cards">
            {related.map((r, i) => (
              <div key={r.slug} className="slide-pad">
                <ServiceCard s={r} i={i + 1} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
