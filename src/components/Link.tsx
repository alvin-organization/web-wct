import React from "react";

interface LinkProps {
  url: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ url, title, icon, className }) => {
  return (
    <div className="relative mx-2 bg-transparent">
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

interface LinkButtonProps {
  url: string;
  icon?: React.ReactNode;
}
export const LinkButton: React.FC<LinkButtonProps> = ({ url, icon }) => {
  return <a href={url}>{icon}</a>;
};

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

////
interface LinkProps {
  title: string;
}

interface LinkListProps {
  categories: { [key: string]: string[] };
}

export const LinkList: React.FC<LinkListProps> = ({ categories }) => {
  return (
    <div className="navbar-container-links">
      {Object.entries(categories).map(([category, items]) => (
        <div className="link-dropdown" key={category}>
          <a className="category-title">{category}</a>
          <div className="link-dropdown-content">
            {items.map((title, index) => (
              <a href=""> {title}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
