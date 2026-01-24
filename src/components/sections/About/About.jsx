import Container from '../../common/Container/Container';
import Section from '../../common/Section/Section';
import { skillCategories } from '../../../data/skills';
import profilePicture from '../../../assets/images/Profile_picture.png';
import styles from './About.module.css';

const About = () => {
  return (
    <Section id="about" variant="alternate">
      <Container>
        <div className={styles.aboutContent}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.sectionTitle}>Über mich</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.aboutGrid}>
            {/* About Text */}
            <div className={styles.aboutText}>
              <div className={styles.profileImageContainer}>
                <img
                  src={profilePicture}
                  alt="Professional Profile"
                  className={styles.profileImage}
                />
              </div>
              <h3>Hi, ich bin Eric 👋</h3>
              <p>
                Ich studiere Wirtschaftsinformatik in Berlin und verbinde Technik mit
                wirtschaftlichem Denken. Schon während des Studiums arbeite ich praxisnah
                an Web- und Softwareprojekten – von sauberen Datenbankstrukturen bis hin zu
                modernen Webanwendungen.
              </p>
              <p>
                Mein Fokus liegt auf Webentwicklung, Softwareentwicklung und zukunftsorientierten
                Technologien wie KI und Automatisierung. Durch mein eigenes Kleingewerbe und
                praktische Erfahrungen in der IT weiß ich, worauf es bei zuverlässigen, effizienten
                Lösungen wirklich ankommt.
              </p>
              <p>
                Wenn du eine moderne Website, eine digitale Lösung für dein Business oder einfach
                einen zuverlässigen Ansprechpartner suchst, der mitdenkt – dann lass uns sprechen. 🚀
              </p>
              <a href="#contact" className={styles.contactButton}>
                👉 Kontakt aufnehmen & mehr entdecken
              </a>
            </div>

            {/* Skills Section */}
            <div className={styles.skillsSection}>
              <h3>Fähigkeiten & Expertise</h3>

              {/* Skill Categories */}
              {skillCategories.map((category) => (
                <div key={category.id} className={styles.skillCategory}>
                  <h4 className={styles.categoryTitle}>{category.title}</h4>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <div className={styles.skillsGrid}>
                    {category.skills.map((skill) => (
                      <div key={skill.id} className={styles.skillCard}>
                        <span className={styles.skillIcon}>{skill.icon}</span>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
