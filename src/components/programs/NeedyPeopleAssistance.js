import React from 'react';
import styles from './Programs.module.css';

const NeedyPeopleAssistance = () => {
  return (
    <div className={styles.programContainer}>
      <h1>Needy People Assistance Program</h1>
      <div className={styles.programContent}>
        <section className={styles.programSection}>
          <h2>Essential Support for Those in Need</h2>
          <p>
            Our Needy People Assistance program provides critical support to individuals and families 
            facing financial hardships, ensuring they have access to basic necessities and medical care.
          </p>
        </section>

        <section className={styles.programSection}>
          <h2>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Food Assistance</h3>
              <p>Monthly ration kits and community kitchens</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Medical Support</h3>
              <p>Health camps and medicine distribution</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Shelter Aid</h3>
              <p>Temporary housing and emergency shelter</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Education Support</h3>
              <p>School fees and supplies for children</p>
            </div>
          </div>
        </section>

        <section className={styles.programSection}>
          <h2>Request Assistance</h2>
          <div className={styles.assistanceForm}>
            <p>If you or someone you know needs help, please fill out our assistance form:</p>
            <button className={styles.primaryButton}>Apply for Assistance</button>
          </div>
        </section>

        <section className={styles.programSection}>
          <h2>How You Can Help</h2>
          <div className={styles.helpOptions}>
            <div className={styles.helpCard}>
              <h3>Donate</h3>
              <p>Your contribution can provide meals, medicine, or shelter to those in need.</p>
              <button className={styles.secondaryButton}>Donate Now</button>
            </div>
            <div className={styles.helpCard}>
              <h3>Volunteer</h3>
              <p>Join our team of dedicated volunteers making a difference.</p>
              <button className={styles.secondaryButton}>Volunteer</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NeedyPeopleAssistance;
