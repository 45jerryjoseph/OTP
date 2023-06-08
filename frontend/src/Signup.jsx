import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import './signup.scss'
import { AuthContext } from './context/AuthContext ';
const Signup = () => {
  const [credentials, setCredentials] = useState({
    firstname:undefined,
    lastname:undefined,
    email:undefined,
    password: undefined
  });
  // const {loading, error, dispatch} = useContext(AuthContext);
  // const navigate = useNavigate();
  const handleChange = (e) =>{
    setCredentials((prev) => ({...prev,[e.target.id] : e.target.value}));
  }
  const handleClick = async(e) => {
    e.preventDefault();
    // dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post('/auth/register',credentials);
      // dispatch({type : "LOGIN_SUCCESS", payload : res.data.details});
      console.log(res);
      // navigate("/dashboard")
    } catch (err) {
      console.log(err.message)
      // dispatch({type : "LOGIN_FAILURE" , payload:err.response.data});
    }
  }
  return (
    <div className="signup">
        <div>
          <div className="bgImage">
            <div className="formWrap">
              <p>New User Sign-up</p>
              <input type="text" className="firstname" placeholder="firstname" id='firstname' onChange={handleChange}/>
              <input type="text" className="lastname" placeholder="lastname" id='lastname' onChange={handleChange}/>
              <input type="email" className="email" placeholder="email" id='email' onChange={handleChange}/>
              <input type="password" className="password" placeholder="password" id='password' onChange={handleChange}/>
              {/* <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp' className='otp'/>
                <button type="submit">Get OTP</button>
              </div> */}
              <button className="submit"  onClick={handleClick}>SUBMIT </button>
            </div>
          </div>
        </div>

    </div>

  )
}

export default Signup