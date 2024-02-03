// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
       <div className='box'>  <img className='image' src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.1160089174.1705990285&semt=sph"></img>
      <div className='email'> 
      <h4>Already have an account? <Link to="/login">Login</Link></h4>
        <h4>Don't have an account? < br/>Create one <Link to="/signup">Signup</Link></h4>
  </div>        
  </div>
  <div className='quote'>
  <h3>Elevate Connections, Maximize Impact with Email CRM</h3>
</div></div>
  );
};

export default Home;
