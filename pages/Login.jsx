import React from 'react';
import Google from '../src/assets/Google.png'
import facebook from '../src/assets/facebook.png'

const Login = () => {
  return (
    <div className='login'>
         <h1 className='loginTitle'>Choose a Login Method</h1>
         <div className='wrapper'>
            <div className='left'>
                 <div className='loginButton google'>
                 <img src={Google} className='icon'/>
                  Google
                </div>
                 <div className='loginButton facebook'>
                 <img src={facebook} className='icon'/>
                 Facebook 
                </div>
                <div className='loginButton github '>
                 <img  className='icon'/>
                  Github
                </div>
                <div className='center'>
                  <div className='line'>
                    <div className='or'>
                      OR
                    </div>
                  </div>
                </div>
            </div>
            <div className='right'>
              <input type='text' placeholder='Username' />
              <input type='text' placeholder='Password' />
              <button className='submit'>Login</button>
            </div>
        </div> 
    </div>
  )
}

export default Login;