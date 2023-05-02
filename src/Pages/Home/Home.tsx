import { Link } from 'react-router-dom';
import { HomeImage, LogoImage, MenShoe, WomenShoe } from '../../ImageExports'
import ShoeFIle from '../../ShoeFIle'
import MappedProduct from '../../Components/MappedProduct';
import './Home.css'
import { useEffect, useState } from 'react';
import Overlay from '../../Components/Overlay/Overlay';
import { shoeItemProps } from '../../types';
import MultiRangeSlider from '../../Components/multiRangeSlider/MultiRangeSlider';




function Home({ shoeItem, setShowOverlay, showOverlay }: shoeItemProps) {
    function formatToCurrency(amount: any) {
        const num = parseFloat(amount);
        const currency = num.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN"
        });
        return currency
    }



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

            <div className={`home-container ${showOverlay && 'overlay-overflow'}`}>

                <div className='home-image-container'>
                    <img src={HomeImage} alt="" />
                    <div>
                        <img src={LogoImage} alt="" />
                    </div>
                </div>

                <div className='shoe-range-container'>
                    <div className="range-container">
                        <div className='shoe-type'>
                            <h1>CATEGORIES</h1>
                            <div>
                                <p>All Product</p>
                                <p>Trending Sneakers</p>
                                <p>Nike Sneakers</p>
                                <p>Addidas Sneakers</p>
                                <p>Puma Sneakers</p>
                                <p>Fila Sneakers</p>
                                <p>Rebook Sneakers</p>
                                <p>Other brands</p>
                            </div>
                        </div>
                        <div className='shoe-price-range-container'>
                            <h1>FILTER</h1>
                            <div>
                                <MultiRangeSlider
                                    min={20000}
                                    max={200000}
                                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                />
                                <div className="hign-to-low-container">
                                    <div>
                                        <input type="checkbox" />
                                        <p>High to low</p>

                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <p>Low to High</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shoe-type-container'>
                        <div className='gender-type-container'>
                            <Link to={'/women'}>
                                <div className='gender-content'>

                                    <img src={WomenShoe} alt="" />
                                    <div>
                                        <p>Women</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/men'}>
                                <div className='gender-content'>
                                    <img src={MenShoe} alt="" />
                                    <div>
                                        <p>Men</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <MappedProduct outterDiv='product-container' innerDiv='product-details' width={screenWidth >= 540 ? '18%' : '40%'} shoeItem={shoeItem} setShowOverlay={setShowOverlay} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home