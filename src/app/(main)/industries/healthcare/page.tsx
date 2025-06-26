import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import healthcareHeroImage from "@/assets/industry/Healthcare.png";
import Plugin from "../../plugin";
import News from "../../news";
import CTA from "@/components/global/cta";

export default function page() {
  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Revolutionizing Healthcare with AI-Driven Automation
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk&apos;s AI solutions streamline administrative tasks, improve
              patient care, and ensure compliance, helping healthcare
              professionals focus on what matters most.
            </p>
            <Button className="mt-6 lg:mt-10">
              Get Your Free Strategy Call
            </Button>
          </div>
          <div>
            <Image
              src={healthcareHeroImage}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <Plugin />
      <News />
      <CTA />
    </>
  );
}
