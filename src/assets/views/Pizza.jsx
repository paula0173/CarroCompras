
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import { useContext, useEffect } from "react";
 
import { useParams, useNavigate } from "react-router-dom";
import { PizzasContext } from '../context/PizzasContext';
 
const Pizza = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { addPizzaShopping, listPizzas } = useContext(PizzasContext);
    const indexPizza = listPizzas.findIndex(item => item.id === id)
    const detailPizza = listPizzas.at(indexPizza);        
    
    useEffect(() => {
        if (indexPizza < 0)   {
            navigate(`/NotFound`)}
         // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
 
 
    return (
        <div >
        {indexPizza >= 0 && 
            <Container >
                <Row className="p-4 ">
                    <Col className="col-4 m-0 p-0" >
                    <img src={ `${detailPizza.img}`}
                                    width="100%"
                                    height="100%"   
                                    alt="ingrediente"
                                />                        
                    </Col>

                    <Col className="m-0 p-0">
                        <Card >
                            <Card.Body>
                                <Card.Title className="text-capitalize"><h2>{detailPizza.name}</h2></Card.Title>
                                <hr />
                                <p className='textPizza'> {detailPizza.desc} </p>
                                <p><b> Ingredientes </b> </p>
                                <ul className="styleList">
                                    {detailPizza.ingredients.map((ingredient, index) => (
                                        <li key={index}>
                                            <img src="../src/assets/img/pizza.svg"
                                                width="15"
                                                height="15"
                                                alt="ingrediente"
                                            /> {ingredient}
                                        </li>
                                    ))}
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <h3> Precio:  ${(detailPizza.price).toLocaleString()} </h3>
                                    <Button className="p-1" variant="danger" size="sm" onClick={() => addPizzaShopping(detailPizza)}>Añadir
                                        <img
                                            className="m-1" src="../src/assets/img/shoppingcart.svg"
                                            width="15"
                                            height="15"
                                        />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> }
        </div>
    );
};

export default Pizza;