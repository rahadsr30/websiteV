"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import heroImage from "@/assets/VheroImage.png";
import { Mic, MicOff } from "lucide-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("d1a5f8b2-dff6-44f4-a795-e52647044d20");

export default function Hero() {
  const [isListening, setIsListening] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    // Set up Vapi event listeners
    vapi.on("call-start", () => {
      setIsCallActive(true);
      setIsInitializing(false);
      setIsLoading(false);
      console.log("Call started");
    });

    vapi.on("call-end", () => {
      setIsCallActive(false);
      setIsListening(false);
      setIsLoading(false);
      setIsInitializing(false);
      console.log("Call ended");
    });

    vapi.on("volume-level", (volume) => {
      setVolumeLevel(volume);
    });

    vapi.on("error", (error) => {
      console.error("Vapi error:", error);
      setIsCallActive(false);
      setIsListening(false);
      setIsLoading(false);
      setIsInitializing(false);
    });

    // Cleanup listeners on unmount
    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const handleClick = async () => {
    if (!isCallActive && !isLoading && !isInitializing) {
      try {
        setIsLoading(true);
        setIsListening(true);
        setIsInitializing(true);
        await vapi.start("624e1ef6-c1b4-43ce-8e7c-8f1cd669a17b");
        setIsLoading(false);
        // Don't set isCallActive here, wait for the call-start event
      } catch (error) {
        console.error("Failed to start call:", error);
        setIsListening(false);
        setIsLoading(false);
        setIsInitializing(false);
      }
    } else if (isCallActive) {
      vapi.stop();
      setIsListening(false);
    }
  };

  // Dynamic styles based on volume level
  const glowOpacity = 0.3 + volumeLevel * 0.7;
  const scale = 1 + volumeLevel * 0.1;

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
                  disabled={isLoading}
                  className={`relative w-32 h-32 rounded-full border-2 transition-all duration-200 flex items-center justify-center group ${
                    isCallActive
                      ? "border-red-400 bg-red-50 hover:bg-red-100"
                      : isListening
                      ? "border-blue-400 bg-blue-50 hover:bg-blue-100"
                      : "border-gray-200 bg-white hover:bg-gray-50"
                  } ${
                    isLoading ? "cursor-not-allowed" : "cursor-pointer"
                  } shadow-sm hover:shadow-md`}
                  style={{
                    transform: isCallActive ? `scale(${scale})` : "scale(1)",
                    boxShadow: isCallActive
                      ? `0 0 20px rgba(59, 130, 246, ${glowOpacity})`
                      : undefined,
                  }}
                >
                  <div
                    className={`w-16 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isCallActive
                        ? "bg-red-100"
                        : isListening
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    {isLoading || isInitializing ? (
                      <AiOutlineLoading3Quarters className="w-6 h-6 text-blue-600 animate-spin" />
                    ) : isCallActive ? (
                      <MicOff className="w-6 h-6 text-red-600" />
                    ) : (
                      <Mic
                        className={`w-6 h-6 transition-colors duration-200 ${
                          isListening ? "text-blue-600" : "text-[#3A3A3F]"
                        }`}
                      />
                    )}
                  </div>

                  {/* Animated ring for active call */}
                  {isCallActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
                  )}

                  {/* Loading ring */}
                  {isLoading && (
                    <div className="absolute inset-0 rounded-full border-2 border-t-blue-400 border-r-blue-200 border-b-blue-200 border-l-blue-200 animate-spin opacity-75"></div>
                  )}
                </button>

                <p className="mt-4 text-[#3A3A3F] section-description text-center">
                  {isLoading || isInitializing
                    ? "Connecting..."
                    : isCallActive
                    ? "Speaking with AI"
                    : "Click To Say 'Hello'"}
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
