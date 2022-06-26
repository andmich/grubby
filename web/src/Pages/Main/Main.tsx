import { useAuth0 } from "@auth0/auth0-react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Button, ButtonColor, Buttons, ButtonType } from "../../Components/Bulma/Button/Button";
import Container from "../../Components/Bulma/Container/Container";
import Navbar from "../../Components/Bulma/Navbar/Navbar";
import Settings from "../Settings/Settings";

function Main() {
  const { user, logout } = useAuth0();
  
  return (
    <>
      <Container>
        <Navbar.Nav>
          <Navbar.Brand>
            <Navbar.Item>
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </Navbar.Item>

            <Navbar.Burger
              targetId='burgerMenu' />
          </Navbar.Brand>

          <Navbar.Menu
            id='burgerMenu' 
            startItems={[
              <Navbar.Item>Home</Navbar.Item>,
              <Navbar.Item>Documentation</Navbar.Item>,
              <Navbar.Item 
                hasDropDown={true}
                isHoverable={true}>
                <Navbar.Item>About</Navbar.Item>
                <Navbar.Item>Jobs</Navbar.Item>
                <Navbar.Item>Contact</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Report an Issue</Navbar.Item>
              </Navbar.Item>
            ]}
            endItems={[
              <Navbar.Item
                hasDropDown={true}
                isHoverable={true}
                linkTitle={user?.email}>
                <Navbar.Item>
                  <Link to='settings'>Settings</Link>
                </Navbar.Item>
                <Navbar.Item
                  onClick={() => logout({ returnTo: window.location.origin })}>
                  Log out
                </Navbar.Item>
              </Navbar.Item>
            ]}/>
        </Navbar.Nav>

        <Routes>
          <Route path='settings' element={<Settings />} />
        </Routes>
      </Container>
    </>
  );
}

export default Main;