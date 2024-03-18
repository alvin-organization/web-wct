import "./InputText.scss";

interface InputTextProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`input-text ${className}`}
    />
  );
};
