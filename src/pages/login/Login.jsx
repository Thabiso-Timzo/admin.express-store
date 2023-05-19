import React from 'react'
import { HiLockClosed, HiUserCircle } from 'react-icons/hi'

import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <img src={logo} alt='logo' className="center"/>
          <h1>Login to an admin panel.</h1>
          <div className="form">
            <form>
              <div class="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><HiUserCircle size={20} /></span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
              </div>
              <div class="input-group flex-nowrap mt-20">
                <span className="input-group-text" id="addon-wrapping"><HiLockClosed size={20} /></span>
                <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
              </div>
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary mt-20 w-50">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login