import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CookieBanner, { hasAnalyticsConsent } from './components/common/CookieBanner/CookieBanner';
import Home from './pages/Home/Home';
import Impressum from './pages/Impressum/Impressum';
import Datenschutz from './pages/Datenschutz/Datenschutz';
import styles from './App.module.css';

import { Analytics } from '@vercel/analytics/react';

import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(hasAnalyticsConsent());

  const handleConsentChange = (accepted) => {
    setAnalyticsEnabled(accepted);
  };

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner onConsentChange={handleConsentChange} />
        {/* Vercel Analytics - only loads when user accepts cookies */}
        {analyticsEnabled && <Analytics />}
        {/* Vercel Speed Insights - only loads when user accepts cookies */}
        {analyticsEnabled && <SpeedInsights />}
      </div>
    </Router>
  );
}

export default App;
