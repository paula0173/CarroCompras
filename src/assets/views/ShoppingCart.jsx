import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useState, useContext } from "react";
import { PizzasContext } from '../context/PizzasContext';
import ToastUtility from '../components/ToastUtility';

const ShoppingCart = () => {
  const { listShoppingCart, addPizzaShopping, removePizzaShopping, calculateAmount } = useContext(PizzasContext);

  const [stateInitial, setstateInitial] = useState(false);

  const addPizza = (pizza) => {
    addPizzaShopping(pizza)
  }

  const removePizza = (pizza) => {
    removePizzaShopping(pizza)
  }

  return (
    <div>
      <Container className='p-4'>
        <h4> <b> Detalles del pedido: </b> </h4>

        {listShoppingCart.length > 0 ? listShoppingCart.map((pizza) => (
          <Row key={pizza.id} className='p-3'>
            <Col className="col-1">
              <img src={`${pizza.img}`}
                width="90%"
                height="90%"
                alt="pizza"
              /> </Col>
            <Col ><span className="col-7 text-capitalize">  {pizza.name}  </span>
            </Col>
            <Col className="col-2 text-success text-center" ><b> $ {(pizza.price * pizza.cantidad).toLocaleString()} </b>
            </Col>
            <Col className="col-1" md="auto" >
              <Button  variant="danger" size="sm" onClick={() => removePizza(pizza)}>-
              </Button>
            </Col>
            <Col className="col-1 fs-6" md="auto" > <b> {pizza.cantidad} </b>
            </Col>
            <Col className="col-1" md="auto" >  <Button className="" variant="primary" size="sm" onClick={() => addPizza(pizza)}> +
            </Button>
            </Col>
            <hr className='mb-1' />
          </Row>
        )) : <h5 className="text-center"> No hay pedidos</h5> }


        {listShoppingCart.length > 0 &&
          <div> <h3><b> Total: $ {calculateAmount()} </b> </h3>
            <Button className="p-1" variant="success" onClick={() => setstateInitial(true)} >Ir a Pagar
            </Button></div>}
      </Container >

      {stateInitial && <ToastUtility stateInitial={stateInitial}/> }
    </div >
  );
};
export default ShoppingCart;
