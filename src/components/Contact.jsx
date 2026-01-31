function Contact() {
  const purple = "#bb86fc";
  const teal = "#03dac6";

  const sectionStyle = {
    padding: "5rem 10%",
    backgroundColor: "#141414",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "1.2rem",
    backgroundColor: "#1e1e1e",
    border: "1px solid #333",
    borderRadius: "8px",
    color: "#fff",
    outline: "none",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2
        style={{
          color: purple,
          borderLeft: `4px solid ${purple}`,
          paddingLeft: "1rem",
          marginBottom: "3rem",
        }}
      >
        Get In Touch
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
        }}
      >
        {/* LEFT BOX */}
        <div style={{ flex: "1 1 300px", maxWidth: "450px" }}>
          <h3 style={{ color: teal, marginTop: 0 }}>Let's Connect</h3>
          <p style={{ lineHeight: "1.6", color: "#ccc", fontSize: "1rem" }}>
            I'm currently open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>

          <h4 style={{ marginBottom: "1rem", marginTop: "2rem" }}>
            Connect with me
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="https://www.linkedin.com/in/samrawit-worku-31368a289"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: purple, textDecoration: "none" }}
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/Samri2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: purple, textDecoration: "none" }}
            >
              💻 GitHub
            </a>

            <a
              href="mailto:wsamrawit2@gmail.com"
              style={{ color: purple, textDecoration: "none" }}
            >
              📧 Email
            </a>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div style={{ flex: "1 1 350px", maxWidth: "500px" }}>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <textarea
              placeholder="Message"
              rows="4"
              style={inputStyle}
            ></textarea>

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: teal,
                  padding: "12px 35px",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
