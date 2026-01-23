import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Über mich' },
    { id: 'services', label: 'Dienstleistungen' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Kontakt' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.nav}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${!isScrolled ? styles.transparent : ''}`}>
      {/* Desktop Navigation */}
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleNavClick(link.id)}
              className={`${styles.navLink} ${
                activeSection === link.id ? styles.active : ''
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen(!isMenuOpen);
        }}
        aria-label="Menü umschalten"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`${styles.mobileNavLink} ${
                  activeSection === link.id ? styles.active : ''
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
