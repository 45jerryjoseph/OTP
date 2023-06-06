import React from 'react'
import './signup.scss'
const Signup = () => {
  return (
    <div className="signup">
        {/* <form action="">
            <input type="text" name="Fname" id="" placeholder='First Name'/>
            <input type="text" name="Lname" id="" placeholder='Last Name' />
            <input type="email" name="email" id="" placeholder='Email address'/>
            <input type="password" name="password" id="" placeholder='password'/>
            <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp '/>
                <button type="submit">Get OTP</button>
            </div>
            <button type="submit">SIGN UP</button>
        </form> */}

        <form>
          <div class="bgImage">
            <div class="formWrap">
              <p>New User Sign-up</p>
              <input type="text" className="firstname" placeholder="firstname" />
              <input type="text" className="lastname" placeholder="lastname" />
              <input type="email" className="email" placeholder="email" />
              <input type="text" className="username" placeholder="username" />
              <input type="password" className="password" placeholder="password" />
              <div className="otpContainer">
                <input type="text" name="otp" id="" placeholder='fill in otp' className='otp'/>
                <button type="submit">Get OTP</button>
              </div>
              <button type="submit" id="submit" class="submit" >SUBMIT </button>
            </div>
          </div>
        </form>

    </div>

  )
}

export default Signup