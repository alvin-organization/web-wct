import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

interface TagProps {
  label?: string;
  onSelect: (label: string) => void;
}

const Tag: React.FC<TagProps> = ({ label = "", onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onSelect(label);
  };

  return (
    <div
      className={`border border-aprimary px-4 py-1 m-2 flex items-center justify-center ${
        selected ? "bg-aprimary" : "bg-primary"
      }`}
      onClick={handleClick}
    >
      {selected ? (
        <>
          <p className="text-base mr-2 bg-aprimary">{label}</p>
          <FaTimes className="bg-aprimary" />
        </>
      ) : (
        <>
          <p className="text-base mr-2 flex items-center">{label}</p>
          <FaCheck />
        </>
      )}
    </div>
  );
};

export default Tag;
