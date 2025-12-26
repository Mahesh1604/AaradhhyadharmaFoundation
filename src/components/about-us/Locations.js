import React, { useContext } from 'react';
import { LanguageContext } from '../../index';
import Navbar from '../Navbar';

const Locations = () => {
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

  const locationGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const locationCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e9ecef',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const locationImageStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    objectFit: 'cover'
  };

  const locationNameStyle = {
    color: '#2c3e50',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  };

  const locationTypeStyle = {
    color: '#007bff',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '1rem'
  };

  const locationAddressStyle = {
    color: '#6c757d',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1rem'
  };

  const contactInfoStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '1rem',
    marginTop: '1rem'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    color: '#495057'
  };

  const mapContainerStyle = {
    marginTop: '3rem',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px'
  };

  const mapTitleStyle = {
    color: '#2c3e50',
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const mapFrameStyle = {
    width: '100%',
    height: '400px',
    border: 'none',
    borderRadius: '8px'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem'
  };

  const statCardStyle = {
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '0.5rem'
  };

  const statLabelStyle = {
    fontSize: '1rem',
    opacity: '0.9'
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <div style={containerStyle}>
        <section style={sectionStyle}>
          <h1 style={titleStyle}>
            {T('Our Locations', 'हमारे स्थान')}
          </h1>
          <p style={subtitleStyle}>
            {T('Find our centers, shelters, and facilities across India', 'भारत भर में हमारे केंद्रों, आश्रयों और सुविधाओं को खोजें')}
          </p>

          <div style={statsGridStyle}>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>25+</div>
              <div style={statLabelStyle}>{T('Animal Shelters', 'पशु आश्रय')}</div>
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>15+</div>
              <div style={statLabelStyle}>{T('Orphanages', 'अनाथालय')}</div>
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>50+</div>
              <div style={statLabelStyle}>{T('Districts', 'जिले')}</div>
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>1000+</div>
              <div style={statLabelStyle}>{T('Volunteers', 'स्वयंसेवक')}</div>
            </div>
          </div>

          <h2 style={{...titleStyle, fontSize: '2rem', marginTop: '3rem'}}>
            <i className="bi bi-geo-alt me-2"></i>
            {T('Major Centers', 'प्रमुख केंद्र')}
          </h2>

          <div style={locationGridStyle}>
            <div style={locationCardStyle}>
              <img 
                src="/images/locations/delhi-center.jpg" 
                alt="Delhi Center" 
                style={locationImageStyle}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200/007bff/ffffff?text=Delhi+Center';
                }}
              />
              <h3 style={locationNameStyle}>
                {T('Delhi Main Center', 'दिल्ली मुख्य केंद्र')}
              </h3>
              <p style={locationTypeStyle}>
                <i className="bi bi-building me-2"></i>
                {T('Headquarters & Animal Shelter', 'मुख्यालय और पशु आश्रय')}
              </p>
              <p style={locationAddressStyle}>
                <i className="bi bi-geo-alt me-2"></i>
                {T('123 Dharma Marg, Connaught Place, New Delhi - 110001', '123 धर्म मार्ग, कनॉट प्लेस, नई दिल्ली - 110001')}
              </p>
              <div style={contactInfoStyle}>
                <div style={contactItemStyle}>
                  <i className="bi bi-telephone"></i>
                  <span>+91 11 2345 6789</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-envelope"></i>
                  <span>delhi@aaradhyadharma.org</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-clock"></i>
                  <span>{T('Open 24/7', '24/7 खुला')}</span>
                </div>
              </div>
            </div>

            <div style={locationCardStyle}>
              <img 
                src="/images/locations/mumbai-center.jpg" 
                alt="Mumbai Center" 
                style={locationImageStyle}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200/28a745/ffffff?text=Mumbai+Center';
                }}
              />
              <h3 style={locationNameStyle}>
                {T('Mumbai Regional Center', 'मुंबई क्षेत्रीय केंद्र')}
              </h3>
              <p style={locationTypeStyle}>
                <i className="bi bi-heart-pulse me-2"></i>
                {T('Animal Rescue & Child Care', 'पशु बचाव और बाल देखभाल')}
              </p>
              <p style={locationAddressStyle}>
                <i className="bi bi-geo-alt me-2"></i>
                {T('456 Seva Road, Bandra West, Mumbai - 400050', '456 सेवा रोड, बांद्रा वेस्ट, मुंबई - 400050')}
              </p>
              <div style={contactInfoStyle}>
                <div style={contactItemStyle}>
                  <i className="bi bi-telephone"></i>
                  <span>+91 22 3456 7890</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-envelope"></i>
                  <span>mumbai@aaradhyadharma.org</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-clock"></i>
                  <span>{T('Open 24/7', '24/7 खुला')}</span>
                </div>
              </div>
            </div>

            <div style={locationCardStyle}>
              <img 
                src="/images/locations/bangalore-center.jpg" 
                alt="Bangalore Center" 
                style={locationImageStyle}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200/dc3545/ffffff?text=Bangalore+Center';
                }}
              />
              <h3 style={locationNameStyle}>
                {T('Bangalore Animal Sanctuary', 'बेंगलुरु पशु अभयारण्य')}
              </h3>
              <p style={locationTypeStyle}>
                <i className="bi bi-tree me-2"></i>
                {T('Large Animal Sanctuary', 'बड़ा पशु अभयारण्य')}
              </p>
              <p style={locationAddressStyle}>
                <i className="bi bi-geo-alt me-2"></i>
                {T('789 Compassion Lane, Bannerghatta Road, Bangalore - 560076', '789 करुणा लेन, बन्नेरघट्टा रोड, बेंगलुरु - 560076')}
              </p>
              <div style={contactInfoStyle}>
                <div style={contactItemStyle}>
                  <i className="bi bi-telephone"></i>
                  <span>+91 80 4567 8901</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-envelope"></i>
                  <span>bangalore@aaradhyadharma.org</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-clock"></i>
                  <span>{T('Open 6 AM - 8 PM', 'सुबह 6 बजे - शाम 8 बजे खुला')}</span>
                </div>
              </div>
            </div>

            <div style={locationCardStyle}>
              <img 
                src="/images/locations/kolkata-center.jpg" 
                alt="Kolkata Center" 
                style={locationImageStyle}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200/ffc107/ffffff?text=Kolkata+Center';
                }}
              />
              <h3 style={locationNameStyle}>
                {T('Kolkata Orphanage', 'कोलकाता अनाथालय')}
              </h3>
              <p style={locationTypeStyle}>
                <i className="bi bi-house-heart me-2"></i>
                {T('Children\'s Home & Education Center', 'बच्चों का घर और शिक्षा केंद्र')}
              </p>
              <p style={locationAddressStyle}>
                <i className="bi bi-geo-alt me-2"></i>
                {T('321 Ashram Street, Salt Lake City, Kolkata - 700091', '321 आश्रम स्ट्रीट, सॉल्ट लेक सिटी, कोलकाता - 700091')}
              </p>
              <div style={contactInfoStyle}>
                <div style={contactItemStyle}>
                  <i className="bi bi-telephone"></i>
                  <span>+91 33 5678 9012</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-envelope"></i>
                  <span>kolkata@aaradhyadharma.org</span>
                </div>
                <div style={contactItemStyle}>
                  <i className="bi bi-clock"></i>
                  <span>{T('Open 7 AM - 9 PM', 'सुबह 7 बजे - रात 9 बजे खुला')}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={mapContainerStyle}>
            <h2 style={mapTitleStyle}>
              <i className="bi bi-map me-2"></i>
              {T('Find Us on Map', 'मानचित्र पर हमें खोजें')}
            </h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.053682824!2d76.763567!3d28.643982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1e92b1a447%3A0x71c031a45630b192!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890"
              style={mapFrameStyle}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aaradhyadharma Foundation Locations"
            ></iframe>
          </div>

          <div style={{...sectionStyle, marginTop: '2rem'}}>
            <h2 style={{...titleStyle, fontSize: '2rem'}}>
              <i className="bi bi-info-circle me-2"></i>
              {T('How to Reach Us', 'हम तक कैसे पहुंचें')}
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
              <div style={contactInfoStyle}>
                <h4 style={{color: '#007bff', marginBottom: '1rem'}}>
                  <i className="bi bi-telephone me-2"></i>
                  {T('Emergency Helpline', 'आपातकालीन हेल्पलाइन')}
                </h4>
                <p style={contactItemStyle}>+91 1800 123 4567</p>
                <p style={{color: '#6c757d', fontSize: '0.9rem'}}>
                  {T('24/7 for animal rescue and child welfare', 'पशु बचाव और बाल कल्याण के लिए 24/7')}
                </p>
              </div>
              
              <div style={contactInfoStyle}>
                <h4 style={{color: '#28a745', marginBottom: '1rem'}}>
                  <i className="bi bi-envelope me-2"></i>
                  {T('General Inquiries', 'सामान्य पूछताछ')}
                </h4>
                <p style={contactItemStyle}>info@aaradhyadharma.org</p>
                <p style={{color: '#6c757d', fontSize: '0.9rem'}}>
                  {T('For general information and support', 'सामान्य जानकारी और सहायता के लिए')}
                </p>
              </div>
              
              <div style={contactInfoStyle}>
                <h4 style={{color: '#dc3545', marginBottom: '1rem'}}>
                  <i className="bi bi-people me-2"></i>
                  {T('Volunteer Registration', 'स्वयंसेवक पंजीकरण')}
                </h4>
                <p style={contactItemStyle}>volunteer@aaradhyadharma.org</p>
                <p style={{color: '#6c757d', fontSize: '0.9rem'}}>
                  {T('Join our volunteer network', 'हमारे स्वयंसेवक नेटवर्क में शामिल हों')}
                </p>
              </div>
            </div>
          </div>
        </section>
             </div>
     </div>
   );
 };

export default Locations;
