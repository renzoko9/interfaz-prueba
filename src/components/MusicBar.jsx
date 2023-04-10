import React from 'react';
import ImageMusic from '../assets/adele-music.svg'
import { FaStepBackward, FaStepForward, FaPlay, FaVolumeUp } from 'react-icons/fa'

const MusicBar = () => {
    return (
      <div className="fixed bottom-0 left-0 bg-[#EB5757] text-white w-full">
        <div className="grid grid-cols-4 justify-center gap-3 mx-auto">
          <div className="w-full col-start-1 col-span-1 flex items-center">
            <img src={ImageMusic} alt="Song cover" className="mr-4" />
            <div className="text-left">
              <p className="text-sm font-medium">Canción</p>
              <p className="text-xs">Artista - Album</p>
            </div>
          </div>
          <div className="col-start-2 col-span-2 flex flex-col items-center">
          <div className="flex justify-between mt-5">
            <div className="flex w-full">
              <button className="flex-1 bg-[#FF7676] hover:bg-[#d26363] font-bold py-2 px-4 rounded-full mr-4">
                <FaStepBackward className="mx-auto" />
              </button>
              <button className="flex-1 bg-[#FF7676] hover:bg-[#d26363] font-bold py-2 px-4 rounded-full mr-4">
                <FaPlay className="mx-auto" />
              </button>
              <button className="flex-1 bg-[#FF7676] hover:bg-[#d26363] font-bold py-2 px-4 rounded-full mr-4">
                <FaStepForward className="mx-auto" />
              </button>
            </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <span className="mr-4">0:00</span>
                <div className="progress-bar h-1 w-96 bg-gray-700 rounded-full">
                  <div className="progress-bar-indicator h-full bg-white rounded-full"></div>
                </div>
                <span className="ml-4">3:30</span>
              </div>
            </div>
          </div>
          <div className="col-end-5 w-full flex justify-center">
            <div className="flex items-center">
              <button className="py-2 px-2 rounded-full">
                <FaVolumeUp className="mx-auto" />
              </button>
              <div className="h-1 w-28 bg-gray-700 rounded-full">
                <div className="h-full bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MusicBar;
