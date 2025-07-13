"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import heroImage from "@/assets/pricing/pricingHero.png";
import Link from "next/link";

interface Package {
  name: string;
  price: number;
  delivery: string;
  features: string[];
  unavailable: string[];
  featured?: boolean;
}

type PlatformKey =
  | "Voiceflow"
  | "Chatbot"
  | "Make"
  | "Vapi"
  | "n8n"
  | "Zapier"
  | "Shopify AI";

const plans = [
  {
    name: "Automation",
    price: 69,
    features: [
      "1 Automation Workflow or Bot",
      "Basic CRM or App Integration",
      "Real-Time Alerts & Notifications",
      "Trigger-Based Actions",
      "Email Support",
    ],
  },
  {
    name: "Consultancy",
    price: 199,
    features: [
      "Up to 3 Strategy Sessions Monthly",
      "AI Integration Roadmap",
      "Workflow & Process Audit",
      "Platform Selection Support",
      "Priority Support",
    ],
  },
  {
    name: "Development",
    price: 349,
    features: [
      "Custom AI Assistant or Workflow",
      "Full API & Platform Integration",
      "Multi-Step Automation Build",
      "Dedicated AI Engineer",
      "SLA-Backed Support & Revisions",
    ],
  },
];

const platformPackages: Record<PlatformKey, Package[]> = {
  Voiceflow: [
    {
      name: "Starter Package",
      price: 1200,
      delivery: "7-day delivery",
      features: [
        "1 Voiceflow Project Setup",
        "Basic CRM/API Webhook Integration",
        "Simple Logic Flows (Q&A, FAQs)",
        "Testing & Deployment",
        "Email Support",
      ],
      unavailable: [
        "Dynamic Content Retrieval",
        "CRM Lead Capture",
        "NLP/Voice Assistant Enhancements",
        "Platform Automation (Zapier, Make)",
        "Analytics Setup",
        "Custom Design Flow",
        "Multilingual Support",
      ],
    },
    {
      name: "Pro Package",
      price: 2200,
      delivery: "12-day delivery",
      featured: true,
      features: [
        "Up to 3 Voiceflow Assistants",
        "CRM & Webhook Integrations",
        "Dynamic Content with Airtable",
        "Dialogflow or NLP Layer",
        "Platform Automation via Make/Zapier",
        "Voice API Testing & QA",
        "Stack Internal Bot Setup",
        "Priority Support",
      ],
      unavailable: [
        "Custom Visual Flows",
        "Advanced Analytics",
        "Custom Design Flow",
        "Multilingual Support",
      ],
    },
    {
      name: "Advanced Package",
      price: 4800,
      delivery: "20-day delivery",
      features: [
        "Unlimited Assistants",
        "Custom Visual Flows",
        "CRM + Analytics Dashboard",
        "Custom Automation",
        "Advanced NLP with Dialogflow or Vapi",
        "Airtable + Google Sheets Sync",
        "Smart fallback handling",
        "Custom voice personas",
        "Post-launch optimization",
        "Dedicated integration support",
        "Multilingual & Locale Support",
        "Complete Handoff + Support",
      ],
      unavailable: [],
    },
  ],
  Chatbot: [
    {
      name: "Starter Package",
      price: 1000,
      delivery: "5-day delivery",
      features: [
        "1 Chatbot Setup",
        "Basic Q&A Integration",
        "Simple Response Flows",
        "Platform Deployment",
        "Email Support",
      ],
      unavailable: [
        "Advanced NLP",
        "CRM Integration",
        "Multi-language Support",
        "Analytics Dashboard",
        "Custom Design",
      ],
    },
    {
      name: "Pro Package",
      price: 1800,
      delivery: "10-day delivery",
      featured: true,
      features: [
        "Up to 3 Chatbots",
        "Advanced NLP Processing",
        "CRM & API Integrations",
        "Multi-channel Deployment",
        "Analytics & Reporting",
        "Priority Support",
      ],
      unavailable: [
        "Custom AI Training",
        "Voice Integration",
        "Advanced Analytics",
      ],
    },
    {
      name: "Advanced Package",
      price: 3500,
      delivery: "15-day delivery",
      features: [
        "Unlimited Chatbots",
        "Custom AI Training",
        "Voice & Text Integration",
        "Advanced Analytics Dashboard",
        "Multi-language Support",
        "Dedicated Support",
        "Custom Integrations",
      ],
      unavailable: [],
    },
  ],
  Make: [
    {
      name: "Starter Package",
      price: 800,
      delivery: "3-day delivery",
      features: [
        "1 Make Automation",
        "Basic App Connections",
        "Simple Trigger Setup",
        "Email Support",
      ],
      unavailable: [
        "Complex Workflows",
        "Advanced Integrations",
        "Custom Functions",
        "Priority Support",
      ],
    },
    {
      name: "Pro Package",
      price: 1500,
      delivery: "7-day delivery",
      featured: true,
      features: [
        "Up to 5 Make Automations",
        "Advanced App Integrations",
        "Complex Workflow Design",
        "Error Handling Setup",
        "Priority Support",
      ],
      unavailable: ["Custom Functions", "Advanced Analytics"],
    },
    {
      name: "Advanced Package",
      price: 2800,
      delivery: "12-day delivery",
      features: [
        "Unlimited Make Automations",
        "Custom Functions & Scripts",
        "Advanced Error Handling",
        "Performance Optimization",
        "Dedicated Support",
        "Custom Integrations",
      ],
      unavailable: [],
    },
  ],
  Vapi: [
    {
      name: "Starter Package",
      price: 1500,
      delivery: "8-day delivery",
      features: [
        "1 Vapi Voice Assistant",
        "Basic Voice Recognition",
        "Simple Call Flows",
        "Phone Integration",
        "Email Support",
      ],
      unavailable: [
        "Advanced NLP",
        "CRM Integration",
        "Custom Voice Models",
        "Analytics Dashboard",
      ],
    },
    {
      name: "Pro Package",
      price: 2500,
      delivery: "14-day delivery",
      featured: true,
      features: [
        "Up to 3 Vapi Assistants",
        "Advanced Voice Recognition",
        "CRM & API Integrations",
        "Custom Call Routing",
        "Analytics & Reporting",
        "Priority Support",
      ],
      unavailable: ["Custom Voice Models", "Advanced Analytics"],
    },
    {
      name: "Advanced Package",
      price: 4200,
      delivery: "18-day delivery",
      features: [
        "Unlimited Vapi Assistants",
        "Custom Voice Models",
        "Advanced Analytics Dashboard",
        "Multi-language Support",
        "Dedicated Support",
        "Custom Integrations",
      ],
      unavailable: [],
    },
  ],
  n8n: [
    {
      name: "Starter Package",
      price: 900,
      delivery: "4-day delivery",
      features: [
        "1 n8n Workflow",
        "Basic Node Connections",
        "Simple Automation",
        "Email Support",
      ],
      unavailable: [
        "Complex Workflows",
        "Custom Nodes",
        "Advanced Integrations",
        "Priority Support",
      ],
    },
    {
      name: "Pro Package",
      price: 1600,
      delivery: "8-day delivery",
      featured: true,
      features: [
        "Up to 5 n8n Workflows",
        "Advanced Node Configurations",
        "Complex Automation Chains",
        "Error Handling",
        "Priority Support",
      ],
      unavailable: ["Custom Nodes", "Advanced Analytics"],
    },
    {
      name: "Advanced Package",
      price: 3000,
      delivery: "13-day delivery",
      features: [
        "Unlimited n8n Workflows",
        "Custom Node Development",
        "Advanced Error Handling",
        "Performance Optimization",
        "Dedicated Support",
      ],
      unavailable: [],
    },
  ],
  Zapier: [
    {
      name: "Starter Package",
      price: 700,
      delivery: "3-day delivery",
      features: [
        "1 Zapier Automation",
        "Basic App Connections",
        "Simple Trigger Setup",
        "Email Support",
      ],
      unavailable: [
        "Multi-step Zaps",
        "Advanced Filters",
        "Custom Webhooks",
        "Priority Support",
      ],
    },
    {
      name: "Pro Package",
      price: 1300,
      delivery: "6-day delivery",
      featured: true,
      features: [
        "Up to 5 Zapier Automations",
        "Multi-step Zaps",
        "Advanced Filters & Conditions",
        "Webhook Integrations",
        "Priority Support",
      ],
      unavailable: ["Custom Code Actions", "Advanced Analytics"],
    },
    {
      name: "Advanced Package",
      price: 2400,
      delivery: "10-day delivery",
      features: [
        "Unlimited Zapier Automations",
        "Custom Code Actions",
        "Advanced Error Handling",
        "Performance Optimization",
        "Dedicated Support",
      ],
      unavailable: [],
    },
  ],
  "Shopify AI": [
    {
      name: "Starter Package",
      price: 1400,
      delivery: "7-day delivery",
      features: [
        "1 Shopify AI Assistant",
        "Basic Product Recommendations",
        "Simple Customer Support",
        "Email Support",
      ],
      unavailable: [
        "Advanced AI Models",
        "CRM Integration",
        "Custom Analytics",
        "Multi-language Support",
      ],
    },
    {
      name: "Pro Package",
      price: 2300,
      delivery: "12-day delivery",
      featured: true,
      features: [
        "Advanced AI Recommendations",
        "Customer Behavior Analysis",
        "CRM & Marketing Integration",
        "Sales Analytics Dashboard",
        "Priority Support",
      ],
      unavailable: ["Custom AI Models", "Advanced Analytics"],
    },
    {
      name: "Advanced Package",
      price: 4000,
      delivery: "16-day delivery",
      features: [
        "Custom AI Models",
        "Advanced Customer Analytics",
        "Multi-channel Integration",
        "Personalization Engine",
        "Dedicated Support",
        "Custom Development",
      ],
      unavailable: [],
    },
  ],
};

const platforms: PlatformKey[] = [
  "Voiceflow",
  "Chatbot",
  "Make",
  "Vapi",
  "n8n",
  "Zapier",
  "Shopify AI",
];

const faqData = [
  {
    id: "benefits",
    question: "Can I switch plans later?",
    answer:
      " Yes. You can upgrade, downgrade, or customize your plan at any time. We’ll even help migrate your workflows.",
  },
  {
    id: "diagnosis",
    question: "Do I need technical skills to use Vsenk?",
    answer: "No – Vsenk is super user‑friendly with zero coding required.",
  },
  {
    id: "security",
    question: "What if I already use HubSpot, Shopify, or Make?",
    answer:
      "Perfect! Vsenk seamlessly integrates with HubSpot, Shopify, Make (and more).",
  },
  {
    id: "support",
    question: "Are there onboarding fees?",
    answer: "Nope – onboarding is completely free.",
  },
  {
    id: "patient-care",
    question: "Is support included in all plans?",
    answer: "Yes – every plan comes with full support.",
  },
];

export default function Page() {
  const [activePlatform, setActivePlatform] =
    useState<PlatformKey>("Voiceflow");
  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Simple, Transparent Pricing Built to Scale With You
            </h2>
            <p className="text-[#3A3A3F] section-description">
              No hidden fees. No bloated retainers. Just AI solutions that grow
              with your business, from first chatbot to full-stack automation.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
          <div>
            <Image
              src={heroImage}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex-1 p-8 flex flex-col items-start ${
                  plan.name === "Consultancy" ? "bg-[#E5E6E8]" : "bg-[#F5F5F6]"
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
                <Button className="w-full mt-auto" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="text-[#0A0A0B] section-title max-w-screen-md mx-auto mb-8 lg:mb-16">
              Vsenk Integration Packages for Every Platform
            </h2>
            <div className="flex flex-wrap justify-center gap-0 mb-8 lg:mb-16 border border-[#CECFD3] p-2 max-w-fit mx-auto">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  className={`px-6 py-3 card-title transition-all duration-200 ${
                    activePlatform === platform
                      ? "bg-[#E5E6E8] text-[#0A0A0B]"
                      : "text-[#3A3A3F] hover:text-[#0A0A0B] hover:bg-gray-50"
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#CECFD3]">
            {platformPackages[activePlatform].map((pkg) => (
              <div
                key={pkg.name}
                className={`flex-1 p-8 flex flex-col items-start ${
                  pkg.featured ? "bg-[#4B4B53] text-white" : "bg-white"
                } `}
              >
                <div
                  className={`mb-4 ${
                    pkg.featured ? "text-white" : "text-[#3A3A3F]"
                  } section-description-medium`}
                >
                  {pkg.name}
                </div>
                <div className="flex items-baseline mb-4">
                  <span
                    className={`${
                      pkg.featured ? "text-white" : "text-[#0A0A0B]"
                    } card-label-lg`}
                  >
                    ${pkg.price.toLocaleString()}
                  </span>
                </div>
                <div
                  className={`mb-20 ${
                    pkg.featured ? "text-white" : "text-[#3A3A3F]"
                  } card-title`}
                >
                  {pkg.delivery}
                </div>

                <ul className="list-none p-0 w-full mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start mb-3 ${
                        pkg.featured ? "text-white" : "text-[#3A3A3F]"
                      } section-description`}
                    >
                      <span
                        className={`${
                          pkg.featured ? "text-white" : "text-[#3A3A3F]"
                        } mr-2`}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {pkg.unavailable.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start mb-3 ${
                        pkg.featured ? "text-white" : "text-[#3A3A3F]"
                      } section-description`}
                    >
                      <span
                        className={`${
                          pkg.featured ? "text-white" : "text-[#3A3A3F]"
                        } mr-2`}
                      >
                        ✗
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-auto ${
                    pkg.featured
                      ? "bg-[#fff] text-[#0A0A0B] hover:bg-[#FFF]/90"
                      : "bg-[#0A0A0B] text-[#FFF] hover:bg-[#0A0A0B]/90"
                  }`}
                  asChild
                >
                  <Link href="/contact">Book a Call</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B]">
              Freaquently Asked <br /> Questions
            </h2>
            <Button className="mt-3 md:mt-0" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className={` overflow-hidden ${
                  expandedFaq === faq.id
                    ? "border border-[#CECFD3]"
                    : "bg-[#fff] "
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? "" : faq.id)
                  }
                  className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                    expandedFaq === faq.id ? "" : "bg-[#F5F5F6]"
                  }`}
                >
                  <span className="text-[#3A3A3F] section-description-medium">
                    {faq.question}
                  </span>
                  <span className="text-[#3A3A3F] section-description-medium ml-4 flex-shrink-0">
                    {expandedFaq === faq.id ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6 bg-[#fff]">
                    <p className="text-[#585962] regular-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section wrapper">
        <div className="text-center py-10 lg:py-20 px-10 lg:px-0 bg-cover bg-center bg-no-repeat bg-[url('/vcta.png')]">
          <h2 className="section-title text-white mb-3 max-w-screen-sm mx-auto">
            Let’s Build the Right AI Stack for You
          </h2>
          <Button variant="ghost" asChild>
            <Link href="/contact">Get Your Free Strategy Call</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
