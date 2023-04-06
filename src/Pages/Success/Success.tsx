import React from 'react'
import { Link } from 'react-router-dom'
import { success } from '../../ImageExports'
import './Success.css'

function Success() {
    return (
        <>
            <div className='success-container'>
                <div>
                    <div>
                        <div className='check-container'>
                                <div>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            <div>
                            </div>
                            <div>
                            </div>
                            
                        </div>

                        <p className='success-text'>Success</p>
                        <p className='success-text'>Your order has been successfully placed</p>
                        <Link to='/'>
                            <button>GO BACK</button>
                        </Link>
                        {<div className='success-img'>
                            <img src={success} alt="" />
                        </div>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Success