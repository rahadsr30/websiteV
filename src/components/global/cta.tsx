import React from "react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-section wrapper">
      <div className="text-center py-20  bg-[#096467]">
        <h2 className="section-title text-white mb-6 lg:mb-10">
          Interested in learning how Vsenk
          <br />
          can help your industry?
        </h2>
        <Button variant="ghost">Get Your Free Strategy Call</Button>
      </div>
    </section>
  );
}
