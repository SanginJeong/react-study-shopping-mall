import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState('여성');
  const navItems = ['여성','Divded','남성','신생아/유아','아동','Sale','지속가능성'];
  const [isOpenTab, setIsOpenTab] = useState(false);

  const search = (e) => {
    if(e.key === "Enter"){
      const keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div className="navbar">
      <div className='header'>
        <h3 className='logo' onClick={()=>{navigate('/')}}>MUSINSA</h3>
        <div>
          <button><i class="fa-regular fa-bell"></i></button>
          <button><i class="fa-solid fa-basket-shopping"></i></button>
        </div>
      </div>

      <form className='search_area' onSubmit={(e)=>{e.preventDefault();}}>
        <input
          onKeyUp={search}
          className='search' 
          type="text" 
          placeholder='무신사 뷰티 페스타 최대 80% 할인' />
        <i class="fa-solid fa-magnifying-glass search_icon"></i>
      </form>
      
      <div className="hamburger">
        <button 
          onClick={()=>{setIsOpenTab(!isOpenTab)}}
          className='hamburgerBtn'><i class="fa-solid fa-bars"></i></button>
      </div>
      <ul className={`nav_items ${isOpenTab ? 'active' : ''}`}>
        {navItems.map((item,index)=>(
          <li>
            <span 
              className={`item ${clicked === item ? 'highlight' : ''}`} 
              onClick={()=>{setClicked(item)}}>
                {item}
            </span>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Navbar