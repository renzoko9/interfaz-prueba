import React from 'react';
import imageLogo from '../assets/foxbel-music.svg'

const Sidebar = () => {
  return (
    <div className="sidebar bg-[#662323] flex flex-col h-screen w-64 p-4">
      <div className="">
        <img src={imageLogo} alt='logo'/>
      </div>
      <h1 className='text-2xl'>Mi Libreria</h1>
      <ul className="nav-menu space-y-2 my-5">
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#7d3d3d]">Artistas</li>
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#7d3d3d]">Albums</li>
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#7d3d3d]">Canciones</li>
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#7d3d3d]">Estaciones</li>
      </ul>
    </div>
  );
};

export default Sidebar;
