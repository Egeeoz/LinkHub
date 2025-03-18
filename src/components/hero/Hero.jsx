import Link from 'next/link';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <p className={styles.tagline}>make yourself visible</p>
      <h2 className={styles.title}>
        a beautiful space for <br />
        <span className={styles.highlightText}> company collaboration</span>
      </h2>
      <p className={styles.description}>
        Seamlessly <span>connect</span>, <span>share </span>and
        <span> grow</span> with an elegant <br /> platform designed for
        businesses
      </p>
      <Link href="/register" className={styles.primaryButton}>
        get started
      </Link>
    </section>
  );
};

export default Hero;
