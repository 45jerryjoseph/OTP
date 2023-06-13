import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext '
import './login.scss';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [lcredentials,setLcredentials] = useState({
    email:undefined,
    password:undefined
  });
  const navigate = useNavigate();
  const {loading, error, dispatch} = useContext(AuthContext);
  const handleChange = (e) =>{
    setLcredentials((prev) => ({...prev, [e.target.id] : e.target.value}));
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post(`/auth/login`,lcredentials);
      dispatch({type: "LOGIN_SUCESS", payload: res.data.details});
      navigate("/dashboard");
      console.log(res.data.details);
    } catch (err) {
      dispatch({type : "LOGIN_FAILURE" , payload:err.response.data});
    }

  }
  return (
    <div className="login">
        
        <form>
          <div className="bgImage">
            <div className="formWrap">
              <p>Login</p>
              <input type="email" className="email" id='email' placeholder="email" onChange={handleChange} />
              <input type="password" className="password" id='password' placeholder="password" onChange={handleChange} />
              <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp' className='otp'/>
                {/* //when the otp code is equal to the one generated then get OTP button will be disabled */}
                <button type="submit">Get OTP</button>
              </div>
              <button onClick={handleSubmit} className="submit" >SUBMIT </button>
            </div>
          </div>
        </form>
    </div>
  )
}

