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
      title: "Make + CRM Integrations",
      icon: icon,
    },
    {
      title:
        "Make + OpenAI for content generation, lead scoring, or AI assistants",
      icon: icon,
    },
    {
      title: "Make + Notion & Airtable for project management automation",
      icon: icon,
    },
    {
      title: "Make + Shopify or Stripe for order workflows",
      icon: icon,
    },
    {
      title: "Make + Google Calendar or Slack for internal ops",
      icon: icon,
    },
  ];

  const benefits = [
    {
      title: "End-to-End Workflow Automation",
      icon: benifitIcon,
      description:
        "From lead capture to customer onboarding—streamline the entire customer journey across tools.",
    },
    {
      title: "AI + Automation Combined",
      icon: benifitIcon,
      description:
        "Trigger GPT or OpenAI actions inside your Make workflows for content generation, summaries, or AI decision logic.",
    },
    {
      title: "CRM Integration Experts",
      icon: benifitIcon,
      description:
        "Build decisive Make HubSpot integrations for auto-tagging, deal stage changes, and multi-channel alerts.",
    },
    {
      title: "Project Management Sync",
      icon: benifitIcon,
      description:
        "Connect Notion in Make, sync Asana, or build custom automations with ClickUp and Monday.com.",
    },
    {
      title: "Error Handling & Smart Logic",
      icon: benifitIcon,
      description:
        "We utilize filters, routers, webhooks, and error management to ensure that workflows run smoothly at scale.",
    },
  ];

  const successStories = [
    {
      title: "Sales Automation with Make + HubSpot",
      description:
        "Automatically qualify leads, tag by behavior, and update deal stages based on activity—no manual updates needed.",
      points: [
        "Personalized shopping assistant",
        "Real-time inventory checks",
        "Voice-based order collection",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage1,
    },
    {
      title: "Content Automation with Make + OpenAI",
      description:
        "Generate product descriptions, summaries, or email templates using Make’s GPT module, triggered by status changes or form inputs.",
      points: [
        "Automated lead logging",
        "Intent scoring",
        "Real-time Slack notifications",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage2,
    },
    {
      title: "Operational Sync: Make + Notion + Google Calendar",
      description:
        "Build a real-time task management system that updates Notion pages, syncs with Google Calendar, and alerts via Slack.",
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
      title: "Scribe – Internal Process Automation with Make",
      description:
        "Scribe, a tool for generating step-by-step guides, used Make to automate its internal workflows, including Slack alerts, Notion updates, and Airtable record creation. Result: reduced internal ops admin time by over 40%.",
      metrics: [
        { value: "80%", label: "faster responses" },
        { value: "100%", label: "hands-free" },
        { value: "70%", label: "fewer manual steps" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage4,
    },
    {
      title: "The Futur – Make + HubSpot CRM Integration",
      description:
        "The Futur, a business education company, utilizes Make to integrate its course signup data with HubSpot. New signups trigger onboarding emails, CRM updates, and Slack notifications. Result: 3X faster lead handling.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage5,
    },
    {
      title: "Outfunnel – Make + Pipedrive + Email Automation",
      description:
        "Outfunnel integrates its marketing workflows using Make to sync contacts between Pipedrive and various email platforms, automatically segmenting based on behavior. Improved lead nurturing and reduced manual sync errors.",
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
      title: "Make API Integration Guide",
      icon: icon2,
    },
    {
      title: "Make HubSpot Integration Walkthrough",
      icon: icon2,
    },
    {
      title: "How to Connect Notion in Make",
      icon: icon2,
    },
    {
      title: "Make + OpenAI Integration Setup",
      icon: icon2,
    },
    {
      title: "Project Management Software with Make Integration",
      icon: icon2,
    },
  ];

  const faqData = [
    {
      id: "benefits",
      question: "What is Make (formerly Integromat)?",
      answer:
        "Make is a visual automation platform that lets you connect apps, automate workflows, and trigger complex logic without writing code.",
    },
    {
      id: "diagnosis",
      question: "Can you help with Make OpenAI integration?",
      answer:
        "Yes—we create workflows that use GPT to write content, summarize data, and generate smart responses inside Make.",
    },
    {
      id: "security",
      question: "Do you offer Make CRM integration services?",
      answer:
        "Absolutely. We integrate Make with HubSpot, Salesforce, Zoho, and others to automate your sales pipeline, customer lifecycle, and internal alerts.",
    },
    {
      id: "patient-care",
      question: "How complex can workflows be?",
      answer:
        "We specialize in advanced Make automation with conditions, routers, iterators, error handling, and webhooks across 5–10+ apps in a single flow.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Custom Make Integrations That Automate the Work You Hate
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk designs and deploys advanced Make workflows that connect
              your favorite apps, trigger smart automations, and free up your
              team from repetitive tasks.
            </p>
            <Button className="mt-6 lg:mt-10">
              Schedule a Make Integration Demo
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
              Beyond Templates: High-Performance Make Integration Services
            </h2>
            <p className="lg:max-w-lg text-[#3A3A3F] section-description">
              Whether you need a custom CRM automation, AI-powered content
              generation, or a Notion-to-HubSpot workflow, Vsenk builds Make
              integrations that drive efficiency, not confusion. We specialize
              in complex multi-app scenarios with conditional logic, webhooks,
              and OpenAI integrations baked in.
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
          <h2 className="section-title text-white mb-3 max-w-screen-sm mx-auto">
            Let’s Build Workflows That Actually Work
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            Whether you&apos;re automating marketing, syncing tools, or building
            AI into your business, we&apos;ll help you turn Make into your
            operational backbone.
          </p>
          <Button variant="ghost">Book a Make Integration Demo</Button>
        </div>
      </section>
    </>
  );
}
