"use client";
import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo"><span className="logo-mark">🌿</span><span className="logo-text">Paradise<em>Spa</em></span></div>
          <p>{SITE.about}</p>
          <h4>Subscribe to Our Newsletter</h4>
          <form
            className="subscribe"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setEmail("");
            }}
          >
            <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn btn-primary" type="submit">{done ? "Thanks!" : "Subscribe"}</button>
          </form>
        </div>
        <div className="footer-cols">
          <div>
            <h5>Navigation</h5>
            <Link href="/about-us">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/packages">Packages</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/#reviews">Review</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
          <div>
            <h5>Follow Us</h5>
            <a href={SITE.instagram}>Instagram</a>
            <a href={SITE.facebook}>Facebook</a>
          </div>
          <div>
            <h5>Contact Us</h5>
            <p>{SITE.address}</p>
            <a href={`mailto:${SITE.email}`} className="small">{SITE.email}</a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="small">{SITE.phone}</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright © 2026 Paradise Spa - All Rights Reserved.</span>
        <span>Designed by <a href="#">Saptacode</a></span>
      </div>
    </footer>
  );
}
