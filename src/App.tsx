import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import RenderNav from "./Components/Navbar/RenderNav";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Footer from "./Components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/SIgnin/Signin";

import NewArrivals from "./Pages/NewArrivals/NewArrivals";
import Checkout from "./Pages/Checkout/Checkout";
import RenderCart from "./Pages/Cart/RenderCart";
import Summary from "./Pages/Summary/Summary";
import Success from "./Pages/Success/Success";
import { CartItem, CartItemSummary } from "./types";

function App() {
     const [cart, setCart] = useState<CartItem[]>([]);
     const [cartItemSummary, setCartItemSummary] = useState<CartItemSummary[]>(
          []
     );
     const [shoeCartQuantities, setShoeCartQuantities] = useState<number[]>(
          cart.map(() => 1)
     );

     function shoeItem(item: {}) {
          setCart((prevCart: any) => [...prevCart, item]);
     }

     const [shoeQuantity, setShoeQuantity] = useState<number>(1);
     const [showOverlay, setShowOverlay] = useState<boolean>(false);

     localStorage.setItem("cartProducts", JSON.stringify(cart));

     const navigate = useLocation();
     const path = navigate.pathname as string as "/success" | "/register";

     useEffect(() => {
          const cartProducts = localStorage.getItem("cartProducts");
          const storedCart: CartItem[] = cartProducts
               ? JSON.parse(cartProducts)
               : [];
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

     const cartTotal = cart.reduce((total: number, item: CartItem) => {
          return total + item.shoePrice * item.shoeQuantity;
     }, 0);

     return (
          <>
               <RenderNav
                    setCart={setCart}
                    setShoeCartQuantities={setShoeCartQuantities}
                    setCartItemSummary={setCartItemSummary}
                    cartLength={cart.length}
                    cart={cart}
                    cartItemSummary={cartItemSummary}
                    shoeCartQuantities={shoeCartQuantities}
                    cartTotal={cartTotal}
               />
               <Routes>
                    <Route
                         path="/"
                         element={
                              <Home
                                   shoeItem={shoeItem}
                                   setShowOverlay={setShowOverlay}
                                   showOverlay={showOverlay}
                              />
                         }
                    />
                    <Route
                         path="/men"
                         element={
                              <Men
                                   shoeItem={shoeItem}
                                   setShowOverlay={setShowOverlay}
                                   showOverlay={showOverlay}
                              />
                         }
                    />
                    <Route
                         path="/women"
                         element={
                              <Women
                                   shoeItem={shoeItem}
                                   setShowOverlay={setShowOverlay}
                                   showOverlay={showOverlay}
                              />
                         }
                    />
                    <Route
                         path="/new-arrival"
                         element={
                              <NewArrivals
                                   shoeItem={shoeItem}
                                   setShowOverlay={setShowOverlay}
                                   showOverlay={showOverlay}
                              />
                         }
                    />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/success" element={<Success />} />
                    <Route
                         path="/cart"
                         element={
                              <RenderCart
                                   cart={cart}
                                   setCart={setCart}
                                   cartItemSummary={cartItemSummary}
                                   setCartItemSummary={setCartItemSummary}
                                   shoeCartQuantities={shoeCartQuantities}
                                   setShoeCartQuantities={setShoeCartQuantities}
                                   cartTotal={cartTotal}
                              />
                         }
                    />
                    <Route
                         path="/checkout"
                         element={<Checkout setCart={setCart} />}
                    />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route
                         path="/product/:name"
                         element={
                              <SingleProduct
                                   shoeItem={shoeItem}
                                   shoeQuantity={shoeQuantity}
                                   setShoeQuantity={setShoeQuantity}
                              />
                         }
                    />
               </Routes>
               {path === "/success" ||
               path === "/register" ||
               path === "/signin" ? (
                    ""
               ) : (
                    <Footer
                         shoeItem={shoeItem}
                         setShowOverlay={setShowOverlay}
                         showOverlay={showOverlay}
                    />
               )}
          </>
     );
}

export default App;
