"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import healthcareHeroImage from "@/assets/industry/finance/1.jpg";
import Plugin from "../../plugin";
import icon from "@/assets/iconnn.png";
import caseStudyImage1 from "@/assets/industry/finance/3.jpg";
import caseStudyImage2 from "@/assets/industry/finance/2.jpg";
import caseStudyImage3 from "@/assets/industry/finance/4.jpg";
import challengeImage1 from "@/assets/industry/finance/5.jpg";
import challengeImage2 from "@/assets/industry/finance/6.jpg";
import challengeImage3 from "@/assets/industry/challenge3.png";
import challengeImage4 from "@/assets/industry/challenge4.png";
// import challengeImage5 from "@/assets/industry/challenge5.png";
import Link from "next/link";

const challenges = [
  {
    id: "1",
    title: "Manual Compliance Reporting & Audits",
    solution: "Manual Compliance Reporting & Audits",
    description:
      "Generative AI summarizes reports, flags missing data, and automates policy checks.",
    image: challengeImage1,
  },
  {
    id: "2",
    title: "Increasing Synthetic Fraud and KYC Risks",
    solution: "Increasing Synthetic Fraud and KYC Risks",
    description:
      "Real-time anomaly detection models reduce false positives and catch hidden threats.",
    image: challengeImage2,
  },
  {
    id: "3",
    title: "Slow Decision-Making Due to Fragmented Data",
    solution: "Slow Decision-Making Due to Fragmented Data",
    description:
      "AI dashboards consolidate data, highlight insights, and recommend subsequent actions.",
    image: challengeImage3,
  },
  {
    id: "4",
    title: "High Cost of Customer Support",
    solution: "High Cost of Customer Support",
    description:
      "AI chatbots handle Tier 1 queries, provide 24/7 support, and collect KYC data securely.",
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
    title: "Fraud Detection & Risk Modeling",
    icon: icon,
    desc: "Utilize AI in finance to identify anomalies and high-risk behavior in real-time. Train models to identify synthetic identities, prevent false positives, and flag suspicious transactions faster.",
  },
  {
    title: "Generative AI for Reporting & Compliance",
    icon: icon,
    desc: "Automate financial summaries, regulatory reporting, and internal memos using generative AI in finance. Train GPT models on your policies to instantly answer compliance queries.",
  },
  {
    title: "Finance AI Chatbot Integration",
    icon: icon,
    desc: "Deploy secure, knowledgeable bots that handle investor queries, KYC data capture, or onboarding workflows. Integrate with CRMs, accounting tools, and banking APIs.",
  },
  {
    title: "Predictive Analytics & Forecasting",
    icon: icon,
    desc: "Use AI/ML in finance for revenue modeling, expense prediction, and churn risk analysis.",
  },
  {
    title: "Process Automation (RPA + AI)",
    icon: icon,
    desc: "Automate invoice processing, reconciliation, claims review, and data extraction from unstructured documents.",
  },
];

const successStories = [
  {
    title: "JPMorgan Chase – AI for Contract Analysis",
    description:
      "Built COiN, an internal platform that uses AI to review legal documents and extract key data, cutting review time by over 80%.",
    metrics: [
      { value: "30%", label: "less wait time" },
      { value: "20%", label: "higher productivity" },
      { value: "25%", label: "more satisfaction" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Klarna – Personalized Finance Using AI",
    description:
      " Klarna utilizes AI to personalize credit decisions, reduce fraud, and optimize marketing campaigns, resulting in higher approval rates and more effective targeting.",
    metrics: [
      { value: "25%", label: "more accuracy" },
      { value: "15%", label: "fewer errors" },
      { value: "20%", label: "faster diagnosis" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "SentiLink – Synthetic Fraud Detection",
    description:
      "SentiLink has developed AI models that help banks and lenders detect synthetic identities used for fraud. Partnered with leading credit providers and saved millions in fraud prevention.",
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
    question: "How is AI used in the finance industry?",
    answer:
      "AI in finance enables fraud detection, compliance automation, chatbot support, data analytics, and predictive modeling, reducing risk and improving efficiency.",
  },
  {
    id: "diagnosis",
    question: "What’s the best AI for finance professionals?",
    answer:
      "We tailor AI solutions based on need—GPT for reporting, ML models for forecasting, and AI agents for customer service.",
  },
  {
    id: "security",
    question: "Can you integrate AI into my existing banking software?",
    answer:
      "Yes. We offer AI integration services for finance, including CRM systems, accounting platforms, internal risk management systems, and core banking APIs.",
  },
  {
    id: "patient-care",
    question: "Is generative AI secure enough for finance?",
    answer:
      "Yes—with proper controls and sandboxing, generative AI in finance is safe, auditable, and compliant for internal use cases.",
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
              Smarter Decisions, Safer Systems: AI for Finance
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk helps financial institutions and fintech teams use AI to
              detect fraud, streamline compliance, personalize experiences, and
              make faster, data-backed decisions—without compromising on
              security.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">Schedule a Finance AI Consultation</Link>
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
          <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-sm mb-8 lg:mb-16">
            AI-Powered Solutions Built for the Finance Industry
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
              Finance Success Stories
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
          <h2 className="section-title text-white mb-3 max-w-screen-md mx-auto">
            Ready to Bring AI to Your Finance Stack?
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-md mx-auto mb-6 lg:mb-10">
            We help banks, fintech startups, and investment teams use AI to make
            faster, smarter, safer decisions—securely integrated with your
            existing workflows.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Schedule a Finance AI Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
