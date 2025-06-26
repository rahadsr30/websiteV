import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import healthcareImage from "@/assets/industry/Healthcare.png";
import financeImage from "@/assets/industry/Finance.png";
import ecommerceImage from "@/assets/industry/E-Commerce.png";
import educationImage from "@/assets/industry/Education.png";
import manufacturingImage from "@/assets/industry/Manufacturing.png";
import technologyImage from "@/assets/industry/Technology.png";

const industries = {
  healthcare: {
    title: "Healthcare",
    description:
      "Cut the red tape. Automate admin tasks, improve patient flow, and stay compliant, without overloading your team.",
    image: healthcareImage,
    features: [
      "Automated patient scheduling and registration",
      "AI-powered diagnostic assistance",
      "Electronic health record optimization",
      "Compliance monitoring and reporting",
      "Predictive analytics for patient outcomes",
    ],
    benefits: [
      "Reduce administrative overhead by 40%",
      "Improve patient satisfaction scores",
      "Ensure regulatory compliance",
      "Enhance clinical decision-making",
    ],
  },
  finance: {
    title: "Finance",
    description:
      "Speed up decisions. Catch fraud sooner. Free up your analysts from copy-paste work that slows you down.",
    image: financeImage,
    features: [
      "Real-time fraud detection",
      "Automated risk assessment",
      "Intelligent document processing",
      "Regulatory compliance automation",
      "Market trend analysis",
    ],
    benefits: [
      "Detect fraud 50% faster",
      "Reduce manual processing time",
      "Improve risk management",
      "Accelerate loan approvals",
    ],
  },
  "retail-ecommerce": {
    title: "Retail & E-Commerce",
    description:
      "Predict demand. Personalize in real-time. Let smart assistants handle the 3 a.m. questions so you don&apos;t have to.",
    image: ecommerceImage,
    features: [
      "Dynamic pricing optimization",
      "Personalized product recommendations",
      "Inventory management automation",
      "24/7 AI customer support",
      "Demand forecasting",
    ],
    benefits: [
      "Increase conversion rates by 25%",
      "Reduce inventory costs",
      "Improve customer satisfaction",
      "Optimize pricing strategies",
    ],
  },
  education: {
    title: "Education",
    description:
      "Deliver personalized learning, automate administrative tasks, and engage students through AI-powered tools.",
    image: educationImage,
    features: [
      "Adaptive learning platforms",
      "Automated grading systems",
      "Student performance analytics",
      "Personalized curriculum planning",
      "Virtual teaching assistants",
    ],
    benefits: [
      "Improve student engagement",
      "Reduce teacher workload",
      "Enhance learning outcomes",
      "Personalize education at scale",
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    description:
      "Streamline production, monitor quality, and predict maintenance issues before they happen — all powered by AI.",
    image: manufacturingImage,
    features: [
      "Predictive maintenance systems",
      "Quality control automation",
      "Production optimization",
      "Supply chain management",
      "Equipment monitoring",
    ],
    benefits: [
      "Reduce downtime by 30%",
      "Improve product quality",
      "Optimize production efficiency",
      "Lower maintenance costs",
    ],
  },
  "technology-software": {
    title: "Technology & Software",
    description:
      "Accelerate innovation with scalable AI features, user behavior analytics, and intelligent automation baked in.",
    image: technologyImage,
    features: [
      "Automated code generation",
      "User behavior analytics",
      "Performance optimization",
      "Bug detection and resolution",
      "Scalable AI infrastructure",
    ],
    benefits: [
      "Accelerate development cycles",
      "Improve software quality",
      "Enhance user experience",
      "Scale efficiently",
    ],
  },
};

interface IndustryDetailPageProps {
  params: {
    slug: string;
  };
}

export default function IndustryDetailPage({
  params,
}: IndustryDetailPageProps) {
  const industry = industries[params.slug as keyof typeof industries];

  if (!industry) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pb-section pt-8 lg:pt-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <h1 className="text-[#0A0A0B] section-title mb-4 lg:mb-6">
              AI Solutions for {industry.title}
            </h1>
            <p className="text-[#3A3A3F] section-description mb-6">
              {industry.description}
            </p>
            <Button className="mt-6 lg:mt-10">Get Started Today</Button>
          </div>
          <div>
            <Image
              src={industry.image}
              alt={industry.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section bg-gray-50">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A0A0B] mb-4">
              Key Features
            </h2>
            <p className="text-[#3A3A3F] text-lg max-w-2xl mx-auto">
              Discover how our AI solutions can transform your{" "}
              {industry.title.toLowerCase()} operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0B] mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A0A0B] mb-4">
              Business Benefits
            </h2>
            <p className="text-[#3A3A3F] text-lg max-w-2xl mx-auto">
              See the measurable impact of AI on your{" "}
              {industry.title.toLowerCase()} business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industry.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[#3A3A3F] text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-[#0A0A0B]">
        <div className="wrapper text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your {industry.title} Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI solutions can help you achieve your
            goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#0A0A0B] hover:bg-gray-100">
              Schedule a Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A0A0B]"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Generate static params for all industry pages
export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}
