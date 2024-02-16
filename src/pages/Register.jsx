import React from 'react'
import Add from '../img/addAvatar.png';
const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Amila Chat</span>
            <span className='title'>Register to join us</span>
            <form>
                <input type="text" placeholder='profile name'/>
                <input type="text" placeholder='your email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Have an account? Login</p>
        </div>
    </div>
  )
}

export default Register