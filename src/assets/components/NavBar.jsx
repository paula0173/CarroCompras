import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';

const NavBar = () => {
    
    const navigate = useNavigate();

    const { calculateAmount } = useContext(PizzasContext);

    return (
        <Navbar className="colorbg justify-content-around" sticky="top">
            <Navbar.Brand className ="text-white d-flex assignPointer" onClick={() => navigate(`/`)}>
                <img
                    src="../src/assets/img/pizza.svg"
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top"
                    alt="Home logo"
                /> 
                <h3 className='ms-2 '> Pizzeria Mamma Mia!  </h3>
            </Navbar.Brand>

            <Navbar.Brand className ="text-white d-flex assignPointer" onClick={() => navigate(`/carrito`)}>
            🛒<h4 className='ms-4'> $ {calculateAmount()} </h4>
            </Navbar.Brand>
        </Navbar>
    );
};
export default NavBar
