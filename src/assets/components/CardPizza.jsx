import {Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PizzasContext } from '../context/PizzasContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardPizza = ({ pizza }) => {

    const navigate = useNavigate();
    const { addPizzaShopping } = useContext(PizzasContext);

    const gotoPizza = (id) => {
        navigate(`/pizza/${id}`)
    };

    const addPizza = (detailPizza) => {
        addPizzaShopping(detailPizza)
        toast.info("Pizza agregada", { position: toast.POSITION.TOP_CENTER })
    }

    return (
        <Card>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
                <Card.Title className="text-capitalize"> <b>{pizza.name} </b>  </Card.Title>
                <hr />
                <p><b> Ingredientes </b> </p>
                <ul className="styleList">
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <img src="../src/assets/img/pizza.svg"
                                width="15px"
                                height="15px"
                                alt="ingrediente"
                            /> {ingredient}
                        </li>
                    ))}
                </ul>

            </Card.Body>

            <Card.Footer className="text-center" >
                <h3 className="p-3"> $ {(pizza.price).toLocaleString()} </h3>

                <Button className="p-1 m-2 text-white" variant="info" size="sm" onClick={() => gotoPizza(pizza.id)} >Ver Mas 👀
                </Button>
                <Button className="p-1" variant="danger" size="sm" onClick={() => addPizza(pizza)}  >Añadir 🛒
                </Button>
            </Card.Footer>
            <ToastContainer autoClose={500} />
        </Card>
    );
};

export default CardPizza;