import { useState } from 'react';
import avatar from './img/avatar.png';
import cc2 from './img/admin.png';

import { useNavigate } from 'react-router-dom';
import './login.css'


function Login() {
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigate = useNavigate();


  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          admin_CIN: loginUser,
          password: loginPassword,
        }),
      });

      if (response.ok) {
       
        const data = await response.json();
        const role = data.admin.role;
        const token = data.token;

        if (role === 'admin') {
          localStorage.setItem('token', token);
          // Redirect to admin home page
          navigate('/home');
            console.log(data)

        } else if (role === 'user') {
          // Redirect to user home page
          navigate('/');
        }
          // Redirect to home page for users
         // history.push('/home');
          

   
        
      } else {

        console.log('22222!');
        // Handle login error
      }
    } catch (error) {
      // Handle network or other errors
      console.log('00!');
    }
  };











  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    // handle forgot password form submit
  };

  const handleForgotPasswordLinkClick = (event) => {
    event.preventDefault();
    setShowForgotPassword(true);
    console.log('000000000')
  };

  const handleForgotPasswordCloseClick = (event) => {
    event.preventDefault();
    setShowForgotPassword(false);
  };

  return (

    
    <div className="login-wrapper">
    {!showForgotPassword ? 
      <form onSubmit={handleLoginSubmit} className="form">
        <img src={cc2} alt="" />
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            name="loginUser"
            id="loginUser"
            value={loginUser}
            onChange={(event) => setLoginUser(event.target.value)}
            required
          />
          <label htmlFor="loginUser">User Name</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
            required
          />
          <label htmlFor="loginPassword">Password</label>
        </div>
        <input type="submit" value="Login" className="submit-btn" />
        <a  className="forgot-pw" onClick={handleForgotPasswordLinkClick}>
          Forgot Password?
        </a>
      </form>


:

      
      
  
          
         <form onSubmit={handleForgotPasswordSubmit} className="form">
          
            <a  className="close" onClick={handleForgotPasswordCloseClick}>
              &times;
            </a>
            <h2>Reset Password</h2>
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="text"
                value={forgotPasswordEmail}
                onChange={(event) => setForgotPasswordEmail(event.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <input type="submit" value="Submit" className="submit-btn" />
            <a  className="" onClick={handleForgotPasswordLinkClick}>
                  Don't have an account? Sign Up
            </a>
          </form>
     

      }
     
    </div>

  );
}
export default Login;