import React, { useContext } from 'react';
import { LanguageContext, t } from '../index';
import { Link } from 'react-router-dom';

const HomeSections = () => {
  const { lang } = useContext(LanguageContext);

  // Remove slow scroll animations

  const sections = [
    {
      id: 1,
      title: t(lang, 'sections.animalWelfare'),
      description: lang === 'HI'
        ? 'जरूरतमंद पशुओं की रक्षा और देखभाल के लिए समर्पित।'
        : 'Dedicated to protecting and caring for animals in need.',
      icon: 'bi-heart-pulse',
      color: '#dc3545',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=450&fit=crop',
      features: [t(lang, 'sections.features.medicalCare'), t(lang, 'sections.features.shelterSupport'), t(lang, 'sections.features.rehabilitation')]
    },
    {
      id: 2,
      title: t(lang, 'sections.orphanageSupport'),
      description: lang === 'HI'
        ? 'अनाथालयों और बाल गृहों को आवश्यक संसाधन, शिक्षा और देखभाल।'
        : "Supporting orphanages and children's homes with essential resources.",
      icon: 'bi-house-heart',
      color: '#28a745',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=450&fit=crop',
      features: [t(lang, 'sections.features.educationSupport'), t(lang, 'sections.features.basicNecessities'), t(lang, 'sections.features.healthcare')]
    },
    {
      id: 3,
      title: t(lang, 'sections.needyAssistance'),
      description: lang === 'HI'
        ? 'जरूरतमंदों को भोजन, चिकित्सा सहायता और आवश्यक सेवाएं।'
        : 'Providing assistance via food distribution, medical aid and support services.',
      icon: 'bi-hand-holding-heart',
      color: '#ffc107',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=450&fit=crop',
      features: [t(lang, 'sections.features.foodDistribution'), t(lang, 'sections.features.medicalAid'), t(lang, 'sections.features.essentialSupport')]
    },
    {
      id: 4,
      title: t(lang, 'sections.animalRescue'),
      description: lang === 'HI'
        ? 'आपातकालीन प्रतिक्रिया और 24/7 पशु बचाव।'
        : 'Emergency response and 24/7 animal rescue operations.',
      icon: 'bi-shield-fill-exclamation',
      color: '#6f42c1',
      image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=450&fit=crop',
      features: [t(lang, 'sections.features.emergencyResponse'), t(lang, 'sections.features.support247'), t(lang, 'sections.features.rehabilitation')]
    }
  ];

  return (
    <div className="py-5 section-programs">
      <div className="container">
        <div className="row gy-5">
          {sections.map((section, index) => (
            <div key={section.id} className="row align-items-stretch g-2 mb-4">
              <div className={`col-lg-5 d-flex ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                <div className="card border-0 shadow-lg rounded-4 h-100 w-100 hover-lift program-card" style={{background: `${section.color}10`, overflow: 'hidden', transform: 'translateZ(0)'}}>
                  <div className="card-body p-0 d-flex flex-column h-100">
                    <div className="program-media w-100" style={{position: 'relative', overflow: 'hidden'}}>
                      <img 
                        src={section.image || `/images/programs/${section.id}.jpg`} 
                        alt={section.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Program'; }}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: `linear-gradient(180deg, transparent 0%, ${section.color}40 100%)`, opacity: 0, transition: 'opacity 0.4s ease'}} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0}></div>
                    </div>
                    <div className="p-4 d-flex flex-column align-items-center text-center">
                      <div className="rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-2 animate-pulse" style={{backgroundColor: `${section.color}20`, color: section.color, transition: 'all 0.3s ease'}}>
                        <i className={`bi ${section.icon} fs-3`} style={{transition: 'transform 0.3s ease'}}></i>
                      </div>
                      <h3 className="h6 fw-semibold text-dark mb-0" style={{transition: 'color 0.3s ease'}}>{section.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-lg-7 d-flex ${index % 2 === 1 ? 'order-lg-1' : ''} align-items-center`}>
                <div className="px-lg-2 d-flex flex-column justify-content-center h-100 w-100 text-center">
                  <h3 className="h4 fw-semibold text-dark mb-2 animate-fade-in" style={{animationDelay: `${index * 0.2 + 0.3}s`}}>{section.title}</h3>
                  <p className="text-muted mb-3 animate-fade-in" style={{animationDelay: `${index * 0.2 + 0.4}s`}}>{section.description}</p>
                  <ul className="list-unstyled mb-4 d-inline-block mx-auto text-start" style={{ maxWidth: '420px', paddingLeft: '8px' }}>
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="d-flex align-items-center gap-2 mb-2 animate-fade-in" style={{animationDelay: `${index * 0.2 + 0.5 + featureIndex * 0.1}s`, transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                        <i className="bi bi-check-circle-fill animate-rotate" style={{color: section.color, fontSize: '0.9rem', transition: 'transform 0.3s ease'}}></i>
                        <span className="fw-medium" style={{color: section.color}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Link to="#" className="btn btn-outline-primary btn-sm rounded-pill py-2 fw-semibold hover-lift text-decoration-none">
                      Learn More <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 pt-5">
          <div className="card border-0 rounded-4 shadow-lg" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '250px'}}>
            <div className="card-body py-5 px-4">
              <h3 className="display-6 fw-semibold mb-3" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                {lang === 'HI' ? 'बदलाव लाने के लिए तैयार हैं?' : 'Ready to Make a Difference?'}
              </h3>
              <p className="lead fw-normal mb-4" style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
                {lang === 'HI' ? 'हजारों समर्थकों के साथ जुड़ें जो करुणामय कार्यों से जीवन बदल रहे हैं' : 'Join thousands of supporters who are transforming lives through compassionate action'}
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                <Link to="/volunteer" className="btn btn-lg px-5 py-3 rounded-pill fw-semibold text-decoration-none d-inline-flex align-items-center gap-2" style={{backgroundColor: '#ffffff', color: '#667eea', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', fontWeight: '700'}}>
                  <i className="bi bi-person-hearts"></i>
                  <span>{lang === 'HI' ? 'स्वयंसेवक बनें' : 'Become a Volunteer'}</span>
                </Link>
                <Link to="/donate" className="btn btn-lg px-5 py-3 rounded-pill fw-semibold text-decoration-none d-inline-flex align-items-center gap-2" style={{backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', border: '3px solid #ffffff', backdropFilter: 'blur(10px)', fontWeight: '700'}}>
                  <i className="bi bi-heart-fill"></i>
                  <span>{lang === 'HI' ? 'हमारे उद्देश्य का समर्थन करें' : 'Support Our Cause'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeSections;
