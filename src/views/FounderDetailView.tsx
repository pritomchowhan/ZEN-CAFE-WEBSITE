import React from 'react';
import { ViewType, FounderProfile } from '../types';
import { FOUNDERS_DATA } from '../data/foundersData';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Calendar,
  Heart,
  Briefcase,
  GraduationCap,
  Instagram,
  Linkedin,
  Phone,
  Users,
  Coffee,
  Sparkles,
  Quote,
  CheckCircle2,
} from 'lucide-react';

interface FounderDetailViewProps {
  founderId: string;
  onNavigate: (view: ViewType) => void;
  onSelectFounder: (id: string) => void;
}

export const FounderDetailView: React.FC<FounderDetailViewProps> = ({
  founderId,
  onNavigate,
  onSelectFounder,
}) => {
  const currentFounder =
    FOUNDERS_DATA.find((f) => f.id === founderId) || FOUNDERS_DATA[0];

  const currentIndex = FOUNDERS_DATA.findIndex((f) => f.id === currentFounder.id);
  const nextFounder = FOUNDERS_DATA[(currentIndex + 1) % FOUNDERS_DATA.length];
  const prevFounder =
    FOUNDERS_DATA[(currentIndex - 1 + FOUNDERS_DATA.length) % FOUNDERS_DATA.length];

  return (
    <div id="view-founder-detail" className="min-h-screen">
      {/* ================= HERO BANNER ================= */}
      <section className="band-ink on-ink pt-32 pb-16 border-b border-[#c9b089]/20">
        <div className="wrap">
          {/* Breadcrumb / Back Link */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <button
              id="back-to-founders-btn"
              onClick={() => onNavigate('owner')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c9b089] hover:text-[#f2ecdd] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all founders</span>
            </button>

            {/* Founder Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-[#2f3a28]/60 p-1 rounded border border-[#c9b089]/20">
              {FOUNDERS_DATA.map((f) => (
                <button
                  key={f.id}
                  id={`switcher-btn-${f.id}`}
                  onClick={() => onSelectFounder(f.id)}
                  className={`px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase rounded transition-all cursor-pointer ${
                    f.id === currentFounder.id
                      ? 'bg-[#c9b089] text-[#1b2317] font-bold shadow-sm'
                      : 'text-[#f2ecdd]/70 hover:text-[#f2ecdd] hover:bg-[#1b2317]/50'
                  }`}
                >
                  {f.order}. {f.displayName.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-3 font-semibold">
                <span>Zen Cafe Founder #{currentFounder.order}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9b089]" />
                <span className="flex items-center gap-1 text-[#f2ecdd]/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c9b089]" />
                  Verified Profile
                </span>
              </div>
              <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
                {currentFounder.name}
              </h1>
              <p className="text-base sm:text-xl text-[#c9b089] font-serif-title italic mt-2">
                {currentFounder.role}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectFounder(prevFounder.id)}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#f2ecdd]/80 border border-[#c9b089]/30 rounded hover:border-[#c9b089] hover:text-[#c9b089] transition-all cursor-pointer flex items-center gap-1.5"
                title={`Previous: ${prevFounder.displayName}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>
              <button
                onClick={() => onSelectFounder(nextFounder.id)}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#f2ecdd]/80 border border-[#c9b089]/30 rounded hover:border-[#c9b089] hover:text-[#c9b089] transition-all cursor-pointer flex items-center gap-1.5"
                title={`Next: ${nextFounder.displayName}`}
              >
                <span className="hidden sm:inline">Next Founder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN PROFILE CONTENT ================= */}
      <section className="band band-paper">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Photo & Verified Personal Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-4/5 rounded-lg overflow-hidden shadow-2xl border-2 border-[#262f1f]/20 bg-[#2f3a28]">
              <img
                src={currentFounder.image}
                alt={currentFounder.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (currentFounder.fallbackImage && !target.src.endsWith(currentFounder.fallbackImage)) {
                    target.src = currentFounder.fallbackImage;
                  }
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2317]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <span className="font-serif-title text-xl text-[#c9b089] font-medium block">
                  {currentFounder.name}
                </span>
                <span className="text-xs text-[#f2ecdd]/90 font-sans tracking-wide block mt-0.5">
                  {currentFounder.role} · Zen Cafe
                </span>
              </div>
            </div>

            {/* Verified Personal Details Card */}
            <div className="p-6 bg-[#ede6d6] rounded-lg border border-[#262f1f]/10 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f3a28] flex items-center gap-2 border-b border-[#262f1f]/10 pb-3">
                <Sparkles className="w-4 h-4 text-[#c9b089]" />
                <span>Personal Profile &amp; Background</span>
              </div>

              <div className="space-y-3 text-sm text-[#5f5b48]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2f3a28] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                      Current Residence
                    </span>
                    <span className="font-medium text-[#1b2317]">
                      {currentFounder.livesIn}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c9b089] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                      Hometown / Origin
                    </span>
                    <span className="font-medium text-[#1b2317]">
                      {currentFounder.from}
                    </span>
                  </div>
                </div>

                {currentFounder.birthday && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#2f3a28] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                        Birthday
                      </span>
                      <span className="font-medium text-[#1b2317]">
                        {currentFounder.birthday}
                      </span>
                    </div>
                  </div>
                )}

                {currentFounder.relationshipStatus && (
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-[#a64030] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                        Status
                      </span>
                      <span className="font-medium text-[#1b2317]">
                        {currentFounder.relationshipStatus}
                      </span>
                    </div>
                  </div>
                )}

                {currentFounder.family && (
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#2f3a28] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                        Family
                      </span>
                      <span className="font-medium text-[#1b2317]">
                        {currentFounder.family}
                      </span>
                    </div>
                  </div>
                )}

                {currentFounder.friendsCount && (
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#2f3a28] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                        Network
                      </span>
                      <span className="font-medium text-[#1b2317]">
                        {currentFounder.friendsCount}
                        {currentFounder.mutualCount ? ` · ${currentFounder.mutualCount}` : ''}
                      </span>
                    </div>
                  </div>
                )}

                {currentFounder.instagram && (
                  <div className="flex items-start gap-3">
                    <Instagram className="w-4 h-4 text-[#a64030] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                        Instagram
                      </span>
                      <a
                        href={currentFounder.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[#1b2317] hover:text-[#c9b089] transition-colors inline-flex items-center gap-1"
                      >
                        <span>@{currentFounder.instagram}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {(currentFounder.linkedin || currentFounder.Linkdin) && (
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-4 h-4 text-[#0a66c2] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                        LinkedIn
                      </span>
                      <a
                        href={currentFounder.linkedinUrl || currentFounder.LinkdinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[#1b2317] hover:text-[#c9b089] transition-colors inline-flex items-center gap-1"
                      >
                        <span>{currentFounder.linkedin || currentFounder.Linkdin}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {currentFounder.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#2f3a28] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#262f1f]/60 font-semibold">
                        Contact / Phone
                      </span>
                      <a
                        href={`tel:${currentFounder.phone}`}
                        className="font-medium text-[#1b2317] hover:text-[#c9b089] transition-colors"
                      >
                        {currentFounder.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Favorite Drink at Zen Cafe */}
            <div className="p-6 bg-[#2f3a28] text-[#f2ecdd] rounded-lg border border-[#c9b089]/30 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#c9b089] font-bold">
                <Coffee className="w-4 h-4" />
                <span>Founder&apos;s Signature Order</span>
              </div>
              <p className="font-serif-title text-xl text-[#f2ecdd]">
                {currentFounder.favoriteDrink}
              </p>
              <p className="text-xs text-[#f2ecdd]/75 leading-relaxed">
                Handcrafted upon order every morning at the Zen Cafe counter by AIUB Gate.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c9b089] hover:text-[#f2ecdd] transition-colors cursor-pointer"
                >
                  <span>See item on menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Life Philosophy, Story, Work & Education */}
          <div className="lg:col-span-7 space-y-8">
            {/* Motto / Pinned Post Quote */}
            <div className="p-8 bg-[#ede6d6] rounded-xl border border-[#262f1f]/15 shadow-md relative overflow-hidden">
              <Quote className="w-16 h-16 text-[#c9b089]/25 absolute -top-2 -right-2 pointer-events-none" />
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#c9b089] mb-3">
                Life Motto &amp; Words to Live By
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl text-[#1b2317] font-normal italic leading-snug">
                &ldquo;{currentFounder.motto}&rdquo;
              </h2>
              {currentFounder.mottoHashtags && currentFounder.mottoHashtags.length > 0 && (
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-[#2f3a28]/70">
                  {currentFounder.mottoHashtags.map((tag) => (
                    <span key={tag} className="bg-[#2f3a28]/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Personal Bio */}
            <div className="space-y-3">
              <div className="eyebrow">Personal Bio</div>
              <p className="text-lg text-[#1b2317] font-medium leading-relaxed bg-[#ede6d6]/60 p-4 rounded border-l-4 border-[#c9b089]">
                &ldquo;{currentFounder.bio}&rdquo;
              </p>
            </div>

            {/* The Zen Cafe Story */}
            <div className="space-y-4">
              <div className="eyebrow">The Story &amp; Vision</div>
              <h3 className="font-serif-title text-3xl font-normal text-[#1b2317]">
                Crafting a quiet corner in Kuratoli
              </h3>
              <p className="text-[#5f5b48] leading-relaxed text-base">
                {currentFounder.story}
              </p>
              <p className="text-[#5f5b48] leading-relaxed text-base">
                {currentFounder.zenRoleDescription}
              </p>
            </div>

            {/* Work & Career Experience */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2f3a28]">
                <Briefcase className="w-4 h-4 text-[#c9b089]" />
                <span>Work &amp; Experience</span>
              </div>
              <div className="space-y-3">
                {currentFounder.work.map((w, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-1"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-serif-title text-lg text-[#1b2317] font-semibold">
                        {w.role}
                      </span>
                      {w.duration && (
                        <span className="text-xs font-sans font-semibold text-[#c9b089] bg-[#2f3a28] px-2.5 py-0.5 rounded">
                          {w.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-[#2f3a28]">
                      {w.organization}
                    </p>
                    {w.details && (
                      <p className="text-xs text-[#5f5b48] leading-relaxed pt-1">
                        {w.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Alma Mater */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2f3a28]">
                <GraduationCap className="w-4 h-4 text-[#c9b089]" />
                <span>Education &amp; Background</span>
              </div>
              <div className="space-y-3">
                {currentFounder.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#ede6d6] rounded border border-[#262f1f]/10 space-y-1"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-serif-title text-lg text-[#1b2317] font-semibold">
                        {edu.institution}
                      </span>
                      {edu.year && (
                        <span className="text-xs font-sans font-semibold text-[#2f3a28] bg-[#c9b089]/30 px-2 py-0.5 rounded">
                          {edu.year}
                        </span>
                      )}
                    </div>
                    {edu.details && (
                      <p className="text-xs text-[#5f5b48] leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-[#262f1f]/10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-solid"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Us at Kuratoli</span>
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="btn btn-outline"
              >
                <Coffee className="w-4 h-4" />
                <span>Explore Specialty Menu</span>
              </button>
              <button
                onClick={() => onNavigate('owner')}
                className="text-xs font-bold uppercase tracking-wider text-[#2f3a28] hover:text-[#c9b089] transition-colors py-2 px-3"
              >
                View all 3 founders &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OTHER FOUNDERS STRIP ================= */}
      <section className="band band-sand border-t border-[#262f1f]/10">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="eyebrow">The Leadership Team</div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1b2317] mt-1">
                Explore the other founders
              </h3>
            </div>
            <button
              onClick={() => onNavigate('owner')}
              className="text-xs font-bold uppercase tracking-wider text-[#2f3a28] hover:text-[#c9b089] transition-colors"
            >
              See all founders page &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS_DATA.map((founder) => {
              const isCurrent = founder.id === currentFounder.id;
              return (
                <div
                  key={founder.id}
                  onClick={() => onSelectFounder(founder.id)}
                  className={`p-5 rounded-lg border transition-all cursor-pointer group flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#2f3a28] text-[#f2ecdd] border-[#c9b089]'
                      : 'bg-[#ede6d6] text-[#262f1f] border-[#262f1f]/10 hover:border-[#c9b089]/60 hover:shadow-lg'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-[#c9b089]/40 shrink-0">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (founder.fallbackImage && !target.src.endsWith(founder.fallbackImage)) {
                              target.src = founder.fallbackImage;
                            }
                          }}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#c9b089] block">
                          Founder #{founder.order}
                        </span>
                        <h4 className="font-serif-title text-lg font-bold leading-tight">
                          {founder.displayName}
                        </h4>
                      </div>
                    </div>
                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        isCurrent ? 'text-[#f2ecdd]/80' : 'text-[#5f5b48]'
                      }`}
                    >
                      &ldquo;{founder.motto}&rdquo;
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
                    <span className="text-[11px] uppercase tracking-wider">
                      {isCurrent ? 'Currently viewing' : 'Click to view'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
