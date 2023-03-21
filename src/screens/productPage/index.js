import React from 'react'
import { CartState } from '../../context/Context'
import SingleProduct from './SingleProduct';
import "./style.css"

const Home = () => {

    const { state: { products },
        productState: { searchQuery } } = CartState();



    const transformProducts = () => {
        let sortedProducts = [...products];

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.title.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    }



    return (

        <div className="productContainer">
            {
                transformProducts().map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id}></SingleProduct>
                })
            }
        </div>

    )
}

export default Home