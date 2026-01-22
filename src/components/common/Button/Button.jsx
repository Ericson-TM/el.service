import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.medium;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
