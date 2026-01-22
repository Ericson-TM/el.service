import Card from '../../common/Card/Card';
import styles from './Services.module.css';

const ServiceCard = ({ service }) => {
  return (
    <Card hover={true}>
      <div className={styles.serviceCard}>
        <div className={styles.serviceIcon}>{service.icon}</div>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
