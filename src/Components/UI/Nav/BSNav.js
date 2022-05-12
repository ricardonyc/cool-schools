import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { ThemeContext } from "../../../context/DarkModeContext";
import "../styling/variables.css";
import css from "./Navbar.module.css";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { ModalContext } from "../../../context/ModalContext";

const BSNav = () => {
  const { logOut, user } = useUserAuth();
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  console.log("user: ", user);

  const {
    openModal,
    loginModal,
    setLoginModal,
    setAlert,
    loggedOut,
    setLoggedOut,
  } = useContext(ModalContext);

  const handleLogOut = async () => {
    try {
      await logOut();
      // setAlert(true);
      setLoggedOut(true);
      setTimeout(() => {
        setLoggedOut(false);
        // setAlert(false);
      }, 5000);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logo = {
    fontFamily: "var(--anybody)",
    fontWeight: "700",
    fontStyle: "italic",
    color: darkMode ? "var(--yellow)" : "var(--teal)",
    fontSize: "var(--logo-fontSize)",
    padding: ".5rem 0 .5rem 0",
  };

  const navContainer = {
    backgroundColor: darkMode ? "var(--darkmode-navy)" : "var(--white)",
    maxWidth: "var(--max-navbar-mainsection-width)",
  };

  const textColor = {
    color: darkMode ? "var(--yellow)" : "var(--darkmode-navy)",
    // fontFamily: "'Roboto Condensed', sans-serif",
  };

  const toggle = {
    backgroundColor: "white",
    fontSize: "1.5rem",
  };

  const active = {
    borderBottom: `2px solid ${darkMode ? "white" : "red"}`,
  };

  return (
    <div className={css.navbar__container}>
      <Navbar
        fixed="top"
        expand="md"
        style={{
          padding: "0",
          margin: "0",
        }}
      >
        <Container style={navContainer} className={css.nav__container}>
          <Navbar.Brand style={logo}>CoolSchools</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={toggle} />
          <Navbar.Collapse id="basic-navbar-nav" className={css.items}>
            <Nav /*className="me-auto"*/ className={css.navlinks}>
              <Nav.Link
                className={({ isActive }) => (isActive ? "active" : null)}
                as={NavLink}
                to="/"
                style={textColor}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/schools"
                className={({ isActive }) => (isActive ? "active" : null)}
                style={textColor}
              >
                Schools
              </Nav.Link>
              <NavDropdown
                id="basic-nav-dropdown"
                title={
                  <span className={darkMode ? css.dark : css.light}>More</span>
                }
              >
                {/* IF THERE IS NO USER, DIRECT TO SIGN UP / LOGIN PAGE */}
                {!user && (
                  <React.Fragment>
                    <NavDropdown.Item
                      onClick={() => {
                        openModal();
                        setLoginModal(false);
                      }}
                      className={css.sub__items}
                    >
                      Sign Up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                        openModal();
                        setLoginModal(true);
                      }}
                      className={css.sub__items}
                    >
                      Login
                    </NavDropdown.Item>
                  </React.Fragment>
                )}
                {/* IF THERE'S A USER, SHOW LOGOUT OPTION */}
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
          {user && <h1>Welcome!</h1>}
        </Container>
      </Navbar>
    </div>
  );
};

export default BSNav;
