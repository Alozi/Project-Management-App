import { createPortal } from "react-dom";
import { useImperativeHandle, useState, useRef } from "react";

export default function ProjectCard({ ref, projectData }) {
  const [projectTasks, setProjectTasks] = useState([]);
  const projectCard = useRef();
  const newTask = useRef("");

  useImperativeHandle(ref, () => {
    return {
      open() {
        projectCard.current.className = "";
      },
    };
  });

  function handleClick() {
    if (
      newTask.current.value != "" &&
      newTask.current.value != null &&
      newTask.current.value != undefined
    ) {
      setProjectTasks(
        // Replace the state
        [
          // with a new array
          ...projectTasks, // that contains all the old items
          newTask.current.value, // and one new item at the end
        ]
      );
    }
    newTask.current.value = "";
  }

  function HandleClickClear(item) {
    let indexToDelete = projectTasks.indexOf(item);
    const updatedItems = [
      ...projectTasks.slice(0, indexToDelete),
      ...projectTasks.slice(indexToDelete + 1),
    ];
    setProjectTasks(updatedItems);
  }

  function HandleDeleteProject() {
    console.log('delete');
  }

  return createPortal(
    <div ref={projectCard} className="hidden">
      <h1 className="text-xl font-bold text-stone-700 my-4">
        {projectData.title}
      </h1>
      <button onClick={HandleDeleteProject} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">Delete</button>
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        {projectData.date}
      </h2>
      <p className="text-stone-600 whitespace-pre-wrap">{projectData.desc}</p>
      <p className="mb-4 text-stone-400">Tasks</p>
      <div className="flex items-center gap-4">
        <input
          ref={newTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {projectTasks.length > 0 ? (
        <div className="w-[35rem] mt-16">
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {projectTasks.map((item) => {
              return (
                <li className="flex justify-between my-4" key={item}>
                  {item}
                  <button
                    onClick={() => {
                      HandleClickClear(item);
                    }}
                    className="text-stone-700 hover:text-red-500"
                  >
                    Clear
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        "This project does not have any task yet."
      )}
    </div>,
    document.getElementById("container")
  );
}
