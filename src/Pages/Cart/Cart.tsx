
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MappedProduct from '../../Components/MappedProduct';
import { formatToCurrency } from '../../ImageExports';
import './Cart.css';

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
    cartItemSummary: any;
    setCartItemSummary: Function;
    setShoeCartQuantities: Function;
    shoeCartQuantities: any;
    cartTotal: number;
}


function Cart({ cart, setCart, cartItemSummary, setCartItemSummary, shoeCartQuantities, setShoeCartQuantities, cartTotal }: CartProps) {
    useEffect(() => {
        const cartProducts = localStorage.getItem('cartProducts');
        const storedCart: CartItem[] = cartProducts ? JSON.parse(cartProducts) : [];
        setCart(storedCart);
        setShoeCartQuantities(storedCart.map(() => 1));
        const summary: CartItemSummary[] = storedCart.map((item) => {
            return {
                shoeName: item.shoeName,
                shoeTotalQuantity: item.shoeQuantity,
                shoeTotalPrice: item.shoePrice,
            };
        });
        setCartItemSummary(summary);
    }, [setCart, setCartItemSummary, setShoeCartQuantities]);



    const handleQuantityChange = (index: number, newQuantity: number) => {
        setShoeCartQuantities((prevQuantities: any) => {
            const updatedQuantities = [...prevQuantities];
            updatedQuantities[index] = newQuantity;
            console.log({ updatedQuantities })
            setCart((prevCart: CartItem[]) => {
                const updatedCart = [...prevCart]; // make a copy of the cart array
                updatedCart[index] = { ...updatedCart[index], shoeQuantity: newQuantity };
                localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
                console.log({ updatedCart })
                return updatedCart;

            });

            return updatedQuantities;
        });
        setCartItemSummary((prevSummary: any) => {
            const updatedSummary = [...prevSummary];
            console.log({updatedSummary})
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


    console.log({ cartItemSummary })
    // loc

    return (
        <div className='cart-container'>
            {cart.length > 0 ? (
                <div>

                    <h1>SHOPPING CART ({localStorage.getItem('cartCount')} {cart.length === 1 ? 'ITEM' : 'ITEMS'})</h1>
                    <div className="product-header">
                        <p>PRODUCT DETAILS</p>
                        <div>

                            <p>UNIT PRICE</p>
                            <p>QUANTITY</p>
                            <p>TOTAL</p>
                        </div>
                    </div>
                    <div className='cart-product-container'>
                        {cart.map((item: CartItem, index: number) => (
                            <div className='product-cart-content' key={item.id}>
                                <div className='product-cart-datails'>
                                    <img src={item.shoeImage} alt='' />
                                    <div>
                                        <p>{item.shoeName}</p>
                                        <div>
                                            <p>{item.shoeSize}</p>
                                            <p style={{ backgroundColor: item.shoeColor }} className='cart-shoe-color'></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='price-quantity'>
                                    <p>{formatToCurrency(item.shoePrice)}</p>
                                    <div className='cart-quantity-container'>
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
                                    <p>{
                                        formatToCurrency(item.shoePrice * item.shoeQuantity)

                                    }</p>


                                    <p className='remove-cart' onClick={() =>


                                        handleRemoveItem(index)

                                    }>
                                        Remove
                                        <i className='fa-solid fa-trash'></i>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <h1 className='empty-cart'>Your cart is empty</h1>
            )}
            {cart.length > 0 &&
                <div className='total-container' >
                    <div className='subtotal-container'>
                        <div className='subtotal'>
                            <p>Subtotal</p>
                            <p>{formatToCurrency(cartTotal)}</p>
                        </div>
                        <div className='subtotal'>
                            <p>shipping free</p>
                            <p>{formatToCurrency(1200)}</p>
                        </div>
                    </div>
                    <div className='total'>
                        <p>Total</p>
                        <p>{formatToCurrency(cartTotal + 1200)}</p>

                    </div>
                    <Link to='/checkout' style={{ color: '#fff' }} className='checkout-btn' onClick={() => localStorage.setItem('cartItemSummary', JSON.stringify(cartItemSummary))}>

                        CHECKOUT
                    </Link>
                </div>
            }
        </div>
    )
}

export default Cart;