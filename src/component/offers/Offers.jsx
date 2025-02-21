import React from 'react'
import './Offers.css'
import imgex from '../../assets/images/Assets/exclusive_image.png';

export default function Offers() {
  return (
    <div className='offers'>
         <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Only On Best Sellers</p>
            <button>Check it out</button>

         </div>

         <div className='offers-left'>
            <img src={imgex} alt="" />

         </div>

    </div>
  )
}
