import React, { useRef } from 'react'
import { FooterImage } from '../../ImageExports'
import MappedProduct from '../MappedProduct'
import './Footer.css'





function Footer() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollOffset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollOffset;
        }
    };

    return (
        <>
            <div className='best-seller'>
                <h1 >BEST SELLER</h1>
                <div>
                    <button className='scroll-btn' onClick={() => handleScroll(-100)}>{"<"}</button>
                    <MappedProduct
                        ref={scrollRef}
                        outterDiv='footer-best-seller-container'
                        innerDiv='footer-best-seller-content'
                    />

                    <button className='scroll-btn' onClick={() => handleScroll(100)}>{">"}</button>
                </div>
            </div>

            <footer>
                <div>

                    <div className="contact-container">
                        <div className='footer-image-container'>
                            <img src={FooterImage} alt="" />
                        </div>
                        <div className='footer-contact-content'>

                            <div className='footer-quick-link-container'>
                                <p>Quick link</p>
                                <ul>
                                    <li>
                                        Signup
                                    </li>
                                    <li>
                                        About us
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-quick-link-container'>
                                <p>Others</p>
                                <ul>
                                    <li>
                                        User FAQs
                                    </li>
                                    <li>
                                        Contact us
                                    </li>
                                    <li>
                                        Legal
                                    </li>
                                    <li>
                                        Privacy policy
                                    </li>
                                    <li>
                                        Terms and Conditions
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="newsletter-container">
                        <p>Subscribe to our newsletter and be the first to know about our updates</p>

                        <div>
                            <input type="text" placeholder='Email' name="" id="" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="social-container">
                    <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer