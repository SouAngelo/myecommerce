import { createContext, useState } from "react";
import Cart from "../pages/cart";

export const cartContext = createContext({})

export default function CartProvider( {children} ){

    const [cart, setCart] = useState([])

    function addItemsCart(name, price, id, image){

        const newItem = {name, price, id, image}

        setCart([...cart, newItem])

    }

    function handleRemoveItem(index){
        let filter = cart.filter(item => cart.indexOf(item) !== index)

        setCart(filter)
    }

    function clearCart(){
        setCart([])
    }

  
    return(
        <cartContext.Provider value={{addItemsCart, cart, handleRemoveItem, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}