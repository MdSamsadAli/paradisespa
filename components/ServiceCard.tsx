import Link from "next/link";
import Img from "./Img";
import { fmt, type Service } from "@/lib/data";

export default function ServiceCard({ s, i }: { s: Service; i: number }) {
  return (
    <article className="card service-card">
      <Img
        src={`/images/services/service-${i}.jpg`}
        alt={s.name}
        className="card-img"
      />
      <div className="card-body">
        <div className="meta">
          🕒 {s.minDuration} - {s.maxDuration} Minutes
        </div>
        <h3>{s.name}</h3>
        <p>{s.summary}</p>
        <div className="price">
          {fmt(s.minPrice)} - {fmt(s.maxPrice)}
        </div>
        <Link
          href={`/services/${s.slug}`}
          className="btn btn-outline btn-block"
        >
          Explore Treatment →
        </Link>
      </div>
    </article>
  );
}
