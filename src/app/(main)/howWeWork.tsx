import React from "react";
import Image from "next/image";
import iconnn2 from "@/assets/iconnn2.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "We Learn Your Business",
    description:
      "We start with a strategy call to understand your workflows, data, and goals.",
  },
  {
    number: "02",
    title: "We Build the Right AI",
    description:
      "Custom chatbots, automation tools, or full-scale systems tailored to your stack and your people.",
  },
  {
    number: "03",
    title: "We Launch & Stay With You",
    description:
      "We deploy fast, train your team, and support you as you scale. No handoff, no disappearing act.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-section bg-white">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 lg:mb-16">
          <div>
            <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-sm">
              Zero Guesswork. Here’s How We Work.
            </h2>
          </div>
          <div className="mt-3 md:mt-0">
            <Button asChild>
              <Link href="/contact">Book Your Strategy Session</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F5F5F6] py-8 px-10 flex flex-col items-start"
            >
              <span className="card-title-lg text-[#82848E] mb-12">
                {step.number}
              </span>
              <span className="mb-6">
                <Image src={iconnn2} alt="Step Icon" width={40} height={40} />
              </span>
              <h3 className="card-title-lg text-[#3A3A3F] mb-3">
                {step.title}
              </h3>
              <p className="text-[#3A3A3F] section-description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
