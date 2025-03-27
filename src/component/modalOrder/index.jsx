import React from "react";
import styled from "styled-components";
import { useModal } from "../../context/modalContext";
import check from "../../assets/images/icon-order-confirmed.svg"
import { useCart } from "../../context/cart-products";

const OrderConfirmationModal = () => {
  const { isOpen, modalData, closeModal } = useModal();
  const { RemoveAllProducts } = useCart();

  if (!isOpen || !modalData) return null;

  const total = modalData.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const onNewOrder = () => {
    closeModal();
    RemoveAllProducts();
  };

  return (
    <Dialog open>
      <ModalContent>
        <ModalHeader>
          <img src={check} alt="" />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </ModalHeader>
        <OrderInfos>
            <OrderSummary>
              {modalData.map((product, index) => (
                <OrderItem key={index}>
                  <ProductImage src={product.image?.thumbnail} alt={product.name} />
                <ContainerDetails>
                    <p className="product-name">{product.name}</p>
                    <ProductDetails>
                        <span className="product-quantity">{product.quantity}x</span>
                        <p>@ ${product.price.toFixed(2)}</p>
                    </ProductDetails>
                </ContainerDetails>
                <span className="product-total">${(product.quantity * product.price).toFixed(2)}</span>
                </OrderItem>
                
            ))}
            </OrderSummary>
                <OrderTotal>
                <span>Order Total</span>
                <TotalAmount>${total.toFixed(2)}</TotalAmount>
            </OrderTotal>
        </OrderInfos>
        
        <NewOrderButton onClick={onNewOrder}>Start New Order</NewOrderButton>
      </ModalContent>
    </Dialog>
  );
};

export default OrderConfirmationModal;

const Dialog = styled.dialog`
  border: none;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

    @media (max-width: 768px){
        align-items: end;
    }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  width: 500px;
  max-height: 80%;
  text-align: center;

  @media (max-width: 768px){
    width: 100%;
    max-height: 80vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 8px;

  img{
    max-width: 35px;
    margin-bottom: 5px;
  }

  h2{
    font-size: 28px;
  }

  p{
    color: grey;
    font-size: 14px;
  }
`;

const OrderInfos = styled.div`
  padding: 15px;
  background: hsl(26, 53.80%, 97.50%);
  border-radius: 10px;
  margin-bottom: 20px;
  }
`;

const OrderSummary = styled.div`
  margin-bottom: 15px;
  max-height: 350px;
  overflow-y: auto;

    @media (max-width: 768px){
    max-height: 150px;
  }
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(240, 238, 238, 0.8);
  margin-bottom: 10px;
  font-weight: 600;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;

const ContainerDetails = styled.div`
  flex-grow: 1;
  text-align: left;
  text-transform: capitalize;
  min-width: 0;

  .product-name{
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`

const ProductDetails = styled.div`
    margin-top: 4px;
    display: grid;
    grid-template-columns: 30px 100px;
    grid-template-rows: 1;

    span{
        color: hsl(14, 86%, 42%);
    }

    p{
        font-weight: 400;
        color:hsl(14, 25%, 72%);
    }
`;

const OrderTotal = styled.div`
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

const TotalAmount = styled.h2`
  font-weight: bold;
`;

const NewOrderButton = styled.button`
  background: hsl(14, 86%, 42%);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  &:hover {
    background: hsl(14, 84.8%, 36.1%);
  }
`;
