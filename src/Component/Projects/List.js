import { useState } from "react";
import "./Projects.css";
import Search from "./Search";

const List = ({ list, filterItems, filterProjects }) => {
  const [active, setActive] = useState(0);
  const handleSearchFilter = (query) => {
    filterProjects(query);
  };
  return (
    <div className="project-list">
      {list.map((category, index) => {
        return (
          <button
            className={`${
              active === index ? "active-work" : ""
            } project-list-item text-cs`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
      <Search filterProjects={handleSearchFilter} />
    </div>
  );
};

export default List;
