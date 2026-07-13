import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", company: "", industry: "", serviceType: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[oklch(0.25_0.05_260)]">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[oklch(0.65_0.15_70)] uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Let's Discuss Your Facility Needs
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Whether you need emergency service, a facility audit, or a long-term maintenance contract, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[oklch(0.25_0.05_260)] mb-6">
                Request a Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.15_70)]/50 focus:border-[oklch(0.65_0.15_70)] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.15_70)]/50 focus:border-[oklch(0.65_0.15_70)] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.15_70)]/50 focus:border-[oklch(0.65_0.15_70)] transition-colors"
                      placeholder="(310) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.15_70)]/50 focus:border-[oklch(0.65_0.15_70)] transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.15_70)]/50 focus:border-[oklch(0.65_0.15_70)] transition-colors"
                    >
                      <option value="">Select your industry</option>
                      <option value="healthcare">Healthcare & Medical</option>
                      <option value="hospitality">Hospitality & Entertainment</option>
                      <option value="industrial">Industrial & Manufacturing</option>
                      <option value="corporate">Corporate & Office</option>
                      <option value="retail">Retail & Shopping</option>
                      <option value="residential">Residential & Multi-Family</option>
                      <option value="religious">Religious & Nonprofit</option>
                      <option value="automotive">Automotive & Transportation</option>
                      <option value="food">Food & Beverage</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.15_70)]/50 focus:border-[oklch(0.65_0.15_70)] transition-colors"
                    >
                      <option value="">Select service type</option>
                      <option value="maintenance-contract">Maintenance Contract</option>
                      <option value="facility-audit">Facility Audit</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="construction">Construction/Remodel</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="hvac">HVAC</option>
                      <option value="consulting">Consulting/Workout</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Tell Us About Your Needs</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.15_70)]/50 focus:border-[oklch(0.65_0.15_70)] transition-colors resize-none"
                    placeholder="Describe your facility, current challenges, or the service you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[oklch(0.65_0.15_70)] text-white font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200 active:scale-[0.97]"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-6 bg-secondary/50 rounded-lg">
                <h3 className="font-serif text-lg font-bold text-[oklch(0.25_0.05_260)] mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[oklch(0.65_0.15_70)] mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Phone</div>
                      <a href="tel:310-297-2737" className="text-sm text-muted-foreground hover:text-[oklch(0.65_0.15_70)]">310-297-2737</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[oklch(0.65_0.15_70)] mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Email</div>
                      <a href="mailto:info@cbmila.com" className="text-sm text-muted-foreground hover:text-[oklch(0.65_0.15_70)]">info@cbmila.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[oklch(0.65_0.15_70)] mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Service Area</div>
                      <span className="text-sm text-muted-foreground">Los Angeles, Orange, Riverside, Ventura & San Diego Counties</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[oklch(0.65_0.15_70)] mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Emergency Service</div>
                      <span className="text-sm text-muted-foreground">Available 24/7, 365 days a year</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-[oklch(0.25_0.05_260)] rounded-lg text-white">
                <h3 className="font-serif text-lg font-bold mb-3">Emergency?</h3>
                <p className="text-sm text-white/70 mb-4">
                  For urgent service needs, call our 24-hour emergency line directly.
                </p>
                <a
                  href="tel:310-297-2737"
                  className="block text-center px-6 py-3 bg-[oklch(0.65_0.15_70)] text-white font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200"
                >
                  Call 310-297-2737
                </a>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-serif text-lg font-bold text-[oklch(0.25_0.05_260)] mb-3">What to Expect</h3>
                <ol className="space-y-3">
                  {[
                    "We respond within 24 hours",
                    "A specialist will assess your needs",
                    "You receive a customized proposal",
                    "We begin service on your schedule",
                  ].map((step, idx) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[oklch(0.65_0.15_70)]/10 text-[oklch(0.65_0.15_70)] rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
