import React from "react";
import Image from "next/image";
import icon from "@/assets/iconnn3.png";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    title: "Innovation with Purpose",
    icon: icon,
  },
  {
    title: "Radical Transparency",
    icon: icon,
  },
  {
    title: "Growth Together",
    icon: icon,
  },
];

const statistics = [
  {
    number: "90%",
    sub: "Trust us for their next project",
    label: "01",
  },
  {
    number: "200+",
    sub: "Building quality products is a challenge,  but we've done it over 200 times!",
    label: "02",
  },
  {
    number: "2020",
    sub: "In 4 years,we've built impactful businesses project",
    label: "03",
  },
];

export default function WhoWeAre() {
  return (
    <>
      <section className="py-section">
        <div className="wrapper">
          <div className="lg:mb-16 mb-8 flex flex-col md:flex-row md:justify-between md:items-start">
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0">
              Who We Are
            </h2>
            <p className="max-w-md text-[#3A3A3F] section-description">
              From ideas to impact, we combine human insight with intelligent
              systems to move businesses forward.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block bg-cover bg-center bg-[url('/whoweare.png')] h-[720px] relative">
              <div className="absolute inset-0  z-10" />
            </div>

            <div className="block md:hidden bg-cover bg-center bg-[url('/whoweare.png')] h-[300px]" />

            <div
              className="relative z-20 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:absolute md:bottom-0 md:left-0 md:w-full 
                   md:bg-transparent"
            >
              <div className="flex items-center justify-center"></div>

              <div className="flex flex-col gap-4">
                <span className="text-[#0A0A0B] md:text-white card-title-lg mb-6">
                  Core Values:
                </span>

                <div className="flex flex-col lg:flex-row gap-4 mb-4 ">
                  {coreValues.map((value, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F5F6] md:bg-white/10 backdrop-blur-sm p-4 flex-1 flex flex-col items-center text-[#0A0A0B] md:text-white"
                    >
                      <Image
                        src={value.icon}
                        alt={value.title}
                        className="w-8 h-8 mb-4"
                        width={32}
                        height={32}
                      />
                      <span className="section-description-medium">
                        {value.title}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#about"
                  className="text-[#0A0A0B] md:text-white flex items-center gap-2 font-medium hover:underline"
                >
                  About Us <span className="inline-block">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {statistics.map((stat, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-[#F5F5F6] py-8 px-10 flex flex-col items-start",
                  idx === 2 && "md:col-span-2 lg:col-span-1"
                )}
              >
                <div className="bg-white p-6 rounded-lg flex flex-col w-full h-full">
                  <span className="text-[#82848E] card-title-lg mb-12">
                    {stat.label}
                  </span>
                  <span className="text-[#3A3A3F] card-label mb-3">
                    {stat.number}
                  </span>
                  <span className="card-description text-[#3A3A3F]">
                    {stat.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrapper mt-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-1">
            <div className="bg-[#F5F5F6] py-8 px-10 flex flex-col items-start lg:col-span-5">
              <div className="bg-white p-6 rounded-lg flex flex-col w-full h-full">
                <span className="text-[#82848E] card-title-lg mb-12">04</span>
                <span className="text-[#3A3A3F] card-label mb-3">
                  2 Location
                </span>
                <span className="card-description text-[#3A3A3F]">
                  Vsenk is based in Bangladesh and U.S.A. bringing creativity to
                  both cities!
                </span>
              </div>
            </div>
            <div className="bg-[#F5F5F6] py-8 px-10 flex flex-col items-start  lg:col-span-7">
              <div className="bg-white p-6 rounded-lg flex flex-col w-full h-full">
                <span className="text-[#82848E] card-title-lg mb-12">05</span>
                <span className="text-[#3A3A3F] card-label mb-3">
                  All in One
                </span>
                <span className="card-description text-[#3A3A3F]">
                  You will find complete solutions for all your business needs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
