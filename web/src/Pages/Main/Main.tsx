import Container from "../../Components/Bulma/Container/Container";
import Navigation from "../../Components/Navigation/Navigation";
import MainRoutes from "../../Routes/MainRoutes/MainRoutes";

function Main() {

  return (
    <>
      <Navigation />
      <Container
        style={{
          marginTop: 20
        }}>
        <MainRoutes />
      </Container>
    </>
  );
}

export default Main;