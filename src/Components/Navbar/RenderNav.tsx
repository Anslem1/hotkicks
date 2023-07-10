import Navbar from "./Navbar";
import MobileNav from "./MobileNav/MobileNav";
import { NavProps } from "../../types";

function RenderNav({
     cartLength,
     cart,
     setCart,
     setCartItemSummary,
     cartItemSummary,
     shoeCartQuantities,
     setShoeCartQuantities,
     cartTotal,
}: NavProps) {
     return (
          <>
               <MobileNav cartLength={cartLength} />
               <Navbar
                    cartLength={cartLength}
                    cart={cart}
                    setCart={setCart}
                    cartItemSummary={cartItemSummary}
                    setCartItemSummary={setCartItemSummary}
                    shoeCartQuantities={shoeCartQuantities}
                    setShoeCartQuantities={setShoeCartQuantities}
                    cartTotal={cartTotal}
               />
          </>
     );
}

export default RenderNav;
