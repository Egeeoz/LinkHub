import React from 'react';
import styles from './loginPage.module.css';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <section className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Welcome Back</h2>
        <p className={styles.loginSubtitle}>Log in to your LinkHub account</p>

        <form className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="•••••••••" />
            <a href="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>

        <p className={styles.registerLink}>
          Don't have an account? <Link href="/register">Register</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
