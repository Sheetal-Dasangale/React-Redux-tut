import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";

export default function Routing() {
  const styles = {
    color: { textcolor: "Blue" },
    hover: {
      backgroundColor: "lightcoral",
    },
  };

  const styles1 = {
    display: "inline-block",
    padding: "10px 5px",
  };

  return (
    <Router>
      <div>
        <h3>Link Example Without active styling</h3>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>NavLinkLink Example with active styling</h3>
        <ul className="navbar">
          <li style={styles1}>
            <NavLink
              // style={{ ...styles.color, ...styles.hover }}
              // style={{ styles }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "red" : "green" };
              }}
              className="nav-bar-link"
              to="/home"
              exact
              // activeStyle={{ color: "red" }}
            >
              Home
            </NavLink>
          </li>
          <li style={styles1}>
            <NavLink
              // style={{ ...styles.color, ...styles.hover }}
              // style={{ styles }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "red" : "green" };
              }}
              className="nav-bar-link"
              to="/about"
              exact
              // activeStyle={{ color: "green" }}
            >
              About
            </NavLink>
          </li>
          <li style={styles1}>
            <NavLink
              // style={{ ...styles.color, ...styles.hover }}
              // style={{ styles }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "red" : "green" };
              }}
              // styles={({ ishovered }) => {
              //   return { backgroundColor: ishovered ? "yellow" : "blue" };
              // }}
              className="nav-bar-link"
              to="/contact"
              exact
              // activeStyle={{ color: "magenta" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/home" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/user/:name" Component={User}></Route>
        <Route path="/*" Component={Home}></Route>
      </Routes>
    </Router>
  );
}
