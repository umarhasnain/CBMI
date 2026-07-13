import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.25_0.05_260)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[oklch(0.65_0.15_70)] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm font-sans">CBMI</span>
              </div>
              <div>
                <div className="font-serif text-lg font-bold leading-tight">CBMI</div>
                <div className="text-xs text-white/60 leading-tight">Cal Building & Maintenance</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              One of the largest commercial service contractors in Southern California. All trades under one roof with over 60 years of expertise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/services" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Construction & Project Management</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Plumbing</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Electrical</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">HVAC</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Emergency Services</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Preventive Maintenance</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2.5">
              <li><Link href="/industries" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Residential & Multi-Family</Link></li>
              <li><Link href="/industries" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Hospitality & Entertainment</Link></li>
              <li><Link href="/industries" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Industrial & Manufacturing</Link></li>
              <li><Link href="/industries" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Corporate & Office</Link></li>
              <li><Link href="/industries" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Retail & Shopping Centers</Link></li>
              <li><Link href="/industries" className="text-sm text-white/70 hover:text-[oklch(0.65_0.15_70)] transition-colors">Healthcare & Medical</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-[oklch(0.65_0.15_70)]" />
                <div>
                  <a href="tel:310-297-2737" className="text-sm text-white/70 hover:text-white transition-colors">310-297-2737</a>
                  <p className="text-xs text-white/50 mt-0.5">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-[oklch(0.65_0.15_70)]" />
                <a href="mailto:info@cbmila.com" className="text-sm text-white/70 hover:text-white transition-colors">info@cbmila.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[oklch(0.65_0.15_70)]" />
                <span className="text-sm text-white/70">Los Angeles & Orange County, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} CBMI – Cal Building and Maintenance Industries, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/CBMIOfficial/" target="_blank" rel="noopener" className="text-sm text-white/50 hover:text-[oklch(0.65_0.15_70)] transition-colors">Facebook</a>
            <a href="https://www.instagram.com/cbmi_official/" target="_blank" rel="noopener" className="text-sm text-white/50 hover:text-[oklch(0.65_0.15_70)] transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/cbmila" target="_blank" rel="noopener" className="text-sm text-white/50 hover:text-[oklch(0.65_0.15_70)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
