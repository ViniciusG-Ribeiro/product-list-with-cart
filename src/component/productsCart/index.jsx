import styled from "styled-components"
import cake from "../../assets/images/illustration-empty-cart.svg"
import ProductCart from "../productCart"

export default function ProductsCart({ productsCart }) {

    const total = productsCart.reduce((acc, product) => acc + product.value * product.quantity, 0);


    return (
        <>
            {
                productsCart.length > 0 ? (
                    <>

                        {productsCart.map((product) => (

                            <ProductCart key={product.id} id={product.id} name={product.name} price={product.value} quantity={product.quantity} />

                        ))}

                        <TotalContainer>
                            <p>Order Total</p> 
                            <ValueTotal>${total.toFixed(2)}</ValueTotal>
                        </TotalContainer>

                    </>
                )
                    : (
                        <Div>
                            <img src={cake} alt="" />
                            <PEmpty>Your added items will appear here</PEmpty>
                        </Div>
                    )
            }
        </>
    )

};



const Div = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 40px;
`

const PEmpty = styled.p`
    color: hsl(12, 20%, 44%);
    font-weight: 600;
    margin-top: 20px;
`

const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
`

const ValueTotal = styled.p`
    font-size: 26px;
    font-weight: bold;
`