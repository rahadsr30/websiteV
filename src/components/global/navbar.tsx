"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

const navLinks = [
  {
    href: "/industries",
    label: "Industries",
    dropdown: true,
    dropdownItems: [
      { href: "/industries/education", label: "Education" },
      { href: "/industries/finance", label: "Finance" },
      { href: "/industries/healthcare", label: "Healthcare" },
      { href: "/industries/manufacturing", label: "Manufacturing" },
      { href: "/industries/retail-ecommerce", label: "Retail & E-commerce" },
      {
        href: "/industries/technology-software",
        label: "Technology & Software",
      },
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
    dropdown: true,
    dropdownItems: [
      {
        href: "/solutions/ai-consulting-strategy",
        label: "AI Consulting & Strategy",
      },
      { href: "/solutions/ai-ml-development", label: "AI/ML Development" },
      {
        href: "/solutions/chatbots-virtual-assistants",
        label: "Chatbots & Virtual Assistants",
      },
      {
        href: "/solutions/crm-marketing-automation",
        label: "CRM & Marketing Automation",
      },
    ],
  },
  {
    href: "/platforms",
    label: "Platforms & Integrations",
    dropdown: true,
    dropdownItems: [
      { href: "/platforms/voiceflow", label: "Voiceflow" },
      { href: "/platforms/chatbot", label: "Chatbot" },
      { href: "/platforms/make", label: "Make" },
      { href: "/platforms/vapi", label: "Vapi" },
      { href: "/platforms/n8n", label: "N8N" },
      { href: "/platforms/shopify", label: "Shopify AI" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  {
    href: "/more",
    label: "More",
    dropdown: true,
    dropdownItems: [
      { href: "/contact", label: "Contact" },
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="w-full bg-white">
      <nav className="wrapper py-6 flex items-center justify-between border-b border-[#ACADB4]">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Vsenk Logo" width={120} height={48} />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(link.label)}
                    className="text-[#3A3A3F] hover:text-black regular-text flex items-center focus:outline-none"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="py-2">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeDropdown}
                            className="block px-4 py-2 text-[#3A3A3F] hover:bg-gray-50 hover:text-black transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-[#3A3A3F] hover:text-black regular-text"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Button>Get Your Free Strategy Call</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setOpenDropdown(null); // Close any open dropdowns when toggling mobile menu
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <div key={link.label} className="mb-2">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(link.label)}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-black"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div className="pl-4 mt-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            closeDropdown();
                            setIsOpen(false);
                          }}
                          className="block py-2 text-gray-500 hover:text-black"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-600 hover:text-black"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="items-center w-full mt-4">
            <Button className="w-full">Get Your Free Strategy Call</Button>
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside - desktop only */}
      {openDropdown && !isOpen && (
        <div className="fixed inset-0 z-40" onClick={closeDropdown} />
      )}
    </header>
  );
}
