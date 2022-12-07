import logo from "../logo.svg";
import "./style.css";

function Footer(prop) {
  return (
    <footer className="footer-section">
      <div className="footer-brand">
        <img src={logo} alt="logo"></img>
        <p>Copyright 2022 Erick Kusuma Wardani</p>
      </div>
    </footer>
  );
}

export default Footer;
