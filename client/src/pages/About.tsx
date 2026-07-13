import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Award, Target, Users, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[oklch(0.25_0.05_260)]">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">About CBMI</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              60+ Years of Excellence in Commercial Services
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Founded by industry veterans with a combined legacy spanning over six decades, CBMI has delivered hundreds of millions of dollars in completed projects across Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[oklch(0.25_0.05_260)] mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CBMI is a premier, full-service construction and maintenance organization specializing in Plumbing, Fire Protection, Electrical, HVAC, and General Construction services. With over 60 years of expertise in new construction, maintenance, and remodeling, CBMI holds six construction trade licenses, equipping us to manage a broad range of commercial construction and service projects with precision and efficiency.
                </p>
                <p>
                  Founded by industry veterans Isaac Zaharoni and Edward Hutcherson, CBMI brings over 60 years of combined experience across diverse construction trades. The leadership team has managed more than 200 employees and successfully executed projects spanning from multi-family housing developments to expansive industrial parks.
                </p>
                <p>
                  Over the last three decades, CBMI has delivered hundreds of millions of dollars in completed projects, earning a reputation for excellence and reliability throughout Southern California.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663742348157/e8DJo5HFieJgCeqhB2Qad6/cbmi-consulting-CMS5RsCNp8yVnkBBrqzNFn.webp"
                alt="CBMI leadership consulting"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Workout Methodology */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Our Methodology</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.05_260)] mt-3 mb-6">
              The "Workout" Approach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Drawing on over 55 years of experience in real estate, construction, financial services, and management psychology, our leadership specializes in "workouts" — solving the most complicated situations that other firms cannot resolve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Diagnose",
                desc: "We identify the root causes of facility failures, operational inefficiencies, and systemic risks that others overlook.",
              },
              {
                icon: Shield,
                title: "Stabilize",
                desc: "Immediate interventions to stop bleeding — emergency repairs, risk mitigation, and operational continuity measures.",
              },
              {
                icon: Users,
                title: "Restructure",
                desc: "Redesigning maintenance operations, vendor relationships, and service workflows for long-term sustainability.",
              },
              {
                icon: Award,
                title: "Optimize",
                desc: "Implementing preventive programs, cost controls, and performance metrics that drive continuous improvement.",
              },
            ].map((step) => (
              <div key={step.title} className="p-6 bg-white rounded-lg border border-border/50 text-center">
                <step.icon className="w-10 h-10 text-[oklch(0.65_0.15_70)] mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-[oklch(0.25_0.05_260)] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[oklch(0.25_0.05_260)] mb-6 text-center">Mission Statement</h2>
            <blockquote className="border-l-4 border-[oklch(0.65_0.15_70)] pl-6 text-lg text-muted-foreground italic leading-relaxed">
              At CBMI, our mission is to deliver exceptional commercial construction services with a focus on Plumbing, Electrical, HVAC and specialized services. We are committed to providing expert craftsmanship, innovative solutions, and efficient project management to meet the unique needs of every client. Our goal is to exceed expectations by creating sustainable, functional, and high-quality spaces that drive success for businesses.
            </blockquote>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With a dedication to safety, professionalism, and integrity, we strive to build lasting partnerships and establish ourselves as a trusted leader in the commercial construction and specialized service industries.
            </p>
          </div>
        </div>
      </section>

      {/* Notable Clients */}
      <section className="py-20 bg-[oklch(0.25_0.05_260)]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Trusted Partners</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">Trusted by Over 1,200 Clients</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              CBMI has had the privilege of partnering with some of Southern California's most prominent corporations and developers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Casden Properties",
              "Coca-Cola",
              "TRW Systems",
              "Lenmar Investments",
              "Prestige Homes",
              "Braemar Construction",
              "Cal Star Equities",
              "CPC Management",
              "Meyer Management",
              "And Many More",
            ].map((client) => (
              <div
                key={client}
                className="p-4 bg-white/5 border border-white/10 rounded-lg text-center"
              >
                <span className="text-sm text-white/80 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-[oklch(0.25_0.05_260)] mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let us bring our decades of expertise to your next construction or maintenance project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.65_0.15_70)] text-white font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200 active:scale-[0.97]"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
