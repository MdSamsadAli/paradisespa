import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About Us | Paradise Spa" };

const VALUES = [
  {
    icon: "🏅",
    title: "Excellence",
    text: "We are committed to delivering excellence in every detail of your spa experience. From our carefully selected treatments to our highly trained therapists, we ensure the highest standards of quality, hygiene, and professionalism. Every visit is designed to leave you feeling refreshed, confident, and completely cared for.",
  },
  {
    icon: "🤝",
    title: "Service",
    text: "Our service is centered around you. We take the time to understand your needs and personalize each treatment to provide comfort, relaxation, and visible results. With a warm, welcoming environment and attentive care, we strive to make every guest feel valued from the moment they walk in.",
  },
  {
    icon: "♡",
    title: "Passion",
    text: "Our passion for wellness and beauty drives everything we do. We genuinely love helping our clients relax, rejuvenate, and reconnect with themselves. This passion inspires us to continuously improve, innovate, and create memorable spa experiences that nurture both body and mind.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" crumb="About-us" />
      <section className="section about-intro">
        <div className="container narrow center">
          <h2>
            We believe that true beauty and wellness start from within.
            That&apos;s why our treatments are designed not only to pamper the
            body today!
          </h2>
          <div className="stats">
            <div>
              <strong>12+</strong>
              <span>Years Of Experience</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Star Ratings</span>
            </div>
            <div>
              <strong>1k+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <h2 className="center light">The Value that Guides Us</h2>
          <div className="grid grid-3">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
