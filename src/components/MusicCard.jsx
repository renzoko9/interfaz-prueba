import React from 'react';
import ImageMusic from '../assets/adele-music.svg'
import MusicDescription from './MusicDescription';

const MusicCard = () => {
    return (
      <div className='my-14 mr-60 ml-96'>
        <div className="grid grid-cols-6 grid-rows-3">
          <div className="col-start-1 col-span-2 row-start-1 row-span-3 flex justify-end">
            <img src={ImageMusic} alt="Song cover" className="w-full" />
          </div>
          <div className="col-start-3 col-span-4 row-start-1 row-span-2 flex flex-col justify-center bg-[#E86060]/[.4] px-10">
            <h2 className="text-2xl font-semibold">Adele 21</h2>
            <h1>
              Lo mejor de Adele <a className="mx-5">321,123 seguidores</a>
            </h1>
            <p className="mt-4">
              Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
              mayo de 1988), conocida simplemente como Adele, es una cantante,
              compositora y multinstrumentista británica.
            </p>
          </div>
          <div className="col-start-3 col-span-4 row-start-3 row-span-1 bg-[#E86060]/[.4] px-10">
            <button className="bg-[#FF7676] hover:bg-[#d26363] text-white py-2 px-4 rounded-full mr-4">
              Reproducir
            </button>
            <button className="bg-transparent border hover:bg-[#e79d9d] text-[#E86060] py-2 px-4 rounded-full mr-4">
              Seguir
            </button>
            <button className="text-5xl">...</button>
          </div>
        </div>
        <MusicDescription />
      </div>
    );
}

export default MusicCard;
