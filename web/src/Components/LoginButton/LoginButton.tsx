import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button, ButtonSize } from '../Bulma/Button/Button';
import { Color } from '../Bulma/Enums/Color';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button 
      onClick={loginWithRedirect}
      size={ButtonSize.Normal}
      color={Color.Primary}
      isFullWidth={true}
      content='Log In'
      />
  );
}

export default LoginButton;