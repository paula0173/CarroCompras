import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center">
      <h2 className="m-3">La ruta es inválida</h2>
      <img src="../src/assets/img/NotFound.png" alt="not found" />
    </Container>
  );
};
export default NotFound;