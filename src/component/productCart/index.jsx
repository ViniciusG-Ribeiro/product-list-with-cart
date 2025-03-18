import styled from "styled-components"
import close from "../../assets/images/icon-remove-item.svg"

export default function ProductCart(product) {

    return (
        <ContainerProduct>
            <p>{product.name}</p>
            <ContainerInfos>
                <p>{product.quantity}x</p>
                <p>@ ${product.price}</p>
                <p>{product.price * product.quantity}</p>
                <CloseButton><img src={close} alt="button close" /></CloseButton>
            </ContainerInfos>

            <hr />
        </ContainerProduct>
    )
};


const ContainerProduct = styled.div`
    display: flex;
    flex-direction:column;
    padding: 5px;
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
    display: flex;
    margin: 10px 0;
    position: relative;
`