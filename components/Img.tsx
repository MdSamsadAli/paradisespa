"use client";
import { useState } from "react";

export default function Img({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [err, setErr] = useState(false);
  if (err)
    return (
      <div
        className={`img-fallback ${className}`}
        role="img"
        aria-label={alt}
      />
    );
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErr(true)}
    />
  );
}
