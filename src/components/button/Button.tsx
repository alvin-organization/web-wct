import "./Button.scss"; // Import SASS file for styling

interface ButtonProps {
  onClick?: () => void; // Optional click handler
  disabled?: boolean; // Optional disabled state
  className?: string; // Optional additional class names
  textButton?: string; // Optional text content
  iconButton?: React.ReactNode; // Optional icon component or element
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  className,
  textButton,
  iconButton,
}) => {
  return (
    <button
      className={`button ${className}`} // Apply additional class names if provided
      onClick={onClick} // Pass onClick handler if provided
      disabled={disabled} // Pass disabled state if provided
    >
      {iconButton && <span className="icon">{iconButton}</span>}
      {textButton}
    </button>
  );
};

export default Button;
