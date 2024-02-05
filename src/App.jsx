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

  const completedModulesList = modules.filter(module => module.completed);
  const notCompletedModulesList = modules.filter(module => !module.completed);

  return (
    <>
      <h1>ServiceNow Certified System Administrator - Course Progress</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="modules-container">
        <ul className="module-list completed">
          {completedModulesList.map((module, index) => (
            <li key={index}>
              <span className="module-icon">✔</span> {/* Use your icons */}
              {module.name}
            </li>
          ))}
        </ul>
        <ul className="module-list not-completed">
          {notCompletedModulesList.map((module, index) => (
            <li key={index}>
              <span className="module-icon">✘</span> {/* Use your icons */}
              {module.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
