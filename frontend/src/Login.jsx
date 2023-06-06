import React from 'react';
import './login.scss';

export const Login = () => {
  return (
    <div className="login">
        {/* <form action="">
            <input type="email" name="email" id="" />
            <input type="password" name="password" id="" />
            <div className="otpContainer">
              <input type="text" name="otp" id="" />
              //when the otp code is equal to the one generated then get OTP button will be disabled
              <button type="submit">Get OTP</button>
            </div>
            <button type="submit">LOGIN</button>

        </form> */}
        <form>
          <div class="bgImage">
            <div class="formWrap">
              <p>Login</p>
              <input type="email" className="email" placeholder="email" />
              <input type="password" className="password" placeholder="password" />
              <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp' className='otp'/>
                {/* //when the otp code is equal to the one generated then get OTP button will be disabled */}
                <button type="submit">Get OTP</button>
              </div>
              <button type="submit" id="submit" class="submit" >SUBMIT </button>
            </div>
          </div>
        </form>
    </div>
  )
}

