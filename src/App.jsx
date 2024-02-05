import React from 'react'
import './App.css'

// Sample data for modules and sections
const modules = [
  { name: "Module 1: The Modernized Work Experience", completed: true },
  { name: "Module 2: Explore the Power of the ServiceNow Platform", completed: true },
  { name: "Module 3: Configure Applications for Business", completed: false },
  { name: "Module 4: Configure Self Service", completed: false },
  { name: "Module 5: Enable Productivity", completed: false },
  { name: "Module 6: Manage an Instance", completed: false },
  { name: "Module 7: Manage Data", completed: false },
  { name: "Module 8: Package Enhancements for Testing", completed: false },
  { name: "Module 9: Captone Project", completed: false },
];

function App() {
  // Calculate the progress
  const totalModules = modules.length;
  const completedModules = modules.filter(module => module.completed).length;
  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <>
      <h1>Course Progress</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <ul className="module-list">
        {modules.map((module, index) => (
          <li key={index}>
            <span className="module-icon">
              {module.completed ? "✔" : "✘"} {/* Use your icons */}
            </span>
            {module.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
