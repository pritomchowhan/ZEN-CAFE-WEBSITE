import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { CONTACT_INFO } from '../data/cafeData';
import { Menu as MenuIcon, X, MapPin } from 'lucide-react';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="siteHeader"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1b2317]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#c9b089]/20'
            : 'bg-[#1b2317] py-5'
        }`}
      >
        <div className="wrap flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="header-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Zen Cafe Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#2f3a28] border border-[#c9b089]/40 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/Zen-Cafe.png"
                alt="Zen Cafe logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-serif-title text-lg tracking-[0.18em] text-[#f2ecdd] font-medium block">
                ZEN CAFÉ
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#c9b089] block -mt-1 font-semibold">
                Pause. Breathe. Stay.
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary Navigation">
            {(['home', 'about', 'menu', 'gallery', 'contact', 'owner', 'journal'] as ViewType[]).map((view) => (
              <button
                key={view}
                id={`nav-btn-${view}`}
                onClick={() => handleNavClick(view)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all duration-200 cursor-pointer ${
                  currentView === view
                    ? 'text-[#c9b089] bg-[#2f3a28]/80'
                    : 'text-[#f2ecdd]/75 hover:text-[#f2ecdd] hover:bg-[#2f3a28]/40'
                }`}
              >
                {view === 'owner' ? 'founders' : view}
              </button>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <button
              id="header-visit-btn"
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9b089] hover:bg-[#a67c52] text-[#1b2317] hover:text-white text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 shadow cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Us</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#f2ecdd] hover:text-[#c9b089] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#1b2317] flex flex-col justify-between pt-24 pb-8 px-8 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            <div className="border-b border-[#f2ecdd]/10 pb-4 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#c9b089] font-bold block">Navigation</span>
            </div>
            {(['home', 'about', 'menu', 'gallery', 'contact', 'owner', 'journal'] as ViewType[]).map((view) => (
              <button
                key={view}
                id={`mobile-nav-link-${view}`}
                onClick={() => handleNavClick(view)}
                className={`text-left py-2.5 text-2xl font-serif-title tracking-wide transition-colors capitalize ${
                  currentView === view ? 'text-[#c9b089] font-semibold pl-2 border-l-2 border-[#c9b089]' : 'text-[#f2ecdd]'
                }`}
              >
                {view === 'owner' ? 'founders' : view}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[#f2ecdd]/10 space-y-3">
            <div className="text-xs text-[#f2ecdd]/60">
              <p className="font-semibold text-[#c9b089] uppercase tracking-wider">{CONTACT_INFO.address}</p>
              <p className="mt-1">{CONTACT_INFO.hours}</p>
            </div>
            <button
              id="mobile-drawer-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-[#c9b089] text-[#1b2317] font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Find Our Quiet Corner</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
