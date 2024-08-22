import React from 'react'
import Navbar from '../component/Navbar'
import Menu from '../component/Menu'
import Login from '../component/Login'
const LoginPage = ({setUser}) => {
  return (
    <div className="wrap">
      <div className="container">
        <Navbar/>
        <Login setUser={setUser}/>
        <Menu/>
      </div>
    </div>
  )
}

export default LoginPage