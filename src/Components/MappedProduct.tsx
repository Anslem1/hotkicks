import React, { forwardRef, RefObject, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatToCurrency } from "../ImageExports";
import ShoeFIle from "../ShoeFIle";
import "./MappedProduct.css";

type ProductProps = {
     outterDiv: string;
     innerDiv: string;
     width?: string;
     shoeItem?: (item: {}) => void;
     setShowOverlay?: (value: boolean) => void;
     footer?: string;
};

const MappedProduct = forwardRef<HTMLDivElement, ProductProps>(
     (
          { outterDiv, innerDiv, width, shoeItem, setShowOverlay, footer },
          ref
     ) => {
          const [shoeArray, setShoeArray] = useState<{}[]>([]);
          const [currentShoePage, setCurrentShoePage] = useState<number>(1);
          const [shoePostPerPage, setShoePostPerPage] = useState<number>(8);

          const indexOfLastShoePage = currentShoePage * shoePostPerPage;
          const indexOfFirstShoePage = indexOfLastShoePage - shoePostPerPage;
          const currentShoesArray = shoeArray.slice(
               indexOfFirstShoePage,
               indexOfLastShoePage
          );

          const shoePageNumbers: number[] = [];

          const paginate = (pageNumber: number) =>
               setCurrentShoePage(pageNumber);

          for (
               let index = 1;
               index <= Math.ceil(shoeArray.length / shoePostPerPage);
               index++
          ) {
               shoePageNumbers.push(index);
          }

          useEffect(() => {
               setShoeArray(ShoeFIle);
          }, []);

          function saveProjectToStorage(projectObject: {}) {
               localStorage.setItem(
                    "projectObject",
                    JSON.stringify(projectObject)
               );
          }

          function overlayItem(file: {}) {
               localStorage.setItem("overlayitem", JSON.stringify(file));
          }

          return (
               <>
                    <div className={outterDiv} ref={ref}>
                         {currentShoesArray.map((file: any) => (
                              <div key={file.number} style={{ width }}>
                                   <Link to={`/product/${file.shoeName}`}>
                                        <i className="fa-regular fa-heart"></i>
                                        <img
                                             src={file.shoeImage}
                                             alt={file.shoeName}
                                             onClick={() =>
                                                  saveProjectToStorage({
                                                       ...file,
                                                  })
                                             }
                                        />
                                        <div className={innerDiv}>
                                             <p>{file.shoeName}</p>
                                             <p>
                                                  {formatToCurrency(
                                                       file.shoePrice
                                                  )}
                                             </p>
                                        </div>
                                   </Link>
                                   <button
                                        onClick={() => {
                                             shoeItem?.({
                                                  ...file,
                                                  shoeSize: "44",
                                                  shoeColor: "black",
                                             });
                                             setShowOverlay?.(true);
                                             overlayItem?.({ ...file });
                                        }}
                                   >
                                        Add to cart
                                   </button>
                              </div>
                         ))}
                    </div>

                    {footer !== "footer" && (
                         <div className="pagination-container">
                              <button
                                   onClick={() =>
                                        setCurrentShoePage(currentShoePage - 1)
                                   }
                                   disabled={currentShoePage === 1}
                                   className="product-navigation"
                              >
                                   Prev
                                   <i className="fa-solid fa-arrow-left"></i>
                              </button>
                              {shoePageNumbers.map((number, index) => {
                                   return (
                                        <>
                                             <p
                                                  key={index}
                                                  className={
                                                       number ===
                                                       currentShoePage
                                                            ? "current-active"
                                                            : ""
                                                  }
                                                  onClick={() => {
                                                       paginate(number);
                                                  }}
                                             >
                                                  {number}
                                             </p>
                                        </>
                                   );
                              })}
                              <button
                                   onClick={() =>
                                        setCurrentShoePage(currentShoePage + 1)
                                   }
                                   disabled={
                                        currentShoePage ===
                                        Math.ceil(
                                             shoeArray.length / shoePostPerPage
                                        )
                                   }
                                   className="product-navigation"
                              >
                                   Next
                                   <i className="fa-solid fa-arrow-right"></i>
                              </button>
                         </div>
                    )}
               </>
          );
     }
);

export default MappedProduct;
