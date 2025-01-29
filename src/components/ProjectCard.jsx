import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";

export default function ProjectCard({ ref, projectData }) {
  const projectCard = useRef();

  console.log("projectData");
  console.log(projectData);

  useImperativeHandle(ref, () => {
    return {
      open() {
        projectCard.current.className = '';
        console.log('test');
      },
    };
  });

  console.log('ref');
  console.log(ref);

  return createPortal(
    <div ref={projectCard} className="hidden">createPortal {projectData.title} </div>,
    document.getElementById("container")
  );
}
