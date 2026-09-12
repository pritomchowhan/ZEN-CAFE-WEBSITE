import React, { useState } from 'react';
import { JOURNAL_POSTS } from '../data/cafeData';
import { JournalPost } from '../types';
import { ArrowUpRight, X, BookOpen } from 'lucide-react';

export const JournalView: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);

  return (
    <div id="view-journal">
      {/* Page Hero */}
      <section className="band-ink on-ink pt-36 pb-20">
        <div className="wrap">
          <div className="text-xs uppercase tracking-[0.16em] text-[#c9b089] mb-4 font-semibold">
            Zen Cafe / Journal
          </div>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-tight">
            Notes from the table
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-[#f2ecdd]/80 mt-4 leading-relaxed">
            Essays on slow extraction, our 2026 seasonal fruit harvests, and quiet afternoons in Kuril.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="band band-paper pt-12 pb-24">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOURNAL_POSTS.map((post) => (
              <article
                key={post.id}
                id={`journal-card-${post.id}`}
                className="p-8 bg-[#e4d8bd]/40 rounded border border-[#262f1f]/10 flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#a67c52] font-semibold tracking-wider uppercase">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-bold text-[#1b2317] leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#5f5b48] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="link-u text-xs inline-flex items-center gap-1.5"
                  >
                    <span>Read full dispatch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#ede6d6] text-[#262f1f] rounded p-8 shadow-2xl border border-[#c9b089]/40 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1b2317] text-[#f2ecdd] hover:bg-[#a67c52] transition-colors"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a67c52] mb-3">
              <BookOpen className="w-4 h-4" />
              <span>{selectedPost.category} · {selectedPost.date}</span>
            </div>

            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1b2317] leading-tight mb-4">
              {selectedPost.title}
            </h2>

            <div className="text-sm sm:text-base text-[#5f5b48] leading-relaxed space-y-4 pt-2 border-t border-[#262f1f]/10">
              <p>{selectedPost.full}</p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262f1f]/10 text-xs text-[#a67c52] italic">
              Zen Cafe Journal · Kuratoli, Kuril AIUB Gate, Dhaka
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
