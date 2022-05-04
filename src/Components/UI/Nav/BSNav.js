import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { ThemeContext } from "../../../context/darkmode-context";
import "../variables.css";
import css from "./Navbar.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const BSNav = () => {
  const [user, setUser] = useState("");
  const { logOut } = useUserAuth();
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser?.auth.currentUser.uid);
    });
  }, []);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);

  const logo = {
    fontSize: "3rem",
    padding: ".5rem 0 0 0",
    fontFamily: "'Anybody', cursive",
    color: "var(--teal)",
  };

  const navContainer = {
    padding: "0 2rem",
    maxWidth: "1800px",
    backgroundColor: darkMode ? "var(--darkmode-navy)" : "var(--white)",
  };

  const textColor = {
    color: darkMode ? "var(--white)" : "var(--darkmode-navy)",
    fontFamily: "'Roboto Condensed', sans-serif",
  };

  return (
    <Navbar fixed="top" expand="lg" style={{ padding: "0", margin: "0" }}>
      <Container style={navContainer}>
        <Navbar.Brand href="#home" style={logo}>
          CoolSchools
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "var(--teal)" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={css.items}>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={textColor}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={textColor}>
              Search
            </Nav.Link>
            <NavDropdown
              id="basic-nav-dropdown"
              title={
                <span className={darkMode ? css.dark : css.light}>More</span>
              }
            >
              <NavDropdown.Item href="#action/3.1" className={css.sub__items}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className={css.sub__items}>
                Another action
              </NavDropdown.Item>
              {!user && (
                <React.Fragment>
                  <NavDropdown.Item href="/signup" className={css.sub__items}>
                    Sign Up
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login" className={css.sub__items}>
                    Login
                  </NavDropdown.Item>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={handleLogOut}
                    href="#"
                    className={css.sub__items}
                  >
                    Logout
                  </NavDropdown.Item>
                </React.Fragment>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      {/* <h1>Welcome!</h1> */}
      </Container>
    </Navbar>
  );
};

export default BSNav;
