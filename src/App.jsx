import AlertButton from "./components/AlertButton";
import "./App.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

function App() {
  const pathImg =
    "https://timingapp.com/cdn-cgi/image/format=auto,width=256/img/app-icons/com.tinyspeck.slackmacgap/icon_512x512_2x.png";
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonApp1">
          <Link to="/">
            <img src={pathImg} alt="logo" />
          </Link>
          <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div>
            <Link to="/a">A</Link>
            <Link to="/b" className="letra">
              B
            </Link>
          </div>
        </div>
        <div className="buttonApp2">
          <Link to="/">APP</Link>
          <a href="/" className="buttonApp">
            APP
          </a>
        </div>
      </header>

      <AlertButton />
    </div>
  );
}

export default App;
