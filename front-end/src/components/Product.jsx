import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <div className="md:w-[30rem] p-3 relative">
            <div className="relative flex justify-center">
                <Link to={`/product/${product._id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-[15rem] rounded"
                    />
                </Link>
            </div>

            <div className="p-4">
                <Link to={`/product/${product._id}`}>
                    <h2 className="text-center">
                        <div className="text-sm md:truncate sm:text-sm hover:text-wrap">{product.name}</div>
                        <div className="mt-2">
                            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                                {product.price} Rs
                            </span>
                        </div>
                    </h2>
                </Link>

                <div className="mt-2 text-center">
                    <button className="bg-yellow-400 px-2 py-1 rounded">Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default Product;