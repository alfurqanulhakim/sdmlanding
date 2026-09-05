import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ZaitunuSection from './components/ZaitunuSection';
import CoreValues from './components/CoreValues';
import UnitsSection from './components/UnitsSection';
import WhyJoinUs from './components/WhyJoinUs';
import CareerSection from './components/CareerSection';
import TeamSection from './components/TeamSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import StatusTrackerModal from './components/StatusTrackerModal';

export default function App() {
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [statusModalOpen, setStatusModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fafbfb] text-slate-900 selection:bg-emerald-800 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenStatusModal={() => setStatusModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Zaitunu Concept Section ("Apa itu Zaitunu?") */}
        <ZaitunuSection />

        {/* 3. Core Values PINTAR ("Nilai yang Menjadi Akar") */}
        <CoreValues />

        {/* 4. Unit Pendidikan & Lembaga */}
        <UnitsSection />

        {/* 5. Mengapa Bertumbuh Bersama Dar el-Iman? (Why Join Us) */}
        <WhyJoinUs />

        {/* 6. Career Center / Lowongan Formasi */}
        <CareerSection
          onSelectVacancy={(vac) => setSelectedVacancy(vac)}
          onOpenStatusModal={() => setStatusModalOpen(true)}
        />

        {/* 7. Our Team / Tim SDM */}
        <TeamSection />

        {/* 8. Call to Action Banner */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Application Form Modal (Multi-step) */}
      {selectedVacancy && (
        <ApplicationModal
          vacancy={selectedVacancy}
          onClose={() => setSelectedVacancy(null)}
        />
      )}

      {/* Recruitment Status Tracker Modal */}
      {statusModalOpen && (
        <StatusTrackerModal
          onClose={() => setStatusModalOpen(false)}
        />
      )}
    </div>
  );
}
