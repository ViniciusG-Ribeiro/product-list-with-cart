import styled from "styled-components";
import iconCart from "../../assets/images/icon-add-to-cart.svg";
import increment from "../../assets/images/icon-increment-quantity.svg";
import decrement from "../../assets/images/icon-decrement-quantity.svg";
import incrementHover from "../../assets/images/icon-increment-quantity-mod.svg";
import decrementHover from "../../assets/images/icon-decrement-quantity-mod.svg";

export default function ButtonProduct() {
    let product = 0;

    return (
        <>
            {product > 0 ? (
                <ButtonQuantity>
                    <ButtonIcons>
                        <img src={decrement} alt="Decrementar" />
                    </ButtonIcons>
                    <p>{product}</p>
                    <ButtonIcons>
                        <img src={increment} alt="Incrementar" />
                    </ButtonIcons>
                </ButtonQuantity>
            ) : (
                <ButtonAdd>
                    <img src={iconCart} alt="Adicionar ao Carrinho" />
                    <p>Add to Cart</p>
                </ButtonAdd>
            )}
        </>
    );
};

const ButtonAdd = styled.button`
    padding: 10px 20px;
    display: flex;
    gap: 8px;
    min-width: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid hsl(14, 25%, 72%);
    background-color: white;
    border-radius: 20px;
    font-weight: 700;

    &:hover {
        background-color: hsl(12, 62.50%, 96.90%);
        cursor: pointer;
    }
`;

const ButtonQuantity = styled.div`
    color: white;
    font-weight: 700;
    font-size: 14px;
    padding: 10px 20px;
    display: flex;
    gap: 8px;
    min-width: 50%;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid hsl(14, 86%, 42%);
    background-color: hsl(14, 86%, 42%);
    border-radius: 20px;
`;

const ButtonIcons = styled.button`
    background-color: transparent;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    border: 2px solid white;
    
    img {
        filter: brightness(0) invert(1); /* Torna a imagem branca */
        width: 14px;
        height: 14px;
    }

    &:hover {
        background-color: white;
        cursor: pointer;

        img {
            filter: invert(23%) sepia(86%) saturate(468%) hue-rotate(355deg) brightness(96%) contrast(95%);
        }
    }
`;

// const Icon = styled.img`
//     filter: invert(100%); /* Ícone branco padrão */
//     width: 14px;
//     height: 14px;
//     transition: filter 0.2s ease-in-out;
// `;