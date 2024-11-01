import { useRouteError, Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <main className='main'>
        <div className='text-center'>
          <p className='error-code'>404</p>
          <h1 className='headline'>page not found</h1>
          <p className='subtext'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-10'>
            <Link to='/' className='back-link'>
              go back home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='main'>
      <h4 className='headline'>there was an error...</h4>
    </main>
  )
}

export default Error
