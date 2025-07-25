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
    title: "Discovery & Use Case Mapping",
    description:
      "We identify where chatbots can make the most impact—support, lead gen, internal ops, or onboarding—and define the user journey.",
  },
  {
    number: "02",
    title: "Conversational Design & Training",
    description:
      "We design natural, on-brand conversations and train your assistant using NLP models with real data, FAQs, and context.",
  },
  {
    number: "03",
    title: "Launch & Integrate",
    description:
      "Your assistant goes live across web, WhatsApp, Slack, or wherever your users are—with full analytics and human fallback when needed.",
  },
];

const benefits = [
  {
    title: "24/7 Instant Support",
    icon: benifitIcon,
    description:
      "Always available, always fast. No wait times. No support queues.",
  },
  {
    title: "Brand-Aligned Conversations",
    icon: benifitIcon,
    description:
      "Custom tone, personality, and logic—your assistant sounds like you.",
  },
  {
    title: "Omnichannel Presence",
    icon: benifitIcon,
    description:
      "Web chat, SMS, WhatsApp, Slack, or Messenger—your bot meets customers where they are.",
  },
  {
    title: "Lead Qualification & Booking",
    icon: benifitIcon,
    description:
      "Turn conversations into meetings, sign-ups, and sales—automatically.",
  },
  {
    title: "Human Handoff Included",
    icon: benifitIcon,
    description:
      "Chatbots escalate to humans when needed, without losing the context.",
  },
  // {
  //   title: "Built-In Analytics",
  //   icon: benifitIcon,
  //   description:
  //     "Track questions, drop-offs, conversions, and optimize continuously.",
  // },
];

const industries = [
  "AI for E-commerce & Retail",
  "Chatbots for Healthcare & Insurance",
  "Internal AI Assistants for HR & Ops",
  "Chatbots for Education & Training",
];

const successStories = [
  {
    title: "Amtrak – Virtual Travel Assistant",
    description:
      "Amtrak’s AI-powered chatbot “Julie” handles over 5 million inquiries a year, helping customers book tickets, find schedules, and change reservations—reducing human agent load significantly.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Lemonade – Insurance Claims Bot",
    description:
      "Lemonade’s AI bot “Jim” handles claims in minutes, not days—settling over 30% of claims instantly, improving customer satisfaction while slashing processing costs.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Kuki Chatbot – Ecommerce Lead Gen",
    description:
      "Kuki AI-powered bots on retail sites like Redbubble and Carro increased cart recovery by 15% through proactive conversation nudges and discount logic.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage3,
  },
];

const faqData = [
  {
    id: "benefits",
    question: "Can your chatbots handle multiple languages?",
    answer:
      "Yes. We support multilingual models and can train your assistant to speak in English, Spanish, French, and more.",
  },
  {
    id: "diagnosis",
    question: "Will it integrate with our existing support tools?",
    answer:
      "Absolutely. We can plug into most CRM and support platforms, including Zendesk, Intercom, HubSpot, and custom APIs.",
  },
  {
    id: "security",
    question: "What if users ask something the bot doesn’t know?",
    answer:
      "The bot will escalate to a human agent with full conversation context. No dead ends.",
  },
  {
    id: "patient-care",
    question: "How long does setup take?",
    answer:
      "Most MVP assistants are live in 2–4 weeks, depending on complexity and platform.",
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
              Your Smartest Team Member Works 24/7—and Never Sleeps
            </h2>
            <p className="text-[#3A3A3F] section-description">
              We build AI chatbots and virtual assistants that don’t just talk —
              they solve problems, answer questions, close leads, and never get
              tired.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">Request a Free Chatbot Demo</Link>
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
              From Script to Smart AI—Here’s How We Build It
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              Every chatbot we deliver is trained to sound like your brand and
              function like a real team member.
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
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
              Where AI Assistants Are Already Making a Difference
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
            Let’s Build an Assistant That Pays for Itself
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            Your team deserves to focus on higher-value work. We’ll help your AI
            assistant handle the rest—fast, accurately, and always on.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Request a Free Chatbot Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
