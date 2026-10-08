import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = { title: "Book Now | Paradise Spa" };

export default function BookingPage() {
  return (
    <>
      <PageHero title="Book Now" crumb="Booking" />
      <section className="section">
        <div className="container center">
          <h2 className="big">Book Your Relaxation Experience</h2>
          <p className="sub">Reserve your spa treatment with ease</p>
        </div>
        <Suspense fallback={<p className="center">Loading…</p>}>
          <BookingForm />
        </Suspense>
      </section>
    </>
  );
}
