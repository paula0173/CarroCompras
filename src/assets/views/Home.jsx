import { Container, Row, Col } from "react-bootstrap";
import { useContext } from 'react';
import { PizzasContext } from "../context/PizzasContext";
import CardPizza from "../components/CardPizza";

const Home = () => {

  const { listPizzas } = useContext(PizzasContext);

  return (
      <Container >
        <div className="styleBanner">
          <h1>!Pizzería Mamma Mia!</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar</p>
          <hr className="styleHr" />
        </div>
        <Row className="mt-4 mx-auto">
          {listPizzas.length > 0 ? listPizzas.map((pizza) => (
            <Col key={pizza.id} className="col-3 mb-3">
              <CardPizza pizza={pizza} />
            </Col>
          )) : <p>No hay datos</p>}
        </Row>
      </Container>
  );
};

export default Home;