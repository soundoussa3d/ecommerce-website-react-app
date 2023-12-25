import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
//we will create a function that will create one empty card that will be one object where our key value will be our product id  product value will be the quantity of the product we have added in the card 
const getDefaultCart = ()=>{
    let cart={};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider= (props)=> {

    //create one useState variable
    const [cartItems,setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = ()=>{
        let totalAmount = 0 ;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price*cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    //using the context will be accessing cartItem in any other component
    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value= {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
