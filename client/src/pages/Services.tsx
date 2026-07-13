import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "construction",
    title: "Tenant Improvement Construction",
    description: "Specialized tenant improvement services including design-build, remodeling, and build-outs for commercial spaces — from offices to retail to restaurants.",
    items: [
      "Tenant Build-Outs",
      "Pre-Construction Services",
      "Design-Build Services",
      "Project Management",
      "Remodeling and Renovation",
      "Sustainable Construction",
      "Demolition",
      "Emergency Earthquake & Wildfire Resources",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing",
    description: "Complete commercial plumbing solutions from leak repair to full system installations, including complex piping systems and maintenance contracts.",
    items: [
      "Water Leak Detection & Repair",
      "Sewer & Storm Stoppages",
      "Commercial Sump & Sewage Pump Maintenance",
      "Hot Water Boiler System Repairs & Replacement",
      "Water, Sewer, Storm Piping Replacement",
      "Hydro Water Jetting",
      "Complete Plumbing System Installation",
      "Maintenance Contracts",
    ],
  },
  {
    id: "electrical",
    title: "Electrical",
    description: "Comprehensive electrical services from diagnostic analysis to complete system installations for commercial and industrial properties.",
    items: [
      "Electrical Wiring Diagnostic Services",
      "Switches, Plugs, Light Fixture Replacement",
      "Main Service & Breaker Replacement",
      "Switch Gears and Transformers",
      "Power Issue Analysis (Supply to Usage)",
      "Generator Organization for Power Shutdowns",
      "Main Gear Replacement",
      "Complete Electrical System Installation",
    ],
  },
  {
    id: "hvac",
    title: "HVAC (Heating & Cooling)",
    description: "Full-spectrum HVAC services including rooftop units, split systems, cooling towers, and preventive maintenance programs.",
    items: [
      "Roof Top RTU Heating/Cooling Systems",
      "Split System Heating & Cooling",
      "Troubleshooting & Diagnostics",
      "Preventive Maintenance Programs",
      "Cooling Tower Maintenance & Repairs",
      "Hot Water Heating Boiler Services",
      "Mini Split Systems for IT Rooms",
      "Filter, Coil Cleaning, Belt & Pulley Maintenance",
    ],
  },
  {
    id: "energy",
    title: "Energy & Lighting",
    description: "Energy-efficient solutions that reduce consumption and costs while improving the quality of your commercial lighting systems.",
    items: [
      "Energy-Efficient Lighting Installation",
      "LED Lighting Upgrades",
      "Comprehensive Energy Audits",
      "Lighting Repair & Maintenance",
      "Cost Reduction Optimization",
      "Green Building Compliance",
    ],
  },
  {
    id: "emergency",
    title: "24/7 Emergency Services",
    description: "Round-the-clock emergency response for all types of commercial property emergencies, from natural disasters to system failures.",
    items: [
      "Board-Up Services",
      "Earthquake Damage Response",
      "Wildfire Resources & Recovery",
      "Flood & Water Damage",
      "Emergency Structural Assessment",
      "After-Hours Emergency Repairs",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[oklch(0.25_0.05_260)]">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              All Trades Under One Roof
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              From emergency repairs to long-term preventive maintenance contracts, CBMI delivers end-to-end solutions for every commercial property need across Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Service Contract Tiers */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Service Contracts</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.05_260)] mt-3 mb-4">
              Long-Term Maintenance Agreements
            </h2>
            <p className="text-muted-foreground">
              Protect your investment with a customized preventive maintenance contract. Choose the level of coverage that fits your facility's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Essential",
                price: "Custom",
                description: "Foundational preventive maintenance for cost-conscious facilities.",
                features: [
                  "Quarterly HVAC filter changes",
                  "Annual plumbing inspections",
                  "Priority emergency scheduling",
                  "Dedicated account contact",
                  "Digital maintenance reports",
                ],
                highlight: false,
              },
              {
                tier: "Comprehensive",
                price: "Custom",
                description: "Full-coverage maintenance for facilities that demand reliability.",
                features: [
                  "All Essential features included",
                  "Bi-annual comprehensive system audits",
                  "Discounted hourly repair rates",
                  "Dedicated account manager",
                  "Jobber client portal access",
                  "Monthly performance reports",
                ],
                highlight: true,
              },
              {
                tier: "Premium",
                price: "Custom",
                description: "All-inclusive coverage for mission-critical facilities.",
                features: [
                  "All Comprehensive features included",
                  "24/7 monitoring & response",
                  "Parts and labor included",
                  "Guaranteed response times",
                  "Annual facility optimization review",
                  "Executive quarterly briefings",
                ],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`relative p-8 rounded-lg border ${
                  plan.highlight
                    ? "border-[oklch(0.65_0.15_70)] bg-white shadow-xl scale-[1.02]"
                    : "border-border bg-white"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[oklch(0.65_0.15_70)] text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-xl font-bold text-[oklch(0.25_0.05_260)]">{plan.tier}</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.15_70)] mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-sm font-semibold text-sm transition-all duration-200 active:scale-[0.97] ${
                    plan.highlight
                      ? "bg-[oklch(0.65_0.15_70)] text-white hover:bg-[oklch(0.60_0.15_70)]"
                      : "bg-[oklch(0.25_0.05_260)] text-white hover:bg-[oklch(0.30_0.05_260)]"
                  }`}
                >
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[oklch(0.25_0.05_260)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.15_70)] mt-0.5 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-secondary/50 rounded-lg p-8 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-6xl font-serif font-bold text-[oklch(0.65_0.15_70)]/20 mb-4">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-semibold text-[oklch(0.25_0.05_260)] mb-2">Why Choose CBMI?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With six construction trade licenses and over 60 years of combined experience, our team delivers precision, reliability, and cost-effective solutions for every project scope.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.25_0.05_260)]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Service Solution?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Every facility is unique. Let us design a maintenance program tailored to your specific needs and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.65_0.15_70)] text-white font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200 active:scale-[0.97]"
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
