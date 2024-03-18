interface LabelProps {
  htmlFor: string;
  className?: string;
  textLabel?: string;
}

export const LabelInput: React.FC<LabelProps> = ({
  htmlFor,
  className,
  textLabel,
}) => {
  return (
    <label htmlFor={htmlFor} className={`label-input ${className}`}>
      {textLabel}
    </label>
  );
};

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  className,
  textLabel,
}) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {textLabel}
    </label>
  );
};

export const LabelCategory: React.FC<LabelProps> = ({
  htmlFor,
  className,
  textLabel,
}) => {
  return (
    <div className="label-movie">
      <label htmlFor={htmlFor} className={`Label-category ${className}`}>
        {textLabel}
      </label>
    </div>
  );
};
