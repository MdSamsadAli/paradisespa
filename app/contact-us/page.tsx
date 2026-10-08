import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Img from "@/components/Img";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us | Paradise Spa" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" crumb="Contact-us" />
      <section className="section">
        <div className="container contact-grid">
          <div className="map">
            <iframe
              title="Paradise Spa location"
              src="https://www.google.com/maps?q=Paradise+Spa+Thamel+Kathmandu&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="center">Visit us and enjoy</h2>
          <p className="center sub">Experience tranquility and rejuvenation at our premier spa destination.</p>
          <div className="split visit">
            <Img src="/images/visit.jpg" alt="Paradise Spa reception" className="detail-img tall" />
            <div>
              <h3>Kathmandu, Nepal</h3>
              <p>Discover the perfect blend of traditional wellness and modern luxury in the heart of Kathmandu. Our spa offers a serene escape from the bustling city, providing authentic treatments and personalized care in a peaceful environment.</p>
              <ul>
                <li>{SITE.address}</li>
                <li>{SITE.email}</li>
                <li>Phone: {SITE.phone}</li>
                <li>Hours: {SITE.contactHours}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
