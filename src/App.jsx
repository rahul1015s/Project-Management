import React from "react"
import {useState} from 'react';
import ProjectSidebar from "./Components/ProjectSidebar.jsx"
import NewProject from "./Components/NewProject.jsx"
import NoProjectSelected from "./Components/NoProjectSelected.jsx"
import SelectedProject from "./Components/SelectedProject.jsx";
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

 function  handleSelectProject (id) {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: id,
    };
  });
 }


  function handleCancleAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
     const projectId =   Math.random();
      const newProject = {
        ...projectData, 
        id:projectId,
      }

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject ]
      };
    });
  }

const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject project={selectedProject}/>;
  
  if(projectsState.selectedProjectId === null) {
    content= <NewProject onAdd={handleAddProject} onCancle={handleCancleAddProject}/>
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  

  return (
    <main className="h-screen my-8 flex gap-8 bg-stone-275">
     <ProjectSidebar 
        onStartAddProject={handleStartAddProject}
         projects={projectsState.projects}
         onSelectProject={handleSelectProject}/>
     {content}
    </main>
  )
}

export default App
