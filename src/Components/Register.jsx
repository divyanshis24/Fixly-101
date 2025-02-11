import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
      <>
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 text-white">
          <div className="sm:mx-auto sm:w-screen sm:max-w-sm">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
              Create your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white border border-gray-600 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white border border-gray-600 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white border border-gray-600 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white border border-gray-600 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-indigo-500 hover:text-indigo-400">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </>
    )
}