import { handleLogout } from '@/lib/util/util';
import styles from './navbar.module.css';
import Link from 'next/link';
import { cookies } from 'next/headers';

const Navbar = async () => {
  const cookiesStore = await cookies();
  const sessionCookie = cookiesStore.get('session')?.value;

  return (
    <nav className={styles.navbarContainer}>
      <h1>LinkHub</h1>
      <ul className={styles.linksContainer}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/browse">browse</Link>
        </li>

        {sessionCookie ? (
          <>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">login</Link>
            </li>
            <li>
              <Link href="/register">register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
