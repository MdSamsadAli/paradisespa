"use client";
import Slick from "react-slick";
import type { ReactNode } from "react";

type Variant = "hero" | "cards" | "gallery" | "testimonials" | "blogs";

function settingsFor(v: Variant) {
  const base = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: true,
    swipeToSlide: true,
  };
  switch (v) {
    case "hero":
      return {
        ...base,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
      };
    case "cards":
      return {
        ...base,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
        ],
      };
    case "gallery":
      return {
        ...base,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      };
    case "blogs":
      return {
        ...base,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
        ],
      };
    case "testimonials":
      return {
        ...base,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
      };
  }
}

export default function Slider({
  variant,
  children,
}: {
  variant: Variant;
  children: ReactNode;
}) {
  return (
    <div className={`slider slider-${variant}`}>
      <Slick {...settingsFor(variant)}>{children}</Slick>
    </div>
  );
}
