import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: ReactElement<any, any>}): ReactElement<any, any> {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? children : <Navigate to='/' />;
}

export default PrivateRoute;