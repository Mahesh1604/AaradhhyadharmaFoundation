import React, { useContext } from 'react';
import { LanguageContext } from '../../index';
import Navbar from '../Navbar';

const TeamFounders = () => {
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

  const teamGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };

  const memberCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e9ecef',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const memberImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '0 auto 1.5rem',
    objectFit: 'cover',
    border: '4px solid #007bff'
  };

  const memberNameStyle = {
    color: '#2c3e50',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  };

  const memberRoleStyle = {
    color: '#007bff',
    fontSize: '1.1rem',
    fontWeight: '500',
    marginBottom: '1rem'
  };

  const memberBioStyle = {
    color: '#6c757d',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1rem'
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem'
  };

  const socialLinkStyle = {
    color: '#007bff',
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const sectionTitleStyle = {
    color: '#2c3e50',
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <div style={containerStyle}>
        <section style={sectionStyle}>
          <h1 style={titleStyle}>
            {T('Our Team & Founders', 'हमारी टीम और संस्थापक')}
          </h1>
          <p style={subtitleStyle}>
            {T('Meet the dedicated individuals who make our mission possible', 'उन समर्पित व्यक्तियों से मिलें जो हमारे मिशन को संभव बनाते हैं')}
          </p>

          <h2 style={sectionTitleStyle}>
            <i className="bi bi-star me-2"></i>
            {T('Founders', 'संस्थापक')}
          </h2>

          <div style={teamGridStyle}>
            <div style={memberCardStyle}>
              <img 
                src="/images/founder/img1.jpeg" 
                alt="Founder" 
                style={memberImageStyle}
               
              />
              <h3 style={memberNameStyle}>
                {T('Rahul Patidar', 'राहुल पतिडार')}
              </h3>
              <p style={memberRoleStyle}>
                {T('Founder & Spiritual Guide', 'संस्थापक और आध्यात्मिक मार्गदर्शक')}
              </p>
              <p style={memberBioStyle}>
                {T(
                  'A spiritual leader with over 20 years of experience in serving humanity and spreading the message of dharma. Swami Dharmesh founded Aaradhyadharma Foundation with the vision of creating a compassionate world.',
                  '20 से अधिक वर्षों के अनुभव के साथ मानवता की सेवा और धर्म का संदेश फैलाने वाले आध्यात्मिक नेता। स्वामी धर्मेश ने करुणामय दुनिया बनाने के विजन के साथ आराध्यधर्म फाउंडेशन की स्थापना की।'
                )}
              </p>
              <div style={socialLinksStyle}>
                <a href="#" style={socialLinkStyle}><i className="bi bi-linkedin"></i></a>
                <a href="#" style={socialLinkStyle}><i className="bi bi-twitter"></i></a>
                <a href="#" style={socialLinkStyle}><i className="bi bi-envelope"></i></a>
              </div>
            </div>

            <div style={memberCardStyle}>
              <img 
                src="/images/founder/img2.jpeg" 
                alt="Co-Founder" 
                style={memberImageStyle}
               
              />
              <h3 style={memberNameStyle}>
                {T('Mahesh Parmar', 'महेश परमर')}
              </h3>
              <p style={memberRoleStyle}>
                {T('Co-Founder & Director', 'सह-संस्थापक और निदेशक')}
              </p>
              <p style={memberBioStyle}>
                {T(
                  'A medical professional with a passion for animal welfare and child care. Dr. Priya brings her expertise in healthcare and management to ensure the foundation operates efficiently and effectively.',
                  'पशु कल्याण और बाल देखभाल के प्रति जुनून रखने वाली चिकित्सा पेशेवर। डॉ. प्रिया अपने स्वास्थ्य देखभाल और प्रबंधन के विशेषज्ञता को फाउंडेशन के कुशल और प्रभावी संचालन के लिए लाती हैं।'
                )}
              </p>
              <div style={socialLinksStyle}>
                <a href="#" style={socialLinkStyle}><i className="bi bi-linkedin"></i></a>
                <a href="#" style={socialLinkStyle}><i className="bi bi-twitter"></i></a>
                <a href="#" style={socialLinkStyle}><i className="bi bi-envelope"></i></a>
              </div>
            </div>
          </div>

          <h2 style={sectionTitleStyle}>
            <i className="bi bi-people me-2"></i>
            {T('Leadership Team', 'नेतृत्व टीम')}
          </h2>

          <div style={teamGridStyle}>
            <div style={memberCardStyle}>
              <img 
               src="/images/founder/img3.jpg"  
                alt="Program Director" 
                style={memberImageStyle}
               
              />
              <h3 style={memberNameStyle}>
                {T('Anil Kumar', 'अनिल कुमार')}
              </h3>
              <p style={memberRoleStyle}>
                {T('Program Director', 'कार्यक्रम निदेशक')}
              </p>
              <p style={memberBioStyle}>
                {T(
                  'Oversees all rescue operations and rehabilitation programs. With 15 years of experience in animal welfare, Rajesh ensures every rescue mission is executed with precision and care.',
                  'सभी बचाव अभियानों और पुनर्वास कार्यक्रमों की देखरेख करता है। पशु कल्याण में 15 वर्षों के अनुभव के साथ, राजेश सुनिश्चित करता है कि हर बचाव मिशन सटीकता और देखभाल के साथ क्रियान्वित हो।'
                )}
              </p>
            </div>

            <div style={memberCardStyle}>
              <img 
                src="/images/founder/img4.jpg"  
                alt="Child Care Coordinator" 
                style={memberImageStyle}
               
              />
              <h3 style={memberNameStyle}>
                {T('Ritu Sharma', 'रितु शर्मा')}
              </h3>
              <p style={memberRoleStyle}>
                {T('Child Care Coordinator', 'बाल देखभाल समन्वयक')}
              </p>
              <p style={memberBioStyle}>
                {T(
                  'Dedicated to ensuring every child receives love, education, and care. Anita manages our orphanage support programs and child adoption initiatives.',
                  'यह सुनिश्चित करने के लिए समर्पित कि हर बच्चे को प्यार, शिक्षा और देखभाल मिले। अनीता हमारे अनाथालय सहायता कार्यक्रमों और बाल गोद लेने की पहल का प्रबंधन करती है।'
                )}
              </p>
            </div>

            <div style={memberCardStyle}>
              <img 
               src="/images/founder/img5.jpg" 
                alt="Volunteer Coordinator" 
                style={memberImageStyle}
                
              />
              <h3 style={memberNameStyle}>
                {T('Meera Devi', 'मीरा देवी')}
              </h3>
              <p style={memberRoleStyle}>
                {T('Volunteer Coordinator', 'स्वयंसेवक समन्वयक')}
              </p>
              <p style={memberBioStyle}>
                {T(
                  'Manages our nationwide network of volunteers and coordinates community outreach programs. Mohan ensures our message reaches every corner of the country.',
                  'हमारे राष्ट्रव्यापी स्वयंसेवक नेटवर्क का प्रबंधन करता है और सामुदायिक आउटरीच कार्यक्रमों का समन्वय करता है। मोहन सुनिश्चित करता है कि हमारा संदेश देश के हर कोने तक पहुंचे।'
                )}
              </p>
            </div>
          </div>

          <h2 style={sectionTitleStyle}>
            <i className="bi bi-handshake me-2"></i>
            {T('Partners & Supporters', 'साझेदार और समर्थक')}
          </h2>

          <div style={teamGridStyle}>
            <div style={memberCardStyle}>
              <img 
                src="/images/founder/img6.jpg"  
                alt="Government Partner" 
                style={memberImageStyle}
                
              />
              <h3 style={memberNameStyle}>
                {T('Ministry of Social Justice', 'सामाजिक न्याय मंत्रालय')}
              </h3>
              <p style={memberRoleStyle}>
                {T('Government Partner', 'सरकारी साझेदार')}
              </p>
              <p style={memberBioStyle}>
                {T(
                  'Official partner in child welfare and adoption programs. Provides regulatory support and funding for our initiatives.',
                  'बाल कल्याण और गोद लेने के कार्यक्रमों में आधिकारिक साझेदार। हमारी पहलों के लिए नियामक समर्थन और धन प्रदान करता है।'
                )}
              </p>
            </div>

            <div style={memberCardStyle}>
              <img 
                src="/images/founder/img7.jpg" 
                alt="Corporate Partner" 
                style={memberImageStyle}
                
              />
              <h3 style={memberNameStyle}>
                {T('Animal Welfare Board', 'पशु कल्याण बोर्ड')}
              </h3>
              <p style={memberRoleStyle}>
                {T('Animal Welfare Partner', 'पशु कल्याण साझेदार')}
              </p>
              <p style={memberBioStyle}>
                {T(
                  'Collaborates on animal rescue operations and provides veterinary support for our animal welfare programs.',
                  'पशु बचाव अभियानों पर सहयोग करता है और हमारे पशु कल्याण कार्यक्रमों के लिए पशु चिकित्सा समर्थन प्रदान करता है।'
                )}
              </p>
            </div>
          </div>
        </section>
             </div>
     </div>
   );
 };

export default TeamFounders;
