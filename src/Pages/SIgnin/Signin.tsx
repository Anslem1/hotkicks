import React from 'react'
import { Link } from 'react-router-dom'
import { SigninHOK } from '../../ImageExports'

function Signin() {
    return (
        <>

            <div className="signin-container">
                <div>

                    <div className="input-container">
                        <div>
                            <div>

                                <div className='header-container'>
                                    <div>
                                        <h1>Welcome back</h1>
                                        <p>Fill in your details to sign in to your account</p>
                                    </div>
                                </div>

                                <div className='input-content'>
                                    <p>Email</p>
                                    <input type="text" />
                                </div>
                                <div className='input-content'>
                                    <p>Password</p>
                                    <input type="password" />
                                </div>
                                <div className='forgot-password-container'>
                                    <div>
                                        <input type="checkbox" />


                                        Remember me

                                    </div>
                                    <p>Forgot password?</p>
                                </div>

                                <button>SIGN IN</button>
                                <div className='singin-btn-container'>


                                    <button> <img src={process.env.PUBLIC_URL + '/stackimages/google.png'} alt="" /> SIGN IN WITH GOOGLE</button>
                                    <button><i className="fa-brands fa-facebook-f"></i> SIGN IN WITH FACEBOOK</button>
                                </div>
                            </div>
                            <p className='new-user'>New user? <span>
                                <Link to='/register'>
                                    Create an account
                                </Link>
                            </span></p>
                        </div>
                    </div>

                    <div className="signin-img-container">
                        <img src={process.env.PUBLIC_URL + '/Logos/signin-imagesvg.svg'} alt=""
                        />
                        <div>
                            <img src={SigninHOK} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Signin