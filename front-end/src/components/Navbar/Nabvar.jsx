import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navbar bg-base-100 flex space-x-10 ">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">Xranilka</a>
          </div>

          <div>
            <a href='/complaint' className='btn btn-error text-xl'>Feedback</a>
          </div>

          <div className="avatar placeholder pr-5">
          <div className="bg-success text-success-content rounded-full w-12">
            <span className="text-xs">Me</span>
          </div>
        </div>
          {/* <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {/* <li><a>Link</a></li> */}
              {/* <li>
                <details>
                  <summary>
                    Profile
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none"> */}
                    {/* <li><a>Link 1</a></li> */}
                    {/* <li><a>Link 2</a></li> */}
                  {/* </ul>
                </details>
              </li>
            </ul>
          </div> */}
        </div>
    </>
  )
}

export default Navbar