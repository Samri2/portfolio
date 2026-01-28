function Footer() {
  const purple = "#bb86fc";
  const teal = "#03dac6";

  const footerStyle = {
    padding: "3rem 20%", 
    backgroundColor: "#101010",
    color: "#fff",
    borderTop: "1px solid #333",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    fontSize: "0.85rem" // Smaller text size for the entire footer
  };

  const linkStyle = {
    color: purple,
    textDecoration: "none",
    fontSize: "0.85rem",
    transition: "0.3s"
  };

  return (
    <footer style={footerStyle}>
      {/* 1. Copyright Line */}
      <p style={{ marginBottom: "1rem", opacity: 0.7 }}>
        © 2026 My Portfolio. All rights reserved.
      </p>

      {/* 2. Icons Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "1.5rem" }}>
        <a href="https://github.com/yourusername" style={linkStyle}>
           <i className="fab fa-github" style={{ fontSize: "1.2rem" }}></i> GitHub
        </a>
        <a href="https://t.me/Samri128_07" style={linkStyle}>
           <i className="fab fa-telegram" style={{ fontSize: "1.2rem" }}></i> Telegram
        </a>
      </div>

      {/* 3. Made With & Email */}
      <p style={{ marginBottom: "0.5rem" }}>
        Made with ❤️ by <span style={{ color: purple }}>Samrawit Worku</span> | 
        Contact me: <a href="mailto:Wsamrawit2@gmail.com" style={linkStyle}>Wsamrawit2@gmail.com</a>
      </p>

      {/* 4. Phone & Telegram Handle */}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", opacity: 0.8 }}>
        <span>📞 Phone: +251 916851104</span>
        <span>💬 Telegram: @Samri128_07</span>
      </div>

      <style>
        {`
          a:hover { color: ${teal} !important; }
        `}
      </style>
    </footer>
  );
}
export default Footer;