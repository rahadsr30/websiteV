import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import serviceImage from "@/assets/service.png";
import icon from "@/assets/iconnn.png";
import CTA from "@/components/global/cta";

const cards = [
  {
    title: "AI Chatbots & Virtual Assistants",
    icon: icon,
    desc: "Trained on your data. Speaking in your tone. Always-on customer service that doesn&apos;t burn out.",
    slug: "chatbots-virtual-assistants",
  },
  {
    title: "CRM & Marketing Automation",
    icon: icon,
    desc: "Lead nurturing without the manual grind. Keep your funnel warm while your team closes.",
    slug: "crm-marketing-automation",
  },
  {
    title: "AI/ML Development",
    icon: icon,
    desc: "Custom-built intelligence that fits your workflow, not a one-size-fits-none platform.",
    slug: "ai-ml-development",
  },
  {
    title: "AI Consulting & Strategy",
    icon: icon,
    desc: "Not sure where to start? We&apos;ll map your automation journey and build it with you.",
    slug: "ai-consulting-strategy",
  },
];

export default function page() {
  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Powerful AI Solutions for Every Need
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk offers AI solutions designed to optimize workflows, enhance
              decision-making, and drive efficiency, helping businesses unlock
              new opportunities and stay competitive.
            </p>
            <Button className="mt-6 lg:mt-10">
              Get Your Free Strategy Call
            </Button>
          </div>
          <div>
            <Image
              src={serviceImage}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={`/solutions/${card.slug}`}
              className="bg-[#F5F5F6] p-10 flex flex-col justify-between min-h-[220px] cursor-pointer group"
            >
              <Image
                src={card.icon.src}
                alt={card.title}
                width={40}
                height={40}
                className="mb-4"
              />
              <div>
                <h3 className="text-[#3A3A3F] card-title-lg mb-4">
                  {card.title}
                </h3>
                <p className="text-[#3A3A3F] section-description mb-10">
                  {card.desc}
                </p>
              </div>
              <Button variant="outline" className="w-fit">
                Explore
              </Button>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
