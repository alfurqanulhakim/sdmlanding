import React, { useState, useEffect } from 'react';
import {
  X,
  Share2,
  Copy,
  Check,
  Smartphone,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function ShareModal({ data, onClose }) {
  const [copied, setCopied] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!data) return null;

  const currentUrl = data.url || window.location.href;
  const title = data.title || 'Lowongan & Karier SDM Yayasan Dar el-Iman Padang';
  const unit = data.unit ? ` (${data.unit})` : '';

  const shareMessage = data.customText || `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nInformasi Lowongan Kerja Yayasan Dar el-Iman Padang:\n📌 Formasi: ${title}${unit}\n\nMari bergabung dan berkhidmah di jalan dakwah dan pendidikan Islam. Buka pendaftaran & persyaratan lengkap di:\n${currentUrl}`;

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(shareMessage);

  const shareChannels = [
    {
      name: 'WhatsApp',
      description: 'Bagikan ke grup atau kontak WhatsApp',
      color: '#25D366',
      bgColor: '#ecfdf5',
      borderColor: '#a7f3d0',
      textColor: '#065f46',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      link: `https://api.whatsapp.com/send?text=${encodedText}`,
    },
    {
      name: 'Telegram',
      description: 'Kirim ke channel atau grup Telegram',
      color: '#0088cc',
      bgColor: '#f0f9ff',
      borderColor: '#bae6fd',
      textColor: '#0369a1',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      link: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      name: 'Facebook',
      description: 'Bagikan ke beranda atau grup Facebook',
      color: '#1877F2',
      bgColor: '#eff6ff',
      borderColor: '#bfdbfe',
      textColor: '#1d4ed8',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    },
    {
      name: 'X (Twitter)',
      description: 'Bagikan postingan di platform X',
      color: '#0f172a',
      bgColor: '#f8fafc',
      borderColor: '#e2e8f0',
      textColor: '#0f172a',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      link: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      name: 'LinkedIn',
      description: 'Bagikan ke jaringan profesional LinkedIn',
      color: '#0A66C2',
      bgColor: '#f0f9ff',
      borderColor: '#bae6fd',
      textColor: '#0369a1',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(`${title} - Yayasan Dar el-Iman Padang\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareMessage,
          url: currentUrl,
        });
      } catch (err) {
        // user cancelled or failed
      }
    }
  };

  return (
    <div className="modal-backdrop-overlay" role="dialog" aria-modal="true" style={{ zIndex: 100 }}>
      <div className="modal-dialog-card" style={{ maxWidth: '540px' }}>
        {/* Header */}
        <div className="modal-head-row">
          <div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--emerald-main)',
                background: 'var(--emerald-soft)',
                padding: '3px 10px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '6px',
              }}
            >
              Sebarkan Kebaikan
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-title)' }}>
              Bagikan Informasi Lowongan
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Bantu saudara dan rekan kita meraih peluang pengabdian di Yayasan Dar el-Iman
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-close-modal"
            aria-label="Tutup modal berbagi"
          >
            <X size={20} />
          </button>
        </div>

        {/* Selected Vacancy / Page Info Box */}
        <div
          style={{
            margin: '18px 0 16px',
            padding: '14px 16px',
            borderRadius: '14px',
            background: 'var(--bg-page)',
            border: '1px solid var(--border-card)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--emerald-soft)',
              color: 'var(--emerald-main)',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            <Share2 size={20} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h4
              style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                color: 'var(--text-title)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--emerald-main)', fontWeight: 700 }}>
              {data.unit || 'Yayasan Dar el-Iman Padang'}
            </p>
          </div>
        </div>

        {/* Social Channels List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {shareChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '14px',
                background: '#ffffff',
                border: '1px solid var(--border-card)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = channel.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-card)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    color: channel.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {channel.icon}
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: 'var(--text-title)',
                      display: 'block',
                    }}
                  >
                    {channel.name}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {channel.description}
                  </span>
                </div>
              </div>

              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: channel.textColor,
                  background: channel.bgColor,
                  border: `1px solid ${channel.borderColor}`,
                  padding: '4px 10px',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>Bagikan</span>
                <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>

        {/* Native Mobile Share Button (if supported) */}
        {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
          <button
            type="button"
            onClick={handleNativeShare}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 16px',
              borderRadius: '14px',
              background: 'var(--emerald-soft)',
              border: '1px solid var(--emerald-border)',
              color: 'var(--emerald-main)',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              marginBottom: '16px',
              transition: 'all 0.2s',
            }}
          >
            <Smartphone size={16} />
            <span>Gunakan Menu Berbagi Bawaan Perangkat (Status/Instagram/Lainnya)</span>
          </button>
        )}

        {/* Copy Link Section */}
        <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '16px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'var(--text-muted)',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Salin Tautan Langsung
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              readOnly
              value={currentUrl}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                background: '#f8faf9',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontFamily: 'monospace',
                outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={handleCopy}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: copied ? 'var(--emerald-main)' : 'var(--gold-vibrant)',
                color: copied ? '#ffffff' : 'var(--navy-dark)',
                fontSize: '0.82rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Tersalin!' : 'Salin Tautan'}</span>
            </button>
          </div>
          {copied && (
            <p
              style={{
                fontSize: '0.74rem',
                color: 'var(--emerald-main)',
                fontWeight: 700,
                marginTop: '6px',
              }}
            >
              Alhamdulillah, tautan berhasil disalin ke clipboard! Silakan tempelkan di media sosial Anda.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
