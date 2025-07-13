import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function ContactPage() {
  return (
    <section className="py-section">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between items-start mb-8 lg:mb-16">
          <div>
            <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0">
              Get In Touch
            </h2>
          </div>
          <div className="max-w-md text-[#3A3A3F] section-description">
            Schedule a discovery call to discuss your project needs and explore
            how we can help bring your vision to life.
          </div>
        </div>

        {/*  */}
        <CalendlyEmbed url="https://calendly.com/vsenk/discovery-call" />
      </div>
    </section>
  );
}
