import Link from "next/link";
import Img from "@/components/Img";
import Slider from "@/components/Slider";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import Testimonials from "@/components/Testimonials";
import { BENEFITS, BLOGS, SERVICES } from "@/lib/data";

const HERO = [
  {
    title: "Where Beauty Blooms In Stillness",
    text: "In stillness, beauty finds its way. A space to pause, breathe, and glow from within.",
  },
  {
    title: "Unwind Body, Mind and Soul",
    text: "Authentic Nepali and Ayurvedic therapies in the heart of Thamel.",
  },
  {
    title: "Your Escape From The City",
    text: "Half-day and full-day packages designed to restore balance and vitality.",
  },
];

const SOCIAL = [
  {
    img: "social-1",
    text: "Let us treat you with a calming sauna retreat here at Paradise Spa.",
    likes: 10,
  },
  {
    img: "social-2",
    text: "Glow naturally with our refreshing Kiwi Facial.",
    likes: 4,
  },
  {
    img: "social-3",
    text: "Lights dim, scents divine, and hands that heal — paradise found.",
    likes: 14,
  },
  { img: "social-4", text: "Book your escape today.", likes: 4 },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Slider variant="hero">
          {HERO.map((h, i) => (
            <div key={h.title}>
              <div className="hero-slide">
                <Img
                  src={`/images/hero-${i + 1}.jpg`}
                  alt={h.title}
                  className="hero-bg"
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                  <h1>{h.title}</h1>
                  <p>{h.text}</p>
                  <Link href="/services" className="btn btn-primary">
                    View all services
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="section intro">
        <div className="container narrow center">
          <h2>
            Embrace Your Inner Peace and Discover True Beauty at Paradise Spa
          </h2>
          <p>
            At Paradise Spa, we believe beauty grows from calm. Each treatment
            is thoughtfully designed to relax your mind and care for your body
            with gentle attention. Our space is quiet and warm, inviting you to
            slow down. With soft techniques and natural elements, we help you
            feel balanced — rested, clear, and naturally radiant.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Experience the Harmony of Beauty and Calm</h2>
            <p>
              Tranquility shapes everything we do — from how we welcome you, to
              the natural products we use, to the gentle rhythm of each session.
              Our care is warm and uncomplicated, allowing you to truly rest and
              reconnect with yourself.
            </p>
            <p>
              This is a space to gently unfold, like a lotus on still water —
              where your presence is honored in calm. A breath of renewal flows
              through every part of your experience, and when you leave, a soft
              glow lingers — the kind that stays not just on your skin, but
              within you.
            </p>
            <Link href="/about-us" className="btn btn-primary">
              Our Wellness Journey
            </Link>
          </div>
          <div className="collage">
            <Img
              src="/images/about-1.jpg"
              alt="Spa spread"
              className="collage-a"
            />
            <Img
              src="/images/about-2.jpg"
              alt="Spa products"
              className="collage-b"
            />
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <h2 className="light">Our Services</h2>
            <Link href="/services" className="btn btn-outline-light">
              View All Services →
            </Link>
          </div>
          <p className="light sub">
            Each treatment is thoughtfully crafted to restore balance, ease
            tension, and reveal your natural glow — all within a serene and
            welcoming space.
          </p>
          <Slider variant="cards">
            {SERVICES.slice(0, 9).map((s, i) => (
              <div key={s.slug} className="slide-pad">
                <ServiceCard s={s} i={i + 1} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="section dark benefits">
        <div className="container">
          <h2 className="center light">The Benefits of Our Treatments</h2>
          <p className="center light sub">
            Our treatments do more than relax — they restore your sense of
            balance and vitality.
          </p>
          <div className="grid grid-4">
            {BENEFITS.map((b) => (
              <div className="benefit" key={b.title}>
                <div className="benefit-icon">✿</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section cta">
        <div className="container narrow center">
          <h2>Ready to feel better? Schedule an appointment today!</h2>
          <div className="btn-row">
            <Link href="/booking" className="btn btn-primary">
              Reserve Your Spot
            </Link>
            <Link href="/services" className="btn btn-outline">
              Discover Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Paradise Gallery</h2>
            <Link href="/services" className="btn btn-outline">
              View All Images →
            </Link>
          </div>
          <Slider variant="gallery">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="slide-pad">
                <Img
                  src={`/images/gallery-${n}.jpg`}
                  alt={`Gallery ${n}`}
                  className="gallery-img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Follow Our Socials</h2>
          <div className="grid grid-4">
            {SOCIAL.map((s, i) => (
              <a key={s.img} href="#" className="social">
                <Img
                  src={`/images/social-${i + 1}.jpg`}
                  alt={s.text}
                  className="social-img"
                />
                <div className="social-meta">
                  ♡ ▢ ➤ <small>{s.likes} likes</small>
                </div>
                <p>{s.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Articles And News</h2>
            <Link href="/blogs" className="btn btn-outline">
              View All Articles →
            </Link>
          </div>
          <Slider variant="blogs">
            {BLOGS.map((b, i) => (
              <div key={b.slug} className="slide-pad">
                <BlogCard b={b} i={i + 1} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
