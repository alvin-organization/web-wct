import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "./Link";

interface LabelProps {
  htmlFor?: string;
  className?: string;
  value?: string;
  link?: boolean;
  background?: boolean;
}

//Label for input
export const LabelSm: React.FC<LabelProps> = ({ htmlFor, value }) => {
  return (
    <label htmlFor={htmlFor} className="text-base bg-transparent">
      {value}
    </label>
  );
};

//Label for Main title
export const Label: React.FC<LabelProps> = ({ htmlFor, value }) => {
  return (
    <label htmlFor={htmlFor} className="text-3xl tex-start m-2 font-bold">
      {value}
    </label>
  );
};

//Label for movie genre
export const LabelC: React.FC<LabelProps> = ({
  htmlFor,
  value,
  link,
  className,
  background,
}) => {
  return (
    <>
      {background ? (
        <div className="bg-aprimary w-full h-10 flex items-center justify-between px-3">
          <label className={`bg-transparent ${className}`} htmlFor={htmlFor}>
            {value}
          </label>
          {link && (
            <span className="flex items-center justify-center bg-transparent text-lg">
              <FaAngleDoubleRight
                style={{ backgroundColor: "transparent", marginRight: "4px" }}
              />
              <a href={`/movies/${value}`} className="link-bg-red">
                See more
              </a>
            </span>
          )}
        </div>
      ) : (
        <label className={`bg-transparent ${className}`} htmlFor={htmlFor}>
          {value}
        </label>
      )}
    </>
  );
};
