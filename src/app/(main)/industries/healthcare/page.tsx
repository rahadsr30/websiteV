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
    id: "administrative",
    title: "Too Much Paperwork, Not Enough Time",
    solution: "Too Much Paperwork, Not Enough Time",
    description:
      "AI automates administrative tasks, such as intake, claims, and scheduling.",
    image: challengeImage1,
  },
  {
    id: "diagnostic",
    title: "Long Wait Times and Poor Patient Engagement",
    solution: "Long Wait Times and Poor Patient Engagement",
    description:
      "Mental health AI chatbots offer instant support and guided care pathways.",
    image: challengeImage2,
  },
  {
    id: "engagement",
    title: "Fragmented Patient Data",
    solution: "Fragmented Patient Data",
    description:
      "AI connects systems, extracts insights, and presents them clearly for clinicians.",
    image: challengeImage3,
  },
  {
    id: "compliance",
    title: "Staff Burnout and Shortages",
    solution: "Staff Burnout and Shortages",
    description:
      "AI assistants handle routine inquiries and tasks, giving providers more time to focus on care.",
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
    title: "Workflow Automation",
    icon: icon,
    desc: "Automate intake forms, referrals, appointment scheduling, and insurance verification. Reduce paperwork and improve operational efficiency with AI-driven task routing.",
  },
  {
    title: "Customer Service & Mental Health Chatbots",
    icon: icon,
    desc: "Deploy AI health assistants and mental health AI chatbots to handle triage, FAQs, and patient support. Offer AI for mental health and wellbeing via conversational tools that provide pre-screening, follow-up, and guided care.",
  },
  {
    title: "Data Processing & Predictive Analytics",
    icon: icon,
    desc: "Use AI in life sciences to analyze research data, clinical trials, or treatment outcomes. Predict hospital admissions, medication adherence, and treatment success rates.",
  },
  {
    title: "EHR & CRM Integration",
    icon: icon,
    desc: "Sync AI tools with Salesforce Health Cloud, Epic, Athenahealth, or Cerner for a unified data ecosystem.",
  },
  // {
  //   title: "Security Automation",
  //   icon: icon,
  //   desc: "Automate HIPAA compliance and safeguard patient data with AI systems that monitor.",
  // },
  // {
  //   title: "Diagnostics Assistance",
  //   icon: icon,
  //   desc: "Leverage AI to assist in diagnosing conditions by analyzing medical images and patient data.",
  // },
];

const successStories = [
  {
    title: "Mayo Clinic – AI in Radiology Workflow",
    description:
      "Used AI to interpret chest X-rays faster and prioritize urgent cases. Reduced report turnaround time by up to 40%.",
    metrics: [
      { value: "30%", label: "less wait time" },
      { value: "20%", label: "higher productivity" },
      { value: "25%", label: "more satisfaction" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Thrive AI Health – Mental Health AI for Daily Wellness",
    description:
      "Developed an AI-powered mental wellness coach with GPT-4 integration to promote stress management and personalized lifestyle coaching.",
    metrics: [
      { value: "25%", label: "more accuracy" },
      { value: "15%", label: "fewer errors" },
      { value: "20%", label: "faster diagnosis" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Northwell Health – Patient Scheduling Automation",
    description:
      "Integrated AI voice assistants with their call center and scheduling system. Resulted in a 30% increase in self-scheduled appointments.",
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
    question: "How is AI used in healthcare today?",
    answer:
      "AI in healthcare is used for diagnostics, patient communication, clinical workflow automation, and data analysis. It helps providers make faster, more accurate decisions.",
  },
  {
    id: "diagnosis",
    question: "What is Thrive AI Health?",
    answer:
      "Thrive AI Health is a wellness-focused AI assistant developed by Thrive Global and OpenAI, designed to support mental wellbeing and lifestyle changes.",
  },
  {
    id: "security",
    question: "Is it safe to use AI for mental health applications?",
    answer:
      "Yes—when deployed with the right ethical and clinical guidelines, mental health AI tools can improve access and engagement without replacing licensed care.",
  },
  {
    id: "patient-care",
    question: "Can you integrate AI with EHR or hospital systems?",
    answer:
      "Absolutely. We provide AI integration services for major healthcare platforms, including Salesforce Health Cloud, Epic, and Cerner.",
  },
  {
    id: "integration",
    question: "What are the benefits of AI in life sciences?",
    answer:
      "AI accelerates drug discovery, identifies trends in clinical trials, and improves population health analytics with large-scale data processing.",
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
              Revolutionizing Healthcare with AI Automation
            </h2>
            <p className="text-[#3A3A3F] section-description">
              From patient intake to diagnostics to post-care engagement, Vsenk
              delivers secure, scalable AI systems that help healthcare teams
              work faster, care better, and stay compliant.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">Schedule a Healthcare AI Demo</Link>
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
          <h2 className="section-title-medium text-[#0A0A0B] max-w-lg mb-8 lg:mb-16">
            AI Solutions Built for Modern Healthcare
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
              Healthcare Success Stories
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
            <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-sm">
              Solving Healthcare’s Most Pressing Pain Points with AI
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
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            From frontline support to life sciences innovation, we help health
            systems and startups implement AI that delivers real outcomes.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Request a Healthcare AI Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
