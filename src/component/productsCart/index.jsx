import styled from "styled-components"
import { useModal } from "../../context/modalContext"; // Importa o contexto do modal
import cake from "../../assets/images/illustration-empty-cart.svg"
import carbon from "../../assets/images/icon-carbon-neutral.svg"
import ProductCart from "../productCart"

export default function ProductsCart({ Products }) {

    const { openModal } = useModal();

    const total = Products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <>
            {
                Products.length > 0 ? (
                    <>

                        {Products.map((product) => (

                            <ProductCart key={product.id} id={product.id} name={product.name} price={product.price} quantity={product.quantity} />

                        ))}

                        <TotalContainer>
                            <p>Order Total</p> 
                            <ValueTotal>${total.toFixed(2)}</ValueTotal>
                        </TotalContainer>

                        <Delivery>
                            <img src={carbon} alt="tree" />
                            <p>This is a <span>carbon-neutral</span> delivery</p>
                        </Delivery>

                        <OrderButton onClick={() => openModal(Products)}>
                            Confirm Order
                        </OrderButton>

                    </>
                )
                    : (
                        <Div>
                            <img src={cake} alt="cake" />
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
    text-align: center;
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

const Delivery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    gap: 5px;
    background: hsl(26, 53.80%, 97.50%);

    span{
        font-weight:600;
    }

    img{
        height: 25px;
    }
`

const OrderButton = styled.button`
    width: 100%;
    background: hsl(14, 86%, 42%);
    color: #fff;
    margin: 20px 0px 0px;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    border: none;
    border-radius: 30px;
    
    font-size: 16px;

    &:hover{
        background: hsl(14, 84.80%, 36.10%);
        cursor: pointer;
    }
`
