import React from 'react';
import { MenuItem } from '../types';
import { CONTACT_INFO } from '../data/cafeData';
import { X, MessageCircle, Sparkles } from 'lucide-react';

interface JuiceModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const JuiceModal: React.FC<JuiceModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      id="juice-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="juice-detail-modal-card"
        className="relative w-full max-w-2xl bg-[#ede6d6] text-[#262f1f] rounded shadow-2xl overflow-hidden border border-[#c9b089]/50 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="modal-close-button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#1b2317]/80 text-[#f2ecdd] hover:bg-[#1b2317] transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image Container */}
        <div className="md:w-1/2 bg-[#1b2317] relative flex items-center justify-center overflow-hidden min-h-[260px] md:min-h-[380px]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover max-h-[380px]"
            referrerPolicy="no-referrer"
          />
          {item.isSeasonal && (
            <span className="absolute top-3 left-3 bg-[#c9b089] text-[#1b2317] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
              2026 Seasonal
            </span>
          )}
        </div>

        {/* Content Container */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="eyebrow mb-2">Zen Cafe Menu</div>
            <h3 className="font-serif-title text-2xl md:text-3xl font-bold text-[#1b2317]">
              {item.name}
            </h3>
            {item.label && (
              <span className="inline-flex mt-2 px-2.5 py-1 rounded bg-[#c9b089]/20 text-[#1b2317] text-[10px] font-bold uppercase tracking-wider">
                {item.label}
              </span>
            )}
            <p className="text-[#a67c52] font-semibold text-lg mt-3 font-mono">
              {item.price}
            </p>

            <p className="mt-4 text-sm text-[#5f5b48] leading-relaxed">
              {item.description}
            </p>

            {item.highlights && item.highlights.length > 0 && (
              <div className="mt-5 pt-4 border-t border-[#38301f]/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a67c52] block mb-2">
                  Highlights
                </span>
                <ul className="space-y-1.5 text-xs text-[#262f1f]/90">
                  {item.highlights.map((hl, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#a67c52] shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#38301f]/10 flex items-center justify-between gap-3">
            <span className="text-[11px] text-[#5f5b48] italic">
              Made fresh to order
            </span>
            <a
              id="modal-order-whatsapp-btn"
              href={`${CONTACT_INFO.whatsappUrl}?text=Hello%20Zen%20Cafe,%20I'd%20like%20to%20order%20${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid text-xs py-2 px-4 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire / WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
