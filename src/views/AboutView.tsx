import React from 'react';
import { ViewType } from '../types';
import { TIMELINE_ITEMS } from '../data/cafeData';
import { ArrowUpRight, Coffee, Sparkles, Heart, MapPin } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: ViewType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div id="view-about">
      {/* Page Hero */}
      <section className="band-ink on-ink page-hero-media pt-36 pb-20">
        <div className="wrap">
          <div className="text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-4 font-semibold">
            Zen Cafe / About
          </div>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
            Our story
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-[#f2ecdd]/80 mt-4 leading-relaxed">
            A quiet ritual, built one cup and one fresh fruit at a time by the AIUB Gate in Kuratoli, Kuril.
          </p>
        </div>
      </section>

      {/* Where It Began */}
      <section className="band band-paper">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="eyebrow">Where it began</div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b2317]">
              A pause, deliberately built.
            </h2>
            <p className="text-[#5f5b48] leading-relaxed text-base">
              Zen Cafe opened its doors with a simple conviction: a hurried day needs a soft place to land.
              We chose Kuratoli, tucked just beside the bustling AIUB Gate in Kuril, Dhaka, for its tranquil side-lane feel.
              We filled the space with warm acoustic wood, soft ambient lighting, and plants, creating an unhurried haven for students, creatives, and thinkers.
            </p>
            <p className="text-[#5f5b48] leading-relaxed text-base">
              In 2026, we updated our craft: introducing an artisan 100% natural cold-pressed fresh fruit juice bar
              alongside our beloved espresso menu. From vibrant dragon fruit to spiced green raw mango, every beverage is made with pure, wholesome ingredients — no artificial syrups, no shortcuts.
            </p>
            <div className="p-4 bg-[#e4d8bd]/60 rounded border-l-4 border-[#c9b089] text-sm text-[#262f1f] italic">
              &ldquo;Pause. Breathe. Stay. — Pure ingredients. Pure you.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 rounded overflow-hidden shadow-2xl border border-[#262f1f]/20">
              <img
                src="/picture_1st.png"
                alt="Zen Cafe ambient cafe interior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.endsWith('/picture_1st.jpg')) {
                    target.src = '/picture_1st.jpg';
                  }
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs text-[#f2ecdd] font-semibold uppercase tracking-wider">
                  The peaceful corner at AIUB Gate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rituals */}
      <section className="band band-sand">
        <div className="wrap">
          <div className="mb-12">
            <div className="eyebrow">Our ritual</div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b2317] mt-3">
              Three things we don't rush.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#1b2317]">Carefully brewed</h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                Single and double origin espresso pulled with precision, steaming milk to exact micro-foam, and extracting the full aromatic spectrum of each bean.
              </p>
            </div>

            <div className="p-8 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#1b2317]">Thoughtfully made</h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                Our 2026 fresh juices use only fresh, real whole fruits. No artificial coloring, no synthetic flavorings, just honest, unadulterated nature in a bottle.
              </p>
            </div>

            <div className="p-8 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#1b2317]">Slowly enjoyed</h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                No table minimums, no pressure. Stay for one cup or spend the whole afternoon working on your laptop. The space is yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline: Updated from "Since 2019" to "Since 2026" */}
      <section className="band band-paper">
        <div className="wrap max-w-4xl">
          <div className="mb-12 text-center">
            <div className="eyebrow justify-center">Since 2026</div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b2317] mt-3">
              How the room grew.
            </h2>
            <p className="text-sm text-[#5f5b48] mt-2">
              Our updated brand identity and seasonal journey.
            </p>
          </div>

          <div className="space-y-6">
            {TIMELINE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10 items-start"
              >
                <div className="sm:col-span-3">
                  <span className="font-serif-title text-3xl font-bold text-[#a67c52]">
                    {item.year}
                  </span>
                </div>
                <div className="sm:col-span-9 space-y-2">
                  <h3 className="font-serif-title text-xl font-bold text-[#1b2317]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5f5b48] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA (No Reserve a table) */}
      <section className="band-ink on-ink py-16 text-center">
        <div className="wrap space-y-6">
          <div className="eyebrow justify-center">Visit Zen Cafe</div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-normal">
            Come find your familiar.
          </h2>
          <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
            <button
              onClick={() => onNavigate('menu')}
              className="btn btn-solid"
            >
              <span>View the menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn btn-outline"
            >
              <MapPin className="w-4 h-4" />
              <span>Find us in Kuril</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
