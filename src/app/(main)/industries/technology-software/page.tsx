"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import healthcareHeroImage from "@/assets/industry/Healthcare.png";
import Plugin from "../../plugin";
import icon from "@/assets/iconnn.png";
import caseStudyImage1 from "@/assets/industry/hcasestudy1.png";
import caseStudyImage2 from "@/assets/industry/hcasestudy2.png";
import caseStudyImage3 from "@/assets/industry/hcasestudy3.png";
import challengeImage1 from "@/assets/industry/challenge1.png";
import challengeImage2 from "@/assets/industry/challenge2.png";
import challengeImage3 from "@/assets/industry/challenge3.png";
import challengeImage4 from "@/assets/industry/challenge4.png";
// import challengeImage5 from "@/assets/industry/challenge5.png";
import Link from "next/link";

const challenges = [
  {
    id: "1",
    title: "Manual Scaling of Customer Support",
    solution: "Manual Scaling of Customer Support",
    description:
      "Deploy AI chatbot software services for 24/7 triage and faster support across Slack, Intercom, and web chat.",
    image: challengeImage1,
  },
  {
    id: "2",
    title: "Product Teams Struggling to Ship Smarter Features",
    solution: "Product Teams Struggling to Ship Smarter Features",
    description:
      "Use GPT, embeddings, and AI search to build smart, scalable feature sets that ship fast.",
    image: challengeImage2,
  },
  {
    id: "3",
    title: "Agency Teams Repeating Low-Value Work",
    solution: "Agency Teams Repeating Low-Value Work",
    description:
      "Use AI to automate client onboarding, reporting, and documentation in tech service workflows.",
    image: challengeImage3,
  },
  {
    id: "4",
    title: "Lack of Differentiation in SaaS Products",
    solution: "Lack of Differentiation in SaaS Products",
    description:
      "Add AI-powered search, personalization, or summaries to increase retention and customer love.",
    image: challengeImage4,
  },
  // {
  //   id: "resource",
  //   title: "Resource Management & Efficiency",
  //   solution: "Predictive AI Analytics",
  //   description:
  //     "AI can predict patient demand, optimize staffing, and streamline resource allocation, reducing operational costs and improving healthcare service delivery.",
  //   image: challengeImage5,
  // },
];

const cards = [
  {
    title: "AI-Powered Product Features",
    icon: icon,
    desc: "Add GPT-powered assistants, search, and personalization to your product. Use AI chatbot software services to enable customer-facing support, onboarding, or tutorials.",
  },
  {
    title: "Internal Workflow Automation",
    icon: icon,
    desc: "Automate lead routing, project handoffs, and client communications using AI integration in technology industry platforms like Make, Zapier, and n8n.",
  },
  {
    title: "AI-Powered Customer Service",
    icon: icon,
    desc: "Integrate smart agents with Intercom, Zendesk, or Slack to reduce manual tickets and increase response speed. Ideal for product-led teams managing high volumes of inquiries.",
  },
  {
    title: "AI Content & Documentation Generation",
    icon: icon,
    desc: "Use generative AI in software agencies to auto-generate feature changelogs, API guides, onboarding docs, and patch notes.",
  },
  {
    title: "Custom AI Systems for SaaS",
    icon: icon,
    desc: "Use AI for fraud prevention, recommendation engines, or behavioral analytics built directly into your app.",
  },
];

const successStories = [
  {
    title: "Notion – Generative AI Feature Launch",
    description:
      "Notion integrated OpenAI’s GPT models into its editor, enabling automatic writing, summarizing, and idea generation. It led to a surge in user engagement and media coverage.",
    metrics: [
      { value: "30%", label: "less wait time" },
      { value: "20%", label: "higher productivity" },
      { value: "25%", label: "more satisfaction" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "LinearB – Automated Status Summaries Using AI",
    description:
      "Linear built a GPT-4-powered feature that summarizes project updates and ticket histories, saving time for engineering teams during sprint reviews.",
    metrics: [
      { value: "25%", label: "more accuracy" },
      { value: "15%", label: "fewer errors" },
      { value: "20%", label: "faster diagnosis" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Zendesk – AI Ticket Routing",
    description:
      "Zendesk uses AI to categorize and prioritize support tickets automatically, reducing first-response time and routing errors.",
    metrics: [
      { value: "50,000", label: "queries handled" },
      { value: "40%", label: "faster responses" },
      { value: "45%", label: "satisfaction boost" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage3,
  },
];

const faqData = [
  {
    id: "benefits",
    question: "How can AI be used in SaaS products?",
    answer:
      "You can embed AI in your SaaS product to add personalization, automation, summarization, and smart decision-making features powered by LLMs or ML models.",
  },
  {
    id: "diagnosis",
    question: "Do you offer AI chatbot software services in UAE or globally?",
    answer:
      "Yes, we serve software companies worldwide, including AI chatbot development and integration in UAE, the US, EU, and Asia-Pacific.",
  },
  {
    id: "security",
    question: "Can you automate client onboarding for our software agency?",
    answer:
      "Absolutely. We automate project setup, form collection, data sync, and reporting using Make, n8n, or custom-built solutions.",
  },
  {
    id: "patient-care",
    question:
      "How do you ensure security in AI integrations for tech platforms?",
    answer:
      "We follow best practices in encryption, logging, and role-based access. For sensitive data, we support private deployments and sandboxed AI environments.",
  },
];

export default function Page() {
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);
  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Built for Builders: AI Solutions for Tech & Software Teams
            </h2>
            <p className="text-[#3A3A3F] section-description">
              From smart features to backend automation, Vsenk helps SaaS teams
              and software agencies integrate AI that drives product innovation
              and operational efficiency—without adding complexity.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">
                Schedule a Demo with a Technical Consultant
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={healthcareHeroImage}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper ">
          <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-md mb-8 lg:mb-16">
            AI Integrations That Supercharge Your Software Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#F5F5F6] p-10 flex flex-col justify-between min-h-[220px]"
              >
                <Image
                  src={card.icon.src}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <div>
                  <h3 className="text-[#3A3A3F] card-title mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[#3A3A3F] section-description mb-10">
                    {card.desc}
                  </p>
                </div>
                {/* <Button variant="outline" className="w-fit">
                  Explore
                </Button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-lg">
              Technology-Software Success Stories
            </h2>
            {/* <Button className="mt-3 md:mt-0">Explore Case Studies</Button> */}
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

      <section className="py-section">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-md">
              What’s Holding Finance Teams Back—And How AI Solves It
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <div className="space-y-6">
                <h3 className="text-2xl font-medium md:text-3xl lg:text-[40px] text-[#3A3A3F] mb-10">
                  Challenges
                </h3>
                <div className="space-y-4">
                  {challenges.map((challenge) => (
                    <button
                      key={challenge.id}
                      onClick={() => setSelectedChallenge(challenge)}
                      className={`text-left font-medium transition-colors duration-200 w-full p-6 cursor-pointer ${
                        selectedChallenge.id === challenge.id
                          ? "text-[#3A3A3F] bg-[#F5F5F6]"
                          : "text-[#82848E] hover:text-[#3A3A3F] hover:bg-[#F5F5F6] border-b border-[#CECFD3]"
                      }`}
                    >
                      {challenge.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F6] p-6">
              <div>
                <h3 className="card-title text-[#3A3A3F] mb-4">
                  {selectedChallenge.solution}
                </h3>
                <p className="text-[#3A3A3F] section-description mb-10">
                  {selectedChallenge.description}
                </p>
                <div className="relative">
                  <Image
                    src={selectedChallenge.image}
                    alt={selectedChallenge.solution}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
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
          <h2 className="section-title text-white mb-3">
            Let’s Build Smarter Software—Together
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-md mx-auto mb-6 lg:mb-10">
            Whether you’re building SaaS, running an agency, or launching a
            platform, we’ll help you integrate AI that makes your product
            smarter and your team faster.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Schedule a Free AI Discovery Session</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
