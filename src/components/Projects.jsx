import React, { useState } from 'react';

function Projects() {
  const [filter, setFilter] = useState('All'); // State to track the current filter

  const purple = "#bb86fc";
  const teal = "#03dac6";

  const projectData = [
    { title: "Hotel Store Management", category: "Fullstack", desc: "MERN stack system managing hotel inventory.", progress: "85%" },
    { title: "Hotel Management System", category: "Fullstack", desc: "Handles reservations, billing, and customers.", progress: "90%" },
    { title: "Netflix Clone", category: "Frontend", desc: "Streaming platform with video playback and UI.", progress: "80%" },
    { title: "E-commerce Platform", category: "Fullstack", desc: "Marketplace with auth and secure payments.", progress: "95%" },
    { title: "Android Pen Testing", category: "Mobile", desc: "Security auditing of Amole, Hibir, and ADFA.", progress: "85%" },
    { title: "Calculator App", category: "Mobile", desc: "Java-based Android arithmetic operations.", progress: "75%" },
  ];

  // Logic to filter projects based on selection
  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: "4rem 10%", backgroundColor: "#141414", color: "#fff" }}>
      <style>
        {`
          .filter-btn { 
            background: none; 
            border: 1px solid ${purple}; 
            color: ${purple}; 
            padding: 8px 20px; 
            border-radius: 20px; 
            cursor: pointer; 
            margin-right: 15px; 
            transition: 0.3s; 
          }
          .filter-btn.active { background: ${purple}; color: #141414; }
          .project-card:hover { transform: translateY(-10px); border-color: ${purple}; }
        `}
      </style>

      <h2 style={{ color: purple, borderLeft: `4px solid ${purple}`, paddingLeft: "1rem", marginBottom: "2rem" }}>
        My Projects
      </h2>

      {/* Filter Bar */}
      <div style={{ marginBottom: "3rem" }}>
        {['All', 'Frontend', 'Fullstack', 'Mobile'].map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "20px" 
      }}>
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card" style={{
            backgroundColor: "#1e1e1e",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "1px solid #333",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "0.3s"
          }}>
            <div>
              <span style={{ color: purple, fontSize: "0.7rem", textTransform: "uppercase" }}>{project.category}</span>
              <h3 style={{ color: teal, margin: "10px 0" }}>{project.title}</h3>
              <p style={{ color: "#ccc", fontSize: "0.9rem" }}>{project.desc}</p>
            </div>
            
            <div style={{ marginTop: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "5px" }}>
                <span>Completion</span>
                <span>{project.progress}</span>
              </div>
              <div style={{ width: "100%", height: "6px", backgroundColor: "#333", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ width: project.progress, height: "100%", background: purple }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;