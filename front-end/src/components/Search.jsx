import React, { useState } from 'react'
import { ImSearch } from "react-icons/im";


const Search = ({ products, setProducts }) => {
    const [query, setquerry] = useState('');
    const searchProducts = () => {
        console.log(query);
        
        const filtredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        console.log(filtredProducts);
        
        setProducts(filtredProducts)
    }
    return (
        <>
            <div className='flex justify-end mr-[2rem] md:mr-[5rem] pt-[2rem]'>
                <input onChange={(e)=> setquerry(e.target.value) } className='rounded-full py-2 px-4' placeholder='Search products...' type="text" />
                <button onClick={() => searchProducts()} className='py-1 px-2'>
                    <ImSearch />
                </button>
            </div>
        </>
    )
}

export default Search