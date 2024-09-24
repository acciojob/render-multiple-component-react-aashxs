import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [projects, setProjects] = useState([
    { name: 'Project 1', description: 'This is project 1' },
    { name: 'Project 2', description: 'This is project 2' },
    // Add more projects as you see fit
  ]);
  return (
    <div className="App">
    {projects.map((project, index) => (
      <div key={index}>
        <h1 data-ns-test="project-name">{project.name}</h1>
        <p data-ns-test="project-description">{project.description}</p>
      </div>
    ))}
  </div>
  )
}


export default App;
