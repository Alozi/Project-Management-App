import { useState } from "react";

import Aside from "./components/Aside";
import StartScreen from "./components/StartScreen";
import FormCreateProject from "./components/FormCreateProject";

function App() {
  const [isStartSreenOpen, setIsStartSreenOpen] = useState(true);
  const [projects, setProjects] = useState([]);
  
  console.log(projects);

  function createNewProject() {
    setIsStartSreenOpen(false);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Aside projects={projects} createNewProject={createNewProject} />
        {isStartSreenOpen && <StartScreen createNewProject={createNewProject} />}
        {!isStartSreenOpen && <FormCreateProject projects={projects} setProjects={setProjects} />}
      </main>
    </>
  );
}

export default App;
