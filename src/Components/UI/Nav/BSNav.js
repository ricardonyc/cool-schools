import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { ThemeContext } from "../../../context/darkmode-context";
import "../styling/variables.css";
import css from "./Navbar.module.css";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate, Link } from "react-router-dom";

const BSNav = ({ values }) => {
  const { logOut, user } = useUserAuth();
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  console.log("user: ", user);

  const { openModal, loginModal, setLoginModal } = values;

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logo = {
    fontSize: "3rem",
    padding: ".5rem 0 0 0",
    fontFamily: "'Anybody', cursive",
    color: "var(--teal)",
  };

  const navContainer = {
    // border: "2px solid red",
    padding: "0 2rem",
    maxWidth: "1800px",
    backgroundColor: darkMode ? "var(--darkmode-navy)" : "var(--white)",
  };

  const textColor = {
    color: darkMode ? "var(--white)" : "var(--darkmode-navy)",
    fontFamily: "'Roboto Condensed', sans-serif",
  };

  return (
    <Navbar fixed="top" expand="md" style={{ padding: "0", margin: "0" }}>
      <Container style={navContainer}>
        <Navbar.Brand style={logo}>CoolSchools</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "var(--teal)" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={css.items}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={textColor}>
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
  );
};

export default BSNav;

// ! CREATE LOG IN / SIGN UP MODAL INSTEAD OF PATHS/COMPONENTS
