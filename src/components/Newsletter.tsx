import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send, ShieldCheck } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [preferences, setPreferences] = useState({
    vintage: true,
    flavors: true,
    sustainability: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section
      id="newsletter"
      className="py-20 lg:py-24 bg-white text-black relative overflow-hidden"
      aria-label="Newsletter Signup Section"
    >
      {/* Top red border accent */}
      <div className="absolute top-0 inset-x-0 h-2 bg-[#E41E2B]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#E41E2B] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-white/20">
          {/* Background Decorative Script */}
          <div
            className="absolute -right-8 -bottom-10 text-white/10 font-script text-[14vw] font-bold pointer-events-none select-none"
            aria-hidden="true"
          >
            Always
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>The Fan Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Get Cold Fizz & <span className="font-script text-white text-5xl sm:text-6xl font-normal block sm:inline">Fresh Stories</span> In Your Inbox
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              Join our community of vintage collectors, flavor seekers, and soda historians. Receive occasional dispatches about limited flavor drops, retro memorabilia, and brand heritage.
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-black text-white rounded-2xl border border-white/30 shadow-xl space-y-2 animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                <h3 className="text-xl font-black">Welcome to the Fan Circle!</h3>
                <p className="text-xs sm:text-sm text-white/80">
                  You’re now subscribed to the tribute newsletter. Check your inbox soon for an exclusive archival wallpaper pack.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-3 text-xs font-bold underline text-white/80 hover:text-white"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-black placeholder:text-black/40 text-sm font-semibold border-2 border-black/20 focus:outline-none focus:border-black shadow-inner"
                      aria-label="Email address"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 bg-black text-white hover:text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 btn-fill-sweep-white border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 disabled:opacity-50"
                  >
                    <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {status === 'error' && (
                  <p className="text-xs font-bold text-white bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
                    {errorMessage}
                  </p>
                )}

                {/* Preference Checkboxes */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                    What do you want to hear about?
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-white">
                    <label className="flex items-center gap-2 cursor-pointer bg-black/25 px-3 py-1.5 rounded-xl border border-white/10 hover:bg-black/35 transition-colors">
                      <input
                        type="checkbox"
                        checked={preferences.vintage}
                        onChange={(e) =>
                          setPreferences({ ...preferences, vintage: e.target.checked })
                        }
                        className="rounded accent-black"
                      />
                      <span>Vintage & 1886 Memorabilia</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer bg-black/25 px-3 py-1.5 rounded-xl border border-white/10 hover:bg-black/35 transition-colors">
                      <input
                        type="checkbox"
                        checked={preferences.flavors}
                        onChange={(e) =>
                          setPreferences({ ...preferences, flavors: e.target.checked })
                        }
                        className="rounded accent-black"
                      />
                      <span>New Flavor Releases</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer bg-black/25 px-3 py-1.5 rounded-xl border border-white/10 hover:bg-black/35 transition-colors">
                      <input
                        type="checkbox"
                        checked={preferences.sustainability}
                        onChange={(e) =>
                          setPreferences({ ...preferences, sustainability: e.target.checked })
                        }
                        className="rounded accent-black"
                      />
                      <span>Eco Innovations</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-white/70 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>No spam ever. Unsubscribe with one click anytime.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
