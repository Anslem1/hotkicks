import React from 'react'
import { Link } from 'react-router-dom'
import { SigninHOK } from '../../ImageExports'
import './Signup.css'

function Signup() {
    return (
        <>

            <div className="signin-container">
                <div>

                    <div className="input-container">
                        <div>
                            <div>
                                <div className='header-container'>
                                    <div>
                                        <h1>CREATE AN ACCOUNT</h1>
                                        <p>Fill in your details to create an account</p>
                                    </div>
                                </div>
                                <div className='input-content'>
                                    <p>Fullname</p>
                                    <input type="text" />
                                </div>
                                <div className='input-content'>
                                    <p>Email</p>
                                    <input type="text" />
                                </div>
                                <div className='input-content'>
                                    <p>Password</p>
                                    <input type="password" />
                                </div>


                                <button>SIGN UP</button>
                                <div className='singin-btn-container'>

                                    <button> <img src={process.env.PUBLIC_URL + '/stackimages/google.png'} alt="" /> SIGN IN WITH GOOGLE</button>
                                    <button><i className="fa-brands fa-facebook-f"></i> SIGN IN WITH FACEBOOK</button>
                                </div>
                            </div>
                            <p className='new-user'>Have an account? <span>
                                <Link to='/signin'>
                            Login
                                </Link>
                            
                            </span></p>
                        </div>
                    </div>

                    <div className="signin-img-container">
                        <img src={process.env.PUBLIC_URL + '/Logos/singup-image.svg'} alt=""
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

export default Signup