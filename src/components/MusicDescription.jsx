import React from 'react';

const MusicDescription = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-2">
            <div className='col-start-1 col-span-full row-start-1 row-span-1 flex items-center'>
                <h1 className='text-3xl font-bold text-[#E86060]'>Resultados</h1>
            </div>
            <div className='col-start-1 col-span-full row-start-2 row-span-1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default MusicDescription;
