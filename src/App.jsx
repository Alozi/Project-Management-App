import { useState } from "react";

import Aside from "./components/Aside";
import StartScreen from "./components/StartScreen";
import FormCreateProject from "./components/FormCreateProject";

function App() {
  const [isStartSreenOpen, setIsStartSreenOpen] = useState(true);
  const [projects, setProjects] = useState([]);
  
  console.log(projects);

  function openStartScreen() {
    setIsStartSreenOpen(false);
  }

  function closeStartScreen() {
    setIsStartSreenOpen(true);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Aside projects={projects} openStartScreen={openStartScreen} />
        <div id="container"></div>
        {isStartSreenOpen && <StartScreen openStartScreen={openStartScreen} />}
        {!isStartSreenOpen && <FormCreateProject projects={projects} setProjects={setProjects} closeStartScreen={closeStartScreen} />}
      </main>
    </>
  );
}

export default App;
