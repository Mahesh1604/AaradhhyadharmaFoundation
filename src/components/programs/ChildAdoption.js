import React from 'react';
import styles from './Programs.module.css';

const ChildAdoption = () => {
  return (
    <div className={styles.programContainer}>
      <h1>Child Adoption Program</h1>
      <div className={styles.programContent}>
        <section className={styles.programSection}>
          <h2>Giving Children a Loving Home</h2>
          <p>
            Our Child Adoption program facilitates the process of finding loving, permanent homes for 
            children in need, ensuring their safety, well-being, and future success.
          </p>
        </section>

        <section className={styles.programSection}>
          <h2>Adoption Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Initial Inquiry</h3>
                <p>Submit an adoption inquiry form and attend an information session.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Home Study</h3>
                <p>Complete required background checks and home visits by our social workers.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Matching</h3>
                <p>Be matched with a child based on compatibility and best interests.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Placement & Finalization</h3>
                <p>Complete the legal process and finalize the adoption.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.programSection}>
          <h2>Eligibility Requirements</h2>
          <div className={styles.requirementsGrid}>
            <div className={styles.requirement}>
              <h3>Age</h3>
              <p>Prospective parents must be at least 21 years old.</p>
            </div>
            <div className={styles.requirement}>
              <h3>Stability</h3>
              <p>Stable financial and emotional situation.</p>
            </div>
            <div className={styles.requirement}>
              <h3>Background</h3>
              <p>Clear criminal background check.</p>
            </div>
            <div className={styles.requirement}>
              <h3>Health</h3>
              <p>Good physical and mental health.</p>
            </div>
          </div>
        </section>

        <section className={styles.programSection}>
          <h2>Legal Disclaimers for International Adoptions</h2>
          <div className={styles.legalNotice}>
            <p>
              International adoptions are subject to the laws and regulations of both the country of 
              origin and the receiving country. We strictly adhere to the Hague Adoption Convention 
              and local laws to ensure ethical and legal adoptions.
            </p>
            <p>
              <strong>Important:</strong> The adoption process and requirements may vary significantly 
              between countries. Please consult with our adoption specialists for specific information 
              regarding international adoptions.
            </p>
          </div>
          <button className={styles.primaryButton}>Begin Adoption Process</button>
        </section>
      </div>
    </div>
  );
};

export default ChildAdoption;
