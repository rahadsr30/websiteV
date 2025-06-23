import React from "react";
import plugin1 from "@/assets/plugin/plugin1.png";
import plugin2 from "@/assets/plugin/plugin2.png";
import plugin3 from "@/assets/plugin/plugin3.png";
import plugin4 from "@/assets/plugin/plugin4.png";
import plugin5 from "@/assets/plugin/plugin5.png";
import plugin6 from "@/assets/plugin/plugin6.png";
import Image from "next/image";

const plugins = [plugin1, plugin2, plugin3, plugin4, plugin5, plugin6];

export default function Plugin() {
  return (
    <section className="py-section bg-white">
      <div className="wrapper">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-1 ">
          <div className="flex flex-col justify-center p-10 lg:py-20 lg:px-10 bg-[#F5F5F6]">
            <h2 className="text-[#0A0A0B] section-title-medium mb-4">
              Plug It In. Let It Run.
            </h2>
            <p className="text-[#3A3A3F] section-description">
              Effortlessly integrate with the tools and platforms you already
              use to streamline workflows and maximize productivity.
            </p>
          </div>

          <div className="flex items-center justify-center p-10 lg:py-20 lg:px-10 bg-[#F5F5F6]">
            <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full max-w-md">
              {plugins.map((plugin, index) => (
                <div key={index} className=" flex items-center justify-center">
                  <Image
                    src={plugin}
                    alt={`Plugin ${index + 1}`}
                    width={180}
                    height={90}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
