"use client";
import React, { useState, useEffect } from "react";
import blogImage1 from "@/assets/blog/blog1.png";
import blogImage2 from "@/assets/blog/blog2.png";
import blogImage3 from "@/assets/blog/blog3.png";
import avater1 from "@/assets/blog/bavater1.png";
import avater2 from "@/assets/blog/bavater2.png";
import avater3 from "@/assets/blog/bavater3.png";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const testimonials = [
  {
    image: blogImage1,
    avatar: avater1,
    name: "Michael Johnson",
    title: "Lead Developer, Web Solutions Ltd.",
    text: "Partnering with Vsenk has automated over 40% of our customer support tasks — with better user satisfaction than ever.",
    hasPlay: false,
  },
  {
    image: blogImage2,
    avatar: avater2,
    name: "Rokibul Hasan Rahat",
    title: "Product Manager, Tech Innovations Inc.",
    text: "Partnering with Vsenk has automated over 40% of our customer support tasks — with better user satisfaction than ever.",
    hasPlay: true,
  },
  {
    image: blogImage3,
    avatar: avater3,
    name: "David Chen",
    title: "Marketing Director, FreshCart USA",
    text: "Partnering with Vsenk has automated over 40% of our customer support tasks — with better user satisfaction than ever.",
    hasPlay: true,
  },
  {
    image: blogImage1,
    avatar: avater2,
    name: "Rahah Ahmed",
    title: "Product Manager, Tech Innovations Inc.",
    text: "Partnering with Vsenk has automated over 40% of our customer support tasks — with better user satisfaction than ever.",
    hasPlay: true,
  },
  {
    image: blogImage3,
    avatar: avater3,
    name: "David Chen",
    title: "Marketing Director, FreshCart USA",
    text: "Partnering with Vsenk has automated over 40% of our customer support tasks — with better user satisfaction than ever.",
    hasPlay: true,
  },
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - cardsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        const maxIndex = testimonials.length - cardsPerView;
        return maxIndex > 0 ? maxIndex : 0;
      }
      return prevIndex - 1;
    });
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="py-section bg-white">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between items-start mb-8 lg:mb-16">
          <div>
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0">
              Business Owners
              <br />
              Feels the Magic
            </h2>
          </div>
          <div className="max-w-md text-[#3A3A3F] section-description">
            Hear how businesses like yours are scaling faster and smarter with
            our AI automation solutions.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, i) => (
            <div
              key={currentIndex + i}
              className="bg-[#F5F5F6] p-6 flex flex-col"
            >
              <div className={`mb-4${t.hasPlay ? " relative" : ""}`}>
                <Image
                  src={t.image}
                  alt={t.name}
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-[#3A3A3F] card-title mt-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center mt-10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mr-3"
                />
                <div>
                  <div className="font-[#0A0A0B] section-description-medium mb-2">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#3A3A3F">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8 lg:mt-10">
          <button
            onClick={prevSlide}
            className="card-title text-[#3A3A3F] hover:text-black transition-colors"
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            onClick={nextSlide}
            className="card-title text-[#3A3A3F] hover:text-black transition-colors"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
}
