import React, { useContext } from 'react';
import { LanguageContext } from '../../index';
import Navbar from '../Navbar';

const MissionVision = () => {
  const { lang } = useContext(LanguageContext);
  const T = (en, hi) => (lang === 'HI' ? hi : en);

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingTop: '100px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  };

  const sectionStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '3rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const subtitleStyle = {
    color: '#6c757d',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const cardStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    border: '1px solid #e9ecef'
  };

  const cardTitleStyle = {
    color: '#007bff',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem'
  };

  const cardContentStyle = {
    color: '#495057',
    fontSize: '1.1rem',
    lineHeight: '1.6'
  };

  const valuesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const valueCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e9ecef'
  };

  const valueIconStyle = {
    fontSize: '3rem',
    color: '#28a745',
    marginBottom: '1rem'
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <div style={containerStyle}>
        <section style={sectionStyle}>
          <h1 style={titleStyle}>
            {T('Our Mission & Vision', 'हमारा मिशन और विजन')}
          </h1>
          <p style={subtitleStyle}>
            {T('Building a compassionate world through service, protection, and spiritual guidance', 'सेवा, संरक्षण और आध्यात्मिक मार्गदर्शन के माध्यम से एक करुणामय दुनिया का निर्माण')}
          </p>

          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>
              <i className="bi bi-bullseye me-2"></i>
              {T('Our Mission', 'हमारा मिशन')}
            </h2>
            <p style={cardContentStyle}>
              {T(
                'Aaradhyadharma Foundation is committed to serving humanity and protecting all living beings through compassionate action, spiritual guidance, and community support. We strive to create a world where every being is treated with dignity, respect, and love.',
                'आराध्यधर्म फाउंडेशन करुणामय कार्य, आध्यात्मिक मार्गदर्शन और सामुदायिक सहायता के माध्यम से मानवता की सेवा और सभी जीवों की रक्षा करने के लिए प्रतिबद्ध है। हम एक ऐसी दुनिया बनाने का प्रयास करते हैं जहां हर प्राणी को गरिमा, सम्मान और प्रेम के साथ देखा जाए।'
              )}
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>
              <i className="bi bi-eye me-2"></i>
              {T('Our Vision', 'हमारा विजन')}
            </h2>
            <p style={cardContentStyle}>
              {T(
                'We envision a world where dharma (righteousness) guides every action, where animals are protected and respected, where children grow up in loving environments, and where communities support each other in times of need. Through our work, we aim to spread the message of universal love and compassion.',
                'हम एक ऐसी दुनिया की कल्पना करते हैं जहां धर्म (धार्मिकता) हर कार्य का मार्गदर्शन करे, जहां पशुओं की रक्षा और सम्मान हो, जहां बच्चे प्यार भरे वातावरण में बड़े हों, और जहां समुदाय जरूरत के समय एक-दूसरे का साथ दें। अपने काम के माध्यम से, हम सार्वभौमिक प्रेम और करुणा का संदेश फैलाने का लक्ष्य रखते हैं।'
              )}
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>
              <i className="bi bi-heart me-2"></i>
              {T('Our Core Values', 'हमारे मूल मूल्य')}
            </h2>
            <div style={valuesGridStyle}>
              <div style={valueCardStyle}>
                <i className="bi bi-heart-pulse" style={valueIconStyle}></i>
                <h3 style={{color: '#28a745', marginBottom: '1rem'}}>
                  {T('Compassion', 'करुणा')}
                </h3>
                <p style={cardContentStyle}>
                  {T('Treating all beings with kindness and understanding', 'सभी प्राणियों के साथ दया और समझ के साथ व्यवहार करना')}
                </p>
              </div>

              <div style={valueCardStyle}>
                <i className="bi bi-shield-check" style={valueIconStyle}></i>
                <h3 style={{color: '#007bff', marginBottom: '1rem'}}>
                  {T('Protection', 'संरक्षण')}
                </h3>
                <p style={cardContentStyle}>
                  {T('Safeguarding the vulnerable and voiceless', 'कमजोर और मूक प्राणियों की रक्षा करना')}
                </p>
              </div>

              <div style={valueCardStyle}>
                <i className="bi bi-lightbulb" style={valueIconStyle}></i>
                <h3 style={{color: '#ffc107', marginBottom: '1rem'}}>
                  {T('Dharma', 'धर्म')}
                </h3>
                <p style={cardContentStyle}>
                  {T('Following the path of righteousness and truth', 'धार्मिकता और सत्य के मार्ग का अनुसरण करना')}
                </p>
              </div>

              <div style={valueCardStyle}>
                <i className="bi bi-people" style={valueIconStyle}></i>
                <h3 style={{color: '#dc3545', marginBottom: '1rem'}}>
                  {T('Service', 'सेवा')}
                </h3>
                <p style={cardContentStyle}>
                  {T('Selflessly serving humanity and all living beings', 'निःस्वार्थ भाव से मानवता और सभी जीवों की सेवा करना')}
                </p>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>
              <i className="bi bi-target me-2"></i>
              {T('Our Goals', 'हमारे लक्ष्य')}
            </h2>
            <ul style={{...cardContentStyle, paddingLeft: '2rem'}}>
              <li>{T('Rescue and rehabilitate 10,000+ animals annually', 'प्रति वर्ष 10,000+ पशुओं को बचाना और पुनर्वास करना')}</li>
              <li>{T('Provide care and education to 5,000+ orphaned children', '5,000+ अनाथ बच्चों को देखभाल और शिक्षा प्रदान करना')}</li>
              <li>{T('Establish 50+ animal shelters across India', 'भारत भर में 50+ पशु आश्रय स्थापित करना')}</li>
              <li>{T('Create awareness about dharma and compassion in 100+ communities', '100+ समुदायों में धर्म और करुणा के बारे में जागरूकता फैलाना')}</li>
              <li>{T('Build a network of 10,000+ volunteers nationwide', 'राष्ट्रव्यापी 10,000+ स्वयंसेवकों का नेटवर्क बनाना')}</li>
            </ul>
          </div>
        </section>
             </div>
     </div>
   );
 };

export default MissionVision;
