import React from 'react'
import img1 from "../images/complete.svg"

const Section1 = () => {
  return (
    <>
      <div className='flex justify-center items-center mb-5'
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      >
        {/* left */}
        <div className='flex-wrap p-3'>
            <p className='text-white text-xs'>|Unicever</p>
            <h5 className='text-white text-lg mt-4 lg:mt-6'>Unlocking Identity</h5>
            <h1 className='text-white text-4xl mt-5 lg:mt-10'>Your Digital Signature of Authenticity</h1>
            <h2 className='text-white text-xl mt-4 lg:mt-10'>A Secure Certificate Verification Platform</h2>
            <button className='bg-red-500 rounded-lg text-white p-2 mt-3 lg:mt-10'>GET STARTED</button>
        </div>
        {/* right */}
        <div className='hidden lg:block'
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
            <img src={img1} alt="complete" />
        </div>
      </div>
    </>
  )
}

export default Section1
