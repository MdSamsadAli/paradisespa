"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fmt, getPackage, getService, PACKAGES, SERVICES } from "@/lib/data";

type Line = { key: string; name: string; label: string; price: number };

const SLOTS = Array.from({ length: 14 }, (_, i) => {
  const h = 8 + i;
  const hh = h > 12 ? h - 12 : h;
  return `${hh}:00 ${h >= 12 ? "PM" : "AM"}`;
});

export default function BookingForm() {
  const sp = useSearchParams();
  const [tab, setTab] = useState<"services" | "packages">(sp.get("package") ? "packages" : "services");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [lines, setLines] = useState<Line[]>(() => {
    const init: Line[] = [];
    const s = getService(sp.get("service") || "");
    if (s) {
      const d = Number(sp.get("duration"));
      const o = s.options.find((x) => x.minutes === d) || s.options[0];
      init.push({ key: s.slug, name: s.name, label: `${o.minutes} min`, price: o.price });
    }
    const p = getPackage(sp.get("package") || "");
    if (p) init.push({ key: p.slug, name: p.name, label: `${p.minutes} min`, price: p.price });
    return init;
  });
  const [guests, setGuests] = useState(Number(sp.get("people")) || 1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [f, setF] = useState({ first: "", last: "", email: "", phone: "", notes: "" });

  const filtered = useMemo(() => SERVICES.filter((s) => s.name.toLowerCase().includes(q.toLowerCase())), [q]);
  const subtotal = lines.reduce((a, l) => a + l.price, 0) * guests;
  const total = Math.max(0, subtotal - discount);

  const add = (l: Line) => setLines((p) => [...p.filter((x) => x.key !== l.key), l]);
  const remove = (key: string) => setLines((p) => p.filter((x) => x.key !== key));
  const applyPromo = () => setDiscount(promo.trim().toUpperCase() === "PARADISE10" ? Math.round(subtotal * 0.1) : 0);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, guests, date, time, lines, total }),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  const ready = lines.length > 0 && date && time && f.first && f.email && f.phone;

  return (
    <form className="booking container" onSubmit={submit}>
      <div className="booking-left">
        <h2>Personal Information</h2>
        <p className="sub">Please fill in your details to book your spa appointment</p>
        <div className="row2">
          <div className="field"><label>First Name</label><input required placeholder="Enter your first name" value={f.first} onChange={(e) => setF({ ...f, first: e.target.value })} /></div>
          <div className="field"><label>Last Name</label><input placeholder="Enter your last name" value={f.last} onChange={(e) => setF({ ...f, last: e.target.value })} /></div>
        </div>
        <div className="field"><label>Email Address</label><input type="email" required placeholder="your.email@example.com" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
        <div className="row2">
          <div className="field"><label>Phone Number</label><input type="tel" required placeholder="+977 98XXXXXXXX" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></div>
          <div className="field"><label>Number of Guests</label><input type="number" min={1} max={10} value={guests} onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))} /></div>
        </div>
        <div className="field"><label>Preferred Date</label><input type="date" required value={date} min={new Date().toISOString().slice(0, 10)} onChange={(e) => { setDate(e.target.value); setTime(""); }} /></div>
        {lines.length > 0 && <div className="tags">{lines.map((l) => <span key={l.key} className="tag">{l.name}</span>)}</div>}
        <div className="field">
          <label>Select Your Time</label>
          {date ? (
            <div className="slots">
              {SLOTS.map((s) => <button type="button" key={s} className={`slot ${time === s ? "on" : ""}`} onClick={() => setTime(s)}>{s}</button>)}
            </div>
          ) : (
            <div className="placeholder-box">Please select a date first to see available times.</div>
          )}
        </div>
        <div className="field"><label>Special Requests (Optional)</label><textarea rows={3} placeholder="Any special requests, allergies, or preferences?" value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} /></div>

        <div className="promo">
          <input placeholder="Apply your Promo Code" value={promo} onChange={(e) => setPromo(e.target.value)} />
          <button type="button" className="btn btn-primary" onClick={applyPromo}>Apply</button>
        </div>
        {discount > 0 && <p className="ok-text">Promo applied: −{fmt(discount)}</p>}

        <h3 className="selected-title">Selected Services</h3>
        {lines.length === 0 && <p className="sub">Nothing selected yet — pick a treatment on the right.</p>}
        {lines.map((l) => (
          <div className="selected" key={l.key}>
            <div><strong>{l.name}</strong><small>🕒 {l.label}</small></div>
            <div className="sel-right"><span>Rs. {l.price.toLocaleString("en-US")}</span><button type="button" onClick={() => remove(l.key)} aria-label={`Remove ${l.name}`}>✕</button></div>
          </div>
        ))}
        <div className="total-row"><span>Total Amount:</span><strong>Rs. {total.toLocaleString("en-US")}.00</strong></div>
        <button className="btn btn-primary btn-block btn-lg" disabled={!ready || status === "sending"}>
          {status === "sending" ? "Sending…" : "Book my Spa Experience"}
        </button>
        {status === "ok" && <p className="ok-text">Thank you! Your request was received — we will confirm shortly.</p>}
        {status === "err" && <p className="err-text">Something went wrong. Please try again or call us.</p>}
      </div>

      <div className="booking-right">
        <h2>Select Your Services</h2>
        <p className="sub">Choose from our premium spa treatments and packages</p>
        <div className="tabs">
          <button type="button" className={tab === "services" ? "on" : ""} onClick={() => setTab("services")}>Individual Services</button>
          <button type="button" className={tab === "packages" ? "on" : ""} onClick={() => setTab("packages")}>Spa Packages</button>
        </div>
        {tab === "services" ? (
          <>
            <input className="search" placeholder="🔍 Search services..." value={q} onChange={(e) => setQ(e.target.value)} />
            <div className="svc-list">
              {filtered.map((s) => {
                const sel = lines.some((l) => l.key === s.slug);
                const isOpen = open === s.slug;
                return (
                  <div key={s.slug} className={`svc ${sel || isOpen ? "on" : ""}`}>
                    <button type="button" className="svc-head" onClick={() => setOpen(isOpen ? null : s.slug)}>
                      <div>
                        <strong>{s.name}</strong>
                        <small>🕒 {s.options.map((o) => o.minutes).join(" · ")} min · {fmt(s.minPrice)} – {fmt(s.maxPrice)}</small>
                      </div>
                      <span className="plus">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="svc-opts">
                        <small>SELECT DURATION</small>
                        <div className="pills">
                          {s.options.map((o) => (
                            <button type="button" key={o.minutes} className="pill" onClick={() => add({ key: s.slug, name: s.name, label: `${o.minutes} min`, price: o.price })}>
                              {o.minutes} min · Rs. {o.price.toLocaleString("en-US")}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="svc-list">
            {PACKAGES.map((p) => (
              <div key={p.slug} className={`svc ${lines.some((l) => l.key === p.slug) ? "on" : ""}`}>
                <button type="button" className="svc-head" onClick={() => add({ key: p.slug, name: p.name, label: `${p.minutes} min`, price: p.price })}>
                  <div><strong>{p.name}</strong><small>🕒 {p.minutes} min · {fmt(p.price)}</small></div>
                  <span className="plus">+</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
