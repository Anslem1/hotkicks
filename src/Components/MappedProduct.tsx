import React, { forwardRef, RefObject, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatToCurrency } from '../ImageExports';
import ShoeFIle from '../ShoeFIle';
import './MappedProduct.css'

type ProductProps = {
    outterDiv?: string;
    innerDiv?: string;
    width?: string;
    shoeItem?: Function;
    setShowOverlay?: Function;
};


const MappedProduct = forwardRef<HTMLDivElement, ProductProps>(
    ({ outterDiv, innerDiv, width, shoeItem, setShowOverlay }, ref) => {
        function saveProjectToStorage(projectObject: Object) {
            localStorage.setItem('projectObject', JSON.stringify(projectObject));
        }


        function overlayItem(file: {}) {
            localStorage.setItem('overlayitem', JSON.stringify(file))
        }




        return (
            <div className={outterDiv} ref={ref}>
                {ShoeFIle.map((file) => (
                    <div key={file.number} style={{ width }}>
                        <Link to={`/product/${file.shoeName}`}>
                            <i className="fa-regular fa-heart"></i>
                            <img
                                src={file.shoeImage}
                                alt={file.shoeName}
                                onClick={() => saveProjectToStorage({ ...file })}
                            />
                            <div className={innerDiv}>
                                <p>{file.shoeName}</p>
                                <p>{formatToCurrency(file.shoePrice)}</p>
                            </div>
                        </Link>
                        <button
                            onClick={() => {
                             
                                shoeItem?.({ ...file, shoeSize: '44', shoeColor: 'black' });
                                setShowOverlay?.(true)
                                overlayItem?.({ ...file })
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        );
    }
);

export default MappedProduct;
