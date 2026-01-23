import { useState, useEffect } from 'react';
import Container from '../../common/Container/Container';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.headerContent}>
          <button onClick={handleLogoClick} className={styles.logo}>
            <img
              src="/EL Büroservice_Logo.png"
              alt="EL Büroservice Logo"
              className={styles.logoImage}
            />
          </button>
          <Navigation isScrolled={isScrolled} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
