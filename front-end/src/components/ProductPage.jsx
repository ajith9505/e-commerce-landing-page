import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    FaBox,
    FaShoppingCart,
    FaStar,
    FaStore,
} from "react-icons/fa";

const ProductPage = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchProductDetails = async () => {
        const res = await axios(`https://shop-zone-ivgi.onrender.com/api/products/${productId}`);
        setProduct(res.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchProductDetails()
    }, [])
    if (loading) return <div>loading...</div>
    return (
        <>
            <div className="flex flex-wrap relative bg-slate-100 p-4 justify-center min-h-screen">
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full  xl:w-[25rem] lg:w-[20rem] md:w-[30rem] sm:w-[15rem] mr-[2rem] my-[2rem]"
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <h2 className="text-2xl lg:w-[30rem] font-semibold">{product.name}</h2>

                    <p className="my-4 xl:w-[35rem] lg:w-[30] md:w-[20rem] text-[#B0B0B0]">
                        {product.description}
                    </p>
                    <p className="text-xl my-4 text-rose-500 font-bold">{product.price} Rs</p>

                    <div className="flex items-center justify-between w-[20rem]">
                        <div className="one">
                            <h1 className="flex items-center mb-6">
                                <FaStore className="mr-2 text-slate-900" /> Brand:{" "}
                                {product.brand}
                            </h1>
                            <h1 className="flex items-center mb-6">
                                <FaStar className="mr-2 text-slate-900" /> Reviews:
                                {product.numReviews}
                            </h1>
                        </div>

                        <div className="two">
                            <h1 className="flex items-center mb-6">
                                <FaShoppingCart className="mr-2 text-slate-900" /> Quantity:{" "}
                                {product.quantity}
                            </h1>
                            <h1 className="flex items-center mb-6">
                                <FaBox className="mr-2 text-slate-900" /> In Stock:{" "}
                                {product.countInStock}
                            </h1>
                        </div>
                    </div>

                    <div className="flex justify-between flex-wrap">

                        {product.countInStock > 0 && (
                            <div>
                                <select
                                    className="p-2 w-[6rem] rounded-lg text-black"
                                >
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="btn-container">
                        <button
                            disabled={product.countInStock === 0}
                            className="bg-pink-600 text-white py-2 px-4 rounded-lg mt-4 md:mt-0"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage