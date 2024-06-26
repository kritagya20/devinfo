import React from 'react';
import { Git } from '../assets';

const Avatar = ({src}) => {
    const img = src || null;
  return (
    <>
        <div className="relative inline-flex items-center justify-center w-auto h-auto overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            { img 
                ?( <img className="w-full h-full p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={img} alt="Bordered avatar" />) 
                :(<img className="w-full h-full p-2 pb-0.5 rounded-full ring-2 bg-white ring-black-300 dark:ring-black-500" src={Git} alt="Bordered avatar" />)
            }
        </div>

    </>
  )
}

export default Avatar;