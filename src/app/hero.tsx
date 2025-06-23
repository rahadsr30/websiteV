import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/VheroImage.png";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col col-span-1 lg:col-span-7">
          <div className="bg-[#F9F9F9] px-8 py-10 lg:pt-16 lg:pb-36 border-b-4 border-white">
            <h1 className="text-[#0A0A0B] section-title">
              We are an AI Automation Development Agency That Does the Work
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-9">
              <div className="bg-[#F9F9F9] px-10 py-8 lg:py-16">
                <p className="text-[#3A3A3F] section-description">
                  You don&apos;t need more tools. You need fewer problems. Vsenk
                  builds AI systems that actually solve problems, so your team
                  works smarter, and your business scales faster.
                </p>
              </div>

              <div className="border-t-4 border-white bg-[#F9F9F9] px-10 py-8 lg:py-16">
                <Button>Get Your Free Strategy Call</Button>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 bg-[#F9F9F9] py-8 lg:pb-16 px-6 border-t-4 lg:border-t-0 lg:border-l-4 border-white flex flex-col justify-end">
              <button className="text-start flex items-center gap-1 hover:underline cursor-pointer">
                <span className="lg:max-w-[120px] text-[#3A3A3F] section-description-semi">
                  See What We Build
                </span>
                <FaLongArrowAltRight className="text-2xl" />
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
