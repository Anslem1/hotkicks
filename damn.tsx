    // useEffect(() => {
    //     const cartProducts = localStorage.getItem('cartProducts');
    //     const storedCart: CartItem[] = cartProducts ? JSON.parse(cartProducts) : [];
    //     setCart(storedCart);
    //     const quantities = storedCart.map(item => item.shoeQunatity);
    //     setShoeCartQuantities(quantities);
    //     const summary: CartItemSummary[] = storedCart.map(item => {
    //         return {
    //             shoeName: item.shoeName,
    //             shoeTotalQuantity: item.shoeQunatity,
    //             shoeTotalPrice: item.shoeQunatity * item.shoePrice,
    //         };
    //     });
    //     setCartItemSummary(summary);
    // }, [setCart, setCartItemSummary, setShoeCartQuantities])






    // const handleQuantityChange = (index: number, newQuantity: number) => {
    //     setCart((prevCart: any) => {
    //         const updatedCart = [...prevCart];
    //         updatedCart[index].quantity = newQuantity;
    //         localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    //         return updatedCart;
    //     });

    //     setCartItemSummary((prevSummary: any) => {
    //         const updatedSummary = [...prevSummary];
    //         updatedSummary[index].shoeTotalQuantity = newQuantity;
    //         updatedSummary[index].shoeTotalPrice = newQuantity * cart[index].shoePrice;
    //         return updatedSummary;
    //     });
    // };







    // const handleQuantityChange = (index: number, newQuantity: number) => {
    //     setCart((prevCart: any) => {
    //         const updatedCart = [...prevCart];
    //         updatedCart[index].shoeQunatity = newQuantity;
    //         localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    //         return updatedCart;
    //     });

    //     setShoeCartQuantities((prevQuantities: number[]) => {
    //         const updatedQuantities = [...prevQuantities];
    //         updatedQuantities[index] = newQuantity;
    //         return updatedQuantities;
    //     });
    // };








  
