import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eric-noel-lieberwirth-306b8022a', icon: 'in' },
    { name: 'Email', url: 'mailto:el.service@gmx.de', icon: '@' }
  ];

  const quickLinks = [
    { label: 'Über mich', sectionId: 'about' },
    { label: 'Dienstleistungen', sectionId: 'services' },
    { label: 'Portfolio', sectionId: 'portfolio' },
    { label: 'Kontakt', sectionId: 'contact' }
  ];

  const handleQuickLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.footerSection}>
            <div className={styles.brand}>
              <img
                src="/EL Büroservice_Logo.png"
                alt="EL Büroservice Logo"
                className={styles.footerLogo}
              />
            </div>
            <p className={styles.tagline}>
              Professionelle Business Computing Dienstleistungen für kleine und mittelständische Unternehmen
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Schnellzugriff</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => handleQuickLinkClick(link.sectionId)}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Kontakt aufnehmen</h4>
            <p className={styles.contactInfo}>
              Verfügbar für Projekte und Beratungsanfragen
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} EL Büroservice. Alle Rechte vorbehalten.
          </p>
          <div className={styles.legalLinks}>
            <Link to="/impressum" className={styles.legalLink}>Impressum</Link>
            <span className={styles.legalSeparator}>|</span>
            <Link to="/datenschutz" className={styles.legalLink}>Datenschutz</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
