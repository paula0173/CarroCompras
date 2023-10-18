import { createContext, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
    const [listPizzas, setlistPizzas] = useState([]);
    const [listShoppingCart, setlistShoppingCart] = useState([]);

    const addPizzaShopping = (pizza) =>{
        console.log('aqui leseando',pizza)
    }

    const removePizzaShopping = (pizza) =>{
        console.log('aqui leseando',pizza)
    }
    
    // const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

    return (
        <PizzasContext.Provider value={{ listPizzas, setlistPizzas, listShoppingCart, setlistShoppingCart, addPizzaShopping, removePizzaShopping}}>
            {children}
        </PizzasContext.Provider>
    );
};
export default PizzasProvider;