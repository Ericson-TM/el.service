import Container from '../../common/Container/Container';
import Section from '../../common/Section/Section';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <Section id="portfolio" variant="alternate">
      <Container>
        <div className={styles.portfolioContent}>
          <div className={styles.portfolioHeader}>
            <h2 className={styles.sectionTitle}>Portfolio & Projekte</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              Eine Auswahl aktueller Projekte und Lösungen für Kunden
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
