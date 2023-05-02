import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogoImage } from '../../ImageExports'

import './Navbar.css'
import { NavCartHover } from './NavCartHover'

type NavProps = {
    cartLength: number
    cart: any;
    setCart: Function;
    setCartItemSummary: Function;
    cartItemSummary: any;
    setShoeCartQuantities: Function;
    shoeCartQuantities: any;
    cartTotal: number;
}


function Navbar({ cartLength, cart, setCart, cartItemSummary, setCartItemSummary, shoeCartQuantities, setShoeCartQuantities, cartTotal }: NavProps) {
    // const cartCount = localStorage.getItem('cartProducts')
    // const storedCart = cartCount ? JSON.parse(cartCount) : "0";

    const [showCartOverlay, setShowCartOverlay] = useState<boolean>(false)
    const locate = useLocation()




    return (
        <>
            <nav className='navbar-container'>
                <div className='nav-category'>
                    <Link to={'/'}>
                        <img src={LogoImage} alt="" />
                    </Link>
                    <div>
                        <Link to='/new-arrival'>New arrival</Link>
                        <Link to='/men'>Men</Link>
                        <Link to='/women'>Women</Link></div>
                </div>
                <div className="nav-login-cart">
                    <Link to='/register'>Register</Link>
                    <Link to='/signin'>Sign in</Link>
                    
                    <Link to='/cart' className='cart-nav' onClick={() => showCartOverlay && setShowCartOverlay(false)} onMouseOver={() => {

                        locate.pathname === '/cart' ? setShowCartOverlay(false) : setShowCartOverlay(true)
                    }
                    }

                    >
                        <i className="fa-solid fa-cart-shopping"></i>

                        {cartLength !== 0 && <div>
                            <span>{cartLength}</span>
                        </div>}
                    </Link>

                    {showCartOverlay && cart.length >= 1 && <NavCartHover showCartOverlay={showCartOverlay} setShowCartOverlay={setShowCartOverlay} cart={cart} setCart={setCart} cartItemSummary={cartItemSummary} setCartItemSummary={setCartItemSummary} shoeCartQuantities={shoeCartQuantities} setShoeCartQuantities={setShoeCartQuantities} cartTotal={cartTotal} />}
                </div>

            </nav>

        </>
    )
}

export default Navbar