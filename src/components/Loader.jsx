import React from 'react'

import { loader } from '../assets';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"
        alt='loader' className='object-contain rounded-full w-48 h-48' />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center"> Please wait...</p>
    </div>
  )
}

export default Loader