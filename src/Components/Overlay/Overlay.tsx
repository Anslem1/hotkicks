import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { formatToCurrency } from '../../ImageExports';
import './Overlay.css'


type SingleProductProps = {
    showOverlay: boolean;
    setShowOverlay: Function;
};

function Overlay({
    showOverlay, setShowOverlay }: SingleProductProps) {

    const overlay = localStorage.getItem('overlayitem')
    const overlayItem = overlay ? JSON.parse(overlay) : null


    const locate = useLocation()




    return (
        <>
            {
                showOverlay &&
                <>

                    <div className={`single-product-overlay ${locate.pathname === '/' && 'home-overlay'}`}>
                    </div>
                    <div>
                        <div className='single-overlay-product-container'>
                            <div>
                                <div>
                                    <h1>{overlayItem.shoeName} has been added to cart</h1>
                                    <div>

                                        <img src={overlayItem.shoeImage} alt='' />
                                        <div>
                                            <p>{overlayItem.shoeName}</p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <p style={{ fontFamily: 'Roboto' }}> Size {overlayItem.shoeSize = 44}</p>
                                                <p style={{
                                                    backgroundColor:
                                                        overlayItem.shoeColor = 'black'
                                                }} className='cart-shoe-color'></p>
                                            </div>
                                        </div>

                                        <p style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: '13px' }}>{formatToCurrency(overlayItem.shoePrice)}</p>
                                    </div>
                                    <section className="overlay-btn-container">
                                        <p onClick={() => setShowOverlay(false)}>COUNTINUE SHOPPING</p>
                                        <Link to={'/cart'} onClick={() => setShowOverlay(false)}>
                                            <button> Proceed to Checkout</button>
                                        </Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Overlay