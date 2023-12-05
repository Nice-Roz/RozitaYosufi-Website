import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Search = ({ filterProjects }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  // The `handleSearch` function takes an event as a parameter, extracts the value from the input field,
  //  and then sets the `searchQuery` state to the extracted value. After that,
  // it calls the `filterProjects` function with the extracted value as an argument to filter the projects based on the search query.
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProjects(query);
  };
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder={t("search")}
          value={searchQuery}
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </form>
    </div>
  );
};

export default Search;
