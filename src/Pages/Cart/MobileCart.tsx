import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { formatToCurrency } from '../../ImageExports';


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

type CartProps = {
    cart: any;
    setCart: Function;
}



function MobileCart({ cart, setCart }: CartProps) {
    // const [cart, setCart] = useState<CartItem[]>([]);
    const [shoeCartQuantities, setShoeCartQuantities] = useState<number[]>([]);
    const [cartItemSummary, setCartItemSummary] = useState<CartItemSummary[]>([]);

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
    }, []);

    const handleQuantityChange = (index: number, newQuantity: number) => {
        setShoeCartQuantities((prevQuantities) => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities[index] = newQuantity;
            return updatedQuantities;
        });
        setCartItemSummary((prevSummary) => {
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
        localStorage.setItem('cartCount', String(updatedCart.length));
        setCart(updatedCart);
        setShoeCartQuantities((prevQuantities: number[]) => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities.splice(index, 1);
            return updatedQuantities;
        });
        setCartItemSummary((prevSummary) => {
            const updatedSummary = [...prevSummary];
            updatedSummary.splice(index, 1);
            return updatedSummary;
        });
    };

    const cartTotal = cart.reduce((accumulator: number, item: { shoePrice: number; }, index: any) => {
        return accumulator + item.shoePrice * shoeCartQuantities[index];
    }, 0);





    return (
        <>
            <div className='mobile-cart-container'>
                {cart.length > 0 ?
                    <div>
                        <section>
                            <h1>SHOPPING CART ({localStorage.getItem('cartCount')}
                                {cart.length === 1 ? ' ITEM' : ' ITEMS'})</h1>
                            <p
                                onClick={() => {
                                    localStorage.removeItem('cartProducts');
                                    localStorage.removeItem('cartCount');
                                    localStorage.removeItem('cartItemSummary');
                                    setShoeCartQuantities([]);
                                }}
                            >Remove all</p>
                        </section>
                        <div className="mobile-cart-product-container">
                            {
                                cart.map((item: CartItem, index: number) =>
                                    <div className="mobile-cart-product-content">
                                        <div className='mobile-product-cart-datails'>

                                            <div className='mobile-img-cart-container'>
                                                <img
                                                    src={item.shoeImage} alt='' />
                                                <p
                                                    onClick={() => handleRemoveItem(index)}>remove</p>
                                            </div>
                                            <div>

                                                <p className='mb'>{item.shoeName}</p>
                                                <div className='mobile-color-shoe-size mb'>
                                                    <p>{item.shoeSize}</p>
                                                    <p style={{ backgroundColor: item.shoeColor }} className='cart-shoe-color'></p>
                                                </div>
                                                <div className='mobile-cart-quantity-container'>
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
                                                        <p>{shoeCartQuantities[index]}</p>
                                                        <span onClick={() => handleQuantityChange(index, shoeCartQuantities[index] + 1)}>+</span>
                                                    </div>
                                                    <p>{
                                                        formatToCurrency(item.shoePrice)

                                                    }</p>
                                                </div>



                                            </div>

                                        </div>
                                        <div className='mobile-sub-total-container'>
                                            <section>

                                                <p>Sub Total</p>
                                                <p>{
                                                    formatToCurrency(item.shoePrice * shoeCartQuantities[index])
                                                }</p>
                                            </section>
                                        </div>
                                    </div>
                                )

                            }
                        </div>
                    </div> : <h1 className='empty-cart'>Your cart is empty</h1>
                }
                {cart.length > 0 &&
                    <div className='total-container' >
                        <div className='subtotal-container'>

                            <div className='subtotal '>
                                <p>Subtotal</p>
                                <p className='one'>{formatToCurrency(cartTotal)}</p>
                            </div>
                            <div className='subtotal two'>
                                <p >shipping free</p>
                                <p className='one'>{formatToCurrency(1200)}</p>
                            </div>
                        </div>
                        <div className='total'>
                            <p>Total</p>
                            <p className='one'>{formatToCurrency(cartTotal + 1200)}</p>

                        </div>
                        <button className='checkout-btn' onClick={() => localStorage.setItem('cartItemSummary', JSON.stringify(cartItemSummary))}>
                            <Link to='/checkout' style={{ color: '#fff' }}> Checkout
                            </Link>
                        </button>
                    </div>

                }
            </div>
        </>
    )
}

export default MobileCart