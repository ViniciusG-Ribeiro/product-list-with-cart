import styled from "styled-components";
import { Product } from "../product";

export const Products = ({ products }) => {
    
    return (
        <Div>
            {products.length > 0 ? (
               products.map((product, index) => (
                
                <Product key={index}
                 id={index} 
                 image={product.image} 
                 name={product.name} 
                 category={product.category} 
                 price={product.price} />
               )) 
            ): (
                <p>Nenhum item encontrado</p>
            )}
        </Div>
    )
};

const Div = styled.div`
display: grid;
gap: 1%;
margin-top: 20px;
grid-template-columns: repeat(3, minmax(0, 1fr));
text-align: center;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 15px;
    }
`