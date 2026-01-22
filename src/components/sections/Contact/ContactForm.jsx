import { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './Contact.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Get the Web3Forms access key from environment variables
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey || accessKey === 'your_access_key_here') {
        throw new Error('Web3Forms-Zugriffsschlüssel nicht konfiguriert. Bitte fügen Sie VITE_WEB3FORMS_ACCESS_KEY zu Ihrer .env-Datei hinzu.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Neue Kontaktformular-Nachricht',
          message: formData.message,
          from_name: 'Portfolio Kontaktformular',
          // Honeypot field (hidden from users)
          botcheck: ''
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Vielen Dank für Ihre Nachricht! Ich werde mich innerhalb von 24 Stunden bei Ihnen melden.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Honeypot field for spam protection (hidden from users) */}
      <input
        type="checkbox"
        name="botcheck"
        className={styles.hidden}
        style={{ display: 'none' }}
      />

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Ihr vollständiger Name"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          E-Mail <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="ihre.email@beispiel.de"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Betreff
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
          placeholder="Wie kann ich Ihnen helfen?"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Nachricht <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className={styles.textarea}
          placeholder="Erzählen Sie mir von Ihrem Projekt oder Ihrer Anfrage..."
        ></textarea>
      </div>

      {status.message && (
        <div className={`${styles.statusMessage} ${styles[status.type]}`}>
          {status.message}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="large"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  );
};

export default ContactForm;
