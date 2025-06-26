import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import industryHeroImage from "@/assets/industry/industrie.png";
import healthcareImage from "@/assets/industry/Healthcare.png";
import financeImage from "@/assets/industry/Finance.png";
import ecommerceImage from "@/assets/industry/E-Commerce.png";
import educationImage from "@/assets/industry/Education.png";
import manufacturingImage from "@/assets/industry/Manufacturing.png";
import technologyImage from "@/assets/industry/Technology.png";
import CTA from "@/components/global/cta";

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Cut the red tape. Automate admin tasks, improve patient flow, and stay compliant, without overloading your team.",
    image: healthcareImage,
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Speed up decisions. Catch fraud sooner. Free up your analysts from copy-paste work that slows you down.",
    image: financeImage,
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    description:
      "Predict demand. Personalize in real-time. Let smart assistants handle the 3 a.m. questions so you don't have to.",
    image: ecommerceImage,
  },
  {
    id: "education",
    title: "Education",
    description:
      "Deliver personalized learning, automate administrative tasks, and engage students through AI-powered tools.",
    image: educationImage,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Streamline production, monitor quality, and predict maintenance issues before they happen — all powered by AI.",
    image: manufacturingImage,
  },
  {
    id: "technology-software",
    title: "Technology & Software",
    description:
      "Accelerate innovation with scalable AI features, user behavior analytics, and intelligent automation baked in.",
    image: technologyImage,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Transforming Industries with AI-Driven Solutions
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk&apos;s AI solutions optimize processes, enhance
              decision-making, and drive efficiency across industries. We help
              businesses innovate, scale, and succeed in a rapidly evolving
              digital world.
            </p>
            <Button className="mt-6 lg:mt-10">
              Explore Our Industry Solutions
            </Button>
          </div>
          <div>
            <Image
              src={industryHeroImage}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.id}`}
                className="group block"
              >
                <div className="bg-[#F5F5F6] px-8 py-6 h-full">
                  <h3 className="card-title text-[#3A3A3F)] mb-6">
                    {industry.title}
                  </h3>
                  <div className="mb-6">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      className="object-cover w-full h-[259px]"
                    />
                  </div>
                  <p className="text-[#3A3A3F] section-description">
                    {industry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
