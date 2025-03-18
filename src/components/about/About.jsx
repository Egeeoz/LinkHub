import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <section className={styles.aboutContent}>
        <h1>About</h1>
        <p className={styles.aboutText}>
          At Linkhub, we make it easy for businesses to connect with customers.
          Our platform allows companies to register and showcase important
          details, such as their services, contact information, business hours,
          and location, all in one place.
        </p>
        <p className={styles.aboutText}>
          We create a dedicated page for each business, ensuring consumers can
          easily find and access the information they need. Whether you're a
          local shop, a service provider, or a growing company, we help you
          increase visibility and reach more customers. Our mission is to
          simplify business discovery and make it effortless for people to
          connect with the services they need. Join us today and let customers
          find you!1
        </p>
      </section>
    </section>
  );
};

export default About;
