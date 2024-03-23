import React, { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setErrorMessage('');
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className={styles.container}>
      {!isLoggedIn ? (
        <form className={styles.form}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="button" onClick={handleLogin} className={styles.button}>
            Submit
          </button>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </form>
      ) : (
        <p className={styles.welcomeMessage}>Welcome, {username}!</p>
      )}
    </div>
  );
};

export default Login;
