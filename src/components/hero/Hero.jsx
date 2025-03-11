import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <p>make yourself visible</p>
      <h2>
        a beautiful space for
        <span className={styles.highlightText}>company collaboration</span>
      </h2>
      <p>
        Seamlessly connect, share, and grow with an elegant platform designed
        for modern businesses.
      </p>
      <section className={styles.buttonContainer}>
        <button>get started</button>
        <button>see how it works</button>
      </section>
    </section>
  );
};

export default Hero;
