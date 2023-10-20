
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { PizzasContext } from '../context/PizzasContext';

const NavBar = () => {
    
    const navigate = useNavigate();

    const { calculateAmount } = useContext(PizzasContext);

    return (
        <Navbar className="bg-info justify-content-around ">
            <Navbar.Brand className ="text-white " onClick={() => navigate(`/`)}>
                <img
                    src="../src/assets/img/pizza.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Home logo"
                />{' '}
                <b>Pizzeria Mamma Mia! </b>
            </Navbar.Brand>

            <Navbar.Brand className ="text-white" onClick={() => navigate(`/ShoppingCart`)}>
                <img
                    src="../src/assets/img/shoppingcart.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <b> $ {calculateAmount()} </b>
            </Navbar.Brand>
        </Navbar>
    );
};
export default NavBar
