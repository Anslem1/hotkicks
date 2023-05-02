import React, { useEffect, useState } from 'react'
import MappedProduct from '../../Components/MappedProduct';
import './SingleProduct.css'

type SingleProjectProps = {
    shoeImage: string;
    shoeName: string;
    shoeQunatity: number;
    shoeColor: string;
    shoeSize: number | null;
}

function SingleProduct(props: any) {
    const projectObject = localStorage.getItem('projectObject');
    const singleProjectObject = projectObject ? JSON.parse(projectObject) : null;
    const [singleProject, setSingleProject] = useState<SingleProjectProps>({
        shoeImage: "",
        shoeName: "",
        shoeQunatity: 1,
        shoeColor: "",
        shoeSize: null
    });

    useEffect(() => {
        setSingleProject(singleProjectObject)
    }, [])

    console.log(singleProject)


    return (
        <>
            <div className='single-product-container'>
                <div>
                    <img src={singleProject.shoeImage} alt="" />
                    <div>
                        <h1>{singleProject.shoeName}</h1>
                        <div className="quantity-container">
                            <p>Quantity</p>
                            <div>
                                <span
                                    onClick={() => {
                                        props.setShoeQuantity((prev: any) => prev <= 1 ? prev = 1 : prev - 1
                                        )

                                    }
                                    }>-</span>

                                <p onChange={() => singleProject.shoeQunatity = props.shoeQuantity}>{props.shoeQuantity}</p>

                                <span
                                    onClick={() => props.setShoeQuantity(props.shoeQuantity + 1)}>+</span>
                            </div>
                        </div>
                        <div className="color-container">
                            <p>Color</p>
                            <div>
                                <span onClick={() => singleProject.shoeColor = 'yellow'}></span>
                                <span onClick={() => singleProject.shoeColor = 'blue'}></span>
                                <span onClick={() => singleProject.shoeColor = 'red'}></span>
                                <span onClick={() => singleProject.shoeColor = 'black'}></span>

                            </div>
                        </div>
                        <div className='shoe-size-container'>
                            <p> Size</p>
                            <div>

                                <span onClick={() => singleProject.shoeSize = 39}>39</span>
                                <span onClick={() => singleProject.shoeSize = 42}>42</span>
                                <span onClick={() => singleProject.shoeSize = 43}>43</span>
                                <span onClick={() => singleProject.shoeSize = 44}>44</span>
                                <span onClick={() => singleProject.shoeSize = 45}>45</span>
                                <span onClick={() => singleProject.shoeSize = 46}>46</span>
                            </div>
                        </div>
                        <div className='add-to-cart-container'>

                            <button onClick={() => {
                                props.shoeItem?.({ ...singleProject })
                            }}>
                                Add to Cart
                            </button>
                        </div>
                    </div>


                </div>

                <div className="description-container">
                    <div className="description-text-container">
                        <p>Description</p>
                        <div></div>
                    </div>


                    <div className="description-text-container">
                        <p>Review</p>
                        <div></div>
                    </div>
                </div>

                <div className="about-shoe-container">
                    <div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum viverra consectetur sed in integer tristique felis. Cras amet malesuada vel arcu tellus nam.
                            Vel massa dictum ullamcorper arcu cursus massa ullamcorper accumsan. Hendrerit consectetur nibh aliquam massa donec sed eu varius.
                        </p>
                    </div>
                </div>



                <MappedProduct
                    outterDiv='single-product-other-container'
                    innerDiv='product-details'
                    shoeItem={props.shoeItem}
                />

            </div>
        </>
    )
}

export default SingleProduct