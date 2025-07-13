"use client";
import { Button } from "@/components/ui";
import { useState, useEffect } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { HiMicrophone } from "react-icons/hi";
import { MdCallEnd } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
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

  const handleMicClick = async () => {
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
    <header className="relative py-section bg-[url('/vsnekHero.png')] bg-cover bg-center">
      <div className="wrapper justify-between relative mb-10 lg:mb-20 flex flex-col lg:flex-row items-center text-center">
        <div className="flex flex-col items-start text-start">
          <h1 className="text-title uppercase font-workSans bg-gradient-to-r from-[#FFFFFF] via-[#6B6B6B] to-[#FFFFFF] bg-clip-text text-transparent mb-5">
            What If
            <span className="mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
                fill="none"
                className="inline size-7 md:size-10 lg:size-14"
              >
                <path
                  d="M60 29.98c-.103-4.85-4.058-6.778-13.839-5.544-1.735.218-3.561.616-5.375 1.063 1.6-.956 3.168-1.953 4.546-3.024 7.788-6.043 9.224-10.2 5.863-13.703-3.504-3.356-7.664-1.92-13.703 5.867-1.071 1.383-2.08 2.95-3.044 4.546.455-1.801.857-3.615 1.074-5.346C36.757 4.062 34.83.103 29.98 0c-4.85.103-6.778 4.058-5.544 13.839.218 1.735.616 3.557 1.063 5.37-.956-1.596-1.953-3.163-3.024-4.541-6.043-7.788-10.2-9.224-13.703-5.863-3.356 3.504-1.92 7.664 5.867 13.703 1.383 1.071 2.95 2.08 4.546 3.044-1.801-.455-3.615-.857-5.346-1.074C4.062 23.243.103 25.17 0 30.02c.103 4.85 4.058 6.778 13.835 5.543 1.735-.217 3.561-.615 5.374-1.062-1.6.956-3.167 1.953-4.545 3.024-7.788 6.043-9.224 10.2-5.863 13.703 3.503 3.356 7.664 1.92 13.703-5.867 1.07-1.383 2.08-2.95 3.044-4.546-.455 1.801-.857 3.615-.857 5.346-1.074 9.777.693 13.736 5.542 13.839 4.85-.103 6.778-4.058 5.543-13.839-.217-1.735-.615-3.557-1.062-5.37.956 1.596 1.953 3.163 3.023 4.545 6.044 7.788 10.2 9.224 13.704 5.863 3.356-3.503 1.92-7.664-5.867-13.703-1.383-1.071-2.95-2.08-4.546-3.044 1.801.455 3.615.857 5.346 1.075 9.777 1.234 13.736-.694 13.839-5.543l.004-.005z"
                  fill="url(#paint0_linear_15559_7324)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_15559_7324"
                    x1={14}
                    y1={60}
                    x2={59.8776}
                    y2={8.39117}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#265201" />
                    <stop offset={1} stopColor="#BDFE6D" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            Your Business <br /> Could Run Itself?
          </h1>

          <p className="text-[#CECECE] text-hero mb-7 lg:mb-10 bg-[#0A1103] border border-[#bdfe6d1a] rounded-xl p-6 max-w-screen-sm">
            Transform customer interactions with our advanced AI voice
            agent—seamless, intelligent, and available 24/7. Automate responses,
            handle inquiries, and boost efficiency effortlessly.
          </p>

          <Button asChild>
            <Link href="/contact">
              Book a Meeting
              <BsArrowRightSquareFill className="text-[#050B00]" />
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-7 lg:mt-0 flex flex-col items-center"
        >
          {/* Main Mic Button */}
          <motion.button
            onClick={handleMicClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={
              isCallActive
                ? {
                    scale: [scale, scale + 0.05, scale],
                  }
                : {
                    scale: [1, 1.05, 1],
                  }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative size-[100px] sm:size-[150px] md:size-[200px] lg:size-[280px] rounded-full bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 p-[2px] cursor-pointer transition-all"
            disabled={isLoading}
          >
            {/* Loading Ring */}
            {isLoading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-t-white/20 border-r-white/20 border-b-white/20 border-l-white"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            )}

            {/* Soft Glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 blur-md"
              animate={{
                opacity: isCallActive
                  ? [glowOpacity, glowOpacity + 0.3, glowOpacity]
                  : [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Inner Circle */}
            <div className="h-full w-full rounded-full bg-black/90 flex items-center justify-center">
              {isLoading || isInitializing ? (
                <AiOutlineLoading3Quarters className="text-white/80 size-6 sm:size-7 md:size-8 lg:size-10 animate-spin" />
              ) : isCallActive ? (
                <MdCallEnd className="text-white/80 size-6 sm:size-7 md:size-8 lg:size-10" />
              ) : (
                <HiMicrophone className="text-white/80 size-6 sm:size-7 md:size-8 lg:size-10" />
              )}
            </div>
          </motion.button>

          {/* Status Text */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[#BDFE6D] text-xl lg:text-3xl font-bold font-workSans uppercase mt-3 sm:mt-4 md:mt-6 whitespace-nowrap text-center"
          >
            {isLoading || isInitializing
              ? "Connecting..."
              : isCallActive
              ? "Speaking with Ariana"
              : 'Click To Say "Hi" To Ariana!'}
          </motion.h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden bg-[#0A0F06] py-4 border-y-2 border-[#29331d1a]">
        <div className="flex gap-20 lg:gap-40 whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-20 lg:gap-40 text-[#B2FF59] text-heading"
            >
              <span className="flex items-center gap-4">
                <span className="text-white px-2">
                  <FaHeadphones />
                </span>
                AI CONSULTANCY
              </span>
              <span className="flex items-center gap-4 uppercase">
                <span className="text-white px-2">
                  <LuSettings />
                </span>
                AI Audit
              </span>
              <span className="flex items-center gap-4 uppercase">
                <span className="text-white px-2">
                  <FaCode />
                </span>
                AI Development
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 60s linear infinite;
          width: max-content;
        }
      `}</style>
    </header>
  );
}
