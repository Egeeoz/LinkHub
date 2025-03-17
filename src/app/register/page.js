import styles from './registerPage.module.css';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <section className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h2 className={styles.registerTitle}>Create an Account</h2>
        <p className={styles.registerSubtitle}>
          Join LinkHub to collaborate with your team
        </p>

        <form className={styles.registerForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="•••••••••" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="companyName">Company Name</label>
            <input id="companyName" type="text" placeholder="Your Company" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="orgNumber">Organization Number</label>
            <input id="orgNumber" type="text" placeholder="123456-7890" />
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
