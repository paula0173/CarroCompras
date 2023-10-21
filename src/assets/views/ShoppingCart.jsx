import { Container, Row, Col, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const { listShoppingCart, addPizzaShopping, removePizzaShopping, calculateAmount } = useContext(PizzasContext);
  const navigate = useNavigate()
  const notify = () => {
       toast.success("Orden pagada!", {position: toast.POSITION.TOP_CENTER});} 

  return (
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
              <Button variant="danger" size="sm" onClick={() => removePizzaShopping(pizza)}>-
              </Button>
            </Col>
            <Col className="col-1 fs-6" md="auto" > <b> {pizza.cantidad} </b>
            </Col>
            <Col className="col-1" md="auto" >  <Button className="" variant="primary" size="sm" onClick={() => addPizzaShopping(pizza)}> +
            </Button>
            </Col>
            <hr className='mb-1' />
          </Row>
        )) : <h5 className="text-center"> No hay pedidos</h5>
        }

        {listShoppingCart.length > 0 ?
          <div> <h3><b> Total: $ {calculateAmount()} </b> </h3>
            <Button className="p-1" variant="success" onClick={notify} >Ir a Pagar💰 </Button>
            <Button className="p-1 ms-2" variant="primary" onClick={() =>navigate(`/Home`)}>Volver🏠</Button>
            <ToastContainer autoClose={1000}/> </div> 
            : <Button className="p-1 ms-2" variant="primary" onClick={() =>navigate(`/Home`)}>Volver🏠</Button>
            }
      </Container >
  );
};
export default ShoppingCart;
