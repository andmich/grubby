import { useState } from "react";
import Container from "../../Components/Bulma/Container/Container";
import Menu from "../../Components/Bulma/Menu/Menu";
import Columns, { ColumnSizeFraction } from "../../Components/Columns/Columns";

function Settings() {
  const settings = {
    profileInformation: 'profile',
    favoriteGenres: 'favoriteGenres',
    favoriteRestaurants: 'favoriteRestaurants'
  }
  const [activeMenuPage, setActiveMenuPage] = useState(settings.profileInformation);

  return ( 
    <>
      <Container>
        <Columns>
          <Columns.Column
            Size={ColumnSizeFraction.OneQuarter}>
            <Menu>
              <Menu.Label>
                Settings
              </Menu.Label>
              <Menu.List>
                <Menu.ListItem
                  id={0}
                  isActive={activeMenuPage === settings.profileInformation}
                  onClick={() => setActiveMenuPage(settings.profileInformation)}
                  label='Profile Information' />
                <Menu.ListItem
                  id={2}
                  label='Favorites'>
                  <Menu.List>
                    <Menu.ListItem
                      id={3}
                      isActive={activeMenuPage === settings.favoriteGenres}
                      onClick={() => setActiveMenuPage(settings.favoriteGenres)}
                      label='Genres' />
                    <Menu.ListItem
                      id={4}
                      isActive={activeMenuPage === settings.favoriteRestaurants}
                      onClick={() => setActiveMenuPage(settings.favoriteRestaurants)}
                      label='Restaurants' />
                  </Menu.List>
                </Menu.ListItem>
              </Menu.List>
            </Menu>
          </Columns.Column>
          <Columns.Column>
            CONTENT
          </Columns.Column>
        </Columns>
      </Container>
    </>
  );
}

export default Settings;