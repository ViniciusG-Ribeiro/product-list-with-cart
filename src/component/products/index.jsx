import styled from "styled-components";
import { Product } from "../product";
import { useEffect, useState } from "react";

export const Products = ({ products }) => {
    
    useEffect(() =>{
        console.log(products)
    },[products])

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
`