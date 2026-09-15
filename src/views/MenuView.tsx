import React, { useMemo, useState } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/cafeData';
import { Sparkles, Coffee, CupSoda, Croissant, IceCreamCone, Star, ChevronRight } from 'lucide-react';

interface MenuViewProps {
  onSelectJuice: (item: MenuItem) => void;
}

const categoryMeta: Record<MenuCategory, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  coffee: { label: 'Coffee', icon: Coffee },
  'cold-drinks': { label: 'Cold Drinks', icon: Sparkles },
  tea: { label: 'Tea', icon: CupSoda },
  breakfast: { label: 'Breakfast', icon: Croissant },
  desserts: { label: 'Desserts', icon: IceCreamCone },
  specials: { label: 'Specials', icon: Star },
};

export const MenuView: React.FC<MenuViewProps> = ({ onSelectJuice }) => {
  const [activeTab, setActiveTab] = useState<'all' | MenuCategory>('all');

  const visibleCategories = useMemo(() => {
    const categories: MenuCategory[] = ['coffee', 'cold-drinks', 'tea', 'breakfast', 'desserts', 'specials'];
    return activeTab === 'all' ? categories : [activeTab];
  }, [activeTab]);

  return (
    <div id="view-menu">
      <section className="band-ink on-ink page-hero-media pt-36 pb-20">
        <div className="wrap">
          <div className="text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-4 font-semibold">
            Zen Cafe / Menu
          </div>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
            A real café menu
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-[#f2ecdd]/80 mt-4 leading-relaxed">
            Crafted coffee, chilled fresh drinks, slow tea, comforting breakfast plates, sweet finishing touches, and chef-led specials.
          </p>

          <div className="mt-8 p-4 bg-[#2f3a28]/60 border border-[#c9b089]/30 rounded max-w-2xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#c9b089] shrink-0" />
            <p className="text-xs text-[#f2ecdd]/90 leading-relaxed">
              Freshly made, thoughtfully priced, and designed for the slow rhythm of a great café day.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-paper pt-12 pb-24">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#262f1f]/15 mb-12">
            <div>
              <div className="eyebrow">Counter Selection</div>
              <h2 className="font-serif-title text-3xl font-bold text-[#1b2317] mt-1">
                {activeTab === 'all' ? 'All Offerings' : categoryMeta[activeTab].label}
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-[#e4d8bd] p-1.5 rounded border border-[#262f1f]/10 flex-wrap">
              <button
                id="menu-tab-all"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  activeTab === 'all' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                All Menu
              </button>
              {(['coffee', 'cold-drinks', 'tea', 'breakfast', 'desserts', 'specials'] as MenuCategory[]).map((category) => {
                const Icon = categoryMeta[category].icon;
                return (
                  <button
                    key={category}
                    id={`menu-tab-${category}`}
                    onClick={() => setActiveTab(category)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === category ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{categoryMeta[category].label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {visibleCategories.map((category) => {
            const items = MENU_ITEMS.filter((item) => item.category === category);
            const Icon = categoryMeta[category].icon;

            return (
              <div key={category} className="mb-16 last:mb-0">
                <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#262f1f]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2f3a28] flex items-center justify-center text-[#c9b089]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a67c52] block mb-1">
                        Café favourites
                      </span>
                      <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1b2317]">
                        {categoryMeta[category].label}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5f5b48]">
                    {items.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {items.map((item) => {
                    const hasImage = !!item.image;

                    return (
                      <div
                        key={item.id}
                        id={`menu-card-${item.id}`}
                        onClick={() => item.image ? onSelectJuice(item) : undefined}
                        className={`group bg-[#ede6d6] rounded overflow-hidden shadow-sm border border-[#262f1f]/10 flex flex-col justify-between transition-all duration-300 ${hasImage ? 'hover:shadow-xl hover:-translate-y-1.5 cursor-pointer' : 'cursor-default'}`}
                      >
                        <div>
                          {hasImage ? (
                            <div className="aspect-[4/3] relative bg-[#1b2317] overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              {item.label && (
                                <span className="absolute top-3 left-3 bg-[#c9b089] text-[#1b2317] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                                  {item.label}
                                </span>
                              )}
                              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-3 py-1.5 bg-[#1b2317]/90 text-[#c9b089] text-[10px] font-bold uppercase tracking-wider rounded flex items-center gap-1.5">
                                  <ChevronRight className="w-3 h-3" />
                                  <span>View item</span>
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex min-h-[180px] items-center justify-center border-b border-[#262f1f]/10 bg-[#e4d8bd]/30 px-6 text-center">
                              <div className="space-y-2">
                                <div className="text-[11px] uppercase tracking-[0.2em] text-[#a67c52] font-bold">Coming Soon</div>
                                <div className="font-serif-title text-3xl text-[#1b2317]">COMMING SOON</div>
                              </div>
                            </div>
                          )}

                          <div className="p-5 space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="font-serif-title text-xl font-bold text-[#1b2317] group-hover:text-[#a67c52] transition-colors leading-tight">
                                {item.name}
                              </h4>
                              <span className="font-mono text-sm font-semibold text-[#a67c52] shrink-0">
                                {item.price}
                              </span>
                            </div>

                            <p className="text-sm text-[#5f5b48] leading-relaxed">
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
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="mt-8 pt-8 border-t border-[#262f1f]/15 text-xs text-[#5f5b48] space-y-1">
            <p>All prices are in Bangladeshi Taka. Dine in or takeaway available.</p>
            <p>Please tell us about allergies or dietary preferences before ordering.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
