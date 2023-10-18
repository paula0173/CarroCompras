import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";


const CardPizza = ({ pizza }) => {

    
    const navigate = useNavigate();

    const GotoPizza = (id) => {
        navigate(`/Pizza/${id}`)
    };

    const GotoCarrito = (id) => {
         navigate(`/ShoppingCart/${id}`)
    };

    return (
        <div >
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                    <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
                    <hr />
                    <p><b> Ingredientes </b> </p>
                    <ul className="styleList">
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <img src="../src/assets/img/pizza.svg"
                                    width="15"
                                    height="15"
                                    alt="ingrediente"
                                /> {ingredient}
                            </li>
                        ))}
                    </ul>

                </Card.Body>

                <Card.Footer className="text-center" >
                    <h3 className="p-3"> $ {pizza.price} </h3>

                    <Button className="p-1 m-2 text-white" variant="info" size="sm" onClick={() => GotoPizza(pizza.id)} >Ver Mas
                        <img className="m-1" src="../src/assets/img/eyes.png"
                            width="15"
                            height="15"
                        />
                    </Button>
                    <Button className="p-1" variant="danger" size="sm" onClick={() => GotoCarrito(pizza.id)}  >Añadir
                        <img
                            className="m-1" src="../src/assets/img/shoppingcart.svg"
                            width="15"
                            height="15"
                        />
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CardPizza;