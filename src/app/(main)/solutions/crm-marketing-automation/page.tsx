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
    title: "Head of Growth, B2B SaaS Company",
    text: "“Vsenk transformed our CRM from a glorified address book into a lead-generating machine. Their automation strategy helped us increase MQL-to-SQL conversion by 40% in one quarter.”",
    hasPlay: false,
  },
  {
    image: blogImage2,
    avatar: avater2,
    name: "Rokibul Hasan Rahat",
    title: "Sales Enablement Lead, Mid-Market Tech Firm",
    text: "“They didn’t just ‘set up flows’—they understood our funnel, sales cycle, and product. We now close deals in 30% less time.”",
    hasPlay: true,
  },
  {
    image: blogImage3,
    avatar: avater3,
    name: "David Chen",
    title: "Head of Growth, B2B SaaS Company",
    text: "“Vsenk transformed our CRM from a glorified address book into a lead-generating machine. Their automation strategy helped us increase MQL-to-SQL conversion by 40% in one quarter.”",
    hasPlay: true,
  },
  {
    image: blogImage2,
    avatar: avater2,
    name: "Rokibul Hasan Rahat",
    title: "Sales Enablement Lead, Mid-Market Tech Firm",
    text: "“They didn’t just ‘set up flows’—they understood our funnel, sales cycle, and product. We now close deals in 30% less time.”",
    hasPlay: true,
  },
];

const steps = [
  {
    number: "01",
    title: "CRM Audit & Strategy Alignment",
    description:
      "We assess your current CRM and marketing stack, find friction points, and build a tailored automation roadmap.",
  },
  {
    number: "02",
    title: "Workflow Design & Integration",
    description:
      "We design personalized workflows—from lead scoring and drip campaigns to re-engagement flows—and integrate them with your tools.",
  },
  {
    number: "03",
    title: "Launch, Test & Optimize",
    description:
      "We deploy workflows, monitor performance, and continuously optimize based on conversion data and engagement metrics.",
  },
];

const benefits = [
  {
    title: "Lead Nurturing at Scale",
    icon: benifitIcon,
    description:
      "Stay top of mind without lifting a finger. Automated sequences built to convert.",
  },
  {
    title: "Smarter Segmentation",
    icon: benifitIcon,
    description:
      "Group your users by behavior, interest, lifecycle stage, or any signal that matters to your growth.",
  },
  {
    title: "Sales & Marketing Alignment",
    icon: benifitIcon,
    description:
      "Trigger sales actions directly from marketing activity. No more guessing when to follow up.",
  },
  {
    title: "Analytics & Reporting Built-In",
    icon: benifitIcon,
    description:
      "Know what’s working, what’s not, and where to improve. Real-time metrics without manual tracking.",
  },
  {
    title: "Integrates With Your Stack",
    icon: benifitIcon,
    description:
      "Works with Salesforce, HubSpot, Zoho, Intercom, Mailchimp, ActiveCampaign, and more.",
  },
];

const industries = [
  "CRM Automation for SaaS",
  "CRM for Real Estate & Property Tech",
  "CRM for Education & Online Learning",
  "CRM Automation in Healthcare",
];

const successStories = [
  {
    title: "Netflix – Behavioral Personalization at Scale",
    description:
      "Netflix sends personalized email recommendations using user behavior data and automated marketing flows. This results in a 26% increase in email open rates and more in-depth content engagement",
    buttonText: "Read Full Case Study",
    image: caseStudyImage1,
  },
  {
    title: "Sephora – Automated Retargeting with CRM Integration",
    description:
      "Sephora utilizes AI-driven marketing automation to retarget customers based on their browsing and purchasing behavior. This strategy boosted email revenue by over 400% through personalized campaigns.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage2,
  },
  {
    title: "Airbnb – Lead Scoring & CRM Intelligence",
    description:
      "Airbnb implemented ML-powered lead scoring and automated CRM workflows to streamline the onboarding process for hosts and guest outreach. The result? A 15% increase in conversion rates among high-quality leads.",
    buttonText: "Read Full Case Study",
    image: caseStudyImage3,
  },
];

const faqData = [
  {
    id: "benefits",
    question: "Which CRMs do you support?",
    answer:
      "We work with most modern CRMs, including Salesforce, HubSpot, Zoho, Pipedrive, and others. We also offer custom middleware integrations.",
  },
  {
    id: "diagnosis",
    question: "Can you help migrate our existing CRM workflows?",
    answer:
      "Yes. We offer full migration and optimization services for existing workflows—no data loss, no downtime.",
  },
  {
    id: "security",
    question: "What kind of marketing automations do you build?",
    answer:
      "Everything from onboarding and retargeting flows to lead scoring, drip campaigns, and behavior-based triggers.",
  },
  {
    id: "patient-care",
    question: "Do you provide analytics and performance reports?",
    answer:
      "Yes. We integrate dashboards and reporting, allowing you to track campaign performance and conversion lift in real-time.",
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
              Automate Outreach. Personalize Everything. Close Faster.
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Vsenk helps modern teams move beyond basic email blasts with
              intelligent CRM workflows that engage, convert, and retain—on
              autopilot.
            </p>
            <Button className="mt-6 lg:mt-10">
              Request a Free Automation Demo
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
              From Lead to Loyalty—Automated and Intelligent
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              Our process is designed to align automation with your sales and
              marketing goals, not force you into someone else’s funnel logic.
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
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
              Automation in Action: Real-World Results
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
          <h2 className="section-title text-white mb-3 max-w-screen-sm mx-auto">
            Let’s Build a CRM That Works While You Sleep
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-sm mx-auto mb-6 lg:mb-10">
            We help you automate smarter, not harder. Get a no-pressure
            walkthrough of what’s possible with your current tools and goals.
          </p>
          <Button variant="ghost">Request a Free Automation Demo</Button>
        </div>
      </section>
    </>
  );
}
