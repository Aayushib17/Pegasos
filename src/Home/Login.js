// src/Login.js
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Overview from './Overview';
import './Login.css';
import './Home.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [isLoggedIn , setLogin]=useState(false);
const [resetPassword, setResetPassword] = useState(false);
const navigate=useNavigate('');
  const handleLogin = () => {
   if(username && password){
setLogin(true);
navigate('/overview');

   }
else{
  alert("Please enter the username and login and if you don't have an account kindly signup");
}
  };
  const handleForgetPassword = () => {
    alert('A password reset link has been sent to your email address.');
    setResetPassword(true);
  };

  return (
    <div className='Home'>
        {isLoggedIn ? (<p>Welcome, {username}!</p>): (
          <div className='box'>  <img className='image' src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.1160089174.1705990285&semt=sph"></img>
          <div className='email'> <img src='https://cdn-icons-png.freepik.com/256/12259/12259343.png?ga=GA1.1.1160089174.1705990285&semt=ais'></img><label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
        <button className='btn'type="button" onClick={handleLogin}>
          Login
        </button>
        {/* <button className='btn' type="button" onClick={handleForgetPassword}>Forget Password</button> */}
        <h5>Don't have an account? < br/>Create one <Link to="/signup">Signup</Link></h5>

</div></div>
       )
        }
        {/* <div className='quote'> */}
  {/* <h3>Elevate Connections, Maximize Impact with Email CRM</h3></div>  */}
    </div>
  );
};

export default Login;
