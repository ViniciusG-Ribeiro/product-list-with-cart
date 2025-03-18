import { useEffect, useState } from "react";
import styled from "styled-components";
import productsJson from "../../assets/data/data.json";
import { Products } from "../products";

const Grid = () => {
    const [products] = useState(productsJson)

        // useEffect(() =>{
        //     console.log(products)
        // },[products])

    return(
        <main>
            <h1>Desserts</h1>
            <section>
            <Products products={products}/>
            </section>
        </main>
    );
};


export{ Grid };