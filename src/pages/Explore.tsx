import React, { useState, ChangeEvent } from "react";
import { Logo } from "../components/Logo";
import { FaSearch, FaTimes } from "react-icons/fa";
import Tag from "../components/Tag";
import MovieList from "../components/MovieList";

const Explore: React.FC = () => {
  const [formData, setFormData] = useState<{
    search: string;
    selectedGenres: string[];
  }>({
    search: "",
    selectedGenres: [], // Initialize selectedGenres as an empty array
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Initialize selectedTags as an empty array

  const handleChange = (inputType: string, newValue: string): void => {
    setFormData({
      ...formData,
      [inputType]: newValue,
    });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const selectedTagsString = selectedTags.join(", "); // Convert selected tags array to a comma-separated string
    const newValue = `${selectedTagsString} ${value}`; // Concatenate selected tags with search value
    handleChange("search", newValue);
  };

  const handleTagSelect = (tag: string): void => {
    let updatedSelectedTags: string[] = [];

    if (selectedTags.includes(tag)) {
      updatedSelectedTags = selectedTags.filter(
        (selectedTag) => selectedTag !== tag
      );
    } else {
      if (selectedTags.length < 3) {
        updatedSelectedTags = [...selectedTags, tag];
      } else {
        return;
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedGenres: updatedSelectedTags.slice(0, 3),
      search: updatedSelectedTags.join(", "), // Update search value with selected tags
    }));

    setSelectedTags(updatedSelectedTags);
  };

  return (
    <>
      <div className="w-full h-18 flex items-center justify-start ">
        <Logo />
        <form className="flex items-center justify-between text-lg border border-secondary px-4 py-1 rounded w-full">
          <div className="flex items-center w-full ">
            <FaSearch className="mr-4" />
            <input
              className="w-11/12 p-2 text-base bg-primary text-text rounded"
              placeholder="Search by selected tags"
              id="search"
              type="text"
              value={formData.search}
              readOnly
            />
          </div>
          <FaTimes className="right-0" />
        </form>
      </div>
      <div className="w-full h-72 border-x border-b border-secondary flex justify-between">
        <div className="border-r w-full py-2 px-3 ">
          <label>Genre</label>
          <div className="flex flex-wrap scrollbar-hide">
            <Tag label="Action" onSelect={handleTagSelect} />
            <Tag label="Comady" onSelect={handleTagSelect} />
          </div>
        </div>
        <div className="border-r w-full py-2 px-3">
          <label>TV-Show</label>
        </div>
        <div className="border-r w-full py-2 px-3">
          <label>Countries</label>
        </div>
        <div className="border-r w-full py-2 px-3">
          <label>Years</label>
        </div>
      </div>
      <div className="my-4"></div>
      <MovieList />
    </>
  );
};

export default Explore;
