"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const plans = [
  {
    name: "Starter",
    price: 49,
    features: [
      "1 Chatbot / Assistant",
      "Basic CRM automation",
      "Email support",
      "Standard integrations",
    ],
  },
  {
    name: "Growth",
    price: 149,
    features: [
      "Up to 5 Chatbots / Assistants",
      "Full CRM + marketing automation",
      "Analytics dashboard",
      "Priority support",
      "All integrations",
    ],
  },
  {
    name: "Enterprise",
    price: 249,
    features: [
      "Unlimited AI assistants",
      "Dedicated AI consultant",
      "Custom integrations & workflows",
      "SLA-backed support",
      "White-label options",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-section">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between items-start mb-8 lg:mb-16">
          <h1 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0">
            Plans That Scale
            <br />
            With Your Ambition
          </h1>

          <p className="max-w-md text-[#3A3A3F] section-description">
            Choose a plan that fits your needs — whether you&apos;re just
            getting started or scaling enterprise-wide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex-1 p-8 flex flex-col items-start ${
                plan.name === "Growth" ? "bg-[#E5E6E8]" : "bg-[#F5F5F6]"
              }`}
            >
              <div className="mb-4 text-[#3A3A3F] section-description-medium">
                {plan.name}
              </div>
              <div className="flex items-baseline mb-20">
                <span className="text-[#0A0A0B] card-label-lg">
                  ${plan.price}
                </span>
                <span className="text-[#3A3A3F] card-title">/month</span>
              </div>
              <ul className="list-none p-0 text-[#0C2217] section-description w-full mb-16">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center mb-1 last:mb-0 my-6"
                  >
                    <span className="text-[#141B34] section-description mr-2">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
