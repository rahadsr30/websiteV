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
      title: "Shopify + OpenAI",
      description: "for Product Descriptions & Email Copy ",
      icon: icon,
    },
    {
      title: "Shopify AI SEO Integration",
      description: "for smart metadata & keyword optimization",
      icon: icon,
    },
    {
      title: "AI Chatbots",
      description: "for Shopify via WhatsApp, Messenger, or Web Chat",
      icon: icon,
    },
    {
      title: "Shopify + Zapier or Make",
      description: "for order automations and CRM sync",
      icon: icon,
    },
    {
      title: "Shopify + AI Agents",
      description: "for personalized shopping experiences",
      icon: icon,
    },
    {
      title: "Shopify Amazon Integration",
      description: "for multi-channel AI-enhanced listings",
      icon: icon,
    },
  ];

  const benefits = [
    {
      title: "AI-Powered Product Descriptions",
      icon: benifitIcon,
      description:
        "Generate optimized, keyword-rich copy for thousands of SKUs in minutes with Shopify AI product descriptions.",
    },
    {
      title: "Shopify AI Shopping Assistant",
      icon: benifitIcon,
      description:
        "Let customers search, ask, and buy using conversational AI embedded into your store, via web chat or WhatsApp.",
    },
    {
      title: "Store Personalization",
      icon: benifitIcon,
      description:
        "Offer personalized recommendations based on browsing history, purchase behavior, or user profiles.",
    },
    {
      title: "Automated Post-Purchase Journeys",
      icon: benifitIcon,
      description:
        "Send AI-generated follow-up emails, product recommendations, or return prompts using Make or Zapier.",
    },
    {
      title: "AI SEO for Shopify",
      icon: benifitIcon,
      description:
        "Use AI to automatically write meta titles, alt text, and keyword-targeted content for higher Google rankings.",
    },
  ];

  const successStories = [
    {
      title: "AI Chatbot for Shopify Stores",
      description:
        "Deploy a GPT-powered assistant that answers questions, helps users navigate the store, and handles customer support 24/7—integrated with your CRM and helpdesk.",
      points: [
        "Personalized shopping assistant",
        "Real-time inventory checks",
        "Voice-based order collection",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage1,
    },
    {
      title: "AI Product Copywriting",
      description:
        "Bulk-generate high-converting product titles, descriptions, and FAQs for new product launches using AI integrations with OpenAI or Claude.",
      points: [
        "Automated lead logging",
        "Intent scoring",
        "Real-time Slack notifications",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage2,
    },
    {
      title: "Shopify AI Store Personalization",
      description:
        "Deliver dynamic homepages, collections, and recommendation carousels using user behavior and ML models to boost AOV and conversion.",
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
      title: "Velasca – Shopify AI Optimization",
      description:
        "Velasca, a luxury shoe brand, utilized AI-driven personalization to recommend products tailored to customer style preferences, resulting in an 18% increase in conversion.",
      metrics: [
        { value: "80%", label: "faster responses" },
        { value: "100%", label: "hands-free" },
        { value: "70%", label: "fewer manual steps" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage4,
    },
    {
      title: "Bulletproof – AI Copy for Product Pages",
      description:
        "Bulletproof used GPT-powered tools to write SEO-optimized product descriptions across hundreds of SKUs, saving over 120 hours of manual effort.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage5,
    },
    {
      title: "Hydrant – Chatbot-Enabled Store",
      description:
        "Hydrant added an AI chatbot to its Shopify store, integrated with Gorgias and Klaviyo, to resolve common support queries and recommend products, resulting in a 60% reduction in support response time.",
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
      title: "Shopify AI Tools Overview",
      icon: icon2,
    },
    {
      title: "AI Chatbots Shopify Integration Guide",
      icon: icon2,
    },
    {
      title: "Shopify AI Product Description Setup",
      icon: icon2,
    },
    {
      title: "Shopify + Zapier Integration Tutorial",
      icon: icon2,
    },
    {
      title: "Shopify Amazon Integration via AI Tools",
      icon: icon2,
    },
  ];

  const faqData = [
    {
      id: "benefits",
      question: "What AI tools can be used with Shopify?",
      answer:
        "We integrate OpenAI, ChatGPT, Claude, Jasper, and custom models into Shopify via API, Make, or Zapier workflows.",
    },
    {
      id: "diagnosis",
      question: "Do you offer Shopify AI SEO optimization?",
      answer:
        "Yes. We help generate AI-based SEO metadata, product tags, and keyword-aligned content to boost search visibility.",
    },
    {
      id: "security",
      question: "Can AI improve my store’s conversion rate?",
      answer:
        "Absolutely. AI personalization and conversational commerce both contribute to higher engagement and AOV.",
    },
    {
      id: "patient-care",
      question: "Do you support integration with Shopify and Amazon?",
      answer:
        "Yes. We help sync inventory and listings between Shopify and Amazon, often using automation tools combined with AI for content enrichment.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Smarter Stores Start Here: AI for Shopify That Sells
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk helps Shopify merchants integrate AI-powered tools for
              product recommendations, SEO, chat support, and store
              automation—turning visitors into repeat customers.
            </p>
            <Button className="mt-6 lg:mt-10">
              Request an AI Demo for Your Shopify Store
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
              AI That Thinks Like a Store Manager — Works Like a Machine
            </h2>
            <p className="lg:max-w-lg text-[#3A3A3F] section-description">
              We connect Shopify with powerful AI tools, including GPT-4 and
              Claude, as well as custom ML models, to personalize product
              discovery, enhance store performance, and automate customer
              interactions. Whether you&apos;re looking for an AI shopping
              assistant, Shopify SEO optimization, or AI-driven analytics, we
              build it into your store&apos;s existing stack.
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
          <h2 className="section-title max-w-screen-md mx-auto text-white mb-3">
            Let’s Build a Smarter Shopify Store Together
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-md mx-auto mb-6 lg:mb-10">
            We’ll help you turn n8n into your central operations hub, AI-ready,
            We’ll help you personalize your storefront, automate support, and
            generate content that converts—powered by AI, integrated by experts.
          </p>
          <Button variant="ghost">Request a Shopify AI Demo</Button>
        </div>
      </section>
    </>
  );
}
