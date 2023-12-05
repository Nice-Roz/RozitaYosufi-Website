import React from "react";
import "./Projects.css";
import { projects } from "../../data/ProjectData";
import { useState } from "react";
import List from "./List";
import Items from "./Items";
import "../../App.css";
import Text from "../Text/Text";

const allNavList = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
const Projects = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setMenuItems(newProjectItems);
  };

  const filterProjects = (query) => {
    const filteredProjects = projects.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setMenuItems(filteredProjects);
  };
  return (
    <div id="Project">
      <section id="project" className="project section ">
        <div className="container">
          <div className="projects-title ">
            <Text text={"My Project"} />
            <hr />
          </div>
          <List
            list={navList}
            filterItems={filterItems}
            filterProjects={filterProjects}
          />
          <div className="project-container  ">
            <div>
              <Items projectItems={projectItems} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
