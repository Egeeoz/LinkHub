import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.companyInfo}>
          <h3>LinkHub</h3>
          <p>123 Business Avenue</p>
          <p>City, State 12345</p>
          <p>contact@companyname.com</p>
        </div>
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} LinkHub, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
