import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoImage, sideNavLogo } from "../../../ImageExports";

type NavProps = {
     cartLength: number | undefined;
};

function MobileNav({ cartLength }: NavProps) {
     const [overlay, setOverlay] = useState(false);

     return (
          <>
               <nav className="mobile-navbar-container">
                    <div className="mobile-nav-category">
                         <Link to={"/"}>
                              <img src={LogoImage} alt="" />
                         </Link>
                         {/* <div>
                        <Link to='/new-arrival'>New arrival</Link>
                        <Link to='/men'>Men</Link>
                        <Link to='/women'>Women</Link></div> */}
                    </div>

                    <div className="mobile-hamburger-container">
                         <Link
                              to="/cart"
                              // className='mobile-cart'
                              className="cart-nav"
                         >
                              <i className="fa-solid fa-cart-shopping"></i>

                              <div>
                                   <span>{cartLength}</span>
                              </div>
                         </Link>

                         <div onClick={() => setOverlay((prev) => !prev)}>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                         </div>
                    </div>
                    {overlay && (
                         <div className="overlay-div">
                              <div>
                                   <div
                                        className="cancel-overlay"
                                        onClick={() =>
                                             setOverlay((prev) => !prev)
                                        }
                                   >
                                        <div></div>
                                        <div></div>
                                   </div>

                                   <div className="mobile-overlay-content">
                                        <div>
                                             <Link to={"/new-arrival"}>
                                                  New Arrival
                                             </Link>
                                             <Link to={"/women"}>Women</Link>
                                             <Link to={"/men"}>Men</Link>
                                             <p>
                                                  Categories <span> {">"}</span>
                                             </p>
                                        </div>
                                   </div>
                                   <div className="mobile-signin-overlay">
                                        <Link
                                             to={"/signin"}
                                             onClick={() => setOverlay(false)}
                                        >
                                             SIGN IN
                                        </Link>
                                        <Link
                                             to={"/register"}
                                             onClick={() => setOverlay(false)}
                                        >
                                             REGISTER
                                        </Link>
                                   </div>
                              </div>
                              <img
                                   src={sideNavLogo}
                                   alt=""
                                   className="side-nav-logo"
                              />
                         </div>
                    )}
               </nav>
          </>
     );
}

export default MobileNav;
