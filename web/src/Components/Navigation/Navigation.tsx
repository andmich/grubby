import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Container from "../Bulma/Container/Container";
import { Color } from "../Bulma/Enums/Color";
import Navbar from "../Bulma/Navbar/Navbar";

function Navigation() {
  const { user, logout } = useAuth0();
  return (
    <>
      <Navbar
        color={Color.Dark}>
        <Container>
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
                <Navbar.Item
                  to='settings'>
                  Settings
                </Navbar.Item>
                <Navbar.Item
                  onClick={() => logout({ returnTo: window.location.origin })}>
                  Log out
                </Navbar.Item>
              </Navbar.Item>
            ]}/>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;