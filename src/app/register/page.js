import styles from './registerPage.module.css';

const registerPage = () => {
  return (
    <section className={styles.registerContainer}>
      <section className={styles.registerInputs}>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <label> Company Name</label>
        <input type="text" />
        <label>Organization number</label>
        <input type="text" />
      </section>
    </section>
  );
};

export default registerPage;
