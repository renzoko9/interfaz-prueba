import React from 'react';
import { FaUser, FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
      <div className="grid grid-cols-6 gap-4">
        <div className='col-start-2 col-span-4 items-center mt-5 flex justify-center'>
            <input
            type="text"
            className="w-4/6 p-2 px-5 rounded-full border-none shadow-md text-gray-800 text-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder=" 🔍 Buscar"
            autoComplete='off'
            autoCorrect='off'
            aria-label='search'
            />
        </div>
        <div className='col-end-7 col-span-1 flex justify-end items-center p-2 mr-24'>
            <FaUser />  Francisco M.
        </div>
      </div>
    );
}

export default Header;
