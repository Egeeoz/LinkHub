'use client';
import { handleRegister } from '@/lib/util/util';
import styles from './registerPage.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    companyName: '',
    organizationNumber: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, companyName, organizationNumber } = formData;
      const result = await handleRegister(
        email,
        password,
        companyName,
        organizationNumber
      );
      if (result.success) {
        router.push('/login');
      }
    } catch (error) {
      console.log('Error registering', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h2 className={styles.registerTitle}>Create an Account</h2>
        <p className={styles.registerSubtitle}>
          Join LinkHub to collaborate with your team
        </p>

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
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
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              type="text"
              placeholder="Your Company"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="orgNumber">Organization Number</label>
            <input
              id="organizationNumber"
              type="text"
              placeholder="123456-7890"
              value={formData.organizationNumber}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.registerButton}>
            Create Account
          </button>
        </form>

        <p className={styles.loginLink}>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
