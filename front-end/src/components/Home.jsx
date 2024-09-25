import { useState, useEffect } from "react"
import axios from "axios"
import Product from "./Product";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://shop-zone-ivgi.onrender.com/api/products');
            setProducts(res.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const filterProducts = (category) => {
        const fiteredProduct = products?.filter(product => product.category == category)
        console.log(fiteredProduct);
        
        setFilteredProducts(fiteredProduct)
    }

    if (loading) return <div>Loading...</div>

    return (
        <>
            <div className="bg-slate-100">
                <div className="flex flex-col justify-between items-center p-3">
                    <h2 className="font-bold m-2">Filter by catogory</h2>
                    <div className="flex flex-col xl:flex-row lg:flex-row">
                    <span onClick={() => setFilteredProducts([])} className="bg-sky-900 text-white p-2 rounded m-2 cursor-pointer">All</span>
                        <span onClick={() => filterProducts('electronics')} className="bg-sky-900 text-white p-2 rounded m-2 cursor-pointer">Electronics</span>
                        <span onClick={() => filterProducts('home appliances')} className="bg-amber-600 text-white p-2 rounded m-2 cursor-pointer">Home Appliences</span>
                        <span onClick={() => filterProducts('clothing')} className="bg-purple-950 text-white p-2 rounded m-2 cursor-pointer">Clothing</span>
                        <span onClick={() => filterProducts('grocery')} className="bg-lime-600 text-white p-2 rounded m-2 cursor-pointer">Groceries</span>
                    </div>
                </div>
                <div>
                    {filteredProducts?.length == 0 || filteredProducts == null ?
                        <div className="flex justify-center flex-wrap mt-[2rem]">
                            {products?.map((product) => (
                                <div key={product._id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                        :
                        <div className="flex justify-center flex-wrap mt-[2rem]">
                            {filteredProducts?.map((product) => (
                                <div key={product._id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Home