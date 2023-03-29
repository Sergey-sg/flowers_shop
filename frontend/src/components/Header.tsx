import React from 'react'
import logo from '../assets/images/shopLogo.png'

const Header: React.FC = () => {
    return (
        <div className='flex py-4 px-6 text-center bg-black'>
            <img
                className="rounded-full"
                width={'50px'}
                src={logo}
                alt={'flower logo'}
            />
            <div className='mx-2 my-auto text-gray-300'>
                flowers shop
            </div>
            <input 
                placeholder='Search your flower'
                type={'text'}
                name='searchFlower'
                className="block w-4/6 my-auto text-slate-200 bg-zinc-500 border border-none rounded-3xl py-4 px-9 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 sm:text-sm"
            />
            <button className='ml-2 bg-red-700 hover:bg-red-800 w-1/6 rounded-full'>Cart</button>
        </div>
    )
}

export default Header