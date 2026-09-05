import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UnitsPage from './pages/UnitsPage';
import WhyUsPage from './pages/WhyUsPage';
import CareerPage from './pages/CareerPage';
import TeamPage from './pages/TeamPage';
import ApplicationModal from './components/ApplicationModal';
import StatusTrackerModal from './components/StatusTrackerModal';

export default function App() {
  const getRouteFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
    if (!hash || hash === '') return 'home';
    if (['home', 'tentang', 'unit', 'kenapa-kami', 'karier', 'our-team'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activeRoute, setActiveRoute] = useState(getRouteFromHash());
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [statusModalOpen, setStatusModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRouteFromHash();
      setActiveRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (routeId) => {
    setActiveRoute(routeId);
    window.location.hash = routeId === 'home' ? '/' : `/${routeId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8faf9] text-[#0f1f1d]">
      {/* Floating Pill Top Navbar */}
      <Navbar
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onOpenStatusModal={() => setStatusModalOpen(true)}
      />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {activeRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectVacancy={(vac) => setSelectedVacancy(vac)}
            onOpenStatusModal={() => setStatusModalOpen(true)}
          />
        )}

        {activeRoute === 'tentang' && <AboutPage />}

        {activeRoute === 'unit' && <UnitsPage />}

        {activeRoute === 'kenapa-kami' && (
          <WhyUsPage onNavigate={handleNavigate} />
        )}

        {activeRoute === 'karier' && (
          <CareerPage
            onSelectVacancy={(vac) => setSelectedVacancy(vac)}
            onOpenStatusModal={() => setStatusModalOpen(true)}
          />
        )}

        {activeRoute === 'our-team' && <TeamPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

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
