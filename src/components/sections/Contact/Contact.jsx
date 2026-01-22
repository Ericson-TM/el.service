import Container from '../../common/Container/Container';
import Section from '../../common/Section/Section';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <Section id="contact" variant="default">
      <Container>
        <div className={styles.contactContent}>
          <div className={styles.contactHeader}>
            <h2 className={styles.sectionTitle}>Kontakt</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              Haben Sie ein Projekt im Kopf? Lassen Sie uns besprechen, wie ich Ihr Unternehmen unterstützen kann
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h3>Lassen Sie uns sprechen</h3>
              <p className={styles.infoText}>
                Ich bin derzeit für Freelance-Projekte und Beratungsaufträge verfügbar.
                Ob Sie Unterstützung bei Datenanalyse, Prozessautomatisierung oder
                Webentwicklung benötigen – ich bin für Sie da.
              </p>

              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>📧</div>
                  <div>
                    <h4>E-Mail</h4>
                    <a href="mailto:el.service@gmx.de" className={styles.contactLink}>
                      el.service@gmx.de
                    </a>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>💼</div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/eric-noel-lieberwirth-306b8022a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      Vernetzen Sie sich mit mir
                    </a>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>⏱️</div>
                  <div>
                    <h4>Antwortzeit</h4>
                    <p className={styles.responseTime}>Normalerweise innerhalb von 24 Stunden</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
