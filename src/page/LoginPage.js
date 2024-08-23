import React from 'react'
import Navbar from '../component/Navbar'
import Menu from '../component/Menu'
import Login from '../component/Login'
const LoginPage = ({setUser, saveURL,setSaveURL}) => {
  return (
    <div className="wrap">
      <div className="container">
        <Navbar/>
        <Login setUser={setUser} saveURL={saveURL} setSaveURL={setSaveURL}/>
        <Menu/>
      </div>
    </div>
  )
}

export default LoginPage