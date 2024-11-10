import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='image-container'>
        <img
          src='https://i.gifer.com/QIk.gif'
          alt='Dubai, Kuwait, and UAE'
          className='main-img'
        />
        <p className='img-para overflow-hidden '>
          Welcome To <br />
          Dubai, Kuwait, and UAE
          <br />
          Pursuit Work Services in Dubai
        </p>
        <Link to='/Contact'>
          <button className='img-button'>Contact Us</button>
        </Link>
      </div>

      <div className='welcome-section'>
        <h2>
          Welcome to <span className='highlight'>Sharp Human Resources</span>
        </h2>
      </div>
    </>
  )
}

export default Home
