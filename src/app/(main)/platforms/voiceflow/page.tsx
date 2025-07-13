"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
// import { BsArrowRight } from "react-icons/bs";
import heorImage from "@/assets/platform/platformHero.png";
import icon from "@/assets/platform/platformIcon.png";
// import icon2 from "@/assets/platform/platformIcon2.png";
import powerUp from "@/assets/platform/PowerUp.png";
import benifitIcon from "@/assets/solution/solutionIcon.png";
import caseStudyImage1 from "@/assets/platform/platformCase1.png";
import caseStudyImage2 from "@/assets/platform/platformCase2.png";
import caseStudyImage3 from "@/assets/platform/platformCase3.png";
import caseStudyImage4 from "@/assets/platform/platformCase4.png";
import caseStudyImage5 from "@/assets/platform/platformCase5.png";
import caseStudyImage6 from "@/assets/platform/platformCase6.png";
import Link from "next/link";

export default function Page() {
  const integrations = [
    {
      title: "Voiceflow + Slack Integration",
      description: "For internal bots",
      icon: icon,
    },
    {
      title: "Voiceflow + Airtable Integration",
      description: "For dynamic content retrieval",
      icon: icon,
    },
    {
      title: "Voiceflow + Dialogflow Integration",
      description: "For NLP enhancements",
      icon: icon,
    },
    {
      title: "Voiceflow + CRM Integration",
      description: "For lead capture",
      icon: icon,
    },
    {
      title: "Voiceflow Webhook Integration",
      description: "For advanced API control",
      icon: icon,
    },
  ];

  const benefits = [
    {
      title: "Real-Time API Actions",
      icon: benifitIcon,
      description:
        "Connect Voiceflow to live data, such as inventory, support tickets, and user profiles—using custom webhooks or API integrations.",
    },
    {
      title: "Cross-Platform Voice & Chat Deployment",
      icon: benifitIcon,
      description:
        "Launch your assistant across WhatsApp, web chat, smart speakers, or embedded in your app.",
    },
    {
      title: "CRM & Lead Capture Automation",
      icon: benifitIcon,
      description:
        "Automatically sync leads from conversations to tools like Salesforce, HubSpot, or Notion.",
    },
    {
      title: "WhatsApp & Messenger Integrations",
      icon: benifitIcon,
      description:
        "Enable multichannel assistants that work natively on messaging apps.",
    },
    {
      title: "Advanced Logic with External Tools",
      icon: benifitIcon,
      description:
        "Combine Voiceflow with automation platforms like Make or Zapier to trigger workflows based on user input.",
    },
  ];

  const successStories = [
    {
      title: "Voice Bots for E-Commerce",
      description:
        "Use Voiceflow + Shopify + Airtable integration to build a personalized shopping assistant that checks inventory, suggests products, and collects orders via voice.",
      points: [
        "Personalized shopping assistant",
        "Real-time inventory checks",
        "Voice-based order collection",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage1,
    },
    {
      title: "Sales Enablement",
      description:
        "Connect Voiceflow to HubSpot using Make or Zapier to automatically log leads, score intent, and notify reps in Slack when high-value prospects interact.",
      points: [
        "Automated lead logging",
        "Intent scoring",
        "Real-time Slack notifications",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage2,
    },
    {
      title: "Voice Agents for Internal Tools",
      description:
        "Build a Slack-integrated Voiceflow assistant that queries Notion, updates Airtable, and books meetings via Google Calendar integration.",
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
      title: "Home Assistant – Voiceflow + Webhooks Integration”",
      description:
        "Home Assistant community developers utilized Voiceflow, integrated with webhooks, to control smart devices through custom voice commands, routing responses via their automation API.",
      metrics: [
        { value: "80%", label: "faster responses" },
        { value: "100%", label: "hands-free" },
        { value: "70%", label: "fewer manual steps" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage4,
    },
    {
      title: "Mindjoy – Voiceflow for Conversational Coding Coach",
      description:
        "Mindjoy, an EdTech startup, utilized Voiceflow to power its AI learning assistant, which is integrated with Dialogflow and Firebase. It guided students through coding lessons using interactive voice conversations.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage5,
    },
    {
      title: "Ottiya – Voice Assistant for Educational Toys",
      description:
        "Ottiya utilized Voiceflow to design a storytelling assistant embedded in smart toys, integrating it via webhooks with Airtable and Firebase for content personalization.",
      metrics: [
        { value: "60%", label: "longer playtime" },
        { value: "45%", label: "more repeat use" },
        { value: "40%", label: "more unique stories" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage6,
    },
  ];

  // const documentationGuides = [
  //   {
  //     title: "How to Connect Voiceflow to Webhooks",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Voiceflow + Airtable Integration Setup",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Voiceflow WhatsApp Integration Guide",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Using Make with Voiceflow",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Custom CRM Integration Docs",
  //     icon: icon2,
  //   },
  // ];

  const faqData = [
    {
      id: "benefits",
      question: "What platforms can Voiceflow be integrated with?",
      answer:
        "Vsenk supports Voiceflow integration with Slack, Airtable, HubSpot, Salesforce, Dialogflow, Notion, Make, Zapier, and more.",
    },
    {
      id: "diagnosis",
      question: "Do you help with Voiceflow API integration?",
      answer:
        "Yes. We specialize in extending Voiceflow via custom APIs and webhooks to connect your internal systems or 3rd-party tools.",
    },
    {
      id: "security",
      question: "Can you deploy the same assistant across multiple channels?",
      answer:
        "Absolutely. We build multichannel bots for web, WhatsApp, Messenger, Slack, and even custom in-app widgets.",
    },
    {
      id: "patient-care",
      question: "Can I use Voiceflow for e-commerce or CRM automation?",
      answer:
        "Yes. We’ve built bots that connect to Shopify, WooCommerce, and various CRMs to automate sales, support, and post-purchase engagement.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Seamless Voiceflow Integration with Your Workflow
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk helps you go beyond prototypes. We integrate Voiceflow with
              your tools, APIs, and data sources, so your AI conversations
              actually drive business outcomes.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">
                Talk to a Voiceflow Integration Expert
              </Link>
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
              Power Up Voiceflow with Smart Automations & Real-Time Data Sync
            </h2>
            <p className="lg:max-w-lg text-[#3A3A3F] section-description">
              Voiceflow is great for designing conversations. Vsenk makes those
              conversations do real work. We connect Voiceflow to your CRM,
              backend systems, customer support tools, and automation platforms
              like Zapier, Make, and n8n. So your AI agents can trigger actions,
              retrieve live data, and update systems in real-time.
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
            {/* <Button className="mt-3 md:mt-0">Explore Use Cases </Button> */}
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
                  {/* 
                  <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button> */}
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
            {/* <Button className="mt-3 md:mt-0">Explore Case Studies</Button> */}
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

                  {/* <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-section bg-white">
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
      </section> */}

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
            Let’s Turn Voiceflow into a True AI Agent
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            Designing conversations is just step one. We’ll help you build fully
            integrated assistants that take action, automate work, and deliver
            results.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Book a Voiceflow Integration Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
