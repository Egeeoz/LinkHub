import { handleLogout } from '@/lib/util/util';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <h1>LinkHub</h1>
      <ul className={styles.linksContainer}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/">browse</Link>
        </li>
        <li>
          <Link href="/">about</Link>
        </li>
        <li>
          <Link href="/login  ">login</Link>
        </li>
        <li>
          <Link href="/register">register</Link>
        </li>
        <li>
          <Link href="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
