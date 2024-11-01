import React from 'react'

const FooTer = () => {
  return (
    <>
      <div className='w-full bg-slate-300 h-auto max-h-[10rem] flex flex-col md:flex-row gap-y-1.5 p-4'>
        {/* Customer Service Section */}
        <div className='w-full md:max-w-[40%] flex flex-col mt-4 text-center md:text-left'>
          <h2 className='text-2xl text-red-700'>
            Customer Service/Complaints/Grievance
          </h2>
          <p className='line-clamp-3 p-2 text-sm'>
            If you have any complaint or grievance pre or post joining of your
            employer through our company, our representatives in that country
            will always be ready to assist you and will do their best to find a
            remedy/solution to your problem.
          </p>
        </div>

        {/* Branches Section */}
        <div className='w-full md:max-w-[30%] mt-4 text-center md:text-left'>
          <h2 className='text-2xl text-red-700'>Branches</h2>
          <p className='line-clamp-3'>Head Office: Secunderabad</p>
          <p className='line-clamp-3'>
            Branch Offices: Sircilla, Armoor, Nizamabad.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className='w-full md:max-w-[30%] mt-4 text-center md:text-left'>
          <h2 className='text-2xl text-red-700'>Contact Details</h2>
          <p>Tel: 040-40071515 / 42029999</p>
          <p>Mobile: 8332052299</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='bg-blue-700 h-[3rem] flex justify-center items-center'>
        <p className='text-white text-sm'>
          copyrights @ All rights reserved - 2016 | designed by nidhula
        </p>
      </div>
    </>
  )
}

export default FooTer
