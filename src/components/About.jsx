import heroImage from "../assets/69-front-end-web-development-certificate-samrawit-worku (1).png";
import heroImagee from "../assets/89-professional-foundations-certificate-samrawit-belete (2).png";
import heroImageee from "../assets/Capture.PNG";

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
          
          </p>I build secure, scalable, and user-friendly web experiences. With ui/ux experiece in figma, frontend web development and a background in Banking IT Audit and a passion for React.js, I bridge the gap between robust security and modern frontend design.
          <p style={{ lineHeight: "1.8" }}>
           
          </p>
        </div>

        {/* Right: Skills with Loading Animation */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ color: teal, borderLeft: `4px solid ${teal}`, paddingLeft: "1rem" }}>Skills</h2>
          
          <div style={{ marginTop: "2rem" }}>
  {/* The Frontend Skill */}
  <label>React.js & Frontend Architecture - 90%</label>
  <div style={skillBarContainer}>
    <div className="skill-fill" style={{ "--progress": "90%" }}></div>
  </div>
  <label>UI/UX in Figma - 90%</label>
  <div style={skillBarContainer}>
    <div className="skill-fill" style={{ "--progress": "90%" }}></div>
  </div>
  {/* The Backend/Database Skill */}
  <label>Backend Development (Node.js & PostgreSQL) - 85%</label>
  <div style={skillBarContainer}>
    <div className="skill-fill" style={{ "--progress": "85%" }}></div>
  </div>

  {/* The Banking-Specific Skill */}
  <label>Application Security & OWASP Standards - 80%</label>
  <div style={skillBarContainer}>
    <div className="skill-fill" style={{ "--progress": "80%" }}></div>
  </div>

  {/* The Tooling Skill */}
  <label>API Testing (Postman) & Git - 90%</label>
  <div style={skillBarContainer}>
    <div className="skill-fill" style={{ "--progress": "90%" }}></div>
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
             <img src={heroImage} alt="React Cert" className="cert-img" style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }} />
             <p style={{ marginTop: "10px" }}>frontend web development-ALX</p>
          </div>
          <div className="cert-card" style={{ textAlign: 'center' }}>
             <img src={heroImagee} alt="IBM Cert" className="cert-img" style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }} />
             <p style={{ marginTop: "10px" }}>Professional Development Skill-ALX</p>
          </div>
          <div className="cert-card" style={{ textAlign: 'center' }}>
             <img src={heroImageee} alt="Marketing Cert" className="cert-img" style={{ width: "100%", borderRadius: "8px", transition: "0.3s" }} />
             <p style={{ marginTop: "10px" }}>Leadership and Fundamentals of Banking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;