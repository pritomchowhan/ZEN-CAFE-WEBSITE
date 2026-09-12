import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/cafeData';
import { Sparkles, Eye, Coffee } from 'lucide-react';

interface MenuViewProps {
  onSelectJuice: (item: MenuItem) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ onSelectJuice }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'juice' | 'coffee'>('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const juiceItems = filteredItems.filter((item) => item.category === 'juice');
  const coffeeItems = filteredItems.filter((item) => item.category === 'coffee');

  return (
    <div id="view-menu">
      {/* Page Hero */}
      <section className="band-ink on-ink pt-36 pb-20">
        <div className="wrap">
          <div className="text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-4 font-semibold">
            Zen Cafe / Menu
          </div>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
            The menu
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-[#f2ecdd]/80 mt-4 leading-relaxed">
            Simple, honest ingredients. Fresh 100% natural fruit juices and hand-crafted specialty coffee.
          </p>

          {/* Quick Highlight Banner */}
          <div className="mt-8 p-4 bg-[#2f3a28]/60 border border-[#c9b089]/30 rounded max-w-2xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#c9b089] shrink-0" />
            <p className="text-xs text-[#f2ecdd]/90 leading-relaxed">
              <strong className="text-[#c9b089]">2026 Seasonal Juice Collection:</strong> Made with 100% real fresh fruit.
              No artificial colors, no synthetic flavors, chilled to perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Content */}
      <section className="band band-paper pt-12 pb-24">
        <div className="wrap">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#262f1f]/15 mb-12">
            <div>
              <div className="eyebrow">Counter Selection</div>
              <h2 className="font-serif-title text-3xl font-bold text-[#1b2317] mt-1">
                {activeTab === 'all' && 'All Offerings'}
                {activeTab === 'juice' && '100% Natural Fresh Juices'}
                {activeTab === 'coffee' && 'Specialty Coffees'}
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-[#e4d8bd] p-1.5 rounded border border-[#262f1f]/10">
              <button
                id="menu-tab-all"
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  activeTab === 'all' ? 'bg-[#1b2317] text-[#f2ecdd] shadow-sm' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                All Menu
              </button>
              <button
                id="menu-tab-juice"
                onClick={() => setActiveTab('juice')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'juice' ? 'bg-[#1b2317] text-[#f2ecdd] shadow-sm' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c9b089]" />
                <span>Fresh Juices (8)</span>
              </button>
              <button
                id="menu-tab-coffee"
                onClick={() => setActiveTab('coffee')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'coffee' ? 'bg-[#1b2317] text-[#f2ecdd] shadow-sm' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                <Coffee className="w-3.5 h-3.5 text-[#c9b089]" />
                <span>Coffee</span>
              </button>
            </div>
          </div>

          {/* FRESH JUICES SECTION (With user uploaded photos) */}
          {juiceItems.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#a67c52] block mb-1">
                  100% Real Fruit · Bottled Fresh
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1b2317]">
                  Fresh Juices Collection
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {juiceItems.map((item) => (
                  <div
                    key={item.id}
                    id={`menu-juice-card-${item.id}`}
                    onClick={() => onSelectJuice(item)}
                    className="group bg-[#ede6d6] rounded overflow-hidden shadow-sm border border-[#262f1f]/10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
                  >
                    <div>
                      {/* Juice Poster Image */}
                      <div className="aspect-4/3 relative bg-[#1b2317] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 bg-[#1b2317]/90 text-[#c9b089] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5 backdrop-blur-sm">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Poster</span>
                          </span>
                        </div>
                        {item.isSeasonal && (
                          <span className="absolute top-2.5 left-2.5 bg-[#c9b089] text-[#1b2317] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                            Seasonal
                          </span>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-4">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="font-serif-title text-lg font-bold text-[#1b2317] group-hover:text-[#a67c52] transition-colors leading-tight">
                            {item.name}
                          </h4>
                          <span className="font-mono text-sm font-semibold text-[#a67c52] shrink-0">
                            {item.price}
                          </span>
                        </div>

                        <p className="mt-2 text-xs text-[#5f5b48] leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {item.tag && (
                      <div className="px-4 pb-3 pt-0">
                        <span className="text-[9.5px] uppercase tracking-wider text-[#a67c52] font-semibold block">
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COFFEE SECTION */}
          {coffeeItems.length > 0 && (
            <div>
              <div className="mb-8 pt-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#a67c52] block mb-1">
                  Single &amp; Double Pull
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1b2317]">
                  Specialty Coffee
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {coffeeItems.map((item) => (
                  <div
                    key={item.id}
                    id={`menu-coffee-card-${item.id}`}
                    className="group bg-[#ede6d6] rounded overflow-hidden shadow-sm border border-[#262f1f]/10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="aspect-4/3 relative bg-[#1b2317] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (target.src !== window.location.origin + '/picture_1st.png') {
                              target.src = '/picture_1st.png';
                            }
                          }}
                        />
                      </div>

                      <div className="p-5 space-y-3">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="font-serif-title text-lg font-bold text-[#1b2317]">
                            {item.name}
                          </h4>
                          <span className="font-mono text-sm font-semibold text-[#a67c52] shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-xs text-[#5f5b48] leading-relaxed">
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
            </div>
          )}

          {/* Menu Footnote */}
          <div className="mt-16 pt-8 border-t border-[#262f1f]/15 text-xs text-[#5f5b48] space-y-1">
            <p>All prices are quoted in Bangladeshi Taka. Dine in or takeaway available.</p>
            <p>Please inform our barista about any dietary requirements or allergens before ordering.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
