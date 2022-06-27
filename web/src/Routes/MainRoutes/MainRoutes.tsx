import { Route, Routes } from "react-router-dom";
import Settings from "../../Pages/Settings/Settings";

function MainRoutes() {
  return ( 
    <>
      <Routes>
        <Route path='settings' element={<Settings />} />
      </Routes>
    </>
  );
}

export default MainRoutes;