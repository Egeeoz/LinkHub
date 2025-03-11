import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <h1>LinkHub</h1>
      <ul className={styles.linksContainer}>
        <li>home</li>
        <li>browse</li>
        <li>about</li>
        <li>login</li>
        <li>register</li>
      </ul>
    </nav>
  );
};

export default Navbar;
