import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function FormCreateProject({
  onAdd,
  setProjects,
  openStartScreen,
  closeFormCreateProject,
}) {
  const modal = useRef();
  const projectTitle = useRef("");
  const projectDesc = useRef("");
  const projectDate = useRef("");

  function handleSaveClick() {
    const enteredTitle = projectTitle.current.value;
    const enteredDescription = projectDesc.current.value;
    const enteredDate = projectDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });

    // if (
    //   projectTitle.current.value != "" &&
    //   projectDesc.current.value != "" &&
    //   projectDate.current.value != ""
    // ) {
    //   setProjects((prevProjects) => {
    //     return [
    //       ...prevProjects,
    //       {
    //         title: projectTitle.current.value,
    //         desc: projectDesc.current.value,
    //         date: projectDate.current.value,
    //       },
    //     ];
    //   });

    //   closeFormCreateProject();
    //   openStartScreen();
    // }
  }

  function handleCancelClick() {
    // closeFormCreateProject();
    // openStartScreen();
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
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
          <Input ref={projectTitle} label="Title*" type="text" />
          <Input ref={projectDesc} label="Description**" isTextarea={true} />
          <Input ref={projectDate} label="Due Date*" type="date" />
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
    </>
  );
}
