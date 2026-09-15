import React, { useState } from 'react';
import { GALLERY_ITEMS, MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';
import { Eye, Sparkles } from 'lucide-react';

interface GalleryViewProps {
  onSelectJuice: (item: MenuItem) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onSelectJuice }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'coffee' | 'juice' | 'tea'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedPhotoTitle, setSelectedPhotoTitle] = useState<string>('');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleItemClick = (item: (typeof GALLERY_ITEMS)[0]) => {
    // If it's a juice, try to find the matching menu item to show rich modal
    const matchedJuice = MENU_ITEMS.find(
      (m) => m.name.toLowerCase().includes(item.title.toLowerCase().replace('juice', '').trim()) ||
             item.id.includes(m.id.split('-')[0])
    );

    if (matchedJuice) {
      onSelectJuice(matchedJuice);
    } else {
      setSelectedPhoto(item.image);
      setSelectedPhotoTitle(item.title);
    }
  };

  return (
    <div id="view-gallery">
      {/* Page Hero */}
      <section className="band-ink on-ink pt-36 pb-20">
        <div className="wrap">
          <div className="text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-4 font-semibold">
            Zen Cafe / Gallery
          </div>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
            Small scenes from our quiet corner.
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-[#f2ecdd]/80 mt-4 leading-relaxed">
            From our warm ambient interior with track lighting to our vibrant 100% natural fruit juice posters.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="band band-sand pt-12 pb-24">
        <div className="wrap">
          {/* Filter Tabs */}
          <div className="flex items-center justify-between gap-4 pb-8 border-b border-[#262f1f]/15 mb-10 flex-wrap">
            <div className="eyebrow">Visual Archive</div>
            <div className="flex items-center gap-1.5 bg-[#d8c79e]/60 p-1.5 rounded flex-wrap">
              <button
                id="gallery-filter-all"
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  activeCategory === 'all' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                All
              </button>
              <button
                id="gallery-filter-interior"
                onClick={() => setActiveCategory('interior')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  activeCategory === 'interior' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                Interior
              </button>
              <button
                id="gallery-filter-coffee"
                onClick={() => setActiveCategory('coffee')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  activeCategory === 'coffee' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                Coffee
              </button>
              <button
                id="gallery-filter-juice"
                onClick={() => setActiveCategory('juice')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === 'juice' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#a67c52]" />
                <span>Juice</span>
              </button>
              <button
                id="gallery-filter-tea"
                onClick={() => setActiveCategory('tea')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  activeCategory === 'tea' ? 'bg-[#1b2317] text-[#f2ecdd]' : 'text-[#262f1f] hover:bg-[#d8c79e]'
                }`}
              >
                Tea
              </button>
            </div>
          </div>

          {/* Grid of photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const hasImage = !!item.image;

              return (
                <div
                  key={item.id}
                  id={`gallery-item-${item.id}`}
                  onClick={() => hasImage ? handleItemClick(item) : undefined}
                  className={`group relative rounded overflow-hidden shadow-md border border-[#262f1f]/15 bg-[#1b2317] cursor-pointer aspect-4/3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${!hasImage ? 'bg-[#e4d8bd] border-[#262f1f]/10' : ''}`}
                >
                  {hasImage ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-serif-title text-base sm:text-lg font-bold text-white leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#f2ecdd]/80 mt-1 line-clamp-1">
                              {item.caption}
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#c9b089] text-[#1b2317] flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            <Eye className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#e4d8bd] p-6 text-center">
                      <div className="space-y-3">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a67c52]">Coming Soon</div>
                        <div className="font-serif-title text-3xl text-[#1b2317]">Tea</div>
                        <div className="text-xs uppercase tracking-[0.18em] text-[#5f5b48]">No image yet</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple Image Modal for non-juice */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#1b2317] rounded overflow-hidden p-2 border border-[#c9b089]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt={selectedPhotoTitle}
              className="max-w-full max-h-[80vh] object-contain rounded"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 text-center text-sm font-serif-title text-[#f2ecdd]">
              {selectedPhotoTitle}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
