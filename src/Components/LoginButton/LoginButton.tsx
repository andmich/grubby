import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button, ButtonColor, ButtonSize } from '../Bulma/Button/Button';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button 
      onClick={loginWithRedirect}
      size={ButtonSize.Normal}
      color={ButtonColor.Primary}
      isFullWidth={true}
      content='Log In'
      />
  );
}

export default LoginButton;