function About() {
  const purple = "#bb86fc";
  const teal = "#03dac6";

  const sectionStyle = {
    padding: "5rem 10%", // This creates the "inches" (margin) from the screen edge
    backgroundColor: "#141414",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const skillBarContainer = {
    width: "100%",
    backgroundColor: "#333",
    borderRadius: "10px",
    margin: "10px 0 20px 0",
    height: "10px",
    overflow: "hidden"
  };

  return (
    <section id="about" style={sectionStyle}>
      {/* Keyframe Animation for Skill Bars */}
      <style>
        {`
          @keyframes load {
            from { width: 0%; }
            to { width: var(--progress); }
          }
          .skill-fill {
            height: 100%;
            background: linear-gradient(90deg, ${purple}, ${teal});
            animation: load 2s ease-out forwards;
          }
          .cert-img:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px ${purple};
          }
        `}
      </style>

      {/* --- ABOUT & SKILLS (Equal 50/50 Split) --- */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", marginBottom: "6rem" }}>
        
        {/* Left: Who Am I */}
        <div style={{ flex: "1", minWidth: "300px", paddingRight: "2rem" }}>
          <h2 style={{ color: purple, borderLeft: `4px solid ${purple}`, paddingLeft: "1rem" }}>Who am I?</h2>
          <p style={{ lineHeight: "1.8", marginTop: "2rem" }}>
            I am a Software Engineering student at <strong>Wolaita sodo University</strong>, 
            specializing in full-stack development and cybersecurity(IS Audit).
          </p>
          <p style={{ lineHeight: "1.8" }}>
            My experience includes a <strong>4-month internship at INSA</strong>, conducting security testing for mobile apps.
          </p>
        </div>

        {/* Right: Skills with Loading Animation */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ color: teal, borderLeft: `4px solid ${teal}`, paddingLeft: "1rem" }}>Skills</h2>
          
          <div style={{ marginTop: "2rem" }}>
            <label>MERN Stack - 90%</label>
            <div style={skillBarContainer}>
              <div className="skill-fill" style={{ "--progress": "90%" }}></div>
            </div>

            <label>Penetration Testing - 85%</label>
            <div style={skillBarContainer}>
              <div className="skill-fill" style={{ "--progress": "85%" }}></div>
            </div>

            <label>React / Node.js - 95%</label>
            <div style={skillBarContainer}>
              <div className="skill-fill" style={{ "--progress": "95%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CERTIFICATIONS (Image Grid) --- */}
      <div>
        <h2 style={{ color: purple, borderBottom: `2px solid ${purple}`, display: "inline-block", marginBottom: "2rem" }}>
          Certifications
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "20px" 
        }}>
          {/* Replace the src with your actual image paths */}
          <div className="cert-card" style={{ textAlign: 'center' }}>
             <img src="https://via.placeholder.com/300x200?text=Udemy+React" alt="React Cert" className="cert-img" style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }} />
             <p style={{ marginTop: "10px" }}>React - Udemy</p>
          </div>
          <div className="cert-card" style={{ textAlign: 'center' }}>
             <img src="https://via.placeholder.com/300x200?text=IBM+Project+Mgmt" alt="IBM Cert" className="cert-img" style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }} />
             <p style={{ marginTop: "10px" }}>Project Management - IBM</p>
          </div>
          <div className="cert-card" style={{ textAlign: 'center' }}>
             <img src="https://via.placeholder.com/300x200?text=Udemy+Marketing" alt="Marketing Cert" className="cert-img" style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }} />
             <p style={{ marginTop: "10px" }}>Digital Marketing - Udemy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;