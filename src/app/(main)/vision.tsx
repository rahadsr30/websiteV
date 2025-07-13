"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Vision() {
  const [activeTab, setActiveTab] = useState("quote");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("+1");

  // Load Calendly script only when call tab is active
  useEffect(() => {
    if (activeTab === "call") {
      const existingScript = document.querySelector("#calendly-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "calendly-script";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [activeTab]);

  return (
    <section className="py-section">
      <div className="wrapper">
        <h1 className="section-title-medium text-[#0A0A0B] mb-8 lg:mb-16">
          Ready to Share Your Vision?
        </h1>
        <div>
          <div className="flex border-b-4 border-white gap-1">
            <button
              onClick={() => setActiveTab("quote")}
              className={`flex-1 py-4 font-medium text-lg cursor-pointer transition-colors ${
                activeTab === "quote" ? "bg-[#E5E6E8]" : "bg-[#FAFAFA]"
              }`}
            >
              Request a Quote
            </button>
            <button
              onClick={() => setActiveTab("call")}
              className={`flex-1 py-4 font-medium text-lg cursor-pointer transition-colors ${
                activeTab === "call" ? "bg-[#E5E6E8]" : "bg-[#FAFAFA]"
              }`}
            >
              Book a Call
            </button>
          </div>

          {activeTab === "quote" && (
            <form className="bg-[#F5F5F6]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column */}
                <div className="flex-1 border-r-4 border-white">
                  <div className="py-6 px-10 border-b-4 border-white">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full outline-none text-[#82848E] section-description"
                    />
                  </div>
                  <div className="py-6 px-10 border-b-4 border-white">
                    <div className="phone-input-container">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        defaultCountry="US"
                        displayInitialValueAsLocalNumber={false}
                        countryCallingCodeEditable={false}
                        international
                        withCountryCallingCode
                        className="w-full outline-none text-[#82848E] section-description"
                      />
                    </div>
                  </div>
                  <div className="py-6 px-10 border-b-4 border-white">
                    <select className="w-full outline-none text-[#82848E] section-description">
                      <option>Service Required</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>UI/UX Design</option>
                      <option>E-commerce Solutions</option>
                      <option>Custom Software Development</option>
                      <option>Digital Marketing</option>
                      <option>Consulting Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                {/* Right Column */}
                <div className="flex-1">
                  <div className="py-6 px-10 border-b-4 border-white">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full outline-none text-[#82848E] section-description"
                    />
                  </div>
                  <div className="py-6 px-10 border-b-4 border-white">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full outline-none text-[#82848E] section-description"
                    />
                  </div>
                  <div className="py-6 px-10 border-b-4 border-white">
                    <select className="w-full outline-none text-[#82848E] section-description">
                      <option>Project Budget</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="w-full py-6 px-10 border-b-4 border-white">
                <textarea
                  rows={4}
                  placeholder="Project details"
                  className="w-full outline-none text-[#82848E] section-description"
                />
              </div>

              <div className="w-full flex justify-between flex-col lg:flex-row items-center p-6">
                <span className="section-description text-[#82848E]">
                  By sending this form I confirm that I<br />
                  have read and accept the{" "}
                  <a
                    href="#"
                    className="text-[#3A3A3F] section-description-medium"
                  >
                    Privacy Policy
                  </a>
                </span>
                <Button type="submit" className="w-full lg:w-auto mt-6 lg:mt-0">
                  Send Inquiry
                </Button>
              </div>
            </form>
          )}

          {activeTab === "call" && (
            <div className="bg-[#F5F5F6] p-6">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/vsenk/discovery-call"
                style={{ minWidth: "320px", height: "630px", width: "100%" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
