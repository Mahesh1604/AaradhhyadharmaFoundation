import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../../index';
import '../../styles/get-involved.css';

const Partner = () => {
  const { lang } = useContext(LanguageContext);

  const t = useMemo(() => ({
    title: lang === 'HI' ? 'हमारे साझेदार बनें' : 'Partner With Us',
    subtitle: lang === 'HI' ? 'साथ मिलकर समाज में बदलाव लाएं' : 'Collaborate to create lasting social impact',
    intro: lang === 'HI' ? 'हम संगठनों, व्यवसायों और व्यक्तियों के साथ साझेदारी में विश्वास करते हैं। नीचे दिए गए फॉर्म को भरें और आइए साथ मिलकर काम करें।' : 'We believe in partnerships with organizations, businesses, and individuals. Fill out the form below and let\'s work together.',
    formTitle: lang === 'HI' ? 'साझेदारी पंजीकरण फॉर्म' : 'Partnership Registration Form',
    orgName: lang === 'HI' ? 'संगठन/व्यवसाय का नाम' : 'Organization/Business Name',
    contactPerson: lang === 'HI' ? 'संपर्क व्यक्ति का नाम' : 'Contact Person Name',
    phone: lang === 'HI' ? 'मोबाइल नंबर' : 'Phone Number',
    email: lang === 'HI' ? 'ईमेल' : 'Email',
    website: lang === 'HI' ? 'वेबसाइट (वैकल्पिक)' : 'Website (Optional)',
    partnershipType: lang === 'HI' ? 'साझेदारी का प्रकार' : 'Partnership Type',
    partnershipTypes: [
      { key: 'corporate', hi: 'कॉर्पोरेट साझेदारी', en: 'Corporate Partnership' },
      { key: 'ngo', hi: 'एनजीओ सहयोग', en: 'NGO Collaboration' },
      { key: 'sponsor', hi: 'इवेंट स्पॉन्सरशिप', en: 'Event Sponsorship' },
      { key: 'csr', hi: 'सीएसआर पहल', en: 'CSR Initiative' },
      { key: 'other', hi: 'अन्य', en: 'Other' }
    ],
    message: lang === 'HI' ? 'संदेश / विवरण' : 'Message / Details',
    submit: lang === 'HI' ? 'जमा करें' : 'Submit',
    whyPartner: lang === 'HI' ? 'हमारे साथ साझेदारी क्यों करें?' : 'Why Partner With Us?',
    benefits: [
      {
        icon: 'bi-trophy',
        title: lang === 'HI' ? 'सामाजिक प्रभाव' : 'Social Impact',
        desc: lang === 'HI' ? 'समुदाय में सकारात्मक बदलाव लाएं' : 'Create positive change in communities'
      },
      {
        icon: 'bi-people',
        title: lang === 'HI' ? 'ब्रांड दृश्यता' : 'Brand Visibility',
        desc: lang === 'HI' ? 'अपनी पहुंच और प्रतिष्ठा बढ़ाएं' : 'Enhance your reach and reputation'
      },
      {
        icon: 'bi-heart',
        title: lang === 'HI' ? 'सीएसआर लक्ष्य' : 'CSR Goals',
        desc: lang === 'HI' ? 'अपनी सीएसआर प्रतिबद्धताओं को पूरा करें' : 'Fulfill your CSR commitments'
      },
      {
        icon: 'bi-graph-up',
        title: lang === 'HI' ? 'विकास के अवसर' : 'Growth Opportunities',
        desc: lang === 'HI' ? 'नेटवर्किंग और सहयोग के अवसर' : 'Networking and collaboration opportunities'
      }
    ]
  }), [lang]);

  const cardStyle = { boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '12px', border: 'none' };

  return (
    <div className="container gi-container">
      <div className="gi-hero text-center mb-4">
        <div className="gi-hero-content">
          <i className="bi bi-handshake gi-hero-icon"></i>
          <h1 className="mb-2">{t.title}</h1>
          <p className="gi-hero-subtitle">{t.subtitle}</p>
          <p>{t.intro}</p>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="row mb-5">
        <div className="col">
          <h2 className="text-center mb-4">{t.whyPartner}</h2>
          <div className="row g-4">
            {t.benefits.map((benefit, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100 text-center" style={cardStyle}>
                  <div className="card-body">
                    <i className={`bi ${benefit.icon} fs-1 text-primary mb-3 d-block`}></i>
                    <h5 className="card-title">{benefit.title}</h5>
                    <p className="card-text text-muted">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Form */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card" style={cardStyle}>
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.formTitle}</h2>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your interest in partnering with us! We will contact you soon.'); }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">{t.orgName}</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.contactPerson}</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.phone}</label>
                    <input type="tel" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.email}</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.website}</label>
                    <input type="url" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.partnershipType}</label>
                    <select className="form-select" required>
                      {t.partnershipTypes.map(opt => (
                        <option key={opt.key} value={opt.key}>{lang === 'HI' ? opt.hi : opt.en}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">{t.message}</label>
                    <textarea className="form-control" rows="4" placeholder={lang === 'HI' ? 'कृपया अपनी साझेदारी के उद्देश्य और विचार साझा करें...' : 'Please share your partnership goals and ideas...'} required></textarea>
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary px-4">{t.submit}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
