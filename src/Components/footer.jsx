import React from 'react'

const FooTer = () => {
  return (
    <>
      {/* Footer Main Section */}
      <div className='w-full bg-slate-300 h-auto flex flex-col md:flex-row flex-wrap gap-y-4 p-4'>
        {/* Contact Details Section - Displayed First */}
        <div className='w-full md:max-w-[30%] mt-4 text-center md:text-left'>
          <h2 className='text-xl md:text-2xl text-red-700'>Contact Details</h2>
          <p className='text-sm md:text-base'>Tel: 040-40071515 / 42029999</p>
          <p className='text-sm md:text-base'>Mobile: 8332052299</p>
        </div>

        {/* Branches Section - Displayed Second */}
        <div className='w-full md:max-w-[30%] mt-4 text-center md:text-left'>
          <h2 className='text-xl md:text-2xl text-red-700'>Branches</h2>
          <p className='text-sm md:text-base'>Head Office: Secunderabad</p>
          <p className='text-sm md:text-base'>
            Branch Offices: Sircilla, Armoor, Nizamabad
          </p>
        </div>

        {/* Customer Service Section - Displayed Last */}
        <div className='w-full md:max-w-[40%] mt-4 text-center md:text-left'>
          <h2 className='text-xl md:text-2xl text-red-700'>
            Customer Service/Complaints/Grievance
          </h2>
          <p className='p-2 text-xs md:text-sm'>
            If you have any complaint or grievance pre or post joining of your
            employer through our company, our representatives in that country
            will always be ready to assist you and will do their best to find a
            remedy/solution to your problem.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='bg-blue-700 h-[3rem] flex justify-center items-center'>
        <p className='text-white text-xs md:text-sm'>
          © All rights reserved - 2016 | Designed by XGANG.
        </p>
      </div>
    </>
  )
}

export default FooTer
