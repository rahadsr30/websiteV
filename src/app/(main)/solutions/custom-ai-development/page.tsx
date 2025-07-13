"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import servicehero from "@/assets/solution/solutionHero.png";
import iconnn2 from "@/assets/iconnn2.png";
import benifitIcon from "@/assets/solution/solutionIcon.png";
import caseStudyImage1 from "@/assets/solution/successstory1.png";
import caseStudyImage2 from "@/assets/solution/successstory2.png";
import caseStudyImage3 from "@/assets/solution/successstory3.png";
import Plugin from "../../plugin";
import React, { useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Problem Framing & Data Strategy",
    description:
      "We dig deep into your business challenge, identify the right AI approach, and prepare your data for training and development.",
  },
  {
    number: "02",
    title: "Model & System Development",
    description:
      "From scratch or fine-tuned, we design ML models, decision systems, or automation workflows to meet your specs.",
  },
  {
    number: "03",
    title: "Testing, Integration & Support",
    description:
      "We validate performance, integrate with your stack, and provide ongoing support to keep your AI system sharp, secure, and reliable.",
  },
];

const benefits = [
  {
    title: "Tailored to Your Data & Workflow",
    icon: benifitIcon,
    description:
      "No guesswork. No generic tools. Just precision-fit AI for your business.",
  },
  {
    title: "Build Anything—Not Just Chatbots",
    icon: benifitIcon,
    description:
      "Recommendation engines, fraud detection, document processing, custom LLMs, forecasting systems—you name it.",
  },
  {
    title: "Speed Without Sacrifice",
    icon: benifitIcon,
    description:
      "We move fast, but never cut corners. Our agile process keeps stakeholders involved without slowing things down.",
  },
  {
    title: "On-Prem or Cloud-Ready",
    icon: benifitIcon,
    description:
      "Deploy where you want—AWS, Azure, GCP, private cloud, or hybrid systems.",
  },
  {
    title: "Secure & Scalable",
    icon: benifitIcon,
    description: "Your data stays yours. Your system scales as you grow.",
  },
];

const industries = [
  "AI for Fintech & Fraud Detection",
  "AI in Healthcare & Insurance",
  "Manufacturing & Predictive Systems",
  "Logistics Optimization",
  "Content, Media & Recommendation Systems",
];

const successStories = [
  {
    title: "Anthem – AI-Powered Claims Automation",
    description:
      "Anthem built a custom AI model to process and flag insurance claims, reducing manual review time by 60% and increasing processing accuracy.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Klarna – Custom Recommendation Engine",
    description:
      "Klarna developed its own AI system to recommend products, optimize UX, and personalize content—resulting in 25% higher CTR on shopping feeds.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "SentiLink – Fraud Detection with Custom ML",
    description:
      "SentiLink created a proprietary machine learning model for synthetic identity detection, reducing fraud at fintech companies by up to 90%.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage3,
  },
];

const faqData = [
  {
    id: "benefits",
    question: "What kinds of custom AI do you build?",
    answer:
      "Everything from NLP models and recommendation systems to fraud detection engines, forecasting tools, and internal decision-making systems.",
  },
  {
    id: "diagnosis",
    question: "Do I need a big in-house tech team to work with you?",
    answer:
      "Not at all. We work with startups and enterprise teams alike and can lead both strategy and implementation.",
  },
  {
    id: "security",
    question: "How do you ensure data privacy?",
    answer:
      "We comply with global data standards (GDPR, HIPAA where needed) and offer secure deployment options including on-prem and private cloud.",
  },
  {
    id: "patient-care",
    question: "What’s the typical development timeline?",
    answer:
      "Most custom AI builds take 4–12 weeks from discovery to deployment depending on complexity and data readiness.",
  },
];

export default function Page() {
  const [expandedFaq, setExpandedFaq] = useState("");
  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              If Off-the-Shelf Doesn’t Fit, We Build What Does
            </h2>
            <p className="text-[#3A3A3F] section-description">
              From language models to predictive engines to automation systems,
              Vsenk designs and develops custom AI tailored to your workflows,
              data, and product goals.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">
                Request a Custom AI Build Consultation
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src={servicehero}
              alt="Industries"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 lg:mb-16">
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0 max-w-screen-sm">
              Purpose-Built AI, Designed for the Way You Work
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              Our custom development process is engineered to reduce risk and
              increase speed to value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#F5F5F6] py-8 px-10 flex flex-col items-start"
              >
                <span className="card-title-lg text-[#82848E] mb-12">
                  {step.number}
                </span>
                <span className="mb-6">
                  <Image src={iconnn2} alt="Step Icon" width={40} height={40} />
                </span>
                <h3 className="card-title-lg text-[#3A3A3F] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#3A3A3F] section-description">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-[#F5F5F6]">
        <div className="wrapper">
          <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-sm mb-8 lg:mb-16">
            What You Get With Vsenk&apos;s AI/ML Development
          </h2>
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
        <div>
          <h2 className="section-title text-[#0C2217] section-title text-center mb-8 lg:mb-16">
            Built for Your Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {industries.map((industry, index) => (
              <p
                key={index}
                className="p-4 text-[#585962] card-title bg-[#F5F5F6] text-center"
              >
                {industry}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="mb-8 lg:mb-16 flex flex-wrap items-start justify-between gap-4">
            <h2 className="section-title-medium text-[#0A0A0B] max-w-screen-md">
              AI Development Done Right—Real Results Across Industries
            </h2>
            {/* <Button className="mt-3 md:mt-0">Explore Use Cases</Button> */}
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
                  <p className="text-[#3A3A3F] section-description mb-8">
                    {story.description}
                  </p>

                  {/* <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button> */}
                </div>
              </div>
            ))}
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
            Let&apos;s Build the AI System You&apos;ve Been Thinking About
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            You&apos;ve got the data. We&apos;ve got the team to turn it into
            something powerful. Let&apos;s make your AI idea real—with speed,
            clarity, and precision.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Request a Custom AI Build Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
