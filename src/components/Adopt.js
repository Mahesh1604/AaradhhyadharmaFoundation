import React, { useContext, useMemo, useState } from 'react';
import { LanguageContext } from '../index';

const countries = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Other'
];

const Adopt = () => {
  const { lang } = useContext(LanguageContext);
  const [isInternational, setIsInternational] = useState(false);
  const [country, setCountry] = useState('India');

  // Inline styles for enhanced visual appeal
  const containerStyle = {
    marginTop: '2rem',
    marginBottom: '2rem'
  };

  const titleStyle = {
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: '2.5rem',
    fontWeight: '600'
  };

  const cardStyle = {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#ffffff',
    height: '100%'
  };

  const cardBodyStyle = {
    padding: '2rem'
  };

  const cardTitleStyle = {
    color: '#2c3e50',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const cardTextStyle = {
    color: '#6c757d',
    marginBottom: '1.5rem'
  };

  const sectionTitleStyle = {
    color: '#2c3e50',
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const sectionTextStyle = {
    color: '#6c757d',
    marginBottom: '1.5rem'
  };

  const switchContainerStyle = {
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    border: '1px solid #e9ecef'
  };

  const switchTitleStyle = {
    color: '#2c3e50',
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const formStyle = {
    border: '1px solid #e9ecef',
    borderRadius: '12px',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    marginTop: '1rem'
  };

  const formLabelStyle = {
    fontWeight: '500',
    color: '#495057',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const formControlStyle = {
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  };

  const warningAlertStyle = {
    borderRadius: '8px',
    border: 'none',
    padding: '1rem',
    backgroundColor: '#fff3cd',
    color: '#856404',
    borderLeft: '4px solid #ffc107',
    marginBottom: '1rem'
  };

  const proceedButtonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    marginBottom: '1.5rem'
  };

  const listItemStyle = {
    padding: '0.75rem 0',
    borderBottom: '1px solid #e9ecef',
    color: '#6c757d',
    position: 'relative',
    paddingLeft: '1.5rem'
  };

  const listItemBeforeStyle = {
    content: '"•"',
    color: '#007bff',
    fontWeight: 'bold',
    position: 'absolute',
    left: '0'
  };

  const t = useMemo(() => ({
    pageTitle: lang === 'HI' ? 'गोद लेने का पोर्टल' : 'Adoption Portal',
    childAdoption: lang === 'HI' ? 'बाल गोद लेना' : 'Child Adoption',
    animalAdoption: lang === 'HI' ? 'पशु गोद लेना' : 'Animal Adoption',
    learnMore: lang === 'HI' ? 'और जानें' : 'Learn More',
    intlQ: lang === 'HI' ? 'क्या आप अंतरराष्ट्रीय उपयोगकर्ता हैं?' : 'Are you an international user?',
    intlSwitch: lang === 'HI' ? 'मैं भारत के बाहर से आवेदन कर रहा/रही हूँ' : 'I am applying from outside India',
    selectCountry: lang === 'HI' ? 'अपना देश चुनें' : 'Select your country',
    legalNotice: lang === 'HI' ? 'कानूनी सूचना:' : 'Legal Notice:',
    legalMsg: lang === 'HI'
      ? 'अंतरराष्ट्रीय गोद लेने पर भारत और आपके देश दोनों के कानून लागू होते हैं। कृपया पात्रता और प्रक्रिया के लिए कानूनी प्राधिकरणों और एजेंसियों से परामर्श करें। अतिरिक्त दस्तावेज़ों की आवश्यकता हो सकती है।'
      : 'International adoptions are subject to the laws and regulations of both India and your home country. Please consult with legal authorities and adoption agencies for eligibility and process. Additional documentation may be required.',
    proceed: lang === 'HI' ? 'आगे बढ़ें' : 'Proceed',
    childSectionTitle: lang === 'HI' ? 'बाल गोद लेना' : 'Child Adoption',
    childSectionText: lang === 'HI'
      ? 'हमारा संस्थान बाल गोद लेने के लिए सभी कानूनी और नैतिक दिशानिर्देशों का पालन करता है। कृपया आवेदन करने से पहले पात्रता मानदंड और प्रक्रिया देखें।'
      : 'Our foundation follows all legal and ethical guidelines for child adoption. Please review the eligibility criteria and process before applying.',
    animalSectionTitle: lang === 'HI' ? 'पशु गोद लेना' : 'Animal Adoption',
    animalSectionText: lang === 'HI'
      ? 'हम जरूरतमंद पशुओं को बचाते और पुनर्वास करते हैं। यदि आप गोद लेना चाहते हैं, तो उपलब्ध पशुओं की सूची देखें और गोद लेने का फॉर्म भरें।'
      : 'We rescue and rehabilitate animals in need. If you wish to adopt, please view our list of available animals and fill out the adoption form.',
    eligibility: lang === 'HI' ? 'पात्रता:' : 'Eligibility:',
    eligibilityChild: lang === 'HI' ? 'आयु, वैवाहिक स्थिति, आर्थिक स्थिरता, आदि।' : 'Age, marital status, financial stability, etc.',
    process: lang === 'HI' ? 'प्रक्रिया:' : 'Process:',
    processChild: lang === 'HI' ? 'आवेदन, गृह अध्ययन, मिलान, कानूनी औपचारिकताएँ।' : 'Application, home study, matching, legal formalities.',
    support: lang === 'HI' ? 'सहयोग:' : 'Support:',
    supportChild: lang === 'HI' ? 'पूरी प्रक्रिया में मार्गदर्शन।' : 'Guidance throughout the process.',
    eligibilityAnimal: lang === 'HI' ? 'देखभाल की इच्छा, उपयुक्त घरेलू वातावरण।' : 'Willingness to care, suitable home environment.',
    processAnimal: lang === 'HI' ? 'आवेदन, गृह जांच, गोद लेने का समझौता।' : 'Application, home check, adoption agreement.',
    supportAnimal: lang === 'HI' ? 'गोद लेने के बाद सहायता और मार्गदर्शन।' : 'Post-adoption support and guidance.',
  }), [lang]);

  return (
    <div className="container my-5" style={containerStyle}>
      <h1 style={titleStyle}>
        <i className="bi bi-heart-fill text-danger me-3"></i>
        {t.pageTitle}
      </h1>
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h2 style={cardTitleStyle}>
                <i className="bi bi-person-plus text-primary"></i>
                {t.childAdoption}
              </h2>
              <p style={cardTextStyle}>{lang === 'HI' ? 'प्रक्रिया, पात्रता के बारे में जानें और जरूरतमंद बच्चे को गोद लेने की अपनी यात्रा शुरू करें।' : 'Learn about the process, eligibility, and start your journey to adopt a child in need.'}</p>
              <a href="#child-adoption" className="btn btn-primary" style={{borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content'}}>
                <i className="bi bi-arrow-right"></i>
                {t.learnMore}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h2 style={cardTitleStyle}>
                <i className="bi bi-heart-pulse text-success"></i>
                {t.animalAdoption}
              </h2>
              <p style={cardTextStyle}>{lang === 'HI' ? 'एक बचाए गए पशु को प्यार भरा घर दें। उपलब्ध पशुओं और गोद लेने के चरणों को देखें।' : 'Give a loving home to a rescued animal. View available animals and adoption steps.'}</p>
              <a href="#animal-adoption" className="btn btn-success" style={{borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content'}}>
                <i className="bi bi-arrow-right"></i>
                {t.learnMore}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={switchContainerStyle}>
        <h3 style={switchTitleStyle}>
          <i className="bi bi-globe text-info"></i>
          {t.intlQ}
        </h3>
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="internationalSwitch"
            checked={isInternational}
            onChange={() => setIsInternational(!isInternational)}
          />
          <label className="form-check-label" htmlFor="internationalSwitch" style={{color: '#495057'}}>
            {t.intlSwitch}
          </label>
        </div>
        {isInternational && (
          <form style={formStyle}>
            <div className="mb-3">
              <label htmlFor="countrySelect" className="form-label" style={formLabelStyle}>
                <i className="bi bi-geo-alt"></i>
                {t.selectCountry}
              </label>
              <select
                className="form-select"
                id="countrySelect"
                value={country}
                onChange={e => setCountry(e.target.value)}
                style={formControlStyle}
              >
                {countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="alert alert-warning" style={warningAlertStyle}>
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <strong>{t.legalNotice}</strong> {t.legalMsg}
            </div>
            <button type="submit" className="btn btn-primary" style={proceedButtonStyle}>
              <i className="bi bi-check-circle"></i>
              {t.proceed}
            </button>
          </form>
        )}
      </div>
      <section id="child-adoption" style={{marginBottom: '3rem'}}>
        <h2 style={sectionTitleStyle}>
          <i className="bi bi-person-heart text-primary"></i>
          {t.childSectionTitle}
        </h2>
        <p style={sectionTextStyle}>
          {t.childSectionText}
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={listItemBeforeStyle}></span>
            <strong>{t.eligibility}</strong> {t.eligibilityChild}
          </li>
          <li style={listItemStyle}>
            <span style={listItemBeforeStyle}></span>
            <strong>{t.process}</strong> {t.processChild}
          </li>
          <li style={listItemStyle}>
            <span style={listItemBeforeStyle}></span>
            <strong>{t.support}</strong> {t.supportChild}
          </li>
        </ul>
      </section>
      <section id="animal-adoption">
        <h2 style={sectionTitleStyle}>
          <i className="bi bi-heart-pulse text-success"></i>
          {t.animalSectionTitle}
        </h2>
        <p style={sectionTextStyle}>
          {t.animalSectionText}
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={listItemBeforeStyle}></span>
            <strong>{t.eligibility}</strong> {t.eligibilityAnimal}
          </li>
          <li style={listItemStyle}>
            <span style={listItemBeforeStyle}></span>
            <strong>{t.process}</strong> {t.processAnimal}
          </li>
          <li style={listItemStyle}>
            <span style={listItemBeforeStyle}></span>
            <strong>{t.support}</strong> {t.supportAnimal}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Adopt;
