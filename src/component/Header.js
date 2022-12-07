import logo from "../logo.svg";
import "./style.css";

function Header(prop) {
  const menu = ["Home", "Register", "Signin"];

  const navigation = () => {
    return menu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx + 1)}>{item}</button>;
    });
  };

  return (
    <div>
      <header className="header-wrapper">
        <img src={logo} alt="logo" />
        <h1 className="header-title">Pasar Pon</h1>
        <nav className="navigation">{navigation()}</nav>
      </header>
    </div>
  );
}

export default Header;
