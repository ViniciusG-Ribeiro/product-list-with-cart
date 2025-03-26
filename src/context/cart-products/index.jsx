import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setcart] = useState([]);

    const AddProduct = (product) => {

        setcart((prevCart) => [...prevCart, product]);

    };

    // useEffect(() => {

    //     console.log("produtos:", cart)

    // }, [cart])

    const setQuantity = (ProductId, Number) => {

        setcart((prevCart) => {
            return prevCart.map((item) =>
                item.id == ProductId
                    ? { ...item, quantity: item.quantity + Number }
                    : item
            ).filter((item) => item.quantity > 0);
        }

        );
    }

    const RemoveProduct = (ProductId) => {

        setcart((prevCart) => prevCart.filter((item) => item.id !== ProductId))

    };

    const RemoveAllProducts = () => {
        setcart([]);
    };

    return (
        <CartContext.Provider value={{ cart, AddProduct, RemoveProduct, setQuantity, RemoveAllProducts }}>
            {children}
        </CartContext.Provider>
    )


}

export const useCart = () => useContext(CartContext);