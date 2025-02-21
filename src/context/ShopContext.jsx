import React, { createContext, useState, useEffect } from 'react';
import all_product from '../assets/images/Assets/all_product';

export const ShopContext = createContext(null);
const proceedToCheckOut = () => {
    let all = getTotalCartAmount();
    if (all ===  all) {
        console.log('successfully')
}
}

const getDefaultCart = () => {
    let Cart = {};
    for (let i = 0; i < all_product.length; i++) {
        Cart[all_product[i].id] = 0; // ✅ Make sure IDs are used correctly
    }
    return Cart;
};


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (ItemId) => {  
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    };

    const removeFromCart = (ItemId) => {  
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount; // Returns total amount in currency
    };
    
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem; // Returns the total quantity of items in the cart
    };

    useEffect(() => {
        console.log("Updated Cart:", cartItems); // ✅ Logs updated cart
    }, [cartItems]);

    const contextValue = { 
        getTotalCartItems, 
        getTotalCartAmount, 
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart 
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
