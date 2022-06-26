import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button, ButtonColor, ButtonSize } from '../Bulma/Button/Button';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button 
      onClick={() => logout({ returnTo: window.location.origin })}
      size={ButtonSize.Normal}
      color={ButtonColor.Primary}
      isFullWidth={true}
      content='Log Out'
      />
  );
}

export default LogoutButton;