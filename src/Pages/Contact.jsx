import React from 'react'
import './Contact.css'
import Login from '../Components/Login'
const Contact = () => {
  return (
    <>
      <div className='main-blr'>
        <img
          src='https://media.istockphoto.com/id/1716219668/photo/contact-us-telephone-envelope-letter-and-e-mail-symbols-on-wooden-round-in-row-on-table-with.jpg?s=2048x2048&w=is&k=20&c=W7oAir1MDPcKagCJxw3keXbkuWw-mr04AVDdvfASPGw='
          alt=''
        />
        <div className='card-1'>
          <h2>Sharp Human Resources</h2>
          <p className='para'>Phone: 040 2781 8829</p>
          <p className=''>
            {' '}
            Plot No 76, 1st Floor, Swapnalok Complex, SD Road, Sarojini Devi
            Road, Secunderabad - 500003
          </p>
        </div>
        <div className=''>
          <Login />
        </div>
      </div>
    </>
  )
}

export default Contact
