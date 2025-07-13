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
    title: "Discovery & Data Strategy",
    description:
      "We start by understanding your goals, data ecosystem, and business needs. No guesswork.",
  },
  {
    number: "02",
    title: "Model Design & Training",
    description:
      "We develop and train tailored ML models using the most relevant frameworks, always performance-tested and context-aware.",
  },
  {
    number: "03",
    title: "Deployment & Optimization",
    description:
      "We integrate seamlessly into your existing systems, continuously monitor performance, and fine-tune to deliver real ROI.",
  },
];

const benefits = [
  {
    title: "Custom-Built ML Models",
    icon: benifitIcon,
    description:
      "We don't retrofit templates. We build what works for your business, from prediction engines to NLP to computer vision.",
  },
  {
    title: "Better Decisions, Faster",
    icon: benifitIcon,
    description:
      "Your data becomes actionable intelligence. Forecasting, automation, and real-time optimization made easy.",
  },
  {
    title: "Enterprise-Ready Deployment",
    icon: benifitIcon,
    description:
      "Scalable. Secure. Built for performance in production, not just in notebooks.",
  },
  {
    title: "Cross-Platform Compatibility",
    icon: benifitIcon,
    description:
      "Deploy on AWS, Azure, GCP, or your local stack. We meet you where you are.",
  },
  {
    title: "Continuous Improvement",
    icon: benifitIcon,
    description:
      'ML isn&apos;t "one and done." We set up the pipeline for ongoing learning and optimization.',
  },
];

const industries = [
  "AI in Healthcare",
  "AI for Finance",
  "AI in E-Commerce",
  "AI in Logistics",
  "AI for SaaS & B2B",
];

const successStories = [
  {
    title: "Predictive Maintenance – Siemens",
    description:
      "Siemens utilizes machine learning on industrial IoT data to predict equipment failures before they occur, resulting in a reduction of up to 30% in unplanned downtime at specific manufacturing sites.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Customer Churn Prediction – Netflix",
    description:
      "Netflix applies ML models to user behavior data to predict potential churn and personalize content recommendations, helping maintain its retention rate of over 90% among existing subscribers.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Demand Forecasting – Walmart",
    description:
      "Walmart leverages ML to predict demand across thousands of stores by factoring in location, weather, events, and seasonal trends. This has helped reduce stockouts and overstock, increasing inventory accuracy by up to 90%.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage3,
  },
];

const faqData = [
  {
    id: "benefits",
    question: "What types of machine learning do you support?",
    answer:
      "We specialize in supervised, unsupervised, and reinforcement learning models, including classification, regression, clustering, NLP, and deep learning.",
  },
  {
    id: "diagnosis",
    question: "Can you work with our in-house data science team?",
    answer:
      "Absolutely. We integrate with internal teams to co-develop or scale projects quickly without disrupting internal priorities.",
  },
  {
    id: "security",
    question: "How long does it take to get to production?",
    answer:
      "Depending on the complexity, MVPs can be ready in 2–6 weeks. Full deployment timelines are mapped during our discovery phase.",
  },
  {
    id: "patient-care",
    question: "Do you support real-time inference and model monitoring?",
    answer:
      "Yes. We build robust systems that support real-time inference, including tools for model drift detection and retraining workflows.",
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
              We Don&apos;t Just Build Models. We Build Impact.
            </h2>
            <p className="text-[#3A3A3F] section-description">
              From custom machine learning systems to full-scale AI deployment,
              Vsenk helps businesses turn raw data into real-world results. No
              hype, just outcomes.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">Request a Free Consultation</Link>
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
              From Idea to Intelligent System—Done Right
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              We don&apos;t deliver off-the-shelf ML. We co-build with your team
              to deliver purpose-built systems that learn, adapt, and scale.
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
            <h2 className="section-title-medium text-[#0A0A0B] max-w-lg">
              What AI/ML Looks Like in the Real World
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
          <h2 className="section-title text-white mb-3">
            Ready to Build Something Smarter?
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            Let’s turn your data into a competitive advantage. We’ll map out
            your next AI/ML initiative—without the jargon.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Request a Free AI Strategy Call</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
