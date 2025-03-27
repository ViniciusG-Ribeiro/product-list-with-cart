import { useState } from "react";
import productsJson from "../../assets/data/data.json";
import { Products } from "../products";

const Grid = () => {
    const [products] = useState(productsJson)

    return (
        <main>
            <h1>Desserts</h1>
            <section>
                <Products products={products} />
            </section>
        </main>
    );
};


export { Grid };