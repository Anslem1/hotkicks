import React from 'react'
import Cart from './Cart'
import MobileCart from './MobileCart'

type CartProps = {
    cart: any;
    setCart: Function;
    setCartItemSummary: Function;
    cartItemSummary: any;
    setShoeCartQuantities: Function;
    shoeCartQuantities: any;
    cartTotal: number;

}




function RenderCart({ cart, setCart, cartItemSummary, setCartItemSummary, shoeCartQuantities, setShoeCartQuantities, cartTotal }: CartProps) {
    return (
        <>
            <Cart cart={cart} setCart={setCart} cartItemSummary={cartItemSummary} setCartItemSummary={setCartItemSummary} shoeCartQuantities={shoeCartQuantities} setShoeCartQuantities={setShoeCartQuantities} cartTotal={cartTotal} />
            <MobileCart cart={cart} setCart={setCart} />
        </>
    )
}

export default RenderCart