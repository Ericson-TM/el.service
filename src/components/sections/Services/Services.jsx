import Container from '../../common/Container/Container';
import Section from '../../common/Section/Section';
import ServiceCard from './ServiceCard';
import { services } from '../../../data/services';
import styles from './Services.module.css';

const Services = () => {
  return (
    <Section id="services" variant="default">
      <Container>
        <div className={styles.servicesContent}>
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle}>Meine Dienstleistungen</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              Umfassende Business Computing Lösungen, maßgeschneidert für kleine und mittelständische Unternehmen
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
