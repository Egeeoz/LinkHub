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
      <section className={styles.buttonContainer}>
        <button className={styles.primaryButton}>get started</button>
        <button className={styles.secondaryButton}>see how it works</button>
      </section>
    </section>
  );
};

export default Hero;
