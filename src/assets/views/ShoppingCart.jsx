import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ShoppingCart = () => {

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><b> Detalles del pedido: </b> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </Table>

      <h4><b> Total: $ </b> </h4>
      <Button className="p-1" variant="success" size="sm">Ir a Pagar
      </Button>
    </div>
  );
};
export default ShoppingCart;
