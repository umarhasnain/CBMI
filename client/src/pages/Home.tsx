import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Shield, Clock, Wrench, Users, Building2, HardHat } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663742348157/e8DJo5HFieJgCeqhB2Qad6/cbmi-hero-GGCSyWEHVfZ6wHmLsJFeaL.webp"
            alt="Los Angeles skyline at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.25_0.05_260)]/90 via-[oklch(0.25_0.05_260)]/70 to-[oklch(0.25_0.05_260)]/40" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[oklch(0.65_0.15_70)]/20 border border-[oklch(0.65_0.15_70)]/40 rounded-full mb-6">
              <span className="w-2 h-2 bg-[oklch(0.65_0.15_70)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[oklch(0.65_0.15_70)]">24/7 Emergency Service Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Southern California's Premier{" "}
              <span className="text-[oklch(0.65_0.15_70)]">Commercial Service</span>{" "}
              Contractor
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              All trades under one roof. Over 60 years of expertise in construction, plumbing, electrical, HVAC, and emergency services for commercial properties across LA and Orange County.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[oklch(0.65_0.15_70)] text-white font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200 active:scale-[0.97]"
              >
                Request a Facility Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:310-297-2737"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 transition-all duration-200"
              >
                Call 310-297-2737
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[oklch(0.25_0.05_260)] py-12 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 60, suffix: "+", label: "Years of Experience" },
              { value: 200, suffix: "+", label: "Employees" },
              { value: 1200, suffix: "+", label: "Clients Served" },
              { value: 6, suffix: "", label: "Trade Licenses" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[oklch(0.65_0.15_70)] font-serif">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Call Does It All */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Why CBMI</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.05_260)] mt-3 mb-6">
                "One Call Does It All"
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                CBMI is one of the largest commercial service contractors in Southern California, providing comprehensive construction and maintenance services across Los Angeles County, Orange County, Riverside, Ventura, and San Diego County.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Wrench, title: "All Trades", desc: "Plumbing, electrical, HVAC, and general construction" },
                  { icon: Clock, title: "24/7 Service", desc: "Emergency response around the clock" },
                  { icon: Shield, title: "6 Licenses", desc: "Fully licensed across all construction trades" },
                  { icon: Users, title: "200+ Team", desc: "Skilled professionals ready to serve" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 rounded-lg bg-secondary/50">
                    <item.icon className="w-5 h-5 text-[oklch(0.65_0.15_70)] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-[oklch(0.25_0.05_260)]">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663742348157/e8DJo5HFieJgCeqhB2Qad6/cbmi-construction-bsrMry9Hv8ZyLtNB7kiHjT.webp"
                alt="CBMI construction team collaborating on site"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-xl border border-border/50 hidden lg:block">
                <div className="text-2xl font-bold text-[oklch(0.65_0.15_70)] font-serif">60+</div>
                <div className="text-sm text-muted-foreground">Years Serving<br />Southern California</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.05_260)] mt-3 mb-4">
              Comprehensive Commercial Services
            </h2>
            <p className="text-muted-foreground">
              From emergency repairs to long-term preventive maintenance contracts, we deliver end-to-end solutions for every commercial property need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HardHat, title: "Tenant Improvement Construction", desc: "Design-build, remodeling, and sustainable construction for commercial tenant improvements and build-outs." },
              { icon: Wrench, title: "Plumbing Systems", desc: "Commercial-grade sump pumps, boiler systems, hydro jetting, and complete plumbing installations." },
              { icon: Building2, title: "Electrical Services", desc: "Diagnostic services, main service replacement, switch gears, transformers, and complete electrical systems." },
              { icon: Shield, title: "HVAC (Heating & Cooling)", desc: "Rooftop RTU systems, split systems, cooling towers, preventive maintenance, and hot water boilers." },
              { icon: Clock, title: "Emergency Services", desc: "24-hour emergency response for board-up, earthquake damage, wildfire resources, and flood recovery." },
              { icon: Users, title: "Preventive Maintenance Contracts", desc: "Customized long-term service agreements to protect your investment and prevent costly breakdowns." },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-white rounded-lg border border-border/50 hover:border-[oklch(0.65_0.15_70)]/30 hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-[oklch(0.65_0.15_70)] mb-4" />
                <h3 className="font-serif text-lg font-semibold text-[oklch(0.25_0.05_260)] mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[oklch(0.65_0.15_70)] font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Workout Specialist */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663742348157/e8DJo5HFieJgCeqhB2Qad6/cbmi-consulting-CMS5RsCNp8yVnkBBrqzNFn.webp"
                alt="Executive consulting on facility management"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Expert Consulting</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.05_260)] mt-3 mb-6">
                The "Workout" Specialist
              </h2>
              <blockquote className="border-l-4 border-[oklch(0.65_0.15_70)] pl-5 my-6 italic text-lg text-muted-foreground">
                "With over 55 years solving the most complicated situations in real estate, construction, and facility management, we don't just maintain buildings — we transform operations."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our leadership brings unparalleled expertise in management psychology, financial services, and complex problem-solving. When standard approaches fail, CBMI's "workout" methodology identifies hidden risks, resolves systemic issues, and creates sustainable operational frameworks.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.25_0.05_260)] text-white font-semibold rounded-sm hover:bg-[oklch(0.30_0.05_260)] transition-all duration-200 active:scale-[0.97]"
              >
                Learn About Our Approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 lg:py-28 bg-[oklch(0.25_0.05_260)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
              Serving Every Sector
            </h2>
            <p className="text-white/70">
              From hospitals to hotels, factories to office towers — we understand the unique demands of each industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Residential & Multi-Family",
              "Hospitality & Entertainment",
              "Industrial & Manufacturing",
              "Corporate & Office",
              "Retail & Shopping",
              "Religious & Nonprofit",
              "Automotive & Transport",
              "Food & Beverage",
              "Education",
              "Healthcare & Medical",
            ].map((industry) => (
              <div
                key={industry}
                className="p-4 bg-white/5 border border-white/10 rounded-lg text-center hover:bg-white/10 hover:border-[oklch(0.65_0.15_70)]/30 transition-all duration-300"
              >
                <span className="text-sm text-white/80 font-medium">{industry}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[oklch(0.65_0.15_70)] font-semibold hover:gap-3 transition-all duration-200"
            >
              Explore Industry Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[oklch(0.25_0.05_260)] to-[oklch(0.30_0.05_260)] p-10 lg:p-16">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663742348157/e8DJo5HFieJgCeqhB2Qad6/cbmi-maintenance-NEfgB2HuYFRJuJkfc5bnMz.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Service Experience?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Schedule a complimentary facility audit and discover how CBMI's comprehensive approach can reduce costs, prevent emergencies, and extend the life of your building systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[oklch(0.65_0.15_70)] text-white font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200 active:scale-[0.97]"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:310-297-2737"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 transition-all duration-200"
                >
                  Call Now: 310-297-2737
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
