import React, { useState } from 'react';
import { FOUNDERS_DATA } from '../data/foundersData';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  founder: string;
  message: string;
  website: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  founder: 'general',
  message: '',
  website: '',
};

export const FounderContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Message could not be sent. Please try again.');
      }

      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'Message could not be sent. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  return (
    <section className="band band-sand">
      <div className="wrap max-w-4xl">
        <div className="bg-[#ede6d6] p-6 sm:p-8 rounded shadow-sm border border-[#262f1f]/10 space-y-6">
          <div>
            <div className="eyebrow">Connect with Zen Cafe</div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1b2317] mt-1">
              Message the founders
            </h2>
            <p className="text-sm text-[#5f5b48] mt-2 leading-relaxed">
              Have a question about Zen Cafe, collaborations, events, or community activities? Send us a message and our team will get back to you.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-[#d8c79e] rounded flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif-title font-bold text-lg text-[#1b2317]">
                  Thank you for reaching out!
                </h3>
                <p className="text-sm text-[#262f1f] mt-1 leading-relaxed">
                  Your message has been sent to the Zen Cafe team. We will get back to you by email or phone shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialFormData);
                    setSubmitted(false);
                  }}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#a67c52] underline"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form id="founder-contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="founder-contact-name" className="text-xs font-bold uppercase tracking-wider text-[#a67c52] block">
                    Your Name
                  </label>
                  <input
                    id="founder-contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-[#ede6d6] border border-[#262f1f]/20 rounded text-sm focus:outline-none focus:border-[#a67c52]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="founder-contact-phone" className="text-xs font-bold uppercase tracking-wider text-[#a67c52] block">
                    Phone Number <span className="font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    id="founder-contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full px-4 py-2.5 bg-[#ede6d6] border border-[#262f1f]/20 rounded text-sm focus:outline-none focus:border-[#a67c52]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="founder-contact-email" className="text-xs font-bold uppercase tracking-wider text-[#a67c52] block">
                  Email Address
                </label>
                <input
                  id="founder-contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-2.5 bg-[#ede6d6] border border-[#262f1f]/20 rounded text-sm focus:outline-none focus:border-[#a67c52]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="founder-contact-recipient" className="text-xs font-bold uppercase tracking-wider text-[#a67c52] block">
                  Message For
                </label>
                <select
                  id="founder-contact-recipient"
                  value={formData.founder}
                  onChange={(event) => updateField('founder', event.target.value)}
                  className="w-full px-4 py-2.5 bg-[#ede6d6] border border-[#262f1f]/20 rounded text-sm focus:outline-none focus:border-[#a67c52]"
                >
                  <option value="general">Zen Cafe team</option>
                  {FOUNDERS_DATA.map((founder) => (
                    <option key={founder.id} value={founder.id}>
                      {founder.displayName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="founder-contact-message" className="text-xs font-bold uppercase tracking-wider text-[#a67c52] block">
                  Message / Question
                </label>
                <textarea
                  id="founder-contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  placeholder="Tell us what you would like to ask or share with Zen Cafe..."
                  className="w-full px-4 py-2.5 bg-[#ede6d6] border border-[#262f1f]/20 rounded text-sm focus:outline-none focus:border-[#a67c52] resize-none"
                />
              </div>

              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(event) => updateField('website', event.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {error && (
                <div role="alert" className="flex items-start gap-2 text-sm text-red-800 bg-red-100 border border-red-200 rounded p-3">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-solid w-full justify-center text-xs py-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};