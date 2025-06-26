import React from "react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-section wrapper">
      <div className="text-center py-10 lg:py-20 px-10 lg:px-0 bg-cover bg-center bg-no-repeat bg-[url('/vcta.png')]">
        <h2 className="section-title text-white mb-6 lg:mb-10 max-w-screen-md mx-auto">
          Interested in learning how Vsenk can help your industry?
        </h2>
        <Button variant="ghost">Get Your Free Strategy Call</Button>
      </div>
    </section>
  );
}
