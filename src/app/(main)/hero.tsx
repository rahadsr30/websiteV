import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/VheroImage.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Hero() {
  return (
    <section className="pb-0 lg:pb-16">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col col-span-1 lg:col-span-7">
          <div className="bg-[#F9F9F9] px-5 lg:px-10 py-8 lg:pt-16 lg:pb-36 border-b-4 border-white">
            <h1 className="text-[#0A0A0B] section-title">
              AI That Does the Work
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-9">
              <div className="bg-[#F9F9F9] px-5 lg:px-10 py-6 lg:py-16">
                <p className="text-[#3A3A3F] section-description">
                  You don’t need more tools. You need fewer problems. Vsenk
                  builds AI systems that actually solve problems, so your team
                  works smarter, and your business scales faster.
                </p>
              </div>

              <div className="border-t-4 border-white bg-[#F9F9F9] px-5 lg:px-10 py-6 lg:py-16">
                <Button>Get Your Free Strategy Call</Button>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 bg-[#F9F9F9] py-6 lg:pb-16 px-5 lg:px-6 border-t-4 lg:border-t-0 lg:border-l-4 border-white flex flex-col justify-end">
              <button className="text-start flex items-center gap-1 hover:underline cursor-pointer">
                <span className="lg:max-w-[120px] text-[#3A3A3F] small-text-medium ">
                  See What We Build
                </span>
                <IoIosArrowRoundForward className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative col-span-1 lg:col-span-5 min-h-[500px] lg:min-h-0">
          <Image src={heroImage} alt="hero" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
