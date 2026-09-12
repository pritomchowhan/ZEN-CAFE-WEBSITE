import React, { useState } from 'react';
import { ViewType, MenuItem } from '../types';
import { MENU_ITEMS, CONTACT_INFO, JOURNAL_POSTS } from '../data/cafeData';
import { ArrowUpRight, Coffee, Sparkles, Home as HomeIcon, MapPin, ChevronRight } from 'lucide-react';
import pritomImg from '../assets/images/pritom_portrait_1789240977742.jpg';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectJuice: (item: MenuItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectJuice }) => {
  const [filter, setFilter] = useState<'all' | 'coffee' | 'juice'>('all');

  // Preview items for home
  const previewItems = MENU_ITEMS.filter((item) => {
    if (filter === 'all') {
      return ['cappuccino', 'espresso', 'ripe-mango-shake', 'raw-mango-juice', 'dragon-fruit-juice', 'malta-juice'].includes(item.id);
    }
    return item.category === filter;
  }).slice(0, 6);

  return (
    <div id="view-home" className="space-y-0">
      {/* ================= HERO SECTION ================= */}
      <section id="home-hero-section" className="band-ink on-ink pt-36 pb-24 overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(60% 50% at 82% 12%, rgba(201,166,104,0.18), transparent 60%), radial-gradient(50% 60% at 100% 100%, rgba(201,166,104,0.12), transparent 60%)',
          }}
        />
        <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="eyebrow">Kuratoli · Kuril AIUB Gate · Dhaka</div>
            <h1 className="font-serif-title text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight">
              Pause.<br />
              Breathe.<br />
              <span className="italic text-[#c9b089]">Stay.</span>
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-[#f2ecdd]/80 leading-relaxed pt-2">
              A calm corner for clear minds, well-made specialty coffee, and 100% natural cold-pressed fruit juices.
              Where conversations are allowed to linger.
            </p>

            <div className="flex items-center gap-4 pt-4 flex-wrap">
              <button
                id="hero-explore-menu-btn"
                onClick={() => onNavigate('menu')}
                className="btn btn-solid flex items-center gap-2"
              >
                <span>Explore the menu</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                id="hero-visit-corner-btn"
                onClick={() => onNavigate('contact')}
                className="btn btn-outline flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit our quiet corner</span>
              </button>
            </div>

            {/* Quick Slogan Badge */}
            <div className="pt-4 flex items-center gap-3 text-xs text-[#c9b089]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="tracking-wider uppercase font-semibold">Pure ingredients · Pure you · Since 2026</span>
            </div>
          </div>

          {/* Hero Right Column — FIRST PICTURE: picture_1st.png */}
          <div className="lg:col-span-5 text-left lg:text-right space-y-4">
            <div
              id="hero-first-picture-container"
              className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#c9b089]/40 aspect-16/10 sm:aspect-16/9 group cursor-pointer"
              onClick={() => onNavigate('gallery')}
              title="Click to view our gallery"
            >
              <img
                id="hero-first-picture-img"
                src="/picture_1st.png"
                alt="Zen Cafe interior wall with three framed coffee pictures under track lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.endsWith('/picture_1st.jpg')) {
                    target.src = '/picture_1st.jpg';
                  }
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2317]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left text-[11px] font-semibold text-[#f2ecdd]/95 bg-[#1b2317]/70 backdrop-blur-md px-3 py-1.5 rounded border border-[#c9b089]/25">
                <span className="tracking-wide">Zen Cafe Corner · Track Lighting</span>
                <span className="text-[10px] text-[#c9b089] uppercase font-bold tracking-widest flex items-center gap-1">
                  <span>View</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <div className="eyebrow" style={{ justifyContent: 'flex-end' }}>
                Open Today
              </div>
              <p className="font-serif-title text-2xl sm:text-3xl text-[#f2ecdd] font-medium mt-1">
                {CONTACT_INFO.hours}
              </p>
              <span className="text-xs text-[#c9b089] mt-0.5">Saturday: Closed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR RITUAL SECTION ================= */}
      <section id="home-ritual-section" className="band band-paper">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <div className="eyebrow">Our ritual</div>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal mt-3 text-[#1b2317]">
                More than coffee.<br />A state of mind.
              </h2>
            </div>
            <button
              id="home-ritual-story-link"
              onClick={() => onNavigate('about')}
              className="link-u"
            >
              <span>Our story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-[#1b2317]">Carefully brewed</h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                Seasonal espresso beans dialed in daily, plus 100% natural fruit juices pressed fresh upon every order.
              </p>
            </div>

            <div className="p-6 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-[#1b2317]">Thoughtfully made</h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                Pure ingredients with zero synthetic syrups. Dragon fruit, raw mango, sweet malta, and zesty mint lemonade.
              </p>
            </div>

            <div className="p-6 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                <HomeIcon className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-[#1b2317]">Slowly enjoyed</h3>
              <p className="text-sm text-[#5f5b48] leading-relaxed">
                A peaceful space by the AIUB Gate where you can study, read, or catch up without feeling rushed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENU PREVIEW ================= */}
      <section id="home-menu-preview-section" className="band band-sand">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <div className="eyebrow">From the counter</div>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal mt-3 text-[#1b2317]">
                Find your familiar.
              </h2>
            </div>

            <div className="flex items-center gap-1.5 bg-[#d8c79e]/60 p-1.5 rounded">
              <button
                id="home-filter-all"
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                  filter === 'all' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                All
              </button>
              <button
                id="home-filter-juice"
                onClick={() => setFilter('juice')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                  filter === 'juice' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                Fresh Juices
              </button>
              <button
                id="home-filter-coffee"
                onClick={() => setFilter('coffee')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                  filter === 'coffee' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                Coffee
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewItems.map((item) => (
              <div
                key={item.id}
                id={`home-menu-item-${item.id}`}
                onClick={() => item.category === 'juice' ? onSelectJuice(item) : onNavigate('menu')}
                className="group bg-[#ede6d6] rounded overflow-hidden shadow-sm border border-[#262f1f]/10 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="aspect-4/3 relative bg-[#1b2317] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {item.isSeasonal && (
                      <span className="absolute top-3 left-3 bg-[#c9b089] text-[#1b2317] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                        Seasonal 2026
                      </span>
                    )}
                    {item.category === 'juice' && (
                      <span className="absolute bottom-3 right-3 bg-[#1b2317]/80 text-[#c9b089] text-[10px] font-semibold uppercase px-2 py-0.5 rounded backdrop-blur-sm">
                        View Poster
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif-title text-xl font-bold text-[#1b2317] group-hover:text-[#a67c52] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-[#a67c52] shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[#5f5b48] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.tag && (
                  <div className="px-5 pb-4 pt-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#a67c52] font-semibold block">
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              id="home-view-full-menu-btn"
              onClick={() => onNavigate('menu')}
              className="btn btn-outline"
            >
              <span>View full seasonal menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= GALLERY PREVIEW ================= */}
      <section id="home-gallery-preview-section" className="band band-paper">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <div className="eyebrow">Gallery</div>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal mt-3 text-[#1b2317]">
                Light finds its way in.
              </h2>
            </div>
            <button
              id="home-gallery-explore-link"
              onClick={() => onNavigate('gallery')}
              className="link-u"
            >
              <span>Explore the gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1st Picture */}
            <div
              className="relative aspect-4/3 rounded overflow-hidden shadow-md border border-[#262f1f]/15 group cursor-pointer"
              onClick={() => onNavigate('gallery')}
            >
              <img
                src="/picture_1st.png"
                alt="Zen Cafe interior wall with framed pictures"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.endsWith('/picture_1st.jpg')) {
                    target.src = '/picture_1st.jpg';
                  }
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white uppercase tracking-wider font-semibold">
                  Cafe Interior &amp; Ambient Lighting
                </span>
              </div>
            </div>

            {/* Dragon Fruit Poster */}
            <div
              className="relative aspect-4/3 rounded overflow-hidden shadow-md border border-[#262f1f]/15 group cursor-pointer"
              onClick={() => onNavigate('gallery')}
            >
              <img
                src="/dragon.jpeg"
                alt="Zen Cafe Dragon Fruit Juice"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white uppercase tracking-wider font-semibold">
                  Dragon Fruit Juice · Bold In Color
                </span>
              </div>
            </div>

            {/* Ambient Card */}
            <div className="band-ink on-ink p-8 rounded flex flex-col justify-between aspect-4/3">
              <div className="eyebrow">Atmosphere</div>
              <div>
                <h3 className="font-serif-title text-2xl font-normal leading-snug">
                  Small scenes from our quiet corner.
                </h3>
                <p className="text-xs text-[#f2ecdd]/70 mt-3 leading-relaxed">
                  Natural woods, handcrafted beverages, and room to pause.
                </p>
              </div>
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9b089] hover:text-white transition-colors"
              >
                <span>View all 9 posters &amp; photos</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OWNER PREVIEW ================= */}
      <section id="home-owner-preview-section" className="band band-sand">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 rounded overflow-hidden shadow-2xl border border-[#262f1f]/20">
              <img
                src={pritomImg}
                alt="Pritom Chowhan - Co-Founder of Zen Cafe"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.endsWith('/pritom_chowhan.jpg')) {
                    target.src = '/pritom_chowhan.jpg';
                  }
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 bg-[#c9b089] text-[#1b2317] px-6 py-4 rounded shadow-xl font-serif-title italic text-base sm:text-lg text-center">
              &ldquo;A half-baked effort won&apos;t bring you any satisfaction.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 pt-4 lg:pt-0">
            <div className="eyebrow">Meet the founders</div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b2317]">
              Hosts before anything else.
            </h2>
            <p className="text-[#5f5b48] leading-relaxed text-base">
              Founded by <strong className="text-[#1b2317]">Pritom Chowhan</strong>, <strong className="text-[#1b2317]">Niaz Mohammad Shovon</strong>, and <strong className="text-[#1b2317]">Minhajul Huda</strong>, Zen Cafe was born around a simple idea: hospitality is found in the deliberate details — the warmth of a cup, honest seasonal fruits, a remembered order, and a quiet table held open for you.
            </p>
            <p className="text-[#5f5b48] leading-relaxed text-base">
              From hand-pulling morning espressos to cold-pressing fresh juices, our joint philosophy remains:
              <strong className="text-[#1b2317] font-semibold"> Pause. Breathe. Stay.</strong>
            </p>
            <div className="pt-2">
              <button
                id="home-read-owner-btn"
                onClick={() => onNavigate('owner')}
                className="btn btn-dark"
              >
                <span>Meet the 3 Founders</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNAL PREVIEW ================= */}
      <section id="home-journal-preview-section" className="band band-paper">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <div className="eyebrow">Journal</div>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal mt-3 text-[#1b2317]">
                Notes from the table.
              </h2>
            </div>
            <button
              id="home-journal-visit-link"
              onClick={() => onNavigate('journal')}
              className="link-u"
            >
              <span>Visit the journal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.id}
                id={`home-journal-card-${post.id}`}
                className="p-6 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#a67c52]">
                    {post.date} · {post.category}
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-[#1b2317] mt-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#5f5b48] mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('journal')}
                  className="link-u text-xs pt-2"
                >
                  <span>Read note</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
