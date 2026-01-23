import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import styles from './Portfolio.module.css';

const ProjectCard = ({ project }) => {
  return (
    <Card hover={true}>
      <div className={styles.projectCard}>
        <div className={styles.projectImagePlaceholder}>
          <div className={styles.projectCategory}>{project.category}</div>
          <div className={styles.projectImageIcon}>{project.icon || '📁'}</div>
        </div>
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.projectTechnologies}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <Button variant="outline" size="small">
                Projekt ansehen
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
