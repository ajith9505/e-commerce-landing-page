import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {

    return (
        <div>
            <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-[#fff]">
                <div className="flex item-center">
                    <Link to='/'>
                        <h1 className="font-semibold text-xl cursor-pointer">Shope Zone</h1>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <div className='mr-2 relative'>
                        <TiShoppingCart className='text-white text-4xl' />
                        <div className='absolute top-[-10px] left-5 px-2 rounded-full bg-amber-300 text-black'>0</div>
                    </div>
                    <div className='m-2 font-semibold'>Register</div>
                    <div className='m-2 font-semibold'>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar