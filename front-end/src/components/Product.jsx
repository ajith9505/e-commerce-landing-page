import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <div className="w-[30rem] ml-[2rem] p-3 relative">
            <div className="relative">
                <Link to={`/product/${product._id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-[30rem] rounded"
                    />
                </Link>
            </div>

            <div className="p-4">
                <Link to={`/product/${product._id}`}>
                    <h2 className="text-center">
                        <div className="text-lg">{product.name}</div>
                        <div>
                            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                                $ {product.price}
                            </span>
                        </div>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default Product;