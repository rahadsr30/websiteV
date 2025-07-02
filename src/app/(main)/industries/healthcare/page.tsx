"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import healthcareHeroImage from "@/assets/industry/Healthcare.png";
import Plugin from "../../plugin";
import News from "../../news";
import CTA from "@/components/global/cta";
import icon from "@/assets/iconnn.png";
import caseStudyImage1 from "@/assets/industry/hcasestudy1.png";
import caseStudyImage2 from "@/assets/industry/hcasestudy2.png";
import caseStudyImage3 from "@/assets/industry/hcasestudy3.png";
import challengeImage1 from "@/assets/industry/challenge1.png";
import challengeImage2 from "@/assets/industry/challenge2.png";
import challengeImage3 from "@/assets/industry/challenge3.png";
import challengeImage4 from "@/assets/industry/challenge4.png";
import challengeImage5 from "@/assets/industry/challenge5.png";

const challenges = [
  {
    id: "administrative",
    title: "Administrative Overload",
    solution: "AI Workflow Automation",
    description:
      "AI can automate repetitive administrative tasks like patient intake, billing, and record-keeping, freeing up staff for more critical patient care.",
    image: challengeImage1,
  },
  {
    id: "diagnostic",
    title: "Diagnostic Errors",
    solution: "AI-Powered Diagnostics",
    description:
      "AI-assisted diagnostic tools can analyze medical images and patient data with greater accuracy, reducing diagnostic errors and enabling early intervention.",
    image: challengeImage2,
  },
  {
    id: "engagement",
    title: "Patient Engagement & Support",
    solution: "AI Chatbots & Virtual Assistants",
    description:
      "AI chatbots provide 24/7 patient support, handling appointment scheduling, queries, and follow-ups, improving patient experience and reducing wait times.",
    image: challengeImage3,
  },
  {
    id: "compliance",
    title: "Compliance & Data Security",
    solution: "AI for Compliance Automation",
    description:
      "AI solutions monitor and ensure HIPAA compliance, automating data protection measures to safeguard sensitive patient information.",
    image: challengeImage4,
  },
  {
    id: "resource",
    title: "Resource Management & Efficiency",
    solution: "Predictive AI Analytics",
    description:
      "AI can predict patient demand, optimize staffing, and streamline resource allocation, reducing operational costs and improving healthcare service delivery.",
    image: challengeImage5,
  },
];

const cards = [
  {
    title: "Workflow Automation",
    icon: icon,
    desc: "Automate tasks like patient intake and billing to reduce staff workload and improve operational efficiency.",
  },
  {
    title: "AI-Powered Chatbots",
    icon: icon,
    desc: "Provide 24/7 support with AI-driven chatbots for appointment scheduling, patient queries, and more.",
  },
  {
    title: "Data Processing & Analysis",
    icon: icon,
    desc: "Use AI to quickly process and analyze patient data, offering actionable insights for care decisions.",
  },
  {
    title: "Predictive Healthcare Analytics",
    icon: icon,
    desc: "Predict patient outcomes and detect early signs of issues, enabling proactive care.",
  },
  {
    title: "Security Automation",
    icon: icon,
    desc: "Automate HIPAA compliance and safeguard patient data with AI systems that monitor.",
  },
  {
    title: "Diagnostics Assistance",
    icon: icon,
    desc: "Leverage AI to assist in diagnosing conditions by analyzing medical images and patient data.",
  },
];

const successStories = [
  {
    title: "Streamlining Patient Intake with AI Automation",
    description:
      "By automating the patient intake process, Vsenk's AI solutions reduced patient wait times by 30%. This enabled healthcare teams to focus more on patient care, improving operational efficiency and patient flow.",
    metrics: [
      { value: "30%", label: "less wait time" },
      { value: "20%", label: "higher productivity" },
      { value: "25%", label: "more satisfaction" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Improving Diagnosis Accuracy with AI-Powered Imaging",
    description:
      "AI-assisted diagnostics improved accuracy by 25%, helping healthcare professionals make quicker, more accurate diagnoses, which resulted in better patient outcomes and faster interventions.",
    metrics: [
      { value: "25%", label: "more accuracy" },
      { value: "15%", label: "fewer errors" },
      { value: "20%", label: "faster diagnosis" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Enhancing Patient Support with 24/7 AI Chatbots",
    description:
      "AI-powered chatbots addressed over 50,000 patient queries, leading to a 40% increase in patient satisfaction by providing instant, 24/7 support and reducing wait times for responses.",
    metrics: [
      { value: "50,000", label: "queries handled" },
      { value: "40%", label: "faster responses" },
      { value: "45%", label: "satisfaction boost" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage3,
  },
];

export default function Page() {
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Revolutionizing Healthcare with AI-Driven Automation
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk&apos;s AI solutions streamline administrative tasks, improve
              patient care, and ensure compliance, helping healthcare
              professionals focus on what matters most.
            </p>
            <Button className="mt-6 lg:mt-10">
              Get Your Free Strategy Call
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
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="text-[#3A3A3F] card-title-lg mb-4">
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
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-lg">
              Healthcare Success Stories
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
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 lg:mb-16">
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0">
              Overcoming Healthcare Challenges with AI
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              The healthcare industry faces numerous challenges — from
              administrative bottlenecks to diagnostic errors. Vsenk’s AI
              solutions streamline operations, improve accuracy, and enhance
              patient care.
            </p>
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
      <CTA />
    </>
  );
}
