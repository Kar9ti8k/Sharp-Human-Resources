import React from 'react'

const line = [
  {
    id: 1,
    img: 'http://www.gtminternational.in/img/s1.png',
    text: 'Civil Construction',
  },
  {
    id: 2,
    img: 'http://www.gtminternational.in/img/s2.png',
    text: 'Civil Construction',
  },
  {
    id: 3,
    img: 'http://www.gtminternational.in/img/s3.png',
    text: 'Civil Construction',
  },
  {
    id: 4,
    img: 'http://www.gtminternational.in/img/s4.png',
    text: 'Civil Construction',
  },
  {
    id: 5,
    img: 'http://www.gtminternational.in/img/s5.png',
    text: 'Civil Construction',
  },
  {
    id: 6,
    img: 'http://www.gtminternational.in/img/s6.png',
    text: 'Civil Construction',
  },
  {
    id: 7,
    img: 'http://www.gtminternational.in/img/s7.png',
    text: 'Civil Construction',
  },
  {
    id: 8,
    img: 'http://www.gtminternational.in/img/s8.png',
    text: 'Civil Construction',
  },
]

const Services = () => {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4 flex flex-col items-center'>
        Services
      </h2>
      <ul className='grid grid-cols-2 grid-rows-4 gap-6'>
        {line.map((item) => {
          const { id, img, text } = item
          return (
            <li key={id} className='list-none'>
              <div className='w-full h-[14rem] bg-blue-200 rounded-lg shadow-md p-2 flex flex-col items-center'>
                <img
                  src={img}
                  alt={text}
                  className='w-20 h-20 object-cover rounded-md mb-2'
                />
                <p className='text-center text-gray-700 text-2xl'>{text}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Services
