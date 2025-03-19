import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='sm:w-[970px] max-w-[90%] mx-auto'>
        <div id='footer_main' className='flex items-start justify-between py-6'>
          <div>
            <h1 className='text-black text-2xl font-bold'>Links</h1>
            <a href="#aboutme"><h2 id='hover_text' className='text-gray-700 my-1'>About me</h2></a>
            <a href="#skills"><h2 id='hover_text' className='text-gray-700 my-1'>Skills</h2></a>
            <a href="#projecs"><h2 id='hover_text' className='text-gray-700 my-1'>Projects</h2></a>
            <a href="#cantact"><h2 id='hover_text' className='text-gray-700 my-1'>Contacts</h2></a>
          </div>
          <div>
            <h1 className='text-black text-2xl font-bold'>Contacts</h1>
            <h2 className='text-gray-700 my-1'>My gmail: alisherdevolopermen009@gmail.com</h2>
            <h2 className='text-gray-700 my-1'>Mu Phone: +998 (77) 324 30 09</h2>
          </div>
        </div>
          <div>
            <hr className='my-2'/>
            <h1 className='my-4 text-center text-gray-700 '>© 2025 Nabijonov Alisher. All Rights Reserved.</h1>
          </div>
      </div>
    </div>
  )
}

export default Footer