import { useState } from "react";

import Aside from "./components/Aside";
import NoProjectSelected from "./components/NoProjectSelected";
import FormCreateProject from "./components/FormCreateProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  console.log(projectsState);

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {

      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <FormCreateProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected handleStartAddProject={handleStartAddProject} />
    );
  }

  // const [isStartSreenOpen, setIsStartSreenOpen] = useState(true);
  // const [isFormCreateProjectOpen, setIsFormCreateProjectOpen] = useState(false);
  // const [projects, setProjects] = useState([]);

  // // console.log('projects');
  // // console.log(projects);

  // function openStartScreen() {
  //   setIsStartSreenOpen(true);
  // }

  // function closeStartScreen() {
  //   setIsStartSreenOpen(false);
  // }

  // function openFormCreateProject() {
  //   setIsFormCreateProjectOpen(true);
  // }

  // function closeFormCreateProject() {
  //   setIsFormCreateProjectOpen(false);
  // }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside handleStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}

      {/* <Aside
        projects={projects}
        setProjects={setProjects}
        closeStartScreen={closeStartScreen}
        openFormCreateProject={openFormCreateProject}
      />
      {isStartSreenOpen && (
        <NoProjectSelected
          closeStartScreen={closeStartScreen}
          openFormCreateProject={openFormCreateProject}
        />
      )}
      {isFormCreateProjectOpen && (
        <FormCreateProject
          setProjects={setProjects}
          openStartScreen={openStartScreen}
          closeFormCreateProject={closeFormCreateProject}
        />
      )}
      <div id="container"></div> */}
    </main>
  );
}

export default App;
