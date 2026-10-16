import React from 'react';
import { ExternalLink, Globe, HelpCircle, MessageSquare } from 'lucide-react';

interface OfficialLink {
  name: string;
  url: string;
  handle: string;
  description: string;
  icon: string;
}

const officialChannels: OfficialLink[] = [
  {
    name: 'Official Website Contact',
    url: 'https://www.coca-cola.com',
    handle: 'coca-cola.com',
    description: 'Corporate inquiries, customer care, FAQs, and sponsorship submissions.',
    icon: 'globe',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/cocacola',
    handle: '@cocacola',
    description: 'Behind-the-scenes photography, creative drops, and global stories.',
    icon: 'instagram',
  },
  {
    name: 'X (formerly Twitter)',
    url: 'https://x.com/CocaCola',
    handle: '@CocaCola',
    description: 'Real-time updates, event activations, and consumer conversations.',
    icon: 'x',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/CocaCola',
    handle: '/CocaCola',
    description: 'Community initiatives, seasonal campaigns, and video premieres.',
    icon: 'facebook',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/cocacola',
    handle: '@cocacola',
    description: 'Full-length commercials, music festivals, and Real Magic studio anthems.',
    icon: 'youtube',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@cocacola',
    handle: '@cocacola',
    description: 'Trending sound bites, creator collaborations, and fizzy micro-content.',
    icon: 'tiktok',
  },
];

export const ContactUs: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#E41E2B] text-white relative overflow-hidden"
      aria-label="Contact Us Section"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase border border-white/20">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Connect & Support</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Connect With The <span className="font-script text-white text-6xl sm:text-7xl font-normal">Brand</span>
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            Have questions, feedback, or looking for corporate partnerships? As an independent tribute project, we connect you directly with the official channels of The Coca-Cola Company.
          </p>
        </div>

        {/* Official Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {officialChannels.map((channel) => (
            <div
              key={channel.name}
              className="bg-white text-black p-6 sm:p-7 rounded-3xl shadow-xl border border-black/10 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#E41E2B] bg-[#E41E2B]/10 px-2.5 py-1 rounded-lg">
                    Official Page
                  </span>
                  <span className="text-xs font-bold text-black/50">{channel.handle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-black group-hover:text-[#E41E2B] transition-colors">
                  {channel.name}
                </h3>

                <p className="text-sm text-black/75 mt-2 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              {/* Action Button: Opens in new tab */}
              <div className="pt-6 mt-4 border-t border-black/5">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-black text-white hover:text-black font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all duration-300 btn-fill-sweep-white border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E41E2B]"
                  aria-label={`Visit official ${channel.name} page (opens in new tab)`}
                >
                  <span>Visit {channel.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Official Channel Notice (Respecting "Do not invent an email address; use the official contact page instead.") */}
        <div className="bg-black text-white p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="p-4 rounded-2xl bg-[#E41E2B] text-white shrink-0">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Direct Official Contact Guidance</h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              To guarantee that consumer questions, product inquiries, packaging feedback, and business proposals reach verified representatives, please use the official contact page at{' '}
              <a
                href="https://www.coca-cola.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline font-bold hover:text-white/80"
              >
                coca-cola.com
              </a>
              . No email addresses are operated or simulated on this fan website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
