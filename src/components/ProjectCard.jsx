import { createPortal } from "react-dom";

export default function ProjectCard({ projectData }) {
  console.log('projectData');
  console.log(projectData);

  return createPortal(
    <div className="hidden">createPortal {projectData.title}</div>,
    document.getElementById("container")
  );
}
