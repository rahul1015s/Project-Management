import React, { useState } from "react";
import ProjectSidebar from "./Components/ProjectSidebar.jsx";
import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {
   // yeh hai initial state jisme selectedProjectId (jo project select hua hai), 
  // projects ki list, aur tasks ki list store hogi.
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //Agar koi project selected nahi hai, toh undefined
    projects: [], // Yeh sab projects ki list hai
    tasks: [], // Yeh tasks ki list hai
  });

  // Task add karne ka function, jo selected project ke liye task create karega
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Date.now(); // Using timestamp as unique ID
      const newTask = {
        text,
        projectId: prevState.selectedProjectId, // Yeh task kis project ka hai
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks], // Naya task sab tasks ke saath add karenge
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return{...prevState,
        tasks: prevState.tasks.filter(
          (tasks) => tasks.id !== id),
        }; 
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

   // Jab project ko select karna ho toh yeh function call hoga
  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id, // Yeh selectedProjectId ko update kar dega
    }));
  }

  function handleCancleAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined, // Yaha cancel karte time koi project select nahi rahega
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Date.now(); // Unique ID for project
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // Jo content render hoga wo yeh decide karega, selected project ke hisaab se
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProjectId
      )} // Show only tasks for the selected project
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancle={handleCancleAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 bg-stone-275">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
