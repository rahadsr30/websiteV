"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import heorImage from "@/assets/platform/platformHero.png";
import icon from "@/assets/platform/platformIcon.png";
import icon2 from "@/assets/platform/platformIcon2.png";
import powerUp from "@/assets/platform/PowerUp.png";
import benifitIcon from "@/assets/solution/solutionIcon.png";
import caseStudyImage1 from "@/assets/platform/platformCase1.png";
import caseStudyImage2 from "@/assets/platform/platformCase2.png";
import caseStudyImage3 from "@/assets/platform/platformCase3.png";
import caseStudyImage4 from "@/assets/platform/platformCase4.png";
import caseStudyImage5 from "@/assets/platform/platformCase5.png";
import caseStudyImage6 from "@/assets/platform/platformCase6.png";

export default function Page() {
  const integrations = [
    {
      title: "n8n + OpenAI Integration",
      description: "for smart assistants, summaries, or AI agents",
      icon: icon,
    },
    {
      title: "n8n + WhatsApp Integration",
      description: "for real-time messaging automation",
      icon: icon,
    },
    {
      title: "n8n + Supabase / PostgreSQL / Notion",
      description: "for structured data access and updates",
      icon: icon,
    },
    {
      title: "n8n + Google Sheets + Airtable",
      description: "for reporting automation",
      icon: icon,
    },
    {
      title: "n8n + CRM Integration",
      description: "for full sales workflow sync",
      icon: icon,
    },
    {
      title: "n8n + Vapi Voice AI",
      description: "for voice-triggered actions",
      icon: icon,
    },
  ];

  const benefits = [
    {
      title: "AI + Workflow = Real Results",
      icon: benifitIcon,
      description:
        "We build n8n OpenAI integrations that generate responses, qualify leads, summarize inputs, and enrich content.",
    },
    {
      title: "Fully Custom Business Logic",
      icon: benifitIcon,
      description:
        "Use conditional filters, routers, and error handling to create automations that adapt to your processes.",
    },
    {
      title: "CRM & Marketing Automation",
      icon: benifitIcon,
      description:
        "Trigger lead routing, follow-up emails, Slack alerts, and pipeline updates using n8n CRM integrations.",
    },
    {
      title: "Secure, Self-Hosted Deployment",
      icon: benifitIcon,
      description:
        "Need on-premise privacy? We set up and secure n8n on your own infrastructure or private cloud.",
    },
    {
      title: "Multi-System Orchestration",
      icon: benifitIcon,
      description:
        "Connect dozens of tools in a single flow—from WhatsApp and Notion to Vapi, Supabase, and Stripe.",
    },
  ];

  const successStories = [
    {
      title: "AI Agent Integration with n8n + OpenAI",
      description:
        "Route leads through a voice assistant (e.g., Vapi), analyze the query using GPT, and trigger CRM actions—all inside one n8n flow.",
      points: [
        "Personalized shopping assistant",
        "Real-time inventory checks",
        "Voice-based order collection",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage1,
    },
    {
      title: "Customer Onboarding Automation",
      description:
        "Connect n8n to HubSpot, Notion, and Google Sheets to automate onboarding tasks, assign owners, and schedule email series.",
      points: [
        "Automated lead logging",
        "Intent scoring",
        "Real-time Slack notifications",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage2,
    },
    {
      title: "Internal Workflow Builder",
      description:
        "Use n8n for ticket escalation rules, Slack alerts, and automated documentation using Notion or Confluence.",
      points: [
        "Voice-driven internal workflows",
        "Notion and Airtable integration",
        "Automated meeting booking",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage3,
    },
  ];

  const caseStories = [
    {
      title: "Plausible Analytics – Internal Tooling with n8n",
      description:
        "Plausible uses n8n for internal automation, including alerts, status checks, and syncs across their analytics platform.",
      metrics: [
        { value: "80%", label: "faster responses" },
        { value: "100%", label: "hands-free" },
        { value: "70%", label: "fewer manual steps" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage4,
    },
    {
      title: "Tally Forms – n8n + Airtable + Notion Workflow",
      description:
        "Tally built a multi-app workflow to auto-route form responses into Airtable and update Notion docs in real-time using n8n.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage5,
    },
    {
      title: "Hockeystick.co – CRM Sync with n8n",
      description:
        "VC data platform Hockeystick used n8n to automate pipeline updates and sync investment records across Notion and HubSpot.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage6,
    },
  ];

  const documentationGuides = [
    {
      title: "What is n8n? Overview & Use Cases",
      icon: icon2,
    },
    {
      title: "OpenAI Integration in n8n Workflows",
      icon: icon2,
    },
    {
      title: "n8n WhatsApp Integration Guide",
      icon: icon2,
    },
    {
      title: "How to Connect Google Sheets to n8n",
      icon: icon2,
    },
    {
      title: "n8n Supabase Integration Tutorial",
      icon: icon2,
    },
  ];

  const faqData = [
    {
      id: "benefits",
      question: "What is n8n?",
      answer:
        "n8n is a powerful, open-source workflow automation tool that lets you build and control custom integrations between apps and APIs, without heavy coding.",
    },
    {
      id: "diagnosis",
      question: "Can you help with AI-powered automations in n8n?",
      answer:
        "Yes. We design workflows that utilize the n8n OpenAI integration to summarize, analyze, and generate content or make decisions within automations.",
    },
    {
      id: "security",
      question: "Do you support CRM workflows with n8n?",
      answer:
        "Absolutely. We build CRM automation using n8n HubSpot integration, n8n Salesforce actions, and more.",
    },
    {
      id: "patient-care",
      question: "Can I deploy n8n privately?",
      answer:
        "Yes. We support secure self-hosted deployments of n8n, configured for your cloud or on-premise environment.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Powerful n8n Integrations Built for Scale and Simplicity
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk designs advanced n8n workflows that connect your apps,
              trigger AI actions, and automate high-impact operations—without
              code chaos.
            </p>
            <Button className="mt-6 lg:mt-10">
              Book a Free n8n Integration Session
            </Button>
          </div>
          <div>
            <Image
              src={heorImage}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-section bg-gray-50">
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-start mb-8 lg:mb-16">
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0 max-w-screen-sm">
              Visual Automation Meets Real-World Intelligence
            </h2>
            <p className="lg:max-w-lg text-[#3A3A3F] section-description">
              n8n is a powerful open-source automation platform—Vsenk makes it
              business-ready. We help teams connect n8n to CRMs, AI agents,
              databases, voice platforms, and internal tools to automate
              complex, logic-driven workflows with total control.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Image
                      src={integration.icon}
                      alt=""
                      className="w-9 h-9"
                    ></Image>
                    <div>
                      <h3 className="card-title text-[#3A3A3F] mb-2">
                        {integration.title}
                      </h3>
                      <p className="section-description-medium text-[#3A3A3F]">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image src={powerUp} alt="" className="w-full h-full"></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-[#F5F5F6]">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 lg:mb-16">
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0 max-w-screen-sm">
              Enhance Your Platform with Vsenk’s AI Integrations
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              Vsenk’s AI solutions seamlessly connect with your platforms,
              optimizing workflows, automating tasks, and driving efficiency.
            </p>
          </div>
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
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-[700px]">
              Real-World Applications of Vsenk’s Platform Integrations
            </h2>
            <Button className="mt-3 md:mt-0">Explore Use Cases </Button>
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
                  <p className="text-[#3A3A3F] section-description mb-6">
                    {story.description}
                  </p>

                  <div className="mb-8">
                    {story.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-center gap-3 mb-3"
                      >
                        <HiCheckCircle className="text-2xl text-[#096467]" />
                        <span className="text-[#3A3A3F] section-description-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-lg">
              Bringing Voice AI Ideas to Life
            </h2>
            <Button className="mt-3 md:mt-0">Explore Case Studies</Button>
          </div>

          <div className="space-y-16">
            {caseStories.map((story, index) => (
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
                  <p className="text-[#3A3A3F] section-description mb-16">
                    {story.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {story.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center bg-[#F5F5F6] p-4"
                      >
                        <div className="card-title-lg font-semibold text-[#3A3A3F] mb-1">
                          {metric.value}
                        </div>
                        <div className="regular-text text-[#3A3A3F]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 lg:mb-16">
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0 max-w-screen-sm">
              Documentation & Setup Guides
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              Step-by-step guides and integration walkthroughs to help you
              connect Voiceflow with your favorite tools and start building
              powerful assistants faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentationGuides.map((guide, index) => (
              <div key={index} className="border border-[#CECFD3] p-6">
                <div>
                  <Image src={guide.icon} alt="" className="w-16 h-16 mb-4" />
                  <h3 className="card-title text-[#3A3A3F] mb-6">
                    {guide.title}
                  </h3>
                  <div className="flex items-center gap-2 hover:underline">
                    <button className="cursor-pointer section-description-semi text-[#3A3A3F]">
                      Read Guide
                    </button>
                    <BsArrowRight className="w-6 h-6 text-[#3A3A3F]" />
                  </div>
                </div>
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
            <Button className="mt-3 md:mt-0">Contact Us</Button>
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
          <h2 className="section-title text-white mb-3">
            Let’s Automate What Slows You Down
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-md mx-auto mb-6 lg:mb-10">
            We’ll help you turn n8n into your central operations hub, AI-ready,
            fully integrated, and tailored to your business&apos;s unique
            workflow.
          </p>
          <Button variant="ghost">Book a Free n8n Integration Call</Button>
        </div>
      </section>
    </>
  );
}
