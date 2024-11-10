import React from 'react'
import './sideBar.css'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'

const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: '/Process', text: 'Process' },
  { id: 3, url: '/Services', text: 'Services' },
  { id: 4, url: '/JobPositions', text: 'Job Positions' },
  { id: 5, url: '/Contact', text: 'Contact' },
]

const SideBar = () => {
  const { isSidebarOpen, closeSideBar } = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className='sidebar-header'>
        <button className='close-btn' onClick={closeSideBar}>
          <RxCross1 />
        </button>
      </div>
      <ul className='sidebar-links'>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.url} onClick={closeSideBar}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar
