"use client";
import Link from "next/link";
import { useState } from "react";
import { fmt, SITE, type Pkg } from "@/lib/data";

export default function PackageWidget({ pkg }: { pkg: Pkg }) {
  const [people, setPeople] = useState(1);
  return (
    <aside className="widget">
      <h3>Package Details</h3>
      <p>Relax with our {pkg.name}, designed to release tension and soothe sore muscles.</p>
      <label>Duration</label>
      <div className="static-field">{pkg.minutes} mins</div>
      <label>Number of People</label>
      <div className="stepper">
        <button type="button" onClick={() => setPeople(Math.max(1, people - 1))} aria-label="Decrease">−</button>
        <span>{people}</span>
        <button type="button" onClick={() => setPeople(Math.min(10, people + 1))} aria-label="Increase">+</button>
      </div>
      <div className="total"><span>Total Price</span><strong>{fmt(pkg.price * people)}</strong></div>
      <Link href={`/booking?package=${pkg.slug}&people=${people}`} className="btn btn-white btn-block">Reserve Now</Link>
      <h4>Schedule</h4>
      <small>{SITE.hours}</small>
    </aside>
  );
}
