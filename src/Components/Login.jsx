import React, { useState } from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    password: '',
    RePassword: '',
  })

  const { name, email, password, RePassword } = loginData

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password || !RePassword) {
      alert('Please fill in all fields')
      return
    }

    if (password !== RePassword) {
      alert('Passwords do not match')
      return
    }
    alert('Form submitted successfully')
    console.log('Submitted Data:', loginData)
  }

  return (
    <>
      <div className='h-[18rem] w-[40rem] bg-neutral-400 border-current ml-[22rem] p-4'>
        <h1 className='text-center'>
          RESISTION<span className='text-blue-800'>HERE</span>
        </h1>
        <form
          className='flex flex-col gap-4 items-center'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            className='border border-blue-800 w-[22rem] h-[2rem] outline-none px-2'
            placeholder='Name'
            onChange={handleChange}
            name='name'
            value={name}
          />
          <input
            type='email'
            className='border border-blue-800 w-[22rem] h-[2rem] outline-none px-2'
            name='email'
            onChange={handleChange}
            placeholder='Email'
            value={email}
          />
          <input
            type='password'
            name='password'
            className='border border-blue-800 w-[22rem] h-[2rem] outline-none px-2'
            onChange={handleChange}
            placeholder='Password'
            value={password}
          />
          <input
            type='password'
            name='RePassword'
            className='border border-blue-800 w-[22rem] h-[2rem] outline-none px-2'
            onChange={handleChange}
            placeholder='Re-enter Password'
            value={RePassword}
          />
          <button
            type='submit'
            className='bg-blue-500 text-white w-[22rem] h-[2rem] rounded hover:bg-blue-700'
          >
            Signup
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
