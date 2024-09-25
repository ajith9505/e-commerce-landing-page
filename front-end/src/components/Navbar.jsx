import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-[#fff]">
                <div className="flex item-center">
                    <Link to='/'>
                        <h1 className="font-semibold text-xl cursor-pointer">Shope Zone</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar