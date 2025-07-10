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

export default function Page() {
  const integrations = [
    {
      title: "Chatbots + CRM Integration",
      icon: icon,
    },
    {
      title: "Chatbots + Help Desk",
      icon: icon,
    },
    {
      title: "Chatbots + WhatsApp & Messenger APIs",
      icon: icon,
    },
    {
      title: "Chatbots + Make, Zapier, or n8n for Workflow Automation",
      icon: icon,
    },
    {
      title: "Chatbots + Stripe & Shopify for Transactional Support",
      icon: icon,
    },
  ];

  const benefits = [
    {
      title: "Custom CRM Sync",
      icon: benifitIcon,
      description:
        "Push user data, conversation history, and lead scoring into HubSpot, Salesforce, or your custom backend.",
    },
    {
      title: "Live Agent Handoff + Automation",
      icon: benifitIcon,
      description:
        "Smart escalation from bot to human, without losing context or user history.",
    },
    {
      title: "WhatsApp & SMS Integration",
      icon: benifitIcon,
      description:
        "Deploy bots that function via WhatsApp Business API, Twilio, and more.",
    },
    {
      title: "Connect with Workflow Tools",
      icon: benifitIcon,
      description:
        "Use Zapier, Make, or n8n to trigger custom workflows based on conversation events.",
    },
    {
      title: "Collect Payments, Bookings & Feedback",
      icon: benifitIcon,
      description:
        "Integrate Stripe, Calendly, Google Sheets, and feedback tools directly into chat flows.",
    },
  ];

  const successStories = [
    {
      title: "Lead Capture for B2B SaaS",
      description:
        "Utilize chatbots to qualify leads, sync them with HubSpot, and instantly assign them to representatives via Slack.",
      points: [
        "Personalized shopping assistant",
        "Real-time inventory checks",
        "Voice-based order collection",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage1,
    },
    {
      title: "AI Chatbot for Shopify Stores",
      description:
        "Answer product questions, check order status, and handle returns via integrated eCommerce bots.",
      points: [
        "Automated lead logging",
        "Intent scoring",
        "Real-time Slack notifications",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage2,
    },
    {
      title: "Onboarding Bot for EdTech Platform",
      description:
        "Deploy a learning assistant bot that sends reminders, tracks completion, and syncs with internal LMS tools via Make or Zapier.",
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
      title: "Amtrak – “Julie” Virtual Assistant”",
      description:
        "Amtrak’s virtual assistant “Julie” processes over 5 million requests annually, integrating with backend ticketing and scheduling systems via APIs.",
      metrics: [
        { value: "80%", label: "faster responses" },
        { value: "100%", label: "hands-free" },
        { value: "70%", label: "fewer manual steps" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage4,
    },
    {
      title: "Haptik – Chatbot for JioMart (India’s E-commerce Giant)",
      description:
        "JioMart utilized Haptik’s AI chatbot, integrated with WhatsApp and internal order systems, resulting in a 60% reduction in first-response time and a 40% automation rate for customer queries.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage5,
    },
  ];

  const documentationGuides = [
    {
      title: "How to Connect a Chatbot to HubSpot",
      icon: icon2,
    },
    {
      title: "Zapier Chatbot Integration Setup",
      icon: icon2,
    },
    {
      title: "WhatsApp Chatbot Deployment with Twilio",
      icon: icon2,
    },
    {
      title: "Using Make for Dynamic Chatbot Workflows",
      icon: icon2,
    },
    {
      title: "CRM Sync with Dialogflow Bots",
      icon: icon2,
    },
  ];

  const faqData = [
    {
      id: "benefits",
      question: "What chatbot platforms do you work with?",
      answer:
        "We support most major platforms, including Voiceflow, Dialogflow, Intercom, Drift, ManyChat, WhatsApp Business, and custom frameworks.",
    },
    {
      id: "diagnosis",
      question: "Can you integrate chatbots with my CRM?",
      answer:
        "Yes. We specialize in integrating chatbots with CRM systems, including HubSpot, Salesforce, Zoho, Pipedrive, and others.",
    },
    {
      id: "security",
      question: "Do you support the deployment of WhatsApp chatbots?",
      answer:
        "Absolutely. We set up and manage bots via the WhatsApp Business API, including integration with CRMs, product databases, and automation tools.",
    },
    {
      id: "patient-care",
      question: "Can my chatbot trigger workflows automatically?",
      answer:
        "Yes. Using platforms like Make, n8n, or Zapier, we can trigger a variety of actions based on chatbot interactions, such as sending emails, completing tasks, updating records, and more.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Integrated Chatbots That Do More Than Just Talk
            </h2>
            <p className="text-[#3A3A3F] section-description">
              We don’t just build chatbots—we integrate them with your CRM,
              helpdesk, marketing tools, and backend systems, so they solve
              problems and drive growth.
            </p>
            <Button className="mt-6 lg:mt-10">
              Request a Chatbot Integration Demo
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
              From Chat to Action—We Turn Chatbots Into Business Engines
            </h2>
            <p className="lg:max-w-lg text-[#3A3A3F] section-description">
              Vsenk integrates your existing chatbot platform—whether it’s
              Intercom, Drift, Dialogflow, WhatsApp, or a custom solution - with
              the tools your business already uses. From CRM sync to automated
              support ticket creation, we integrate your chatbot into the
              workflow, not just the website.
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
            Let’s Build Chatbots That Actually Do Work
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            We’ll help you design and integrate intelligent chatbots that don’t
            just chat—but qualify leads, solve problems, and drive ROI across
            your stack.
          </p>
          <Button variant="ghost">Request a Chatbot Integration Demo</Button>
        </div>
      </section>
    </>
  );
}
