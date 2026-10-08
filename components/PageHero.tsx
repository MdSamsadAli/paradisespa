import { SITE } from "@/lib/data";

export default function PageHero({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{SITE.tagline}</p>
        <div className="crumbs">
          <a href="/">Home</a> <span>/</span> {crumb}
        </div>
      </div>
    </section>
  );
}
