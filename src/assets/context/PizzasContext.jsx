import { createContext, useState, useEffect } from "react";
import basePizzas from '/src/pizzas.json';

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {

    const [listPizzas, setlistPizzas] = useState([]);
    const [listShoppingCart, setlistShoppingCart] = useState([]);

    const addPizzaShopping = (pizza) => {
        const indexPiza = listShoppingCart.findIndex(item => item.id === pizza.id)
        if (indexPiza < 0) {
            setlistShoppingCart([...listShoppingCart, { id: pizza.id, name: pizza.name, img: pizza.img, price: pizza.price, cantidad: 1 }])
        }
        else {
            listShoppingCart[indexPiza].cantidad = listShoppingCart[indexPiza].cantidad + 1
            setlistShoppingCart([...listShoppingCart])
        }
    }

    const removePizzaShopping = (pizza) => {
        const indexPiza = listShoppingCart.findIndex(item => item.id === pizza.id)
        if (listShoppingCart[indexPiza].cantidad === 1) {
            setlistShoppingCart(listShoppingCart.filter(item => item.id !== pizza.id))
        }
        else {
            listShoppingCart[indexPiza].cantidad = listShoppingCart[indexPiza].cantidad - 1
            setlistShoppingCart([...listShoppingCart])
        }
    }
  
    useEffect(() => {
        setlistPizzas(basePizzas);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PizzasContext.Provider value={{ listPizzas, setlistPizzas, listShoppingCart, setlistShoppingCart, addPizzaShopping, removePizzaShopping }}>
            {children}
        </PizzasContext.Provider>
    );
};
export default PizzasProvider;