import React, { FormEvent, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type ChatRole = 'user' | 'model';

interface ChatMessage {
  role: ChatRole;
  content: string;
  items?: Array<{
    name: string;
    price: string;
    image: string;
    availability: string;
  }>;
  links?: Array<{ label: string; href: string; external?: boolean }>;
}

const welcomeMessage: ChatMessage = {
  role: 'model',
  content: 'Welcome to Zen Cafe. Ask me about our menu, hours, location, or founders.',
};

export const CafeChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();
    if (!message || isSending || message.length > 600) return;

    const userMessage: ChatMessage = { role: 'user', content: message };
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          history: conversation.slice(-8),
        }),
      });
      const responseText = await response.text();
      let data: { answer?: string; error?: string; items?: ChatMessage['items']; links?: ChatMessage['links'] } = {};

      if (responseText.trim()) {
        try {
          data = JSON.parse(responseText) as { answer?: string; error?: string; items?: ChatMessage['items']; links?: ChatMessage['links'] };
        } catch {
          throw new Error(`The assistant returned an invalid response (${response.status}).`);
        }
      }

      if (!response.ok || !data.answer) {
        throw new Error(data.error || `The assistant could not answer right now (${response.status}).`);
      }

      setMessages((current) => [...current, {
        role: 'model',
        content: (data.answer as string).replace(/\*\*/g, ''),
        items: data.items,
        links: data.links,
      }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'model',
          content: error instanceof Error ? error.message : 'Please try again in a moment.',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed right-5 bottom-5 z-[1100] sm:right-7 sm:bottom-7">
      {isOpen && (
        <section
          aria-label="Zen Cafe assistant"
          className="chat-panel-enter mb-3 flex h-[min(600px,calc(100vh-120px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-[#c9b089]/35 bg-[#ede6d6] shadow-[0_24px_80px_-24px_rgba(20,28,20,0.8)]"
        >
          <header className="flex items-center justify-between bg-[#1b2317] px-5 py-4 text-[#f2ecdd]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#c9b089]/40 bg-[#2f3a28] transition-transform hover:scale-105">
                <img src="/Zen-Cafe.png" alt="Zen Cafe logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="font-serif-title block text-lg font-medium tracking-[0.18em] text-[#f2ecdd]">ZEN CAFÉ</h2>
                <p className="-mt-1 block text-[10px] font-semibold uppercase tracking-widest text-[#c9b089]">Pause. Breathe. Stay.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close cafe assistant"
              className="rounded-full p-2 text-[#f2ecdd]/70 transition-colors hover:bg-[#2f3a28] hover:text-[#f2ecdd]"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f5efe3] p-4" aria-live="polite">
            {messages.map((chatMessage, index) => (
              <div
                key={`${chatMessage.role}-${index}`}
                className={`flex ${chatMessage.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`chat-reply max-w-[86%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    chatMessage.role === 'user'
                      ? 'rounded-br-sm bg-[#2f3a28] text-[#f2ecdd]'
                      : 'rounded-bl-sm border border-[#262f1f]/10 bg-white/70 text-[#262f1f]'
                  }`}
                >
                  <p className="whitespace-pre-line">{chatMessage.content}</p>
                  {chatMessage.items && chatMessage.items.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {chatMessage.items.map((item) => (
                        <div key={item.name} className="flex items-center gap-2 rounded-xl border border-[#262f1f]/10 bg-[#f5efe3]/80 p-2">
                          <img src={item.image} alt={item.name} className="h-12 w-12 shrink-0 rounded-lg object-cover" />
                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold">{item.name}</p>
                            <p className="text-xs text-[#5f5b48]">{item.price} · {item.availability}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {chatMessage.links && chatMessage.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {chatMessage.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noreferrer' : undefined}
                          className="rounded-full border border-[#a67c52]/40 bg-[#c9b089]/25 px-2.5 py-1 text-[11px] font-semibold text-[#4d5b3e] transition-colors hover:bg-[#c9b089]/55"
                        >
                          {link.label} {link.external ? '↗' : '→'}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex items-center gap-2 text-xs text-[#5f5b48]">
                <Bot className="h-4 w-4 text-[#a67c52]" />
                <span>Thinking...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[#262f1f]/10 bg-[#ede6d6] p-3">
            <div className="flex items-end gap-2 rounded-xl border border-[#262f1f]/15 bg-white/60 p-1.5 focus-within:border-[#a67c52]">
              <label htmlFor="cafe-chat-message" className="sr-only">Ask Zen Cafe Assistant</label>
              <textarea
                id="cafe-chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about the cafe..."
                maxLength={600}
                rows={1}
                disabled={isSending}
                className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-[#262f1f] outline-none placeholder:text-[#5f5b48]/70 disabled:opacity-60"
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9b089] text-[#1b2317] transition-colors hover:bg-[#a67c52] hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-[#5f5b48]">Zen Cafe information assistant</p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? 'Close cafe assistant' : 'Open cafe assistant'}
        aria-expanded={isOpen}
        className="group ml-auto flex items-center gap-2 rounded-full bg-[#c9b089] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#1b2317] shadow-[0_16px_32px_-16px_rgba(20,28,20,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#a67c52] hover:text-white"
      >
        <MessageCircle className="h-4 w-4" />
        <span>{isOpen ? 'Close' : 'Ask Zen'}</span>
      </button>
    </div>
  );
};
