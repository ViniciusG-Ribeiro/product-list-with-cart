import styled from "styled-components"
import ProductsCart from "../productsCart"


export default function Cart() {
    let itens = [
        {
            id: 1,
            name: 'classic tiramisu',
            quantity: 3,
            value: 5.50
        }, {
            id: 2,
            name: 'vanilla bean creme brulee',
            quantity: 1,
            value: 7.00
        },
    ]

    return (
        <Container>

            <H2tittle>Your Cart ({itens.length})</H2tittle>

            <ProductsCart productsCart={itens} />

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
    
  }
`

const H2tittle = styled.h2`
    color: hsl(14, 86%, 42%);
`

// const Div = styled.div`
//     display: flex;
//     flex-direction:column;
//     align-items: center;
//     margin: 40px;
// `

// const PEmpty = styled.p`
//     color: hsl(12, 20%, 44%);
//     font-weight: 600;
//     margin-top: 20px;
// `