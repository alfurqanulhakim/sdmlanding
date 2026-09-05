import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import UnitsSection from './components/UnitsSection';
import WhyJoinUs from './components/WhyJoinUs';
import CareerSection from './components/CareerSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import StatusTrackerModal from './components/StatusTrackerModal';

export default function App() {
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [statusModalOpen, setStatusModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenStatusModal={() => setStatusModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <CoreValues />
        <UnitsSection />
        <WhyJoinUs />
        <CareerSection
          onSelectVacancy={(vac) => setSelectedVacancy(vac)}
          onOpenStatusModal={() => setStatusModalOpen(true)}
        />
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedVacancy && (
        <ApplicationModal
          vacancy={selectedVacancy}
          onClose={() => setSelectedVacancy(null)}
        />
      )}

      {statusModalOpen && (
        <StatusTrackerModal
          onClose={() => setStatusModalOpen(false)}
        />
      )}
    </div>
  );
}
