import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesFilter from "@/components/ServicesFilter";

export const metadata: Metadata = { title: "Our Services | Paradise Spa" };

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" crumb="Services" />
      <ServicesFilter />
    </>
  );
}
