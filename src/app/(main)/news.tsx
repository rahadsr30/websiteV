import React from "react";
import Image from "next/image";
import newsImage1 from "@/assets/news/news1.png";
import newsImage2 from "@/assets/news/news2.png";
import newsImage3 from "@/assets/news/news3.png";
import newsImage4 from "@/assets/news/news4.png";
import { Button } from "@/components/ui/button";
import { BsCalendar2 } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

const sideArticles = [
  {
    img: newsImage2,
    alt: "Marketing with AI",
    date: "18 Jul 2023",
    title: "From Manual to Magical: Automating Your Marketing with AI",
    href: "#",
  },
  {
    img: newsImage3,
    alt: "Small Businesses AI",
    date: "18 Jul 2023",
    title: "How Small Businesses Can Afford AI (Without a Big Team)",
    href: "#",
  },
  {
    img: newsImage4,
    alt: "CRM AI",
    date: "18 Jul 2023",
    title: "Integrate AI into Your CRM: A Smarter Way to Work",
    href: "#",
  },
];

export default function News() {
  return (
    <section className="py-section">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 lg:mb-16">
          <h2 className="section-title-medium text-[#0A0A0B]">
            Stay Ahead with
            <br />
            AI Insights
          </h2>
          <div className="mt-3 md:mt-0">
            <Button>See All Insights</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10">
          <div className="  flex flex-col">
            <div className="relative h-[382px]  w-full mb-6">
              <Image
                src={newsImage1}
                alt="AI Chatbots"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="flex items-center text-[#3A3A3F] section-description mb-4">
                <span className="mr-2">
                  <BsCalendar2 />
                </span>
                18 Jul 2023
              </div>
              <h3 className="text-[#081717] card-title-lg mb-7 lg:mb-10">
                5 Ways AI Chatbots Are Transforming Customer Support
              </h3>
              <a
                href="#"
                className="text-[#3A3A3F] section-description-semi flex items-center gap-1 hover:underline"
              >
                Read More
                <span>
                  <IoIosArrowRoundForward className="text-3xl" />
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {sideArticles.map((article, idx) => (
              <div
                key={article.title}
                className={`flex gap-4${
                  idx < sideArticles.length - 1 ? " border-b pb-6" : ""
                }`}
              >
                <div className="relative w-[244px] h-[175px] flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center text-[#3A3A3F] small-text">
                      <span className="mr-1">
                        <BsCalendar2 />
                      </span>
                      {article.date}
                    </div>
                    <h4 className="text-[#000] section-description-medium">
                      {article.title}
                    </h4>
                  </div>

                  <a
                    href={article.href}
                    className="text-[#3A3A3F] section-description-semi flex items-center gap-1 hover:underline "
                  >
                    Read More{" "}
                    <span>
                      {" "}
                      <IoIosArrowRoundForward className="text-3xl" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
