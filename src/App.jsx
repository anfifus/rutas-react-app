import AlertButton from "./components/AlertButton";
import "./App.css";
import logo from "./assets/logo.png";
import { Link, NavLink, useMatch } from "react-router-dom";

function App() {
  const pathImg =
    "https://timingapp.com/cdn-cgi/image/format=auto,width=256/img/app-icons/com.tinyspeck.slackmacgap/icon_512x512_2x.png";
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonApp1">
          <Link to="/" className={useMatch("/") ? "activeNav" : null}>
            <img src={pathImg} alt="logo" />
          </Link>
          {/* <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link> */}
          <div>
            <Link to="/a" className={useMatch("/a") ? "activeNav" : null}>
              A
            </Link>
            <Link to="/b" className={useMatch("/b") ? "activeNav" : null}>
              B
            </Link>
          </div>
        </div>
      </header>

      <header className="App-header">
        <div className="buttonApp1">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "activeNav" : null;
            }}
          >
            <img src={pathImg} alt="logo" />
          </NavLink>
          {/* <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link> */}
          <div>
            <NavLink
              to="/a"
              className={({ isActive }) => {
                return isActive ? "activeNav" : null;
              }}
            >
              A
            </NavLink>
            <NavLink
              to="/b"
              className={({ isActive }) => {
                return isActive ? "activeNav" : null;
              }}
            >
              B
            </NavLink>
          </div>
        </div>
      </header>

      <div className="buttonApp2">
        <Link to="/">APP</Link>
        <a href="/" className="buttonApp">
          APP
        </a>
      </div>
      <AlertButton />
    </div>
  );
}

export default App;
