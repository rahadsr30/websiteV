"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
// import { BsArrowRight } from "react-icons/bs";
import heorImage from "@/assets/platform/platformHero.png";
import icon from "@/assets/platform/platformIcon.png";
// import icon2 from "@/assets/platform/platformIcon2.png";
import powerUp from "@/assets/platform/PowerUp.png";
import benifitIcon from "@/assets/solution/solutionIcon.png";
import caseStudyImage1 from "@/assets/platform/platformCase1.png";
import caseStudyImage2 from "@/assets/platform/platformCase2.png";
import caseStudyImage3 from "@/assets/platform/platformCase3.png";
import caseStudyImage4 from "@/assets/platform/platformCase4.png";
import caseStudyImage5 from "@/assets/platform/platformCase5.png";
import caseStudyImage6 from "@/assets/platform/platformCase6.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const integrations = [
    {
      title: "Vapi + OpenAI Integration",
      description: "for intelligent conversations",
      icon: icon,
    },
    {
      title: "Vapi + CRM Integration",
      description: "for real-time data sync",
      icon: icon,
    },
    {
      title: "Vapi + Google Calendar Integration",
      description: "for scheduling and reminders",
      icon: icon,
    },
    {
      title: "Vapi + Make, Zapier, or n8n",
      description: "for voice-triggered workflows",
      icon: icon,
    },
    {
      title: "Vapi + Custom APIs",
      description: "for internal data access and updates",
      icon: icon,
    },
  ];

  const benefits = [
    {
      title: "Voice AI That Takes Action",
      icon: benifitIcon,
      description:
        "Connect your Vapi assistant to backend tools so it can not only speak, but also schedule, notify, and update systems.",
    },
    {
      title: "Real-Time CRM Integration",
      icon: benifitIcon,
      description:
        "Capture leads, update contact info, and create tasks in HubSpot, Salesforce, or your own CRM in seconds.",
    },
    {
      title: "OpenAI-Enhanced Conversations",
      icon: benifitIcon,
      description:
        "Integrate GPT-4 or Claude into your Vapi agent for context-aware, natural conversations.",
    },
    {
      title: "Calendar Scheduling Built In",
      icon: benifitIcon,
      description:
        "Let users book meetings by voice—Vapi integrates with Google Calendar, Calendly, or Notion.",
    },
    {
      title: "Custom Workflows via Zapier, Make, or n8n",
      icon: benifitIcon,
      description:
        "Trigger automated flows based on specific voice commands or user inputs.",
    },
  ];

  const successStories = [
    {
      title: "Voice-Based Lead Capture",
      description:
        "Connect Vapi with HubSpot to let your AI voice agent qualify and store leads directly into the CRM—no manual entry.",
      points: [
        "Personalized shopping assistant",
        "Real-time inventory checks",
        "Voice-based order collection",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage1,
    },
    {
      title: "Call Center Automation",
      description:
        "Vapi + Zapier or n8n integration routes voice interactions into helpdesk tickets, sends notifications, or triggers follow-ups instantly.",
      points: [
        "Automated lead logging",
        "Intent scoring",
        "Real-time Slack notifications",
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage2,
    },
    {
      title: "Appointment Scheduling via Voice",
      description:
        "Vapi + Google Calendar or Calendly lets your customers book meetings by phone—automatically.",
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
      title: "Dial.ai – Vapi + GPT + HubSpot Integration",
      description:
        "Diall.ai built a voice assistant that handles inbound calls, answers questions using OpenAI, and pushes qualified leads to HubSpot. Result: 80% drop in missed lead opportunities.",
      metrics: [
        { value: "80%", label: "faster responses" },
        { value: "100%", label: "hands-free" },
        { value: "70%", label: "fewer manual steps" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage4,
    },
    {
      title: "Vocode / LoopGPT – Call Routing with Vapi and Zapier",
      description:
        "A demo project used Vapi voice agents connected to Zapier to route calls to human agents, log data in Google Sheets, and send follow-up emails.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage5,
    },
    {
      title: "ScheduleGPT – Vapi + Google Calendar",
      description:
        "Used Vapi to let users schedule meetings using voice, integrated with Google Calendar. Demonstrated how Vapi handles voice prompts, confirms availability, and books appointments.",
      metrics: [
        { value: "35%", label: "higher engagement" },
        { value: "50%", label: "faster lessons" },
        { value: "40%", label: "better retention" },
      ],
      buttonText: "Read Full Case Study",
      image: caseStudyImage6,
    },
  ];

  // const documentationGuides = [
  //   {
  //     title: "Vapi API Integration Guide",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Vapi + OpenAI Setup Instructions",
  //     icon: icon2,
  //   },
  //   {
  //     title: "How to Connect Vapi to HubSpot with Make",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Vapi Call Center Integration Example",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Vapi CRM Integration Best Practices",
  //     icon: icon2,
  //   },
  // ];

  const faqData = [
    {
      id: "benefits",
      question: "What is Vapi?",
      answer:
        "Vapi is a voice AI platform that allows developers to build phone-call-based AI agents using LLMs and speech tools.",
    },
    {
      id: "diagnosis",
      question: "Can I integrate Vapi with OpenAI?",
      answer:
        "Yes. We can set up Vapi to use GPT-4, Claude, or other models for natural conversation and task handling.",
    },
    {
      id: "security",
      question: "Can a Vapi agent update my CRM or calendar?",
      answer:
        "Absolutely. We build Vapi CRM integrations (e.g., Salesforce, HubSpot) and calendar tools using webhooks or automation platforms.",
    },
    {
      id: "patient-care",
      question: "Do I need to be technical to use this?",
      answer:
        "No. We handle the entire setup—from voice logic to backend sync—so your team only has to manage the outcomes.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState("");

  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Smarter Voice Agents with Vapi Integration
            </h2>
            <p className="text-[#3A3A3F] section-description">
              We connect Vapi voice AI to your CRM, APIs, and automation
              platforms—so your AI agents don’t just talk, they get things done.
            </p>
            <Button className="mt-6 lg:mt-10" asChild>
              <Link href="/contact">Schedule a Vapi Integration Demo</Link>
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
              Turn Conversations into Workflow Triggers
            </h2>
            <p className="lg:max-w-lg text-[#3A3A3F] section-description">
              Vapi enables dynamic voice conversations powered by AI. Vsenk
              helps you extend that power by integrating Vapi with OpenAI,
              Salesforce, HubSpot, Google Calendar, and internal databases. So
              your voice agent can update records, schedule meetings, respond
              with real-time data, and much more.
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
            {/* <Button className="mt-3 md:mt-0">Explore Use Cases </Button> */}
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

                  {/* <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button> */}
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
            {/* <Button className="mt-3 md:mt-0">Explore Case Studies</Button> */}
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

                  {/* <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-section bg-white">
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
      </section> */}

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
            Let’s Build a Voice Assistant That Gets Work Done
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-md mx-auto mb-6 lg:mb-10">
            Whether it&apos;s scheduling calls, qualifying leads, or triggering
            follow-ups, Vsenk helps you turn Vapi into a fundamental business
            tool, not just a demo.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/contact">Book a Vapi Integration Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
