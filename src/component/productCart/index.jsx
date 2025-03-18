import styled from "styled-components"
import close from "../../assets/images/icon-remove-item.svg"

export default function ProductCart(product) {

    return (
        <ContainerProduct>
            <ProductName>{product.name}</ProductName>
            <ContainerInfos>
                <ProductQuantity>{product.quantity}x</ProductQuantity>
                <UnitaryPrice>@ ${product.price.toFixed(2)}</UnitaryPrice>
                <TotalPrice>${(product.price * product.quantity).toFixed(2)}</TotalPrice>
                <CloseButton><img src={close} alt="button close" /></CloseButton>
            </ContainerInfos>

            <hr />
        </ContainerProduct>
    )
};


const ContainerProduct = styled.div`
    display: flex;
    flex-direction:column;
    padding: 5px 0;
    margin: 10px 0;
`

const CloseButton = styled.button`
    background: none;
    border: 1px solid hsl(14, 25%, 72%);
    border-radius: 50%;
    width: 15px; /* Ajuste conforme necessário */
    height: 15px; /* Mesmo valor da largura */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    position: absolute;
    right: 0;
    top: 0;
    transform: translatey(-50%);

    img {
        width: 80%;
    }

    &:hover {
        border-color: hsl(12, 20%, 44%);
    }
`

const ContainerInfos = styled.div`
    display: grid;
    grid-template-columns: minmax(10px,20px) repeat(2,minmax(10px,60px));
    grid-template-rows: 1;
    margin: 10px 0;
    position: relative;
    // background-color: #3425
    gap: 10px;
`


const ProductName = styled.p`
    font-weight: bold;
    text-transform: capitalize;
`
const ProductQuantity = styled.p`
    font-weight: 600;
    color:hsl(14, 86%, 42%);
`

const UnitaryPrice = styled.p`
    color:hsl(14, 25%, 72%);
`

const TotalPrice = styled.p`
    font-weight: 600;
    color:hsl(12, 20%, 44%);
`