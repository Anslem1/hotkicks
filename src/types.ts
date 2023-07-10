export type shoeItemProps = {
     shoeItem: (item: {}) => void | undefined;
     setShowOverlay: (value: boolean) => void;
     showOverlay: boolean;

};

export type CartItemSummary = {
     shoeName: string;
     shoeTotalQuantity: number;
     shoeTotalPrice: number;
}
export type CartItem = {
     id: number;
     shoeImage: string;
     shoeName: string;
     shoeColor: string;
     shoePrice: number;
     shoeQuantity: number;
     shoeSize?: 44;
     shoeSex?: 'Male';

}

export interface NavProps {
     showCartOverlay?: boolean;
     setShowCartOverlay?: (value: boolean) => void;
     cartLength?: number;

     // CONSTANTS
     cart: CartItem[];
     setCart: (cart: any) => void;
     setCartItemSummary: (summary: any) => void;
     cartItemSummary: CartItemSummary[];
     setShoeCartQuantities: (quantities: any) => void;
     shoeCartQuantities: number[];
     cartTotal: number;
};
