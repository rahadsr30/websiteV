import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import industry1 from "@/assets/industry/Technology.png";
import industry2 from "@/assets/industry/Education.png";
import industry3 from "@/assets/industry/Healthcare.png";
import industry4 from "@/assets/industry/Finance.png";
import industry5 from "@/assets/industry/E-Commerce.png";
import industry6 from "@/assets/industry/Manufacturing.png";

const industries = [
  {
    name: "Technology & Software",
    description:
      "Accelerate innovation with scalable AI features, user behavior analytics, and intelligent automation baked in.",
    image: industry1,
  },
  {
    name: "Education",
    description:
      "Deliver personalized learning, automate administrative tasks, and engage students through AI-powered tools.",
    image: industry2,
  },
  {
    name: "Healthcare",
    description:
      "Cut the red tape. Automate admin tasks, improve patient flow, and stay compliant, without overloading your team.",
    image: industry3,
  },
  {
    name: "Finance",
    description:
      "Speed up decisions. Catch fraud sooner. Free up your analysts from copy-paste work that slows you down.",
    image: industry4,
  },
  {
    name: "Retail & E-Commerce",
    description:
      "Predict demand. Personalize in real-time. Let smart assistants handle the 3 a.m. questions so you don't have to.",
    image: industry5,
  },
  {
    name: "Manufacturing",
    description:
      "Streamline production, monitor quality, and predict maintenance issues before they happen — all powered by AI.",
    image: industry6,
  },
];

export default function Industry() {
  return (
    <section className="bg-white py-20">
      <div>
        <div className="mb-12 flex flex-wrap items-start justify-between gap-4 wrapper">
          <h2 className="section-title-medium text-[#0A0A0B]">
            One Engine. Any <br /> Industry.
          </h2>
          <Button className="mt-3 md:mt-0">Explore Industries</Button>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {industries.map((industry) => (
              <div
                key={`first-${industry.name}`}
                className="flex-shrink-0 w-80 mx-2 bg-zinc-100 p-6"
              >
                <h3 className="mb-6 text-[#3A3A3F] card-title">
                  {industry.name}
                </h3>
                <div className="mb-6 h-48 w-full">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={600}
                    height={400}
                    className="rounded-md h-full w-full object-cover"
                  />
                </div>

                <p className="text-[#3A3A3F] section-description">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
