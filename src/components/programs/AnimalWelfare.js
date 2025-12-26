import React from 'react';
import styles from './Programs.module.css';

const AnimalWelfare = () => {
  return (
    <div className={styles.programContainer}>
      <h1>Animal Welfare Program</h1>
      <div className={styles.programContent}>
        <section className={styles.programSection}>
          <h2>Help for Cows, Dogs, and Other Animals</h2>
          <p>
            Our Animal Welfare program is dedicated to the care and protection of all animals in need. 
            We provide rescue services, medical care, and rehabilitation for animals in distress.
          </p>
        </section>

        <section className={styles.programSection}>
          <h2>Rescue Services</h2>
          <p>
            Our 24/7 rescue team is always ready to respond to emergencies. 
            We rescue animals from accidents, abuse, and neglect situations.
          </p>
        </section>

        <section className={styles.programSection}>
          <h2>Nearby Hospital/Trust Locator</h2>
          <div className={styles.locatorContainer}>
            <p>Find the nearest animal hospital or trust:</p>
            <button className={styles.locatorButton}>Find Nearby Help</button>
          </div>
        </section>

        <section className={styles.programSection}>
          <h2>How You Can Help</h2>
          <ul className={styles.helpList}>
            <li>Report animal emergencies</li>
            <li>Volunteer at our shelters</li>
            <li>Donate to support our rescue operations</li>
            <li>Adopt or foster animals in need</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AnimalWelfare;
