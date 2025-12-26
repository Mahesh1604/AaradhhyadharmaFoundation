import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../../index';
import '../../styles/get-involved.css';

const Volunteer = () => {
  const { lang } = useContext(LanguageContext);

  const t = useMemo(() => ({
    title: lang === 'HI' ? 'स्वयंसेवक बनें' : 'Become a Volunteer',
    subtitle: lang === 'HI' ? 'अपने समुदाय में बदलाव लाएँ' : 'Make a difference in your community',
    intro: lang === 'HI' ? 'हमारे मिशन में शामिल हों और ज़रूरतमंदों की सेवा करें। नीचे दिए गए फॉर्म को भरें और स्थानीय अवसर देखें।' : 'Join our mission and serve those in need. Fill out the form below and explore local opportunities.',
    formTitle: lang === 'HI' ? 'स्वयंसेवक पंजीकरण फॉर्म' : 'Volunteer Registration Form',
    name: lang === 'HI' ? 'पूरा नाम' : 'Full Name',
    phone: lang === 'HI' ? 'मोबाइल नंबर' : 'Phone Number',
    email: lang === 'HI' ? 'ईमेल' : 'Email',
    district: lang === 'HI' ? 'जिला' : 'District',
    tehsil: lang === 'HI' ? 'तहसील' : 'Tehsil',
    interest: lang === 'HI' ? 'रुचि क्षेत्र' : 'Area of Interest',
    interests: [
      { key: 'animal', hi: 'पशु सहायता', en: 'Animal Support' },
      { key: 'orphan', hi: 'अनाथालय सहायता', en: 'Orphanage Support' },
      { key: 'events', hi: 'इवेंट्स/कैंपेन', en: 'Events/Campaigns' },
      { key: 'fundraising', hi: 'फंडरेज़िंग', en: 'Fundraising' }
    ],
    submit: lang === 'HI' ? 'जमा करें' : 'Submit'
  }), [lang]);

  const cardStyle = { boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '12px', border: 'none' };

  return (
    <div className="container gi-container">
      <div className="gi-hero text-center mb-4">
        <div className="gi-hero-content">
          <i className="bi bi-person-raised-hand gi-hero-icon"></i>
          <h1 className="mb-2">{t.title}</h1>
          <p className="gi-hero-subtitle">{t.subtitle}</p>
          <p>{t.intro}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card" style={cardStyle}>
            <div className="card-body p-4">
              <h2 className="h4 mb-3">{t.formTitle}</h2>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for volunteering!'); }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">{t.name}</label>
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
                    <label className="form-label">{t.district}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.tehsil}</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.interest}</label>
                    <select className="form-select">
                      {t.interests.map(opt => (
                        <option key={opt.key} value={opt.key}>{lang === 'HI' ? opt.hi : opt.en}</option>
                      ))}
                    </select>
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

export default Volunteer;


