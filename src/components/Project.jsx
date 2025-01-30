import { useRef } from "react";

import ProjectCard from "./ProjectCard";

export default function Project({ item, projects, setProjects }) {
  const project = useRef();

  function showProjectCard() {
    project.current.open();
  }

  return (
    <>
      <ProjectCard ref={project} projectData={item} projects={projects} setProjects={setProjects} />
      <button
        onClick={showProjectCard}
        className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
      >
        {item.title}
      </button>
    </>
  );
}
