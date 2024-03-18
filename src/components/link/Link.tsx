import React from "react";
import "./Link.scss";

interface LinkProps {
  url: string;
  title: string;
}

export const Link: React.FC<LinkProps> = ({ url, title }) => {
  return <a href={url}>{title}</a>;
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
