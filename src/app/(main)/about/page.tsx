import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heorImage from "@/assets/industry/industrie.png";
import aboutImage1 from "@/assets/solution/solutionHero.png";
import aboutImage2 from "@/assets/service.png";
import aboutImage3 from "@/assets/about/about1.jpg";
import aboutImage5 from "@/assets/industry/hcasestudy3.png";
import aboutImage6 from "@/assets/about/about2.jpg";

const aboutus = [
  {
    title: "Who We Are",
    subtitle: "We Don't Just Do AI. We Make It Make Sense.",
    description: `
    We&apos;re not an agency chasing buzzwords. We&apos;re a product-driven, client-obsessed team that helps startups, enterprises, and agencies integrate AI that solves real problems, without overcomplicating the process.
    Whether it&apos;s automating support, launching intelligent workflows, or building custom GPT-powered tools, we focus on the end goal: making your team faster, your product smarter, and your ops smoother.
    `,
    buttonText: "Read More",
    image: aboutImage3,
  },
  {
    title: "Our Mission",
    subtitle: "Build AI that's practical, ethical, and built for business.",
    description:
      "We believe artificial intelligence should be as useful as it is powerful. That&apos;s why we&apos;re on a mission to help companies automate with intention, scale with clarity, and unlock the kind of efficiency that turns goals into growth.",
    buttonText: "Read More",
    image: aboutImage2,
  },
  {
    title: "Our Core Values",
    subtitle: "The principles that guide everything we build",
    description: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-[#0A0A0B] mb-2">
            Clarity Over Complexity
          </p>
          <p>
            We explain things clearly and build systems you can understand, own,
            and scale.
          </p>
        </div>

        <div>
          <p className="font-bold text-[#0A0A0B] mb-2">Build with Purpose</p>
          <p>
            We don&apos;t ship fluff. Every integration, workflow, and assistant
            we build has a purpose and a specific result to deliver.
          </p>
        </div>

        <div>
          <p className="font-bold text-[#0A0A0B] mb-2">Transparency Always</p>
          <p>
            No hidden fees, no tech smoke and mirrors. Just strategy, execution,
            and open communication.
          </p>
        </div>

        <div>
          <p className="font-bold text-[#0A0A0B] mb-2">Grow Together</p>
          <p>
            We partner with clients long-term, helping them evolve with AI, not
            just launch it.
          </p>
        </div>
      </div>
    ),
    buttonText: "Read More",
    image: aboutImage1,
  },

  {
    title: "What Makes Us Different",
    description: `
    We don’t sell templates — we build tailored AI systems from the ground up.
    We work across various industries, including healthcare, finance, retail, SaaS, education, and more.
    We’re fluent in platforms like OpenAI, Voiceflow, Vapi, Zapier, Make, Shopify, n8n, Salesforce, and others.
    We back everything with real strategy, not "set it and forget it" setups.
    `,
    buttonText: "Read More",
    image: aboutImage5,
  },
  {
    title: "Meet the Builders",
    description:
      "We’re a fully distributed, global team of developers, designers, product thinkers, data engineers, and AI specialists. We work lean, move fast, and focus on the few things that matter: speed, clarity, and measurable outcomes.",
    buttonText: "Read More",
    image: aboutImage6,
  },
];

export default function Page() {
  return (
    <>
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              We Build AI That Works in the Real World
            </h2>
            <p className="text-[#3A3A3F] section-description">
              At Vsenk, we&apos;re not here to impress with jargon or
              overcomplicate things. We&apos;re builders, engineers, and
              strategists who believe AI should be useful, human-centered, and
              built to deliver actual results.
            </p>
            <Button className="mt-6 lg:mt-10">Talk to Our Team</Button>
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

      <section className="py-section">
        <div className="wrapper space-y-8 lg:space-y-16">
          {aboutus.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div>
                  <h3 className="text-[#0A0A0B] section-title mb-3">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <h4 className="card-title text-[#3A3A3F] mb-4">
                      {item.subtitle}
                    </h4>
                  )}
                </div>

                <div
                  className={`text-[#3A3A3F] section-description ${
                    typeof item.description === "string"
                      ? "whitespace-pre-line"
                      : ""
                  }`}
                >
                  {item.description}
                </div>

                <Button variant="default" className="mt-6">
                  {item.buttonText}
                </Button>
              </div>

              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-section wrapper">
        <div className="text-center py-10 lg:py-20 px-10 lg:px-0 bg-cover bg-center bg-no-repeat bg-[url('/vcta.png')]">
          <h2 className="section-title max-w-screen-md mx-auto text-white mb-3">
            We’d Love to Build With You
          </h2>
          <p className="text-[#FFF] section-description max-w-screen-md mx-auto mb-6 lg:mb-10">
            Whether you’re just starting with AI or scaling something big, we’re
            here to help. No pressure. No pitch decks. Just clarity, experience,
            and practical solutions.
          </p>
          <Button variant="ghost">Schedule a Free Consultation</Button>
        </div>
      </section>
    </>
  );
}
