import React from 'react';
import { ViewType } from '../types';
import { CONTACT_INFO } from '../data/cafeData';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="site-footer" className="bg-[#1b2317] text-[#f2ecdd] pt-20 pb-10 border-t border-[#c9b089]/20">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#f2ecdd]/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2f3a28] border border-[#c9b089]/40 flex items-center justify-center">
                <span className="font-serif-title font-bold text-[#c9b089] text-lg">Z</span>
              </div>
              <span className="font-serif-title text-xl tracking-[0.16em] text-[#f2ecdd] font-semibold">
                ZEN CAFÉ
              </span>
            </div>
            <p className="text-sm text-[#f2ecdd]/70 leading-relaxed max-w-sm">
              A calm corner for clear minds and warm conversations, tucked beside the AIUB Gate in Kuratoli, Kuril.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-social-facebook"
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#2f3a28] flex items-center justify-center text-[#c9b089] hover:bg-[#c9b089] hover:text-[#1b2317] transition-all"
                aria-label="Zen Cafe on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-instagram"
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#2f3a28] flex items-center justify-center text-[#c9b089] hover:bg-[#c9b089] hover:text-[#1b2317] transition-all"
                aria-label="Zen Cafe on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-whatsapp"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#2f3a28] flex items-center justify-center text-[#c9b089] hover:bg-[#c9b089] hover:text-[#1b2317] transition-all"
                aria-label="Chat with Zen Cafe on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span
                id="footer-social-linkedin"
                title="LinkedIn link: I will add later"
                className="px-2 py-1 rounded bg-[#2f3a28]/60 text-[#c9b089]/70 text-[10px] uppercase font-bold tracking-wider cursor-default"
              >
                LinkedIn: Soon
              </span>
            </div>
          </div>

          {/* Location & Map */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c9b089] mb-4">Location</h4>
            <div className="space-y-3 text-sm text-[#f2ecdd]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c9b089] shrink-0 mt-1" />
                <span>Kuratoli, Kuril AIUB Gate<br />Dhaka, Bangladesh</span>
              </div>
              <a
                id="footer-google-maps-link"
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c9b089] hover:text-white transition-colors pt-1"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c9b089] mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-[#f2ecdd]/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c9b089] shrink-0" />
                <a
                  id="footer-email-link"
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#c9b089] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c9b089] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-[#c9b089] transition-colors font-mono"
                >
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#c9b089] shrink-0" />
                <a
                  id="footer-whatsapp-link"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9b089] transition-colors"
                >
                  WhatsApp: {CONTACT_INFO.whatsappNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c9b089] mb-4">Explore</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider text-[#f2ecdd]/70">
              {(['home', 'about', 'menu', 'gallery', 'contact', 'owner', 'journal'] as ViewType[]).map((v) => (
                <button
                  key={v}
                  onClick={() => onNavigate(v)}
                  className="text-left py-1 hover:text-[#c9b089] transition-colors cursor-pointer"
                >
                  {v === 'owner' ? 'founders' : v}
                </button>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-[#f2ecdd]/10 text-xs text-[#f2ecdd]/60">
              <span className="block font-bold text-[#c9b089]">Open: Daily 9 AM — 10 PM</span>
              <span className="block mt-0.5">Saturday: Closed</span>
            </div>
          </div>
        </div>

        {/* Foot Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#f2ecdd]/60 tracking-wider">
          <span>© 2026 Zen Cafe · Pause. Breathe. Stay. — Pure ingredients. Pure you.</span>
          <span>Kuril, Dhaka · Bangladesh</span>
        </div>
      </div>
    </footer>
  );
};
