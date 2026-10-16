import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="bg-white text-black rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-black/20 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label="Close legal information dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E41E2B]">
              <Shield className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Fan Project Transparency</span>
            </div>
            <h3 id="legal-modal-title" className="text-2xl font-black text-black">
              Privacy Policy
            </h3>
            <div className="space-y-3 text-sm text-black/80 leading-relaxed">
              <p>
                <strong>Independent Non-Commercial Status:</strong> This website is an independent fan tribute project celebrating the history, designs, and cultural impact of Coca-Cola. It is not owned, operated, or endorsed by The Coca-Cola Company.
              </p>
              <p>
                <strong>Data Collection:</strong> We do not track personal identifying information, sell personal data, or deploy third-party advertising tracking cookies. Any email addresses submitted to the fan club demonstration are retained solely for local session feedback.
              </p>
              <p>
                <strong>External Links:</strong> Clicking links to official social profiles (Instagram, X, Facebook, YouTube, TikTok) or the official Coca-Cola website will take you to external services governed by their respective privacy terms and cookie practices.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E41E2B]">
              <FileText className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Trademark Acknowledgment</span>
            </div>
            <h3 id="legal-modal-title" className="text-2xl font-black text-black">
              Terms of Use & Trademark Disclaimer
            </h3>
            <div className="space-y-3 text-sm text-black/80 leading-relaxed">
              <p>
                <strong>Trademark Notice:</strong> Coca-Cola, the Contour Bottle design, Coke, and all associated marks, slogans, and logos are registered trademarks of The Coca-Cola Company. All rights belong strictly to their respective owners.
              </p>
              <p>
                <strong>Fair Use & Tribute Intent:</strong> All references, brand history chronologies, and aesthetic homage elements are presented solely for educational, cultural appreciation, and non-commercial fan tribute purposes under fair use doctrine.
              </p>
              <p>
                <strong>Official Communication:</strong> This site does not process beverage purchases, transactions, or customer warranty claims. All inquiries should be directed to the official channels at coca-cola.com.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-black/10">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-black text-white hover:bg-neutral-800 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
