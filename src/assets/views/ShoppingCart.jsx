import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useContext } from "react";
import { PizzasContext } from '../context/PizzasContext';

const ShoppingCart = () => {

  const { listShoppingCart, addPizzaShopping, setlistShoppingCart, removePizzaShopping } = useContext(PizzasContext);

  const addPizza = (pizza) => {
    addPizzaShopping(pizza) 
    
  }

  const removePizza = (pizza) => {
    removePizzaShopping(pizza) 
  }

  return (
    <div>

      <Container className='p-4'>
        <Table striped hover>
          <thead>
            <tr>
              <th>Detalles del pedido: </th>
            </tr>
          </thead>

          <tbody>
            {listShoppingCart.length > 0 ? listShoppingCart.map((pizza) => (
              <tr key={pizza.id}>
                <td >
                  <img src={`${pizza.img}`}
                    width="10%"
                    height="10%"
                    alt="pizza"
                  />
                </td>

                <td className='justify'> {pizza.name}</td>
                <td> {pizza.price * pizza.cantidad}</td>
                <td>
                  <Button className="" variant="danger" size="sm" onClick={() => removePizza(pizza)}>-
                  </Button></td>
                <td> {pizza.cantidad}</td>

                <td>
                  <Button className=" " variant="primary" size="sm" onClick={() => addPizza(pizza) }> +
                  </Button>
                </td>
              </tr>
            )) : null}
          </tbody>
        </Table>

        {listShoppingCart.length > 0 &&
          <div> <h4><b> Total: $ </b> </h4>
            <Button className="p-1" variant="success" size="sm">Ir a Pagar
            </Button></div>}

      </Container >
    </div >
  );
};
export default ShoppingCart;
