import React from 'react';
import { ViewType } from '../types';
import { FOUNDERS_DATA } from '../data/foundersData';
import {
  ArrowUpRight,
  MapPin,
  Heart,
  Coffee,
  Sparkles,
  GraduationCap,
  Briefcase,
  Instagram,
  Phone,
  Calendar,
} from 'lucide-react';

interface OwnerViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectFounder?: (id: string) => void;
}

export const OwnerView: React.FC<OwnerViewProps> = ({
  onNavigate,
  onSelectFounder,
}) => {
  const handleDetailClick = (founderId: string) => {
    if (onSelectFounder) {
      onSelectFounder(founderId);
    } else {
      window.location.hash = `founder-detail`;
      onNavigate('founder-detail');
    }
  };

  return (
    <div id="view-owner">
      {/* ================= PAGE HERO ================= */}
      <section className="band-ink on-ink pt-36 pb-20">
        <div className="wrap">
          <div className="text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-4 font-semibold">
            Zen Cafe / Founders
          </div>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
            Meet the Founders
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-[#f2ecdd]/80 mt-4 leading-relaxed">
            Three visionaries and hosts who built our tranquil sanctuary by the AIUB Gate in Kuratoli, Kuril.
          </p>

          {/* Quick jump to each founder */}
          <div className="mt-8 flex flex-wrap gap-3">
            {FOUNDERS_DATA.map((f) => (
              <button
                key={f.id}
                onClick={() => handleDetailClick(f.id)}
                className="px-4 py-2 bg-[#2f3a28]/60 hover:bg-[#2f3a28] border border-[#c9b089]/30 hover:border-[#c9b089] rounded text-xs font-semibold text-[#f2ecdd] tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>{f.order}. {f.displayName}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c9b089] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3 FOUNDER PROFILES ================= */}
      <section className="band band-paper divide-y divide-[#262f1f]/10">
        {FOUNDERS_DATA.map((founder, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={founder.id}
              id={`founder-card-${founder.id}`}
              className={`py-16 first:pt-0 last:pb-0`}
            >
              <div
                className={`wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:col-start-8' : ''
                  }`}
                >
                  <div
                    onClick={() => handleDetailClick(founder.id)}
                    className="relative aspect-4/5 rounded-lg overflow-hidden shadow-2xl border-2 border-[#262f1f]/20 group cursor-pointer bg-[#2f3a28]"
                    title={`Click to see full profile of ${founder.displayName}`}
                  >
                    <img
                      src={founder.image}
                      alt={`${founder.displayName} - Founder of Zen Cafe`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (
                          founder.fallbackImage &&
                          !target.src.endsWith(founder.fallbackImage)
                        ) {
                          target.src = founder.fallbackImage;
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2317]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute -bottom-1 left-0 right-0 p-5 bg-[#1b2317]/90 backdrop-blur-sm text-center">
                      <span className="font-serif-title text-base text-[#c9b089] font-medium block">
                        {founder.name} · {founder.role}
                      </span>
                      <span className="text-[11px] text-[#f2ecdd]/70 uppercase tracking-widest mt-0.5 block">
                        At the counter since 2026 · Click for full details
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-[#1b2317]/80 text-[#c9b089] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#c9b089]/30 flex items-center gap-1 group-hover:bg-[#c9b089] group-hover:text-[#1b2317] transition-all">
                      <span>See Details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Information Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? 'lg:col-start-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="eyebrow">
                      Founder #{founder.order} · {founder.role}
                    </span>
                  </div>

                  <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b2317] leading-tight">
                    &ldquo;{founder.motto}&rdquo;
                  </h2>

                  {/* Bio quote */}
                  <p className="text-base font-serif-title italic text-[#2f3a28] bg-[#ede6d6] px-4 py-2.5 rounded border-l-3 border-[#c9b089]">
                    &ldquo;{founder.bio}&rdquo;
                  </p>

                  <p className="text-[#5f5b48] leading-relaxed text-base">
                    {founder.story}
                  </p>

                  {/* Key Profile Information Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#5f5b48]">
                    <div className="p-3 bg-[#ede6d6] rounded border border-[#262f1f]/10 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#c9b089] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#1b2317] block">
                          {founder.livesIn}
                        </span>
                        <span className="text-[11px] text-[#5f5b48]">
                          From: {founder.from}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#ede6d6] rounded border border-[#262f1f]/10 flex items-center gap-2.5">
                      <GraduationCap className="w-4 h-4 text-[#2f3a28] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#1b2317] block truncate">
                          {founder.education[0]?.institution}
                        </span>
                        <span className="text-[11px] text-[#5f5b48]">
                          {founder.education[0]?.details || 'Higher Education'}
                        </span>
                      </div>
                    </div>

                    {founder.work.length > 0 && (
                      <div className="p-3 bg-[#ede6d6] rounded border border-[#262f1f]/10 flex items-center gap-2.5">
                        <Briefcase className="w-4 h-4 text-[#2f3a28] shrink-0" />
                        <div>
                          <span className="font-semibold text-[#1b2317] block truncate">
                            {founder.work[0]?.role}
                          </span>
                          <span className="text-[11px] text-[#5f5b48] truncate block">
                            {founder.work[0]?.organization}
                          </span>
                        </div>
                      </div>
                    )}

                    {founder.instagram ? (
                      <div className="p-3 bg-[#ede6d6] rounded border border-[#262f1f]/10 flex items-center gap-2.5">
                        <Instagram className="w-4 h-4 text-[#a64030] shrink-0" />
                        <div>
                          <span className="font-semibold text-[#1b2317] block">
                            @{founder.instagram}
                          </span>
                          <span className="text-[11px] text-[#5f5b48]">
                            {founder.friendsCount || 'Community network'}
                          </span>
                        </div>
                      </div>
                    ) : founder.phone ? (
                      <div className="p-3 bg-[#ede6d6] rounded border border-[#262f1f]/10 flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#2f3a28] shrink-0" />
                        <div>
                          <span className="font-semibold text-[#1b2317] block">
                            {founder.phone}
                          </span>
                          <span className="text-[11px] text-[#5f5b48]">
                            Direct contact
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-[#ede6d6] rounded border border-[#262f1f]/10 flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-[#2f3a28] shrink-0" />
                        <div>
                          <span className="font-semibold text-[#1b2317] block">
                            {founder.birthday || 'December 29'}
                          </span>
                          <span className="text-[11px] text-[#5f5b48]">
                            Status: {founder.relationshipStatus || 'Active'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions matching design pattern */}
                  <div className="pt-3 flex items-center gap-4 flex-wrap">
                    <button
                      id={`see-detail-btn-${founder.id}`}
                      onClick={() => handleDetailClick(founder.id)}
                      className="btn btn-solid"
                    >
                      <span>See in detail</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="btn btn-outline"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Visit our quiet corner</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ================= HOUSE VALUES ================= */}
      <section className="band band-sand">
        <div className="wrap">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center">House rules</div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1b2317] mt-2">
              How we hold the space.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#1b2317]">
                Never rush a pull
              </h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                If the extraction is off by two seconds, we discard and re-pull. Respecting the craft means respecting your palate.
              </p>
            </div>

            <div className="p-6 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#1b2317]">
                Honest, natural fruit
              </h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                Zero synthetic sugar syrups or fake dyes in our juices. If mangoes are in season, you get 100% real mango pulp.
              </p>
            </div>

            <div className="p-6 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#1b2317]">
                A quiet refuge
              </h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                We keep the music volume gentle, acoustics balanced, and seating comfortable so you can think clearly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
