import React from 'react';
import { Share2 } from 'lucide-react';

export default function FloatingShareButton({ onOpenShare }) {
  return (
    <button
      type="button"
      onClick={onOpenShare}
      className="floating-share-btn"
      aria-label="Bagikan informasi lowongan ke media sosial"
      title="Bagikan informasi lowongan ke WhatsApp, Telegram, atau Media Sosial"
    >
      <div className="floating-share-icon-wrap">
        <Share2 size={18} />
      </div>
      <span className="floating-share-label">
        Bagikan Info Karir
      </span>
    </button>
  );
}
