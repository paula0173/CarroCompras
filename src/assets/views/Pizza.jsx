import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PizzasContext } from '../context/PizzasContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Pizza = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { addPizzaShopping, listPizzas } = useContext(PizzasContext);

    const addPizza = (detailPizza) => {
        addPizzaShopping(detailPizza)
        toast.info("Pizza agregada", {position: toast.POSITION.TOP_CENTER})
    }

    const indexPizza = listPizzas.findIndex(item => item.id === id)
    const detailPizza = listPizzas.at(indexPizza);        
    
    useEffect(() => {
        if (indexPizza < 0)   {
            navigate(`/notFound`)}
         // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
 
 
    return (
        <>
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
                                                width="15px"
                                                height="15px"
                                                alt="ingrediente"
                                            /> {ingredient}
                                        </li>
                                    ))}
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <h3> Precio:  ${(detailPizza.price).toLocaleString()} </h3>
                                    <div className="ms-2">
                                    <Button className="p-1" variant="danger" size="sm" onClick={() => addPizza(detailPizza)}>Añadir
                                    🛒
                                    </Button>

                                    <Button className="p-1 ms-2" variant="primary" size="sm" onClick={() =>navigate(`/Home`)}>Volver
                                    🏠
                                    </Button>
                                    </div>
                                    
                                </div>
                                <ToastContainer autoClose={500}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> }
        </>
    );
};

export default Pizza;