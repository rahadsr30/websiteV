"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import heroImage from "@/assets/VheroImage.png";
import { Mic } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isListening, setIsListening] = useState(false);

  const handleClick = () => {
    setIsListening(!isListening);
  };

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
                  You don&apos;t need more tools. You need fewer problems. Vsenk
                  builds AI systems that actually solve problems, so your team
                  works smarter, and your business scales faster.
                </p>
              </div>

              <div className="border-t-4 border-white bg-[#F9F9F9] px-5 lg:px-10 py-6 lg:py-16">
                <Button asChild>
                  <Link href="/contact">Get Your Free Strategy Call</Link>
                </Button>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 bg-[#F9F9F9] py-6 lg:pb-16 px-5 lg:px-6 border-t-4 lg:border-t-0 lg:border-l-4 border-white flex flex-col justify-end">
              <div className="flex flex-col items-center">
                <button
                  onClick={handleClick}
                  className={`relative w-32 h-32 rounded-full border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center group ${
                    isListening ? "border-blue-400 bg-blue-50" : ""
                  }`}
                >
                  <div
                    className={`w-16 h-10 rounded-lg bg-gray-100 flex items-center justify-center transition-colors duration-200 ${
                      isListening ? "bg-blue-100" : "group-hover:bg-gray-200"
                    }`}
                  >
                    <Mic
                      className={`w-6 h-6 transition-colors duration-200 ${
                        isListening ? "text-blue-600" : "text-[#3A3A3F]"
                      }`}
                    />
                  </div>

                  {isListening && (
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
                  )}
                </button>

                <p className="mt-4 text-[#3A3A3F] section-description text-center">
                  {isListening ? "Listening..." : "Click To Say 'Hello'"}
                </p>
              </div>
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
