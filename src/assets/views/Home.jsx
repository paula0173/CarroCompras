
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardPizza from "./CardPizza";

import basePizzas from '/src/pizzas.json';
import { useEffect, useContext } from "react";
import { PizzasContext } from '../context/Pizzascontext';

const Home = () => {

  const { listPizzas, setlistPizzas } = useContext(PizzasContext);
  
  useEffect(() => {
    setlistPizzas(basePizzas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="styleBanner">
        <h1>!Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar</p>
        <hr className="styleHr" />
      </div>

      <Container >
        <Row className="p-3 ">
          {listPizzas.length > 0 ? listPizzas.map((pizza) => (

            <Col key={pizza.id} className="col-3 mb-5">
              <CardPizza pizza={pizza} />
            </Col>

          )) : <p>No hay datos</p>}
        </Row>
      </Container>
    </>
  );
};

export default Home;