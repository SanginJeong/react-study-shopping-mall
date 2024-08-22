import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = ({user, setUser}) => {
  const navigate = useNavigate();

  return (
    <div className='menu'>
      <button 
        onClick={()=>{navigate('/')}}
        className='menu_button'>
          <i class="fa-solid fa-house"></i>
          <div>무신사 홈</div>
      </button>

      <button className='menu_button'>
        <i class="fa-solid fa-list"></i>
        <div>카테고리</div>
      </button>

      {user ?
        <button 
        onClick={()=>{
          setUser(null);
          navigate('/login')}}
        className='menu_button'>
          <i class="fa-regular fa-user"></i>
          <div>로그아웃</div>
        </button> 
            :
        <button 
        onClick={()=>{navigate('/login')}}
        className='menu_button'>
          <i class="fa-regular fa-user"></i>
          <div>로그인</div>
      </button>
      }
      
    </div>
  )
}

export default Menu