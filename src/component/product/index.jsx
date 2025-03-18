import styled from "styled-components";
import ButtonProduct from "../buttonProduct";
// import iconCart from "../../assets/images/icon-add-to-cart.svg"

export const Product = ({ id, image, name, category, price }) => {
    return (
        <Div>
            <DivImage>
                <Img src={image.desktop} alt="" />
                <ButtonProduct />
            </DivImage>

            <Category>{category}</Category>
            <Name>{name}</Name>
            {/* <Price>${price.toFixed(2)}</Price> */}
            <Price>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}</Price>

        </Div>
    )
};

const Div = styled.div`
  text-align: start;
  margin-bottom: 20px;
  margin-right: 10px;
`

const DivImage = styled.div`
  position: relative;
  margin-bottom: 30px;
`

const Img = styled.img`
    border-radius: 8px;
    width: 100%;
`

const Category = styled.p`
  color: hsl(14, 25%, 72%);
  margin-bottom: 4px;
`

const Name = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`

const Price = styled.p`
  font-weight: 600;
  color: hsl(14, 86%, 42%);
`
