import { useState } from "react";
import "../Styles/searchBar.css";

interface SearchProps {
  onSearch: (cityName: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          placeholder="City Name"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SearchBar;
