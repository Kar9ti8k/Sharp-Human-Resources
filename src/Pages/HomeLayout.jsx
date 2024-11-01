import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import FooTer from '../Components/footer'
const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section>
        <Outlet />
      </section>
      <FooTer />
    </>
  )
}

export default HomeLayout
