import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container/Container';
import styles from './Datenschutz.module.css';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Container>
        <Link to="/" className={styles.backLink}>← Zurück zur Startseite</Link>

          <article className={styles.content}>
            <h1 className={styles.title}>Datenschutzerklärung</h1>

            <p className={styles.intro}>
              Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <section className={styles.section}>
              <h2>1. Verantwortlicher</h2>
              <address className={styles.address}>
                <strong>EL Büroservice</strong><br />
                Inhaber: Eric Noel Lieberwirth<br />
                Kleiststraße 51<br />
                16552 Schildow<br />
                Deutschland
              </address>
              <p>
                Telefon: +49 162 5879152<br />
                E-Mail: <a href="mailto:el.service@gmx.de">el.service@gmx.de</a><br />
                Website: <a href="https://el-bueroservice.com">https://el-bueroservice.com</a>
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Beim Besuch dieser Website werden automatisch Informationen durch den Webserver erfasst. Diese Informationen sind:
              </p>
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p>
                Diese Daten sind technisch erforderlich, um die Website korrekt darzustellen, und lassen keine unmittelbaren Rückschlüsse auf Ihre Person zu.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Kontaktaufnahme / Kontaktformular</h2>
              <p>
                Wenn Sie mich per E-Mail oder über das Kontaktformular kontaktieren, werden Ihre Angaben aus dem Formular inklusive der angegebenen Kontaktdaten zur Bearbeitung der Anfrage verarbeitet.
              </p>
              <p>
                Das Kontaktformular wird über den Dienst <strong>Web3Forms</strong> bereitgestellt.
              </p>
              <p>
                Anbieter: Web3Forms (<a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">https://web3forms.com</a>)
              </p>
              <p>
                Die Verarbeitung der Daten erfolgt ausschließlich zur Bearbeitung Ihrer Anfrage gemäß Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Cookies</h2>
              <p>
                Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert.
              </p>
              <p>
                Cookies werden eingesetzt, um die Website nutzerfreundlicher, effektiver und sicherer zu machen sowie zukünftig Analyse- und Tracking-Funktionen bereitzustellen.
              </p>
              <p>
                Der Einsatz technisch nicht notwendiger Cookies (z. B. für Tracking oder Analytics) erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p>
                Ein entsprechendes Cookie-Consent-Banner wird eingesetzt.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Hosting über Vercel</h2>
              <p>
                Diese Website wird bei <strong>Vercel Inc.</strong> gehostet.
              </p>
              <p>
                Vercel verarbeitet personenbezogene Daten wie IP-Adressen und Metadaten im Rahmen der Bereitstellung und Auslieferung der Website.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung der Website).
              </p>
              <p>
                Vercel kann Daten in die USA übertragen. Die Datenübermittlung erfolgt auf Grundlage der EU-Standardvertragsklauseln.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul>
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerruf einer erteilten Einwilligung</li>
              </ul>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an mich wenden.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist in der Regel die Aufsichtsbehörde Ihres Wohnortes oder des Bundeslandes Brandenburg.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Tracking / Analytics (zukünftig)</h2>
              <p>
                Diese Website wird zukünftig Tracking- und Analyse-Tools einsetzen (z. B. Web-Analytics-Dienste), um das Nutzerverhalten besser zu verstehen und das Angebot zu optimieren.
              </p>
              <p>
                Die Nutzung erfolgt ausschließlich nach vorheriger Einwilligung über das Cookie-Consent-Banner gemäß Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand <strong>Januar 2026</strong>. Ich behalte mir vor, diese Datenschutzerklärung bei Änderungen der Website oder gesetzlicher Vorgaben anzupassen.
              </p>
            </section>
          </article>

          <Link to="/" className={styles.backLink}>← Zurück zur Startseite</Link>
        </Container>
      </div>
    );
};

export default Datenschutz;
