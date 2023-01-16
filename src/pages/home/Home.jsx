import AlertButton from "../../components/AlertButton";
import Button from "@mui/material/Button";
import Info from "@mui/icons-material";
import "./Home.css";
/* import logo from "./assets/logo.png";
 */
function Home() {
  /*   const pathImg =
    "https://timingapp.com/cdn-cgi/image/format=auto,width=256/img/app-icons/com.tinyspeck.slackmacgap/icon_512x512_2x.png";
 */ return (
    <>
      <h1>Home</h1>
      {/*  <header className="App-header">
        <div className="buttonApp1">
          <Link to="/" className={useMatch("/") ? "activeNav" : null}>
            <img src={pathImg} alt="logo" />
          </Link>
           <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link> 
          <div>
            <Link to="/a" className={useMatch("/a") ? "activeNav" : null}>
              A
            </Link>
            <Link to="/b" className={useMatch("/b") ? "activeNav" : null}>
              B
            </Link>
          </div>
        </div>
      </header> */}
      {/* <Button variant="contained"> <AlertButton />  Alert Button</Button> */}
      <Button startIcon={<Info />} variant="contained">
        Alert Button
      </Button>
    </>
  );
}

export default Home;
