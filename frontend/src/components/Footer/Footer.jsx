import React from 'react'
import logo from '../../assets/logo.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'


const Footer = () => {
  return (
    <div id='footer' className='text-zinc-200 bg-gray-900 flex flex-col items-centern px-10 md:px-10 lg:px-20 sm:px-20 pt-16 pb-5 mt-10 rounded-t-lg w-full'>  
      <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="500" className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full">
        <div className="left w-[19em] ">
          <img src={logo} alt="" srcset="" className=' h-14 mb-5' />
          <p className='mb-5 text-zinc-400 font-normal leading-5 mr-1'>I hope you buy products from electrokart and we will give our best for providing such amazing and good services. If you have any query then you can contact us</p>
          <div className="icons flex gap-5">
            <img src={facebook_icon} alt="" id="" className='h-10 cursor-pointer'></img>
            <img src={twitter_icon} alt="" id="" className='h-10 cursor-pointer'></img>
            <img src={linkedin_icon} alt="" id="" className='h-10 cursor-pointer'></img>
          </div>
        </div>
        <div className="center">
          <h2 className='text-2xl font-semibold text-zinc-200'>COMPANY</h2>
          <ul className='mt-3 cursor-pointer'>
            <li>Home</li>
            <li>About-us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div> 
        <div className="right ">
          <h2 className='text-2xl font-semibold text-zinc-200 capitalize mb-3'>Get in touch</h2>
          <ul>
            <li className='mb-1'>+91 9847348743</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className='border-[1px] border-zinc-500 w-full mt-5' />
      <p className='mt-3 text-zinc-400 capitalize text-center'> Copyright 2024 © Electrokart.com - All rights reserved.</p>
    </div>
  )
}

export default Footer