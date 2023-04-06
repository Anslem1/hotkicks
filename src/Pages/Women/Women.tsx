import React, { useEffect, useState } from 'react'
import MappedProduct from '../../Components/MappedProduct'
import Overlay from '../../Components/Overlay/Overlay';
import { shoeItemProps } from '../../types';
import './Women.css'


function Women({ shoeItem, setShowOverlay, showOverlay }: shoeItemProps) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);
    return (
        <>
            <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
            <div className={`women-container ${showOverlay && 'overlay-overflow'}`}>
                <div>
                    <h1>Women</h1>

                    <div>
                        <MappedProduct outterDiv='product-container' innerDiv='product-details' width={screenWidth >= 540 ? '18%' : '40%'} shoeItem={shoeItem} setShowOverlay={setShowOverlay} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Women