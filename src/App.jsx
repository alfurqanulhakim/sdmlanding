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
import ShareModal from './components/ShareModal';
import FloatingShareButton from './components/FloatingShareButton';

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
  const [shareModalData, setShareModalData] = useState(null);

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

  const handleOpenShare = (customData) => {
    if (customData) {
      setShareModalData(customData);
    } else {
      setShareModalData({
        title: 'Portal Karier & Lowongan SDM Yayasan Dar el-Iman Padang',
        url: `${window.location.origin}/#/karier`,
        customText: `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nBagi ikhwan dan akhawat yang mencari peluang pengabdian dan berkarir di dunia pendidikan dakwah Islam:\n\nYayasan Dar el-Iman Padang membuka formasi Tenaga Pendidik (Guru) dan Tenaga Kependidikan untuk berbagai unit sekolah.\n\nInformasi formasi dan pendaftaran online dapat diakses di:\nhttps://sdmdareliman.web.id/#/karier`,
      });
    }
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
            onShareVacancy={handleOpenShare}
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
            onShareVacancy={handleOpenShare}
          />
        )}

        {activeRoute === 'our-team' && <TeamPage />}
      </main>

      {/* Floating Share Button for Visitors */}
      <FloatingShareButton onOpenShare={() => handleOpenShare()} />

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

      {/* Social Media Share Modal */}
      {shareModalData && (
        <ShareModal
          data={shareModalData}
          onClose={() => setShareModalData(null)}
        />
      )}
    </div>
  );
}
