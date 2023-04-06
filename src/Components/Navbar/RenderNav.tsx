import React from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav/MobileNav'

type NavProps = {
    cartLength: number;
    cart: any;
    setCart: Function;
    setCartItemSummary: Function;
    cartItemSummary: any;
    setShoeCartQuantities: Function;
    shoeCartQuantities: any;
    cartTotal: number;

}

function RenderNav({ cartLength, cart, setCart, setCartItemSummary, cartItemSummary, shoeCartQuantities, setShoeCartQuantities, cartTotal }: NavProps) {
    return (
        <>
            <MobileNav cartLength={cartLength} />
            <Navbar cartLength={cartLength} cart={cart} setCart={setCart} cartItemSummary={cartItemSummary} setCartItemSummary={setCartItemSummary} shoeCartQuantities={shoeCartQuantities} setShoeCartQuantities={setShoeCartQuantities} cartTotal={cartTotal} />
        </>
    )
}

export default RenderNav