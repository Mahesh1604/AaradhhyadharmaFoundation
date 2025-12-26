import React from 'react';
import styles from './Programs.module.css';

const OrphanageSupport = () => {
  return (
    <div className={styles.programContainer}>
      <h1>Orphanage Support Program</h1>
      <div className={styles.programContent}>
        <section className={styles.programSection}>
          <h2>Aid for Anath Ashrams</h2>
          <p>
            Our Orphanage Support program is dedicated to providing comprehensive care and support 
            to children in need through partnerships with Anath Ashrams across the region.
          </p>
        </section>

        <section className={styles.programSection}>
          <h2>Our Support Includes</h2>
          <ul className={styles.supportList}>
            <li>Educational scholarships and school supplies</li>
            <li>Nutrition and healthcare support</li>
            <li>Mentorship and counseling services</li>
            <li>Infrastructure development for orphanages</li>
            <li>Vocational training for older children</li>
          </ul>
        </section>

        <section className={styles.programSection}>
          <h2>How You Can Help</h2>
          <div className={styles.helpOptions}>
            <div className={styles.helpOption}>
              <h3>Sponsor a Child</h3>
              <p>Provide monthly support for a child's education and care.</p>
              <button className={styles.actionButton}>Learn More</button>
            </div>
            <div className={styles.helpOption}>
              <h3>Donate Supplies</h3>
              <p>Contribute books, clothes, and other essential items.</p>
              <button className={styles.actionButton}>View Wishlist</button>
            </div>
            <div className={styles.helpOption}>
              <h3>Volunteer</h3>
              <p>Share your time and skills with the children.</p>
              <button className={styles.actionButton}>Sign Up</button>
            </div>
          </div>
        </section>

        <section className={styles.programSection}>
          <h2>Our Impact</h2>
          <div className={styles.impactStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Children Supported</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>25</div>
              <div className={styles.statLabel}>Partner Orphanages</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>School Attendance</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrphanageSupport;
