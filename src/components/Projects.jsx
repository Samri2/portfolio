import React, { useState } from 'react';

function Projects() {
  const [filter, setFilter] = useState('All');

  const purple = "#bb86fc";
  const teal = "#03dac6";

  const projectData = [
    { 
      title: "Bank Dept. Document Sharing", 
      category: "Fullstack", 
      desc: "Secure PERN stack platform for internal bank document management. Uses Node, Express, and PostgreSQL.", 
      progress: "100%" 
    },
    { 
      title: "Live Exchange Rate Web App", 
      category: "Frontend", 
      desc: "Real-time currency tracking system built with React and Tailwind CSS, deployed on Vercel.", 
      progress: "100%" 
    },
    { 
      title: "Language Text-to-Speech", 
      category: "Frontend", 
      desc: "Accessibility tool converting text to natural speech with multi-language support and speed control.", 
      progress: "95%" 
    },
   
    { 
      title: "Internship & Career management System", 
      category: "Fullstack", 
      desc: "Web-based management system for university-industry linkages using PHP and SQL.", 
      progress: "100%" 
    },
    { 
      title: "Agricultural Web Portal", 
      category: "Fullstack", 
      desc: "Full-stack data management platform for agricultural tracking and reporting.", 
      progress: "90%" 
    },
  ];

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
            font-weight: 500;
          }
          .filter-btn.active { background: ${purple}; color: #141414; }
          .filter-btn:hover { background: rgba(187, 134, 252, 0.1); }
          .project-card:hover { transform: translateY(-10px); border-color: ${purple} !important; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        `}
      </style>

      <h2 style={{ color: purple, borderLeft: `4px solid ${purple}`, paddingLeft: "1rem", marginBottom: "0.5rem" }}>
        Proven Solutions
      </h2>
      <p style={{ color: "#aaa", marginBottom: "2rem" }}>A selection of my work in frontend and fullstack development.</p>

      {/* Filter Bar */}
      <div style={{ marginBottom: "3rem", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {['All', 'Frontend', 'Fullstack'].map(cat => (
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
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "25px" 
      }}>
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card" style={{
            backgroundColor: "#1e1e1e",
            padding: "1.8rem",
            borderRadius: "16px",
            border: "1px solid #333",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: purple, fontSize: "0.75rem", fontWeight: "bold", letterSpacing: "1px" }}>{project.category}</span>
                {project.progress === "100%" && <span style={{ color: teal, fontSize: "0.7rem" }}>● Deployed</span>}
              </div>
              <h3 style={{ color: "#fff", margin: "12px 0", fontSize: "1.4rem" }}>{project.title}</h3>
              <p style={{ color: "#aaa", fontSize: "0.95rem", lineHeight: "1.5" }}>{project.desc}</p>
            </div>
            
            <div style={{ marginTop: "25px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "8px", color: "#eee" }}>
                <span>Phase</span>
                <span>{project.progress === "100%" ? "Completed" : `In Progress (${project.progress})`}</span>
              </div>
              <div style={{ width: "100%", height: "4px", backgroundColor: "#333", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ width: project.progress, height: "100%", background: `linear-gradient(90deg, ${purple}, ${teal})` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;