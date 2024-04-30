import { createContext, useState } from 'react';
import {PRODUCTS} from '../products.jsx';
import propTypes from 'prop-types';

export const ShopContext= createContext(null);//a context creates a store that keeps track of functions and states that defines logics that will be used everywhere in our project
const getDefaultCart= ()=>{// function for adding more products
    let cart ={}//cart object
    for(let i=0;i<PRODUCTS.length;i++){
        cart[i] =0
    }
    return cart;
} 


export const ShopContextProvider =(props)=> {// defines all states and functions of our application.
    const[cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{//adding to cart
        setCartItems(function(prev) {
            return {...prev, [itemId]: prev[itemId] + 1};
        });
    };

    const removeFromCart = (itemId)=> {
        setCartItems(function(prev) {
            return {...prev, [itemId]: prev[itemId] - 1};
        });
    };
    const contextValue = {cartItems, addToCart, removeFromCart};
    

    console.log(cartItems);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
        
    );        
};
ShopContextProvider.propTypes={
    children: propTypes.node.isRequired,
}
