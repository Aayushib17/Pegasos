// src/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consent, setConsent] = useState(false);

  const navigate = useNavigate();

  const handleSignup = () => {
    // Add your signup logic and validation here

    if (!name || !username || !password || !confirmPassword || !phoneNumber || !consent) {
      alert('Please fill in all fields and provide consent.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and Confirm Password must match.');
      return;
    }

    // Simulate saving user information locally (you might use context or Redux for a more scalable state management)
    const newUser = {
      name,
      username,
      password,
      phoneNumber,
    };
    navigate('/login');
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} />
          I agree to the terms and conditions.
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
