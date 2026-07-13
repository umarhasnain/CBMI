import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Building2, Heart, Hotel, Factory, Church, Car, Utensils, GraduationCap, ShoppingBag, Home as HomeIcon } from "lucide-react";

const industries = [
  {
    icon: HomeIcon,
    title: "Residential & Multi-Family",
    description: "Apartment complexes and multi-family properties require responsive maintenance that keeps residents satisfied and protects property values over the long term.",
    focus: ["Unit turnovers", "Common area upkeep", "Plumbing systems", "Resident satisfaction"],
  },
  {
    icon: Hotel,
    title: "Hospitality & Entertainment",
    description: "Hotels, resorts, and entertainment venues demand flawless guest experiences. Our white-glove maintenance approach preserves your brand image while ensuring every system operates at peak performance.",
    focus: ["Aesthetic maintenance", "Guest-area priority response", "Seasonal system optimization", "Energy efficiency"],
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    description: "Manufacturing facilities cannot afford downtime. CBMI's heavy-duty maintenance programs keep production lines running with proactive monitoring and rapid-response repair capabilities.",
    focus: ["Uptime maximization", "Heavy-duty HVAC systems", "Industrial electrical", "Safety compliance"],
  },
  {
    icon: Building2,
    title: "Corporate & Office Buildings",
    description: "Office environments require consistent comfort and reliability to maintain tenant satisfaction. Our comprehensive building management services optimize performance and reduce operating costs.",
    focus: ["Tenant satisfaction", "Energy optimization", "Common area maintenance", "Building automation"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & Shopping Centers",
    description: "Retail properties need to maintain an inviting atmosphere for shoppers while managing complex multi-tenant systems efficiently and cost-effectively.",
    focus: ["Multi-tenant coordination", "Storefront maintenance", "Parking lot systems", "Seasonal readiness"],
  },
  {
    icon: Church,
    title: "Religious & Nonprofit",
    description: "Houses of worship and nonprofit facilities need cost-effective maintenance solutions that respect budgets while preserving the integrity of often-historic structures.",
    focus: ["Budget-conscious solutions", "Historic preservation", "Community space maintenance", "Accessibility compliance"],
  },
  {
    icon: Car,
    title: "Automotive & Transportation",
    description: "Dealerships, service centers, and transportation hubs require specialized maintenance for high-traffic facilities with unique ventilation and electrical demands.",
    focus: ["Ventilation systems", "High-traffic flooring", "Specialized electrical", "Safety systems"],
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    description: "Restaurants, commercial kitchens, and food processing facilities demand rigorous maintenance to meet health codes and ensure uninterrupted operations.",
    focus: ["Health code compliance", "Grease trap maintenance", "Commercial kitchen HVAC", "Emergency plumbing"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools, universities, and training facilities require safe, comfortable environments for learning. CBMI provides comprehensive campus maintenance solutions.",
    focus: ["Campus-wide systems", "Safety compliance", "Seasonal preparation", "Budget planning"],
  },
  {
    icon: Heart,
    title: "Healthcare & Medical Facilities",
    description: "Hospitals, clinics, and medical offices require uninterrupted service and strict compliance. CBMI ensures critical systems remain operational 24/7 with guaranteed response times and compliance-driven maintenance protocols.",
    focus: ["HVAC for sterile environments", "Emergency backup systems", "Regulatory compliance", "24/7 monitoring"],
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663742348157/e8DJo5HFieJgCeqhB2Qad6/cbmi-sectors-Z6bpuMYGMJ762k9UCFRMoC.webp"
            alt="Modern commercial building at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.25_0.05_260)]/95 via-[oklch(0.25_0.05_260)]/85 to-[oklch(0.25_0.05_260)]/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Industries We Serve</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Tailored Solutions for Every Sector
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Every industry has unique facility demands. CBMI brings specialized expertise and customized maintenance programs to each sector we serve across Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-8">
            {industries.map((industry, idx) => (
              <div
                key={industry.title}
                className="group grid lg:grid-cols-[1fr_2fr] gap-8 p-8 rounded-lg border border-border/50 hover:border-[oklch(0.65_0.15_70)]/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="flex flex-col">
                  <industry.icon className="w-10 h-10 text-[oklch(0.65_0.15_70)] mb-4" />
                  <h3 className="font-serif text-xl font-bold text-[oklch(0.25_0.05_260)]">
                    {industry.title}
                  </h3>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.focus.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary text-xs font-medium text-[oklch(0.25_0.05_260)] rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.25_0.05_260)]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Industry?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            With over 60 years of experience across every type of commercial property, we can customize a solution for any facility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.65_0.15_70)] text-white font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200 active:scale-[0.97]"
          >
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
