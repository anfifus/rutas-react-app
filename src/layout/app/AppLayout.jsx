import { Link, NavLink, Outlet } from "react-router-dom";
const pathImg =
  "https://timingapp.com/cdn-cgi/image/format=auto,width=256/img/app-icons/com.tinyspeck.slackmacgap/icon_512x512_2x.png";

function AppLayout() {
  return (
    <div className="AppLayout">
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

          <div className="buttonApp2">
            <Link to="/">APP</Link>
            <a href="/" className="buttonApp">
              APP
            </a>
          </div>
        </div>
      </header>
      <div >
          <Outlet></Outlet>
      </div>


    </div>
  );
}

export default AppLayout;
