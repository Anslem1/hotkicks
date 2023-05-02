import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { formatToCurrency } from '../../ImageExports';
import Cart from '../../Pages/Cart/Cart';


type NavCartProps = {
    showCartOverlay: boolean;
    setShowCartOverlay: Function;
    cart: any;
    setCart: Function;
    setCartItemSummary: Function;
    cartItemSummary: any;
    setShoeCartQuantities: Function;
    shoeCartQuantities: any;
    cartTotal: number;

}
interface CartItem {
    id: number;
    shoeImage: string;
    shoeName: string;
    shoeSize: string;
    shoeColor: string;
    shoePrice: number;
    shoeQuantity: number;

}


interface CartItemSummary {
    shoeName: string;
    shoeTotalQuantity: number;
    shoeTotalPrice: number;
}

export function NavCartHover({ setShowCartOverlay, cart, setCart, cartItemSummary, setCartItemSummary, shoeCartQuantities, setShoeCartQuantities, cartTotal }: NavCartProps) {
    // const [showCartOverlay, setShowCartOverlay] = useState<boolean>(false)
    const locate = useLocation()



    useEffect(() => {
        const cartProducts = localStorage.getItem('cartProducts');
        const storedCart: CartItem[] = cartProducts ? JSON.parse(cartProducts) : [];
        setCart(storedCart);
        setShoeCartQuantities(storedCart.map(() => 1));
        const summary: CartItemSummary[] = storedCart.map((item) => {
            return {
                shoeName: item.shoeName,
                shoeTotalQuantity: 1,
                shoeTotalPrice: item.shoePrice,
            };
        });
        setCartItemSummary(summary);
    }, [setCart, setCartItemSummary, setShoeCartQuantities]);

    const handleQuantityChange = (index: number, newQuantity: number) => {
        setShoeCartQuantities((prevQuantities: any) => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities[index] = newQuantity;
    
            setCart((prevCart: CartItem[]) => {
                const updatedCart = [...prevCart]; // make a copy of the cart array
                updatedCart[index] = { ...updatedCart[index], shoeQuantity: newQuantity };
                localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
             
                return updatedCart;

            });

            return updatedQuantities;
        });
        setCartItemSummary((prevSummary: any) => {
            const updatedSummary = [...prevSummary];
            updatedSummary[index].shoeTotalQuantity = newQuantity;
            updatedSummary[index].shoeTotalPrice = newQuantity * cart[index].shoePrice;
            return updatedSummary;
        });
    };




    const handleRemoveItem = (index: number) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
        setCart(updatedCart);
        setShoeCartQuantities((prevQuantities: number[]) => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities.splice(index, 1);
            return updatedQuantities;
        });
        setCartItemSummary((prevSummary: any) => {
            const updatedSummary = [...prevSummary];
            updatedSummary.splice(index, 1);
            return updatedSummary;
        });
    };




    return (
        <>
            <div className="cart-hover" onMouseOver={() => setShowCartOverlay(true)}
                onMouseLeave={() =>
                    locate.pathname === '/cart' ? setShowCartOverlay(false) :
                        setShowCartOverlay(false)
                }>
                <div>
                    <div className='cart-hover-nav'>

                        <nav>
                            <p>Product Details</p>
                            <p>Unit Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                        </nav>


                        <section>
                            {cart.map((item: any, index: number) =>
                                <div className="nav-hover-product-container">

                                    <div>

                                        <div className="nav-hover-img-container">

                                            <img src={item.shoeImage} alt="" />
                                            <div>
                                                <p>{item.shoeName}</p>
                                                <div>
                                                    <p>{item.shoeSex = 'Male'}</p>
                                                    <p>Size {item.shoeSize = 44}</p>
                                                    <p style={{ backgroundColor: item.shoeColor, padding: '6px' }} className='cart-shoe-color'></p>
                                                </div>
                                            </div>
                                        </div>

                                        <p>{formatToCurrency(item.shoePrice)}</p>
                                        <div className='hover-nav-quantity-container'>
                                            <div>
                                                <span
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            index,
                                                            shoeCartQuantities[index] <= 1 ? 1 : shoeCartQuantities[index] - 1
                                                        )
                                                    }
                                                >
                                                    -
                                                </span>
                                                <p>{item.shoeQuantity}</p>
                                                <span onClick={() => handleQuantityChange(index, shoeCartQuantities[index] + 1)}>+</span>
                                            </div>
                                        </div>

                                        <p>{formatToCurrency(item.shoePrice * item.shoeQuantity)}</p>
                                        <p className='remove-cart' onClick={() =>


                                            handleRemoveItem(index)

                                        }>
                                            <i className='fa-solid fa-trash'></i>
                                        </p>
                                    </div>

                                </div>)}

                        </section>


                        <div>
                            {/* to={'/checkout'} */}

                            <div>

                                <Link to='/checkout' style={{ color: '#fff' }} className='checkout-btn' onClick={() => {
                                    localStorage.setItem('cartItemSummary', JSON.stringify(cartItemSummary))
                                    setShowCartOverlay(false)

                                }
                                }>
                                    PROCEED TO  CHECKOUT
                                </Link>
                            </div>

                            <div>
                                <p>TOTAL</p>
                                <p>{formatToCurrency(cartTotal)}</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

