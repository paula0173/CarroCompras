
 
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {

    return (
        <Navbar className="bg-info justify-content-around ">
            <Navbar.Brand className ="text-white " href="/">
                <img
                    src="../src/assets/img/pizza.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Home logo"
                />{' '}
                <b>Pizzeria Mamma Mia! </b>
            </Navbar.Brand>

            <Navbar.Brand className ="text-white"  href="/ShoppingCart">
                <img
                    src="../src/assets/img/shoppingcart.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                $ 0
            </Navbar.Brand>
        </Navbar>
    );
};
export default NavBar
