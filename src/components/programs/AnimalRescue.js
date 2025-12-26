import React, { useState } from 'react';
import styles from './Programs.module.css';

const AnimalRescue = () => {
  const [formData, setFormData] = useState({
    animalType: '',
    condition: '',
    location: '',
    description: '',
    contactNumber: '',
    emergency: 'no',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for reporting. Our team will respond shortly.');
    // Reset form
    setFormData({
      animalType: '',
      condition: '',
      location: '',
      description: '',
      contactNumber: '',
      emergency: 'no',
    });
  };

  return (
    <div className={styles.programContainer}>
      <h1>Animal Rescue Program</h1>
      <div className={styles.programContent}>
        <section className={styles.programSection}>
          <h2>Report Sick or Injured Animals</h2>
          <p>
            Use this form to report sick, injured, or distressed animals in your area. 
            Our team will respond as quickly as possible to provide assistance.
          </p>
        </section>

        <section className={styles.programSection}>
          <div className={styles.rescueFormContainer}>
            <form onSubmit={handleSubmit} className={styles.rescueForm}>
              <div className={styles.formGroup}>
                <label htmlFor="animalType">Type of Animal *</label>
                <select 
                  id="animalType" 
                  name="animalType" 
                  value={formData.animalType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select animal type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="cow">Cow</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="condition">Condition *</label>
                <select 
                  id="condition" 
                  name="condition" 
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select condition</option>
                  <option value="injured">Injured</option>
                  <option value="sick">Sick</option>
                  <option value="abused">Abused/Neglected</option>
                  <option value="orphaned">Orphaned Baby</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="location">Exact Location *</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  placeholder="Street, Landmark, City"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description">Description *</label>
                <textarea 
                  id="description" 
                  name="description" 
                  placeholder="Please describe the animal's condition and situation..."
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contactNumber">Your Contact Number *</label>
                <input 
                  type="tel" 
                  id="contactNumber" 
                  name="contactNumber"
                  placeholder="+91 XXXXXXXXXX"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxContainer}>
                  <input 
                    type="checkbox" 
                    name="emergency" 
                    checked={formData.emergency === 'yes'}
                    onChange={(e) => setFormData({...formData, emergency: e.target.checked ? 'yes' : 'no'})}
                  />
                  <span className={styles.checkmark}></span>
                  This is an emergency (life-threatening situation)
                </label>
              </div>

              <button type="submit" className={styles.submitButton}>
                {formData.emergency === 'yes' ? 'SEND EMERGENCY ALERT' : 'SUBMIT REPORT'}
              </button>
            </form>
          </div>
        </section>

        <section className={styles.programSection}>
          <h2>What Happens Next?</h2>
          <div className={styles.processInfo}>
            <div className={styles.processStep}>
              <h3>1. Report Received</h3>
              <p>Our team will review your submission immediately.</p>
            </div>
            <div className={styles.processStep}>
              <h3>2. Local Team Alerted</h3>
              <p>Our nearest available rescue team will be notified.</p>
            </div>
            <div className={styles.processStep}>
              <h3>3. On-site Assessment</h3>
              <p>Team will assess the situation and provide necessary care.</p>
            </div>
            <div className={styles.processStep}>
              <h3>4. Follow-up</h3>
              <p>We'll keep you updated on the animal's status.</p>
            </div>
          </div>
        </section>

        <section className={styles.emergencyContact}>
          <h2>Emergency Contact</h2>
          <p>For immediate assistance, please call our 24/7 helpline:</p>
          <div className={styles.emergencyNumber}>
            <i className="fas fa-phone-alt"></i>
            <span>+91-XXXXXXXXXX</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimalRescue;
