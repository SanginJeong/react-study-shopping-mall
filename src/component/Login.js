import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setUser,saveURL,setSaveURL}) => {
  const [id,setId]= useState('');
  const [pw, setPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if(!id) {
        throw new Error("아이디를 입력하세요");
      }

      if(!pw) {
        throw new Error("비밀번호를 입력하세요");
      }
      setUser({
        id,
        pw,
      })
      
      if(!saveURL){ // 로그인 버튼을 클릭해서 들어왔다면
        navigate('/');
        return
      }

      navigate(saveURL); // 비로그인으로 상품을 클릭했다면
      setSaveURL('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <div className='login'>
      <h3 className='category'>로그인</h3>
      <form className='loginForm' onSubmit={onSubmit}>
        <div>
          <input
            value={id}
            onChange={(e)=>{setId(e.target.value)}} 
            className='input_id' 
            type="text" 
            placeholder='아이디' />
          <input 
            value={pw}
            onChange={(e)=>{setPw(e.target.value)}}
            className='input_pw' 
            type="text" 
            placeholder='비밀번호'/>
        </div>
        {errorMessage ? <h3 className='error'>{errorMessage}</h3> : null}
        <button className='login_btn'>로그인</button>
      </form>
    </div>
  )
}

export default Login