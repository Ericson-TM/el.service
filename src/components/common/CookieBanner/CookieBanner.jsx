import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

const COOKIE_CONSENT_KEY = 'el-bueroservice-cookie-consent';

// Helper function to check if analytics consent was given
export const hasAnalyticsConsent = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
};

// Helper function to get current consent status
export const getConsentStatus = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY);
};

const CookieBanner = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
    // Notify parent component about consent change (for analytics)
    onConsentChange?.(true);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
    onConsentChange?.(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h3 className={styles.title}>Cookie-Einstellungen</h3>
          <p className={styles.text}>
            Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.
            Technisch notwendige Cookies sind für den Betrieb der Website erforderlich.
            Optionale Cookies helfen uns, die Website zu analysieren und zu verbessern.
          </p>
          <p className={styles.linkText}>
            Weitere Informationen finden Sie in unserer{' '}
            <Link to="/datenschutz" className={styles.link}>
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={handleDecline} className={styles.declineButton}>
            Nur notwendige
          </button>
          <button onClick={handleAccept} className={styles.acceptButton}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
