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
    title: "Limited Instructor Bandwidth",
    solution: "Limited Instructor Bandwidth",
    description:
      "Deploy AI to assist students with questions, feedback, and guidance—24/7.",
    image: challengeImage1,
  },
  {
    id: "2",
    title: "High Administrative Workload",
    solution: "High Administrative Workload",
    description:
      "Automate forms, grading, scheduling, and documentation with AI integration in educational institutes.",
    image: challengeImage2,
  },
  {
    id: "3",
    title: "Low Engagement in Online Learning",
    solution: "Low Engagement in Online Learning",
    description:
      "Use AI for university personalization and content pacing to increase retention.",
    image: challengeImage3,
  },
  {
    id: "4",
    title: "Content Creation Bottlenecks",
    solution: "Content Creation Bottlenecks",
    description:
      "Use generative AI in higher education to build materials at scale with consistency and accuracy.",
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
    title: "AI Tutoring & Academic Assistance",
    icon: icon,
    desc: "Deploy AI for college and university-level learning assistants that answer questions, explain topics, and guide self-paced study. Use chatbot-based SI support in university settings to enhance student services.",
  },
  {
    title: "Generative AI for Content Creation",
    icon: icon,
    desc: "Generate quizzes, lesson plans, explanations, and revision summaries using generative AI in education. Automate course material updates with AI that adapts to curriculum changes.",
  },
  {
    title: "AI for Administrative Automation",
    icon: icon,
    desc: "Automate student enrollment, support tickets, document generation, and grading workflows. Use AI to reduce administrative fatigue in higher education institutions.",
  },
  {
    title: "Smart Personalization & Engagement",
    icon: icon,
    desc: "Build AI systems that adapt content difficulty, suggest learning paths, and personalize onboarding. Track learning patterns and optimize instruction in real time.",
  },
];

const successStories = [
  {
    title: "Khan Academy – GPT-4 Powered AI Tutor “Khanmigo”",
    description:
      "Khan Academy built an AI learning guide powered by GPT-4 that helps students learn interactively and gives teachers real-time teaching support.",
    metrics: [
      { value: "30%", label: "less wait time" },
      { value: "20%", label: "higher productivity" },
      { value: "25%", label: "more satisfaction" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Arizona State University – Generative AI for Curriculum Support",
    description:
      "ASU partnered with OpenAI to explore how ChatGPT can enhance teaching and learning, including generating content and offering learning assistance.",
    metrics: [
      { value: "25%", label: "more accuracy" },
      { value: "15%", label: "fewer errors" },
      { value: "20%", label: "faster diagnosis" },
    ],
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Duolingo – AI for Personalized Language Learning",
    description:
      "Duolingo uses AI to adapt exercises, analyze learner progress, and generate custom lessons—helping users retain information more effectively.",
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
    question: "What are the benefits of AI in education?",
    answer:
      "AI improves accessibility, automates repetitive tasks, offers personalized learning experiences, and enhances content creation—all of which improve student outcomes.",
  },
  {
    id: "diagnosis",
    question: "Can AI be used for university-level education?",
    answer:
      "Yes. We deploy AI for university systems, including GPT-powered tutoring, enrollment chatbots, curriculum generation, and automated support desks.",
  },
  {
    id: "security",
    question: "Is there a best free AI for university assignments?",
    answer:
      "Tools like ChatGPT and Claude can assist with idea development and tutoring—but always within academic integrity guidelines. We build institutional-grade tools for ethical student support.",
  },
  {
    id: "patient-care",
    question: "How does AI support educational businesses and EdTech startups?",
    answer:
      "We help education platforms build smart features, automate workflows, and deliver scalable, personalized content using education AI tools and LLM integrations.",
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
              Smarter Learning at Scale: AI Solutions for Education
            </h2>
            <p className="text-[#3A3A3F] section-description">
              From personalized tutoring to intelligent automation, Vsenk helps
              education providers and institutions deploy AI that improves
              outcomes for students, faculty, and administrators.
            </p>
            <Button className="mt-6 lg:mt-10">
              Schedule an Education AI Demo
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
            AI Tools That Improve the Way Education Works
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
              Education Success Stories
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
          <h2 className="section-title text-white mb-3 max-w-screen-md mx-auto">
            Let’s Build the Future of Learning—Powered by AI
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            From higher ed institutions to EdTech startups, we help you
            implement AI that improves outcomes, scales delivery, and supports
            every learner.
          </p>
          <Button variant="ghost">Book an AI Demo for Education</Button>
        </div>
      </section>
    </>
  );
}
