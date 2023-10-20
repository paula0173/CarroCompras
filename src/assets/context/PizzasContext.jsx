import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {

    const [listPizzas, setListPizzas] = useState([]);
    const [listShoppingCart, setListShoppingCart] = useState([]);

    const searchPizzas = () => {
        axios.get('pizzas.json')
            .then((response) => {
                setListPizzas(response.data)
            })
            .catch((err) => {
                console.log("Error al obtener datos de la API:", err);
            });
    };

    const addPizzaShopping = (pizza) => {
        const indexPiza = listShoppingCart.findIndex(item => item.id === pizza.id)
        if (indexPiza < 0) {
            setListShoppingCart([...listShoppingCart, { id: pizza.id, name: pizza.name, img: pizza.img, price: pizza.price, cantidad: 1 }])
        }
        else {
            listShoppingCart[indexPiza].cantidad = listShoppingCart[indexPiza].cantidad + 1
            setListShoppingCart([...listShoppingCart])
        }

    }

    const removePizzaShopping = (pizza) => {
        const indexPiza = listShoppingCart.findIndex(item => item.id === pizza.id)
        if (listShoppingCart[indexPiza].cantidad === 1) {
            setListShoppingCart(listShoppingCart.filter(item => item.id !== pizza.id))
        }
        else {
            listShoppingCart[indexPiza].cantidad = listShoppingCart[indexPiza].cantidad - 1
            setListShoppingCart([...listShoppingCart])
        }

    }

    const calculateAmount = () => {
        const total = (listShoppingCart.reduce((accumulator, pizza) => accumulator + pizza.price * pizza.cantidad, 0))
        return total.toLocaleString()
    }


    useEffect(() => {
        searchPizzas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PizzasContext.Provider value={{ listPizzas, setListPizzas, listShoppingCart, setListShoppingCart, addPizzaShopping, removePizzaShopping, calculateAmount }}>
            {children}
        </PizzasContext.Provider>
    );
};
export default PizzasProvider;