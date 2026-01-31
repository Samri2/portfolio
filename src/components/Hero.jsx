import "../styles/Hero.css";
import heroImage from "../assets/1711611362666.jfif";
function Hero() {
  const purple = "#bb86fc";
  
  // 1. Reduced the top padding from 4rem to 1rem
  // 2. Kept the 10% side padding for that "inches from border" look
  const heroContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "1rem 10% 4rem 10%", 
    minHeight: "70vh" // Reduced from 80vh to pull everything up
  };

  const halfBoxStyle = {
    flex: "1",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };

  return (
    <section style={{ backgroundColor: "#141414", color: "#fff" }}>
      {/* Reduced vertical padding on the nav header to move content up */}
      <header className="hero-header" style={{ padding: "0.5rem 10%", marginBottom: "1rem" }}>
        <div className="hero-name" style={{ color: purple, fontWeight: "bold", fontSize: "1.5rem" }}>
          Samrawit Worku
        </div>
        <nav className="hero-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div style={heroContentStyle}>
        {/* LEFT BOX: Image (50%) */}
        <div style={{ ...halfBoxStyle, alignItems: "center" }}>
          <div className="hero-image-wrapper" style={{ width: "100%", maxWidth: "380px" }}>
            <img
              src={heroImage}
              alt="Samrawit Worku"
              style={{
                width: "100%",
                borderRadius: "50%",
                border: `4px solid ${purple}`,
                boxShadow: `0 0 20px ${purple}44`
              }}
            />
          </div>
        </div>

        {/* RIGHT BOX: Text (50%) */}
        <div style={halfBoxStyle}>
          <h1 style={{ color: purple, fontSize: "3rem", marginBottom: "0.5rem", marginTop: 0 }}>
            Hi, I'm Samrawit Worku
          </h1>
          <h2 style={{ color: purple, fontSize: "1.2rem", fontWeight: "400", opacity: 0.9 }}>
            Frontend Developer • Backend Developer • Fullstack Developer • IT Auditor • Penetration Tester
          </h2>
          <p style={{ lineHeight: "1.6", margin: "1rem 0", color: "#ccc" }}>
            I create efficient, scalable, and user-friendly web applications. 
            Specializing in MERN stack development and penetration testing.
          </p>
          
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <a href="#about" className="hero-button">See All</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;