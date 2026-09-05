import React, { useState } from 'react';
import { School, MapPin, Building2, Filter, Sparkles, ExternalLink } from 'lucide-react';
import { MOCK_UNITS } from '../data/mockData';

export default function UnitsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'paud', label: 'PAUD / TK IT' },
    { id: 'dikdas', label: 'Pendidikan Dasar' },
    { id: 'dikmen', label: 'Pendidikan Menengah' },
    { id: 'pesantren', label: 'Pesantren Boarding' },
    { id: 'operasional', label: 'Dakwah & Operasional' },
  ];

  const filteredGroups =
    activeCategory === 'all'
      ? MOCK_UNITS
      : MOCK_UNITS.filter((g) => g.categorySlug === activeCategory);

  return (
    <main>
      {/* 1. HERO BANNER */}
      <section className="hero-section-box">
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <div className="hero-eyebrow">
              DIREKTORI LEMBAGA &bull; CABANG-CABANG ZAITUNU
            </div>

            <h1 className="hero-title">
              Unit Pendidikan, Pesantren & <br />
              <span className="hero-title-highlight">Lembaga Sosial Dakwah.</span>
            </h1>

            <p className="hero-desc">
              Yayasan Dar el-Iman menaungi ragam jenjang pendidikan Islam terpadu dan divisi operasional yang memberikan wadah berkarya, bertumbuh, dan mengabdi bagi ratusan asatidzah di Kota Padang dan sekitarnya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. UNITS DIRECTORY WITH FILTER */}
      <section className="content-section white-bg">
        <div className="site-container">
          {/* Filter Bar */}
          <div className="search-filter-panel" style={{ marginBottom: '48px' }}>
            <div className="filter-bar-row">
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '4px' }}>
                  Pilih Kategori Unit
                </h2>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Filter direktori berdasarkan jenjang pendidikan atau divisi operasional
                </p>
              </div>

              <div className="filter-btn-group">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCategory(c.id)}
                    className={`filter-pill-btn ${activeCategory === c.id ? 'active' : ''}`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grouped Units Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {filteredGroups.map((group) => (
              <div key={group.categorySlug}>
                <div style={{ borderBottom: '2px solid var(--border-card)', paddingBottom: '12px', marginBottom: '24px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-title)' }}>
                    {group.category}
                  </h3>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--emerald-main)' }}>
                    {group.items.length} Lembaga
                  </span>
                </div>

                <div className="grid-3-col">
                  {group.items.map((unit) => (
                    <div key={unit.id} className="unit-card">
                      <div>
                        <div className="unit-head">
                          <div className="unit-icon-box">
                            <School size={22} />
                          </div>
                          <span className="tag-badge-green" style={{ textTransform: 'uppercase' }}>
                            {unit.code}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '14px', marginBottom: '8px', lineHeight: 1.35 }}>
                          {unit.name}
                        </h4>

                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                          {unit.desc}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          <MapPin size={14} color="var(--emerald-main)" />
                          <span>{unit.address}</span>
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                          {unit.studentCount ? `${unit.studentCount} Santri/Siswa` : 'Unit Operasional'}
                        </span>
                        {unit.website && (
                          <a
                            href={unit.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--emerald-main)' }}
                          >
                            <span>Info Unit</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
