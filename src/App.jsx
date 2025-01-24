import { useState } from "react";

import Aside from "./components/Aside";
import StartScreen from "./components/StartScreen";
import FormCreateProject from "./components/FormCreateProject";

function App() {
  const [isStartSreenOpen, setIsStartSreenOpen] = useState(true);
  const [isFormCreateProjectOpen, setIsFormCreateProjectOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  
  console.log(projects);

  console.log('isStartSreenOpen');
  console.log(isStartSreenOpen);

  console.log('isFormCreateProjectOpen');
  console.log(isFormCreateProjectOpen);

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
    <>
      <main className="h-screen my-8 flex gap-8">
        <Aside projects={projects} closeStartScreen={closeStartScreen} openFormCreateProject={openFormCreateProject} />
        <div id="container"></div>
        {isStartSreenOpen && <StartScreen closeStartScreen={closeStartScreen} openFormCreateProject={openFormCreateProject} />}
        {isFormCreateProjectOpen && <FormCreateProject setProjects={setProjects} openStartScreen={openStartScreen} closeFormCreateProject={closeFormCreateProject} />}
      </main>
    </>
  );
}

export default App;
