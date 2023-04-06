import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { formatToCurrency, payWithCard } from '../../ImageExports';
import './Summary.css'


interface CartItemSummary {
    shoeName: string;
    shoeTotalQuantity: number;
    shoeTotalPrice: number;
}

function Summary() {

    const [summaryItems, setSummaryItems] = useState<CartItemSummary[]>([])
    const cartProducts = localStorage.getItem('cartItemSummary');

    useEffect(() => {
        const storedCartSummary: CartItemSummary[] = cartProducts ? JSON.parse(cartProducts) : [];
        setSummaryItems(storedCartSummary)
        console.log({ storedCartSummary })
    }, [cartProducts])

    const summaryTotal = summaryItems.reduce((accumulator, item) => {
        return accumulator + item.shoeTotalPrice;
    }, 0);

    console.log({ summaryTotal })



    return (
        <>
            <div className="summary-container">
                {summaryItems.length !== 0 ?
                    <div>
                        <h1>SUMMARY</h1>
                        <div className='table-container'>
                            <div>
                                <table>
                                    <tr>
                                        <th className='item-th'>ITEM</th>
                                        <th>QTY</th>
                                        <th>PRICE</th>
                                    </tr>
                                    {
                                        summaryItems.map((item) => <tr>
                                            <td className='item-th'>{item.shoeName}</td>
                                            <td>{(item.shoeTotalQuantity)}</td>
                                            <td>{formatToCurrency(item.shoeTotalPrice)}</td>
                                        </tr>)
                                    }
                                </table>
                            </div>
                            <div className="summary-total">

                                <p>Delivery: <span>{formatToCurrency(1200)}</span></p>
                                <p>Total: <span>{formatToCurrency(summaryTotal)}</span></p>
                            </div>

                            <div className='payment-container'>
                                <h1>PAYMENT</h1>
                                <div>
                                    <div>
                                        <div className="balance-due-container">
                                            <p>Balance Due:</p>
                                            <p>
                                                {formatToCurrency(summaryTotal)}</p>
                                        </div>
                                        <div className="pay-with-card-container">
                                            <div>
                                                <p>Pay with Card</p>
                                                <img src={payWithCard} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link className='summary-button-container' onClick={() => {
                                    localStorage.removeItem('cartItemSummary')
                                    localStorage.removeItem('cartProducts')
                                }

                                } to={'/success'}  >
                                    <button onClick={() => {
                                        localStorage.removeItem('cartItemSummary')
                                        localStorage.removeItem('cartProducts')
                                    }}>PAY</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    : <h1 className='empty-cart'>You have no summary </h1>}
            </div>
        </>
    )
}

export default Summary