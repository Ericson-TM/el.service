import { Link } from 'react-router-dom';
import Container from '../../components/common/Container/Container';
import styles from './Impressum.module.css';

const Impressum = () => {
  return (
    <div className={styles.impressumPage}>
      <Container>
        <Link to="/" className={styles.backLink}>← Zurück zur Startseite</Link>

        <h1 className={styles.pageTitle}>Impressum</h1>

        <section className={styles.section}>
          <h2>EL Büroservice</h2>
          <p>
            <strong>Inhaber:</strong> Eric Noel Lieberwirth<br />
            Kleiststraße 51<br />
            16552 Schildow<br />
            Deutschland
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+491625879152">+49 162 5879152</a><br />
            E-Mail: <a href="mailto:el.service@gmx.de">el.service@gmx.de</a><br />
            Website: <a href="https://el-büroservice.com" target="_blank" rel="noopener noreferrer">https://el-büroservice.com</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Steuerliche Angaben</h2>
          <p>
            <strong>Steuernummer:</strong> 053/245/08068<br />
            <strong>Steuerliche Identifikationsnummer:</strong> 51 978 413 627
          </p>
          <p>
            <strong>Unternehmensform:</strong> Kleinunternehmer gemäß § 19 UStG<br />
            <em>(Es wird keine Umsatzsteuer ausgewiesen.)</em>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Eric Noel Lieberwirth<br />
            Kleiststraße 51<br />
            16552 Schildow
          </p>
        </section>

        <section className={styles.section}>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten verantwortlich.
            Eine Verpflichtung zur Überwachung fremder Inhalte besteht nicht.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Haftung für Links</h2>
          <p>
            Für Inhalte externer Links übernehme ich keine Haftung.
            Verantwortlich ist stets der jeweilige Anbieter.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Urheberrecht</h2>
          <p>
            Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht.
          </p>
        </section>

        <Link to="/" className={styles.backLink}>← Zurück zur Startseite</Link>
      </Container>
    </div>
  );
};

export default Impressum;
