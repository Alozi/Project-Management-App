import { useState } from "react";

import Aside from "./components/Aside";
import StartScreen from "./components/StartScreen";
import FormCreateProject from "./components/FormCreateProject";

function App() {
  const [noProjects, setNoProjects] = useState(true);

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Aside />
        {noProjects && <StartScreen />}
      </main>
    </>
  );
}

export default App;
