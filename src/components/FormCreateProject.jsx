import { useRef } from "react";

import Input from "./Input";

export default function FormCreateProject({
  setProjects,
  openStartScreen,
  closeFormCreateProject,
}) {
  const projectTitle = useRef("");
  const projectDesc = useRef("");
  const projectDate = useRef("");

  function handleSaveClick() {
    if (
      projectTitle.current.value != "" &&
      projectDesc.current.value != "" &&
      projectDate.current.value != ""
    ) {
      setProjects((prevProjects) => {
        return [
          ...prevProjects,
          {
            title: projectTitle.current.value,
            desc: projectDesc.current.value,
            date: projectDate.current.value,
          },
        ];
      });

      closeFormCreateProject();
      openStartScreen();
    }
  }

  function handleCancelClick() {
    closeFormCreateProject();
    openStartScreen();
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={handleCancelClick}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSaveClick}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title*" type="text" />
        <Input label="Description**" isTextarea={true} />
        <Input label="Due Date*" type="date" />
        {/* <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            Title*
          </label>
          <input
            ref={projectTitle}
            type="text"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            Description*
          </label>
          <textarea
            ref={projectDesc}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p>
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            Due Date*
          </label>
          <input
            ref={projectDate}
            type="date"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </p> */}
      </div>
      <p className="mt-4 text-sm font-bold uppercase text-stone-500 text-right underline underline-offset-2">
        * - this input shoudn't be empty
      </p>
    </div>
  );
}
