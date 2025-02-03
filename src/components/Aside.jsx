import Project from "./Project";
import Button from "./Button";

export default function Aside({
  handleStartAddProject,


  projects,
  setProjects,
  closeStartScreen,
  openFormCreateProject,
}) {
  function handleClick() {
    closeStartScreen();
    openFormCreateProject();
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={handleStartAddProject}>
        + Add Project
      </Button>
      <ul className="mt-8">
        {projects?.map((item) => {
          return (
            <div key={item.title}>
              <Project item={item} projects={projects} setProjects={setProjects} />
            </div>
          );
        })}
      </ul>
    </aside>
  );
}
