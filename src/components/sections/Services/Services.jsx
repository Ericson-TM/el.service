import Container from '../../common/Container/Container';
import Section from '../../common/Section/Section';
import { services } from '../../../data/services';
import styles from './Services.module.css';

const Services = () => {
  return (
    <Section id="services" variant="default">
      {/* Dark Header */}
      <div className={styles.servicesHeader}>
        <Container>
          <h2 className={styles.sectionTitle}>Dienstleistungen</h2>
          <p className={styles.sectionSubtitle}>
            Umfassende Business Computing Lösungen, maßgeschneidert für kleine und mittelständische Unternehmen
          </p>
        </Container>
      </div>

      {/* Services Grid */}
      <Container>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <a href="#contact" className={styles.serviceLink}>
                + Mehr erfahren
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
