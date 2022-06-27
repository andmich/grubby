import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button, ButtonSize } from '../Bulma/Button/Button';
import { Color } from '../Bulma/Enums/Color';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button 
      onClick={() => logout({ returnTo: window.location.origin })}
      size={ButtonSize.Normal}
      color={Color.Primary}
      isFullWidth={true}
      content='Log Out'
      />
  );
}

export default LogoutButton;