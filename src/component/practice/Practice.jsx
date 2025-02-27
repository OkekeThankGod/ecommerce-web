import React from 'react'
import hero_image from '../../assets/images/Assets/hero_image.png';

export default function Practice() {
  return (
    <div>
    <div className='flex px-10 py-10 rounded bg-[#a3a3a3]'>
        <div className=' flex-col gap-20 p-20 pb-10'>
            <h1 className='text-font-bold text-red-400 text-4xl '>FLAT 50% OFF</h1>
            <p className='text-blue-400'>12 <span className='text-yellow-500'>Hours</span> <b>20</b> <i className='text-red-600'>Minutes</i></p>
            <button className='text-xl text-font-bold rounded-full bg-red-600 w-[200px] h-[70px]'>Explore More</button>
        </div>

        <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
            <img src={hero_image}  className="w-full max-w-md md:max-w-lg "  />
        </div>
    </div>
    {/* Login page  */}
    <div className='flex grid justify-center p-20'>
    <h1>Sig Up Ass Hole</h1>
    <p>So lets Journey</p>
    <label htmlFor="html">
        Name: <input type="text" name="name" />
    </label>
    <label htmlFor="html">
        Email: <input type="text" name="name" />
    </label>
    <label htmlFor="html">
        Password: <input type="text" name="name" />
    </label>
    <input type="radio" name="" id="" />
    </div>
    </div>
  )
}
