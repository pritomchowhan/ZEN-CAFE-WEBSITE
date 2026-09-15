import React from 'react';
import { CONTACT_INFO } from '../data/cafeData';
import { FounderContactForm } from '../components/FounderContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  ArrowUpRight,
  Navigation,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div id="view-contact">
      {/* Page Hero */}
      <section className="band-ink on-ink pt-36 pb-20">
        <div className="wrap">
          <div className="text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-4 font-semibold">
            Zen Cafe / Contact &amp; Location
          </div>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
            We'll keep a corner for you.
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-[#f2ecdd]/80 mt-4 leading-relaxed">
            Reach out to say hello, ask about our seasonal juices, or find our quiet space beside the AIUB Gate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="band band-paper pt-12 pb-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details, Socials & Map Option */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="eyebrow">Find us</div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1b2317] mt-2">
                A quiet corner by AIUB Gate.
              </h2>
              <p className="text-sm text-[#5f5b48] mt-3 leading-relaxed">
                Located in Kuratoli right next to the Kuril AIUB Gate in Dhaka. An easy walk from campus and surrounding transit.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6 pt-2">
              {/* Address & Google Maps Option */}
              <div className="flex items-start gap-4 p-4 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10">
                <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                    Address &amp; Directions
                  </h3>
                  <p className="text-base text-[#1b2317] font-medium leading-snug">
                    {CONTACT_INFO.address}
                  </p>
                  <div className="pt-2 flex items-center gap-3 flex-wrap">
                    <a
                      id="contact-google-maps-btn"
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-solid text-xs py-2 px-4 inline-flex items-center gap-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp Field */}
              <div className="flex items-start gap-4 p-4 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10">
                <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                    Phone &amp; WhatsApp
                  </h3>
                  <p className="text-base text-[#1b2317] font-mono font-semibold">
                    <a
                      id="contact-phone-link"
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="hover:text-[#a67c52] transition-colors"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                    <span className="text-xs font-sans text-[#5f5b48] ml-2">({CONTACT_INFO.phone})</span>
                  </p>
                  <div className="pt-1">
                    <a
                      id="contact-whatsapp-btn"
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp ({CONTACT_INFO.whatsappNumber})</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Address Field */}
              <div className="flex items-start gap-4 p-4 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10">
                <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                    Email Address
                  </h3>
                  <a
                    id="contact-email-link"
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-base text-[#1b2317] font-semibold hover:text-[#a67c52] transition-colors block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <span className="text-xs text-[#5f5b48]">For orders, questions, and partnerships</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10">
                <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                    Opening Hours
                  </h3>
                  <p className="text-sm font-semibold text-[#1b2317]">{CONTACT_INFO.hours}</p>
                  <p className="text-xs text-[#5f5b48]">Saturday · Closed for roast &amp; prep</p>
                </div>
              </div>
            </div>

            {/* Social Media Links Section */}
            <div className="p-6 bg-[#e4d8bd]/60 rounded border border-[#262f1f]/15 space-y-4">
              <div className="eyebrow">Connect with us</div>
              <h3 className="font-serif-title text-xl font-bold text-[#1b2317]">
                Official Social Media
              </h3>
              <p className="text-xs text-[#5f5b48]">
                Follow our daily stories, seasonal menu updates, and cafe atmosphere:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Instagram */}
                <a
                  id="contact-social-instagram"
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#ede6d6] hover:bg-[#c9b089]/20 rounded border border-[#262f1f]/10 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1b2317] block group-hover:text-[#a67c52]">Instagram</span>
                    <span className="text-[10px] text-[#5f5b48]">@zencafe1119</span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  id="contact-social-facebook"
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#ede6d6] hover:bg-[#c9b089]/20 rounded border border-[#262f1f]/10 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1b2317] block group-hover:text-[#a67c52]">Facebook</span>
                    <span className="text-[10px] text-[#5f5b48]">Zen Cafe Page</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  id="contact-social-whatsapp"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#ede6d6] hover:bg-[#c9b089]/20 rounded border border-[#262f1f]/10 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1b2317] block group-hover:text-[#a67c52]">WhatsApp</span>
                    <span className="text-[10px] text-[#5f5b48]">{CONTACT_INFO.whatsappNumber}</span>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Card */}
          <div className="lg:col-span-6 space-y-8">
            {/* Google Maps Visual Card */}
            <div className="bg-[#ede6d6] rounded overflow-hidden shadow-lg border border-[#262f1f]/15">
              <div className="p-5 bg-[#2f3a28] text-[#f2ecdd] flex items-center justify-between">
                <div>
                  <h3 className="font-serif-title text-lg font-bold">Google Maps Navigation</h3>
                  <p className="text-xs text-[#c9b089] mt-0.5">Kuratoli, Kuril AIUB Gate, Dhaka</p>
                </div>
                <a
                  id="map-card-direct-link"
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#c9b089] hover:bg-[#a67c52] text-[#1b2317] hover:text-white rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all"
                >
                  <span>Open App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Interactive Map Preview */}
              <div className="relative w-full h-[260px] sm:h-[300px] bg-[#e4d8bd] overflow-hidden">
                <iframe
                  title="Zen Cafe Kuril Dhaka Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.098485237894!2d90.4222019!3d23.8150893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65538e1a6c7%3A0x6b8f3957279320e8!2sAmerican%20International%20University-Bangladesh%20(AIUB)!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-[#e4d8bd]/40 text-xs text-[#5f5b48] flex items-center justify-between border-t border-[#262f1f]/10">
                <span>Coordinates: Kuratoli, Dhaka 1229</span>
                <span className="font-semibold text-[#1b2317]">Step-free courtyard entrance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FounderContactForm />
    </div>
  );
};
