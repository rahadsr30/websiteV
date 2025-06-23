"use client";
import { MdEmail } from "react-icons/md";
import { Logo } from "./logo";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Facebook", href: "https://www.facebook.com" },
  { name: "Twitter", href: "https://www.twitter.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com" },
  { name: "Dribble", href: "https://www.dribbble.com" },
  { name: "Behance", href: "https://www.behance.net" },
];
const services = [
  { name: "AI Chatbots & Virtual Assistants", href: "/services/ai-chatbots" },
  {
    name: "Robotic Process Automation",
    href: "/services/robotic-process-automation",
  },
  { name: "CRM & Marking Automation", href: "/services/crm-automation" },
  {
    name: "Data & Analytics Automation",
    href: "/services/data-analytics-automation",
  },
  { name: "Custom AI Development", href: "/services/custom-ai-development" },
  { name: "AI Consulting & Strategy", href: "/services/ai-consulting" },
  { name: "SEO", href: "/services/seo" },
  { name: "UI / UX", href: "/services/ui-ux" },
];

const quickLinks = [
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Case Study", href: "/case-study" },
  { name: "Integrations", href: "/integrations" },
  { name: "Platforms", href: "/platforms" },
  { name: "Contact Us", href: "/contact" },
];

const locations = [
  {
    country: "United States",
    address: "Central Florida",
    phone: "+13213153031",
  },
  {
    country: "Bangladesh",
    address: "Banani, Dhaka",
    phone: "+880 1424787534",
  },
];

export function Footer() {
  const [buttonText, setButtonText] = useState("Copy Email");
  const [activeLink, setActiveLink] = useState(links[0].name);

  const handleCopyEmail = () => {
    // You can replace this with your actual email address
    const email = "info@vsenk.com";
    navigator.clipboard.writeText(email).then(
      () => {
        setButtonText("Copied!");
        setTimeout(() => {
          setButtonText("Copy Email");
        }, 2000); // Revert back after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <footer className="bg-[#3A3A3F] text-white pt-10 md:pt-16 lg:pt-24">
      <div className="wrapper">
        <div className=" border border-[#ACADB4]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#ACADB4]">
            <div className="space-y-4 lg:p-10 p-6 border-r border-[#ACADB4]">
              <Logo />
              <p className="text-[#E5E6E8] section-description">
                Vsenk builds AI systems that actually solve problems, so your
                business scales faster.
              </p>
              <div className="space-y-3 mt-10">
                <Link href="tel:+01706745708">
                  <button className="w-full cursor-pointer bg-white text-[#0A0A0B] font-semibold py-3 px-4 rounded-full flex items-center justify-center">
                    Book a Call{" "}
                    <FaPhoneAlt className="ml-10 h-5 w-5 text-[#0A0A0B]" />
                  </button>
                </Link>
                <button
                  onClick={handleCopyEmail}
                  className="w-full mt-4 cursor-pointer bg-[#E5E6E8] text-[#4B4B53] font-semibold py-3 px-4 rounded-full flex items-center justify-center"
                >
                  {buttonText}{" "}
                  <MdEmail className="ml-10 h-5 w-5 text-[#4B4B53]" />
                </button>
              </div>
            </div>
            <div className="lg:p-10 p-6 border-r border-[#ACADB4]">
              <h3 className="text-white section-description-medium mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-[#E5E6E8] hover:text-white small-text"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:p-10 p-6 border-r border-[#ACADB4]">
              <h3 className="text-white section-description-medium mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#E5E6E8] hover:text-white small-text"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:p-10 p-6">
              <h3 className="text-white section-description-medium mb-4">
                Locations
              </h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.country}>
                    <h4 className="small-text-medium text-white ">
                      {location.country}
                    </h4>
                    <p className="text-[#E5E6E8] hover:text-white small-text">
                      {location.address}
                    </p>
                    <p className="text-[#E5E6E8] hover:text-white small-text">
                      {location.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="py-3 border-b border-[#ACADB4]">
            <div className="flex flex-wrap justify-between px-10 gap-x-8 gap-y-2">
              {links.map((link) => (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.name}
                  onClick={() => setActiveLink(link.name)}
                  className={`card-title transition-colors duration-200 ${
                    activeLink === link.name
                      ? "text-white"
                      : "text-[#82848E] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-b border-[#ACADB4]">
            <Link href="/contact" className="cursor-pointer">
              <div className="relative flex overflow-hidden py-4 group">
                <div className="flex animate-[marquee_40s_linear_infinite]">
                  {[...Array(10)].map((_, i) => (
                    <h2
                      key={i}
                      className="text-8xl md:text-9xl font-medium tracking-tighter whitespace-nowrap pr-12"
                    >
                      Get in touch
                    </h2>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center px-10 py-6 text-[#ACADB4] small-text">
            <p>Copyright © 2023. All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
