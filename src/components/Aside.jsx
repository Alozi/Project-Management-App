import { useRef } from "react";

import ProjectCard from "./ProjectCard";

export default function Aside({
  projects,
  closeStartScreen,
  openFormCreateProject,
}) {
  const project = useRef();

  function handleClick() {
    closeStartScreen();
    openFormCreateProject();
  }

  function showProjectCard(title, desc, date) {
    console.log('showProjectCard');
    project.current.open();
    // console.log(title);
    // console.log(desc);
    // console.log(date);
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <ul className="mt-8">
        {projects.map((item) => {
          return (
            <div key={item.title}>
              <ProjectCard ref={project} projectData={item} />
              <button onClick={showProjectCard} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                {item.title}
              </button>
            </div>
          );
        })}
      </ul>
    </aside>
  );
}
