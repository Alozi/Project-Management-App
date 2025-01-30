import { useRef } from "react";

import ProjectCard from "./ProjectCard";

export default function Project({item}) {
  const project = useRef();

  function showProjectCard() {
    project.current.open();
  }

  return (
    <>
      <ProjectCard ref={project} projectData={item} />
      <button
        onClick={showProjectCard}
        className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
      >
        {item.title}
      </button>
    </>
  );
}
