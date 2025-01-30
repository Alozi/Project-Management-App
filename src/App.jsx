import { useState } from "react";

import Aside from "./components/Aside";
import StartScreen from "./components/StartScreen";
import FormCreateProject from "./components/FormCreateProject";

function App() {
  const [isStartSreenOpen, setIsStartSreenOpen] = useState(true);
  const [isFormCreateProjectOpen, setIsFormCreateProjectOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  // console.log('projects');
  // console.log(projects);

  function openStartScreen() {
    setIsStartSreenOpen(true);
  }

  function closeStartScreen() {
    setIsStartSreenOpen(false);
  }

  function openFormCreateProject() {
    setIsFormCreateProjectOpen(true);
  }

  function closeFormCreateProject() {
    setIsFormCreateProjectOpen(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside
        projects={projects}
        setProjects={setProjects}
        closeStartScreen={closeStartScreen}
        openFormCreateProject={openFormCreateProject}
      />
      {isStartSreenOpen && (
        <StartScreen
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
      <div id="container"></div>
    </main>
  );
}

export default App;
