/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewType, MenuItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { JuiceModal } from './components/JuiceModal';
import { CafeChatbot } from './components/CafeChatbot';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { MenuView } from './views/MenuView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { OwnerView } from './views/OwnerView';
import { FounderDetailView } from './views/FounderDetailView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedJuice, setSelectedJuice] = useState<MenuItem | null>(null);
  const [selectedFounderId, setSelectedFounderId] = useState<string>('pritom');

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectJuice = (item: MenuItem) => {
    setSelectedJuice(item);
  };

  const handleCloseModal = () => {
    setSelectedJuice(null);
  };

  const handleSelectFounder = (id: string) => {
    setSelectedFounderId(id);
    window.location.hash = `founder-${id}`;
    setCurrentView('founder-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize hash in URL for easy bookmarking and refresh
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (rawHash.startsWith('founder-')) {
        const fid = rawHash.replace('founder-', '');
        setSelectedFounderId(fid);
        setCurrentView('founder-detail');
      } else if (['home', 'about', 'menu', 'gallery', 'contact', 'owner'].includes(rawHash)) {
        setCurrentView(rawHash as ViewType);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.14 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [currentView]);

  const handleViewChange = (view: ViewType) => {
    window.location.hash = view === 'home' ? '' : view;
    handleNavigate(view);
  };

  const viewTransitionKey =
    currentView === 'founder-detail'
      ? `${currentView}-${selectedFounderId}`
      : currentView;

  return (
    <div className="premium-shell min-h-screen flex flex-col bg-[#ede6d6] text-[#262f1f] selection:bg-[#c9b089] selection:text-[#1b2317]">
      {/* Site Header */}
      <Header
        currentView={currentView === 'founder-detail' ? 'owner' : currentView}
        onNavigate={handleViewChange}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <div key={viewTransitionKey} className="page-transition">
          {currentView === 'home' && (
            <HomeView
              onNavigate={handleViewChange}
              onSelectJuice={handleSelectJuice}
            />
          )}
          {currentView === 'about' && <AboutView onNavigate={handleViewChange} />}
          {currentView === 'menu' && (
            <MenuView onSelectJuice={handleSelectJuice} />
          )}
          {currentView === 'gallery' && (
            <GalleryView onSelectJuice={handleSelectJuice} />
          )}
          {currentView === 'contact' && <ContactView />}
          {currentView === 'owner' && (
            <OwnerView
              onNavigate={handleViewChange}
              onSelectFounder={handleSelectFounder}
            />
          )}
          {currentView === 'founder-detail' && (
            <FounderDetailView
              founderId={selectedFounderId}
              onNavigate={handleViewChange}
              onSelectFounder={handleSelectFounder}
            />
          )}
        </div>
      </main>

      {/* Site Footer */}
      <Footer onNavigate={handleViewChange} />

      {/* Lightbox / Item Poster Modal */}
      <JuiceModal item={selectedJuice} onClose={handleCloseModal} />

      {/* Floating cafe information assistant */}
      <CafeChatbot />
    </div>
  );
}
