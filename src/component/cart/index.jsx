import styled from "styled-components"
import ProductsCart from "../productsCart"
import { useCart } from "../../context/cart-products"


export default function Cart() {

    const {cart} = useCart();

    return (
        <Container>

            <H2tittle>Your Cart ({cart.length})</H2tittle>

            <ProductsCart Products={cart} />

        </Container>
    )
};


const Container = styled.div`
    background: #fff;
    height: 100%;
    border-radius: 10px;
    padding: 20px 20px;
    width: 400px;
    min-width:270px;

      @media (max-width: 768px) {
      width: 90%;
      min-width:220px;
      margin: auto;
    
  }
`

const H2tittle = styled.h2`
    color: hsl(14, 86%, 42%);
`