import React from 'react'
import { Link } from 'react-router-dom'
import "./Checkout.css"

type SummamryProps = {
    setCart: Function
}

function Checkout({ setCart }: SummamryProps) {
    return (
        <>
            <div className='checkout-container'>
                <div>
                    <h1>SHIPPING INFORMATION</h1>
                    <div className='checkout-content'>
                        <div className='checkout-input-container'>
                            <div className='checkout-input-content'>
                                <p>Fullname</p>
                                <input type="text" required />
                            </div>
                            <div className='checkout-input-content'>
                                <p>Email</p>
                                <input type="text" required />
                            </div>
                            <div className='checkout-input-content'>
                                <p>Phone number</p>
                                <input type="number" required />
                            </div>
                            <div className='checkout-input-content'>
                                <p>Address</p>
                                <input type="text" required />
                            </div>
                            {/* <div> */}
                            <Link to='/summary' className='btn-container' onClick={() => {
                                localStorage.removeItem('cartProducts')
                                setCart([])
                            }
                            }>
                                
                                PLACE ORDER
                    
                            </Link>
                            {/* </div> */}
                        </div>
                        <div className='delivery-return-container'>
                            <div className='delivery-info'>
                                <h1>Delivery Information</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum viverra consectetur sed in integer tristique felis. Cras amet malesuada vel arcu tellus nam.
                                    Vel massa dictum ullamcorper arcu cursus massa ullamcorper accumsan. Hendrerit consectetur nibh aliquam massa donec sed eu varius.
                                </p>
                            </div>
                            <div className='delivery-info'>
                                <h1>Return Policy</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum viverra consectetur sed in integer tristique felis. Cras amet malesuada vel arcu tellus nam.
                                    Vel massa dictum ullamcorper arcu cursus massa ullamcorper accumsan. Hendrerit consectetur nibh aliquam massa donec sed eu varius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout