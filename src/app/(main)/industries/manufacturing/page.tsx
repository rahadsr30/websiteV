"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import healthcareHeroImage from "@/assets/industry/Healthcare.png";
import Plugin from "../../plugin";
import News from "../../news";
import icon from "@/assets/iconnn.png";
import caseStudyImage1 from "@/assets/industry/hcasestudy1.png";
import caseStudyImage2 from "@/assets/industry/hcasestudy2.png";
import caseStudyImage3 from "@/assets/industry/hcasestudy3.png";
import challengeImage1 from "@/assets/industry/challenge1.png";
import challengeImage2 from "@/assets/industry/challenge2.png";
import challengeImage3 from "@/assets/industry/challenge3.png";
import challengeImage4 from "@/assets/industry/challenge4.png";
// import challengeImage5 from "@/assets/industry/challenge5.png";

const challenges = [
  {
    id: "1",
    title: "Unplanned Downtime & High Maintenance Costs",
    solution: "Unplanned Downtime & High Maintenance Costs",
    description:
      "AI predicts failures in advance, allowing proactive maintenance scheduling.",
    image: challengeImage1,
  },
  {
    id: "2",
    title: "Inconsistent Product Quality",
    solution: "Inconsistent Product Quality",
    description:
      "AI vision systems inspect at scale, reducing human error and scrap rates.",
    image: challengeImage2,
  },
  {
    id: "3",
    title: "Inefficient Scheduling and Forecasting",
    solution: "Inefficient Scheduling and Forecasting",
    description:
      "AI models balance supply, demand, and production capacity to optimize throughput.",
    image: challengeImage3,
  },
  {
    id: "4",
    title: "Data Silos Across Factory Systems",
    solution: "Data Silos Across Factory Systems",
    description:
      "AI connects ERP, MES, and sensor data for a unified, intelligent operations layer.",
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
    title: "Predictive Maintenance & Equipment Monitoring",
    icon: icon,
    desc: "Use AI in manufacturing to detect anomalies and schedule maintenance before breakdowns occur. Monitor machine health in real-time using IoT sensor data and ML models.",
  },
  {
    title: "AI for Quality Control",
    icon: icon,
    desc: "Automate defect detection using computer vision and deep learning. Improve accuracy, consistency, and reduce reliance on manual inspections.",
  },
  {
    title: "AI in Manufacturing Processes",
    icon: icon,
    desc: "Optimize supply chain logistics, energy consumption, and production workflows using AI for manufacturing companies.",
  },
  {
    title: "Production Planning & Demand Forecasting",
    icon: icon,
    desc: "Use AI/ML models to predict demand, plan procurement, and minimize overstock or shortages.",
  },
  {
    title: "AI Chatbots for Internal Ops",
    icon: icon,
    desc: "Use voice or chat-based AI assistants to manage inventory checks, issue reporting, shift handovers, or internal FAQs.",
  },
];

const successStories = [
  {
    title: "Siemens – Predictive Maintenance Using AI",
    description:
      "Siemens uses AI-driven systems across plants to predict equipment failures before they happen, reducing unplanned downtime by up to 30%.",
    metrics: [
      { value: "30%", label: "less wait time" },
      { value: "20%", label: "higher productivity" },
      { value: "25%", label: "more satisfaction" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "General Motors – AI for Defect Detection",
    description:
      "GM partnered with IBM to use computer vision and AI for real-time quality control, detecting defects on assembly lines in milliseconds.",
    metrics: [
      { value: "25%", label: "more accuracy" },
      { value: "15%", label: "fewer errors" },
      { value: "20%", label: "faster diagnosis" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Fero Labs – AI for Process Optimization",
    description:
      "Steel manufacturers using Fero Labs’ explainable AI platform reduced raw material waste by up to 20% while maintaining product strength.",
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
    question: "How is AI used in the manufacturing industry?",
    answer:
      "AI in manufacturing is used for predictive maintenance, quality control, workflow optimization, and supply chain forecasting.",
  },
  {
    id: "diagnosis",
    question: "What are common AI solutions in manufacturing?",
    answer:
      "Common applications include AI for manufacturing quality control, machine failure prediction, real-time defect detection, and automation of routine operations.",
  },
  {
    id: "security",
    question: "Do you support AI in steel or chemical manufacturing?",
    answer:
      "Yes—we've helped clients apply AI in steel manufacturing and AI in chemical manufacturing for yield optimization, safety monitoring, and anomaly detection.",
  },
  {
    id: "patient-care",
    question: "Can AI be integrated into our existing MES or ERP?",
    answer:
      "Absolutely. We provide AI integration services for manufacturing, including SCADA systems, MES, ERP (SAP, Oracle), and custom IoT platforms.",
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
              Smarter Production, Safer Operations: AI for Manufacturing
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk delivers AI-powered systems that optimize processes, predict
              maintenance needs, ensure quality control, and drive measurable
              ROI across the factory floor.
            </p>
            <Button className="mt-6 lg:mt-10">
              Schedule a Manufacturing AI Demo
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
            AI Solutions Designed for Manufacturing Excellence
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
                <Button variant="outline" className="w-fit">
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-lg">
              Manufacturing Success Stories
            </h2>
            <Button className="mt-3 md:mt-0">Explore Case Studies</Button>
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

                  <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button>
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
      <News />

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
            Let’s Build the Smart Factory of the Future
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            From vision systems to predictive models, we help manufacturers
            deploy AI where it counts—on the line, in the plant, and across the
            supply chain.
          </p>
          <Button variant="ghost">Book a Manufacturing AI Demo</Button>
        </div>
      </section>
    </>
  );
}
