import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext '
import './login.scss';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  // const [lcredentials,setLcredentials] = useState({
  //   email:undefined,
  //   password:undefined
  // });
  // const handleChange = (e) =>{
  //   setLcredentials((prev) => ({...prev, [e.target.id] : e.target.value}));
  // }
  const [email, setEmail] = useState(undefined)
  const [password, setPassword]   = useState(undefined)
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const {loading, error, dispatch} = useContext(AuthContext);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      // const res = await axios.post(`/auth/login`,lcredentials);
      const res = await axios.post(`/auth/login`,{email, password});
      dispatch({type: "LOGIN_SUCESS", payload: res.data.details});
      navigate("/dashboard");
      console.log(res.data.details);
    } catch (err) {
      dispatch({type : "LOGIN_FAILURE" , payload:err.response.data});
    }

  }
  const handleGetOtp = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`/auth/generateOtp`, {params: { email }});
      setMessage(res.data.message);
      // console.log(res.data.message);
    } catch (err) {
      console.log("Error Occured here",err)
      
    }
  }
  return (
    <div className="login">
        
        
          <div className="bgImage">
            <div className="formWrap">
              <p>Login</p>
              <input type="email" className="email" id='email' placeholder="email" onChange={handleEmailChange}/>
              <input type="password" className="password" id='password' placeholder="password" onChange={handlePasswordChange} />
              <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp' className='otp'/>
                {/* //when the otp code is equal to the one generated then get OTP button will be disabled */}
                {/* Set here Get Otp after click setChange of button to validate */}
                <button onClick={handleGetOtp}>Get OTP</button>
              </div>
              <button onClick={handleSubmit} className="submit" >SUBMIT </button>
            <div className="message" style={{color:"whitesmoke", background:"green", borderRadius:"12px"}}>{message}</div>
            </div>
          </div>
        
    </div>
  )
}

