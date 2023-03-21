import axios from 'axios';

import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
import { cartReducer } from './Reducer';
import data from "./product.json"
import { productReducer } from './Reducer';
import { checkoutReducer } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: data,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        searchQuery: ""
    })

    const [checkoutData, checkoutDispatch] = useReducer(checkoutReducer, {
        shippingAddress: null,
        paymentInfo: null,
    })



    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then(res => res.json())
    //         .then(data => {
    //             dispatch({ type: 'SET_PRODUCTS', payload: data });
    //         });
    // }, [])


    return <Cart.Provider
        value={{
            state,
            dispatch,
            productState,
            productDispatch,
            checkoutData,
            checkoutDispatch
        }}>{children}</Cart.Provider>

}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}
