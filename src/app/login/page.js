'use client';
import React, { useState } from 'react';
import styles from './loginPage.module.css';
import Link from 'next/link';
import { handleLogin } from '@/lib/util/util';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const result = await handleLogin(email, password);
      if (result.success) {
        console.log(result);
        window.location.assign('/profile');
      }
    } catch (error) {
      console.log('Error logging in', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Welcome Back</h2>
        <p className={styles.loginSubtitle}>Log in to your LinkHub account</p>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="•••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <a className={styles.forgotPassword}>Forgot password?</a>
          </div>

          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>

        <p className={styles.registerLink}>
          Do not have an account? <Link href="/register">Register</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
