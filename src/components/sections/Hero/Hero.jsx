import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Professionelle Business Computing Dienstleistungen
            </h1>
            <p className={styles.heroSubtitle}>
              Ich unterstütze kleine und mittelständische Unternehmen dabei, Technologie für ihr Wachstum zu nutzen. Von Datenanalyse bis Webentwicklung – maßgeschneiderte Lösungen, die Ergebnisse liefern.
            </p>
            <div className={styles.heroButtons}>
              <Button variant="primary" size="large" onClick={handleCTAClick}>
                Kontakt aufnehmen
              </Button>
              <Button variant="secondary" size="large" onClick={handleServicesClick}>
                Dienstleistungen
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>🚀</div>
              <h3>Digitale Lösungen</h3>
              <p>Web • Software • KI</p>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.heroBackground}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>
    </section>
  );
};

export default Hero;
