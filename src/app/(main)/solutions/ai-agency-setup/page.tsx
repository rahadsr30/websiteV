"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import servicehero from "@/assets/solution/solutionHero.png";
import iconnn2 from "@/assets/iconnn2.png";
import benifitIcon from "@/assets/solution/solutionIcon.png";
import caseStudyImage1 from "@/assets/solution/successstory1.png";
import caseStudyImage2 from "@/assets/solution/successstory2.png";
import Plugin from "../../plugin";
import React, { useState, useEffect } from "react";
import blogImage1 from "@/assets/blog/blog1.png";
import blogImage2 from "@/assets/blog/blog2.png";
import blogImage3 from "@/assets/blog/blog3.png";
import avater1 from "@/assets/blog/bavater1.png";
import avater2 from "@/assets/blog/bavater2.png";
import avater3 from "@/assets/blog/bavater3.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const testimonials = [
  {
    image: blogImage1,
    avatar: avater1,
    name: "Michael Johnson",
    title: "Kael M., Co-Founder at AutomarkIQ (Marketing Automation Agency)",
    text: "“Vsenk helped us go from an idea to a fully functional AI automation agency in 45 days. We onboarded our first 6 clients before we even finished the website.”",
    hasPlay: false,
  },
  {
    image: blogImage2,
    avatar: avater2,
    name: "Rokibul Hasan Rahat",
    title: "Mena O., CEO at Flowfoundry (Web & App Dev Agency)",
    text: "“Our dev shop was drowning in client tasks. Vsenk built a white-label AI stack that handles 80% of onboarding and support—and our profit margins jumped by 60%.”",
    hasPlay: true,
  },
  {
    image: blogImage3,
    avatar: avater3,
    name: "David Chen",
    title: "Lucas G., Founder at LaunchSynth (Solo AI Consultant)",
    text: "“We wanted to productize AI consulting but didn’t know where to start. Vsenk gave us a brand, a stack, and an actual business model.”",
    hasPlay: true,
  },
  {
    image: blogImage1,
    avatar: avater1,
    name: "Michael Johnson",
    title: "Kael M., Co-Founder at AutomarkIQ (Marketing Automation Agency)",
    text: "“Vsenk helped us go from an idea to a fully functional AI automation agency in 45 days. We onboarded our first 6 clients before we even finished the website.”",
    hasPlay: false,
  },
];

const steps = [
  {
    number: "01",
    title: "Agency Blueprint & Market Positioning",
    description:
      "We help define your value proposition, target use cases, and productized AI service offers—whether you're launching or pivoting.",
  },
  {
    number: "02",
    title: "Tool Stack, Workflows & Branding",
    description:
      "We build your backend—CRM, automation systems, chatbots, analytics—fully white-labeled and branded to your agency.",
  },
  {
    number: "03",
    title: "Team Training & Launch Support",
    description:
      "We equip your team with AI playbooks, SOPs, onboarding flows, and sales collateral to start selling from week one.",
  },
];

const benefits = [
  {
    title: "Everything Set Up for You",
    icon: benifitIcon,
    description:
      "From CRM to client onboarding flows to chatbot templates—fully configured, fully branded.",
  },
  {
    title: "Sell AI Without Coding It",
    icon: benifitIcon,
    description:
      "Offer AI automation, chatbots, and workflows to your clients using ready-to-deploy solutions.",
  },
  {
    title: "Designed to Scale",
    icon: benifitIcon,
    description:
      "Built with automation and growth in mind—handle 1 to 100+ clients without drowning in ops.",
  },
  {
    title: "White-Label Friendly",
    icon: benifitIcon,
    description:
      "Your name. Your brand. Our engine. From dashboards to email sequences.",
  },
  {
    title: "Ongoing Support",
    icon: benifitIcon,
    description:
      "We don’t just hand you the keys—we help you drive. Ongoing updates and consulting included.",
  },
];

const industries = [
  "AI Agencies for Marketing & SEO",
  "White-Labeled AI for Web & App Dev Shops",
  "Internal AI Teams for Corporate Innovation",
  "Agencies Serving E-Commerce, SaaS & Education",
  "Automation Consulting for Freelancers & Coaches",
];

const successStories = [
  {
    title: "Viral Nation – Scaling AI-Powered Influencer Campaigns",
    description:
      "Viral Nation launched a service layer using AI-powered audience insights and campaign prediction models, reducing manual analysis time by 70%.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Growth Collective – AI Freelancer Matching Engine",
    description:
      "Built a proprietary system to match clients with top freelancers using NLP + profile data. Client matching time dropped from 48 hours to under 10 minutes.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
];

const faqData = [
  {
    id: "benefits",
    question: "Is this only for new agencies?",
    answer:
      "No. We work with both new and established businesses looking to pivot into or scale AI offerings.",
  },
  {
    id: "diagnosis",
    question: "Can we white-label everything?",
    answer:
      "Yes. From chatbots to CRM to emails and reporting dashboards, everything can be customized to your brand.",
  },
  {
    id: "security",
    question: "What tools do you set up?",
    answer:
      "We tailor it to your business, but common setups include CRM, automation workflows, chatbots, analytics, client portals, and proposal templates.",
  },
  {
    id: "patient-care",
    question: "How fast can we launch?",
    answer:
      "Most agencies are live and ready to sell within 3–5 weeks depending on scope and responsiveness.",
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - cardsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        const maxIndex = testimonials.length - cardsPerView;
        return maxIndex > 0 ? maxIndex : 0;
      }
      return prevIndex - 1;
    });
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  const [expandedFaq, setExpandedFaq] = useState("");
  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              Launch an AI Agency That Runs Smarter, Sells Faster, and Scales
              Cleanly
            </h2>
            <p className="text-[#3A3A3F] section-description">
              From tools to talent to tech stack, Vsenk helps you build a fully
              operational AI-powered agency—ready to sell, serve, and scale from
              day one.
            </p>
            <Button className="mt-6 lg:mt-10">
              Schedule Your AI Agency Setup Call
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
              Done-for-You AI Agency Infrastructure—Without the Guesswork
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              We combine automation, white-labeled tools, pre-built workflows,
              and training into a single, streamlined setup. All you need is a
              market.
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
              Agencies Are Already Winning With AI—Here’s How
            </h2>
            <Button className="mt-3 md:mt-0">Explore Use Cases</Button>
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

                  <Button variant="outline" className="w-fit">
                    {story.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Plugin />

      <section className="py-section bg-white">
        <div className="wrapper">
          <div className="flex flex-wrap justify-between items-start mb-8 lg:mb-16">
            <div>
              <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0">
                Business Owners
                <br />
                Feels the Magic
              </h2>
            </div>
            <div className="max-w-md text-[#3A3A3F] section-description">
              Hear how businesses like yours are scaling faster and smarter with
              our AI automation solutions.
            </div>
          </div>
          <div className="flex gap-6 justify-center items-stretch">
            {visibleTestimonials.map((t, i) => (
              <div
                key={currentIndex + i}
                className="bg-[#F5F5F6] p-6 flex flex-col flex-1 w-full lg:max-w-sm min-h-full"
              >
                <div className={`mb-4${t.hasPlay ? " relative" : ""}`}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={500}
                    height={500}
                    className="w-full object-cover h-48"
                  />
                </div>
                <p className="text-[#3A3A3F] card-title mt-5 flex-grow">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center mt-10">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-[#0A0A0B] section-description-medium mb-2">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#3A3A3F">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8 lg:mt-10">
            <button
              onClick={prevSlide}
              className="card-title text-[#3A3A3F] hover:text-black transition-colors"
            >
              <IoIosArrowRoundBack className="text-3xl" />
            </button>
            <button
              onClick={nextSlide}
              className="card-title text-[#3A3A3F] hover:text-black transition-colors"
            >
              <IoIosArrowRoundForward className="text-3xl" />
            </button>
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
          <h2 className="section-title text-white mb-3 max-w-screen-md mx-auto">
            Launch Smarter. Scale Faster. Own the AI Conversation.
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            Whether you&apos;re pivoting or just starting, we&apos;ll help you
            build a profitable, scalable AI agency from the inside out.
          </p>
          <Button variant="ghost">Schedule Your AI Agency Setup Call</Button>
        </div>
      </section>
    </>
  );
}
