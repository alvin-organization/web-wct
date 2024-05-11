import React from "react";

//Link
interface LinkProps {
  url: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  url,
  title,
  icon,
  className,
  disabled,
}) => {
  return (
    <div
      className={`relative mx-2 ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pointer-events-none bg-transparent">
          {icon}
        </span>
      )}
      <a href={url} className={`link ${className} ${icon ? "ml-6" : ""}`}>
        {title}
      </a>
    </div>
  );
};

//Link Button
interface LinkButtonProps {
  url?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  icon,
  disabled,
  className,
}) => {
  return (
    <a
      href={url}
      className={` ${className} ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {icon}
    </a>
  );
};

//Link navigation
interface LinkProps {
  title: string;
  url: string;
}

interface LinkNavigationProps {
  links: LinkProps[];
}

export const LinkNavigation: React.FC<LinkNavigationProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

//Link disabled
interface LinkDisabledProps {
  title: string;
  icon?: React.ReactNode;
}

export const LinkDisabled: React.FC<LinkDisabledProps> = ({ title, icon }) => {
  return (
    <div className="relative mx-2 text-aprimary font-bold">
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pointer-events-none bg-transparent  ">
          {icon}
        </span>
      )}
      <a className={`${icon ? "ml-6" : ""}`}>{title}</a>
    </div>
  );
};
