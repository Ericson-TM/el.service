import styles from './Section.module.css';

const Section = ({ children, id, variant = 'default', className = '' }) => {
  const variantClass = styles[variant] || styles.default;

  return (
    <section id={id} className={`${styles.section} ${variantClass} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
