import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import './NavBar.css'
import { useGlobalContext } from './Context'
import { useLocation } from 'react-router-dom'
const NavBar = () => {
  const { openSideBar } = useGlobalContext()
  const locaion = useLocation()
  return (
    <>
      <nav className='Navbar'>
        <div className='Nav-main'>
          <Link
            to='/'
            className={`Nav-Link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <p className='hidden sm:inline'>Home</p>
          </Link>
          <Link
            to='/Process'
            className={`Nav-Link ${
              location.pathname === '/Process' ? 'active' : ''
            }`}
          >
            <p className='hidden sm:inline'>Process</p>
          </Link>
          <Link
            to='/Services'
            className={`Nav-Link ${
              location.pathname === '/Services' ? 'active' : ''
            }`}
          >
            <p className='hidden sm:inline'>Services</p>
          </Link>
          <Link
            to='/JobPositions'
            className={`Nav-Link ${
              location.pathname === '/JobPositions' ? 'active' : ''
            }`}
          >
            <p className='hidden sm:inline'>JobPositions</p>
          </Link>
          <Link
            to='/Contact'
            className={`Nav-Link ${
              location.pathname === '/Contact' ? 'active' : ''
            }`}
          >
            <p className='hidden sm:inline'>Contact</p>
          </Link>
        </div>

        <div className='Nav-Icon'>
          <button className='Icon sm:hidden' onClick={openSideBar}>
            <IoIosMenu />
          </button>
        </div>
      </nav>
      <SideBar />
    </>
  )
}

export default NavBar
