import React from "react"
import {useState} from 'react';
import ProjectSidebar from "./Components/ProjectSidebar.jsx"
import NewProject from "./Components/NewProject.jsx"
import NoProjectSelected from "./Components/NoProjectSelected.jsx"
function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, 
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  
  if(projectsState.selectedProjectId === null) {
    content= <NewProject />
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  

  return (
    <main className="h-screen my-8 flex gap-8 bg-stone-275">
     <ProjectSidebar onStartAddProject={handleStartAddProject}/>
     {content}
    </main>
  )
}

export default App
