import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) =>{
    const [cart, setcart] = useState([]);

    const AddProduct = (product) => {
    
        setcart((prevCart) => [...prevCart, product]);
    
    };
    
    // const RemoveProduct = (ProductIndex) => {
        
    //     setcart((prevCart) => prevCart.filter((_,index) => index !== ProductIndex) ) 
        
    // };

    const RemoveProduct = (ProductId) => {
        
        setcart((prevCart) => prevCart.filter((item) => item.id !== ProductId)) 
        
    };

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )

    
}

export const useCart = () => useContext(CartContext);