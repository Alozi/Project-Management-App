import { useState, useRef } from "react";

export default function FormCreateProject() {
  const projectTitle = useRef("");
  const projectDesc = useRef("");
  const projectDate = useRef("");

  const [newProject, setNewProject] = useState({
    title: "",
    desc: "",
    date: "",
  });

  function handleClick() {
    setNewProject(() => {
      return {
        title: projectTitle.current.value,
        desc: projectDesc.current.value,
        date: projectDate.current.value,
      };
    });
  }

  console.log(newProject);

  return (
    <div>
      <p className="flex gap-1 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={handleClick}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </p>
      <label className="text-sm font-bold uppercase text-stone-500">
        Title
      </label>
      <input
        ref={projectTitle}
        type="text"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <label className="text-sm font-bold uppercase text-stone-500">
        Description
      </label>
      <textarea
        ref={projectDesc}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <label className="text-sm font-bold uppercase text-stone-500">
        Due Date
      </label>
      <input
        ref={projectDate}
        type="date"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </div>
  );
}
