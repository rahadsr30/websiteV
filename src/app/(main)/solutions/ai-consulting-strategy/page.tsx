"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import servicehero from "@/assets/solution/solutionHero.png";
import iconnn2 from "@/assets/iconnn2.png";
import benifitIcon from "@/assets/solution/solutionIcon.png";
import caseStudyImage1 from "@/assets/solution/successstory1.png";
import caseStudyImage2 from "@/assets/solution/successstory2.png";
import caseStudyImage3 from "@/assets/solution/successstory3.png";
import Plugin from "../../plugin";
import React, { useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We dig into your workflows, data infrastructure, challenges, and goals—no assumptions, no jargon.",
  },
  {
    number: "02",
    title: "Opportunity Mapping",
    description:
      "We identify high-ROI use cases for AI and automation, aligned with your industry, team capacity, and tools.",
  },
  {
    number: "03",
    title: "Roadmap & Execution Plan",
    description:
      "You’ll walk away with a clear, actionable roadmap that includes priorities, tech stack recommendations, success metrics, and next steps—whether you build with us or not.",
  },
];

const benefits = [
  {
    title: "Clarity Before Code",
    icon: benifitIcon,
    description:
      "No vague “digital transformation” talk. We help you see exactly where AI makes sense—and where it doesn’t.",
  },
  {
    title: "Cost-Aware Strategy",
    icon: benifitIcon,
    description:
      "We factor in your team size, tech stack, budget, and internal skill sets. Smart automation doesn’t have to be expensive.",
  },
  {
    title: "Tech-Agnostic Advice",
    icon: benifitIcon,
    description:
      "We’re not married to a single vendor or platform. We recommend what fits, not what we’re selling.",
  },
  {
    title: "Leadership Enablement",
    icon: benifitIcon,
    description:
      "We break down AI into clear business terms so stakeholders understand it, buy into it, and champion it.",
  },
  {
    title: "Ready-to-Build Blueprint",
    icon: benifitIcon,
    description:
      "Walk away with documentation, architecture options, and phased implementation timelines.",
  },
  // {
  //   title: "Built-In Analytics",
  //   icon: benifitIcon,
  //   description:
  //     "Track questions, drop-offs, conversions, and optimize continuously.",
  // },
];

const industries = [
  "Strategy for AI in Healthcare",
  "Strategy for AI in Logistics",
  "AI Consulting for Retail & Commerce",
  "Public Sector & Higher Education",
  "AI Roadmaps for SaaS & Tech Firms",
];

const successStories = [
  {
    title: "Shell – AI for Predictive Maintenance Planning",
    description:
      "Shell’s AI roadmap helped reduce unscheduled downtime by 20%, thanks to predictive analytics planned through strategic partnerships and pilot programs before full deployment.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "DHL – Logistics Automation Framework",
    description:
      "With the help of external AI consultants, DHL mapped a 5-year AI strategy to improve route optimization and warehouse automation, leading to 15% reduction in delivery inefficiencies.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "University of Canberra – AI Governance Strategy",
    description:
      "Developed an AI use and ethics strategy that aligned with research goals and risk policies, resulting in a successful launch of campus-wide automation pilots.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage3,
  },
];

const faqData = [
  {
    id: "benefits",
    question: "What types of businesses benefit from AI consulting?",
    answer:
      "We work with startups, SMEs, and enterprises—especially those unsure how to start or scale AI without overcommitting.",
  },
  {
    id: "diagnosis",
    question: "Do you help with implementation too?",
    answer:
      "Yes. Our consulting team can transition seamlessly into our technical build teams, or work alongside your internal developers.",
  },
  {
    id: "security",
    question: "Is your advice tied to certain vendors?",
    answer:
      "No. We are platform-agnostic and always recommend what's best for your needs, not what we’re partnered with.",
  },
  {
    id: "patient-care",
    question: "What do I get at the end of the engagement?",
    answer:
      "You’ll receive a strategic roadmap document, use case priorities, architecture outlines, KPIs, and implementation recommendations.",
  },
];

export default function Page() {
  const [expandedFaq, setExpandedFaq] = useState("");
  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              AI Isn’t Magic. But With the Right Strategy, It Can Feel Like It.
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Whether you&apos;re starting from scratch or scaling an AI
              initiative, Vsenk helps you cut through the hype and design
              systems that actually move the needle.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">Book a Strategic AI Consultation</Link>
            </Button>
          </div>
          <div>
            <Image
              src={servicehero}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 lg:mb-16">
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0 max-w-screen-sm">
              We Don’t Sell Products. We Co-Create Playbooks.
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              AI is only valuable when it solves the right problem. Our
              consulting approach is built on understanding your business first,
              then designing an AI strategy that fits.
            </p>
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

      <section className="py-section bg-[#F5F5F6]">
        <div className="wrapper">
          <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-sm mb-8 lg:mb-16">
            What You Get With Vsenk&apos;s AI/ML Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-[#fff]">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 border-2 border-[#fff]">
                <span>
                  <Image
                    src={benefit.icon}
                    alt="Step Icon"
                    width={40}
                    height={40}
                  />
                </span>
                <h3 className="card-title text-[#3A3A3F] mt-6">
                  {benefit.title}
                </h3>
                <p className="text-[#3A3A3F] section-description mt-3">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div>
          <h2 className="section-title text-[#0C2217] section-title text-center mb-8 lg:mb-16">
            Built for Your Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {industries.map((industry, index) => (
              <p
                key={index}
                className="p-4 text-[#585962] card-title bg-[#F5F5F6] text-center"
              >
                {industry}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-[700px]">
              AI Strategy That Drives Results—Not Just Decks
            </h2>
            {/* <Button className="mt-3 md:mt-0">Explore Use Cases</Button> */}
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div
                key={story.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className={index % 2 === 1 ? "" : ""}>
                  <h3 className="text-[#3A3A3F] card-title-lg mb-4">
                    {story.title}
                  </h3>
                  <p className="text-[#3A3A3F] section-description mb-8">
                    {story.description}
                  </p>

                  {/* <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Plugin />

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
            Smart Companies Don’t Rush AI. They Plan It.
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            Let’s talk about your goals and build a smarter path to real
            results—with or without writing a single line of code.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Book a Strategic AI Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
