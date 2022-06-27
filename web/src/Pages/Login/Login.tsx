import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import LoginButton from "../../Components/LoginButton/LoginButton";
import './Login.sass';

const containerStyles = {
  width: '20%',
  marginTop: 100
};
const footerStyles = {
  marginTop: 30
}
function Login() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to='/app' />
  }
  
  return (
    <>
      <div 
        className='container'
        style={containerStyles}>
        <div className='box'>
          <h1>Welcome to Grubby!</h1>

          <hr />

          <p>
            A place for indecisive foodies!
          </p>
          
          <div style={footerStyles}>
            <LoginButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;