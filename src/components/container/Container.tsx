import React from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode; // Define children property explicitly
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return <div className={`container ${className}`}>{children}</div>;
};
