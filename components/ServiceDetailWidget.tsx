"use client";
import Link from "next/link";
import { useState } from "react";
import { fmt, SITE, type Service } from "@/lib/data";

export default function ServiceDetailWidget({ service }: { service: Service }) {
  const [min, setMin] = useState<number | "">("");
  const [people, setPeople] = useState(1);
  const opt = service.options.find((o) => o.minutes === min);
  const total = opt ? opt.price * people : 0;
  const href = `/booking?service=${service.slug}${opt ? `&duration=${opt.minutes}` : ""}&people=${people}`;

  return (
    <aside className="widget">
      <h3>Service Details</h3>
      <p>Relax with our {service.name}, designed to release tension and soothe sore muscles.</p>
      <label>Select Duration</label>
      <select value={min} onChange={(e) => setMin(e.target.value ? Number(e.target.value) : "")}>
        <option value="">Select Duration</option>
        {service.options.map((o) => (
          <option key={o.minutes} value={o.minutes}>{o.minutes} min · {fmt(o.price)}</option>
        ))}
      </select>
      <label>Number of People</label>
      <div className="stepper">
        <button type="button" onClick={() => setPeople(Math.max(1, people - 1))} aria-label="Decrease">−</button>
        <span>{people}</span>
        <button type="button" onClick={() => setPeople(Math.min(10, people + 1))} aria-label="Increase">+</button>
      </div>
      <div className="total"><span>Total Price</span><strong>Rs {total.toLocaleString("en-US")}</strong></div>
      <Link href={href} className="btn btn-white btn-block">Reserve Now</Link>
      <h4>Schedule</h4>
      <small>{SITE.hours}</small>
    </aside>
  );
}
