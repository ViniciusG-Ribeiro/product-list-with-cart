import styled from "styled-components";
import ButtonProduct from "../buttonProduct";
import { useEffect, useState } from "react";
// import iconCart from "../../assets/images/icon-add-to-cart.svg"
import { useCart } from "../../context/cart-products";

export const Product = ({ id, image, name, category, price }) => {

  const { cart } = useCart();

  const [productInCart,setproductInCart] = useState([])

  const [quantity,setquantity] = useState(0);

  useEffect(() =>{

    const foundProduct = cart.find((item) => item.id === id)

    setproductInCart(foundProduct || null);

  },[cart, id]);


  useEffect(()=>{
    setquantity( productInCart ? productInCart.quantity : 0)
  },[productInCart])
  

  return (
    <Div>
      <DivImage>
        <picture>
          <source srcSet={image.mobile} media="(max-width: 768px)" />
          <source srcSet={image.tablet} media="(max-width: 1024px)" />
          <Img src={image.desktop} alt={name} $inCart={!!productInCart}/>
        </picture>
        <ButtonProduct Product={{ id, image, name, category, price }} Quantity={quantity}/>
      </DivImage>

      <Category>{category}</Category>
      <Name>{name}</Name>
      {/* <Price>${price.toFixed(2)}</Price> */}
      <Price>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</Price>

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
    border: ${({ $inCart }) => ($inCart ? "2px solid hsl(14, 86%, 42%)" : "none")};
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
