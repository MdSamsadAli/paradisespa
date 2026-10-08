import Slider from "./Slider";
import { REVIEWS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section dark" id="reviews">
      <div className="container">
        <h2 className="center light">What Our Guests Are Saying</h2>
        <p className="center light sub">Our guests return not just for the treatments — but for the feeling they take home.</p>
        <div className="reviews-grid">
          <div className="review-sources">
            <h3>Our Reviews</h3>
            <div className="source"><strong>Tripadvisor</strong><div className="stars">★★★★★</div><small>Based on 249 reviews</small></div>
            <div className="source"><strong>Google</strong><div className="stars">★★★★★</div><small>4.9 · 1,600 reviews</small></div>
          </div>
          <div className="review-slider">
            <Slider variant="testimonials">
              {REVIEWS.map((r) => (
                <div key={r.name}>
                  <blockquote className="review">
                    <div className="stars">★★★★★</div>
                    <p>“{r.text}”</p>
                    <cite>{r.name}</cite>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
