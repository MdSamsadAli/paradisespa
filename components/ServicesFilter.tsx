"use client";
import { useMemo, useState } from "react";
import ServiceCard from "./ServiceCard";
import { CATEGORIES, SERVICES } from "@/lib/data";

export default function ServicesFilter() {
  const [cat, setCat] = useState<string>("All");
  const list = useMemo(
    () =>
      cat === "All" ? SERVICES : SERVICES.filter((s) => s.category === cat),
    [cat],
  );
  return (
    <section className="section">
      <div className="container">
        <h2 className="center green">Choose Your Convenient Treatment</h2>
        <div className="chips">
          {["All", ...CATEGORIES].map((c) => (
            <button
              key={c}
              className={`chip ${cat === c ? "on" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-3">
          {list.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
