"use client";
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget size-full"
      data-url={url}
      style={{ minWidth: "500px", height: "700px" }}
    ></div>
  );
};

export default CalendlyEmbed;
