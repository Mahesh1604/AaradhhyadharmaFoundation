import React, { useContext } from 'react';
import { LanguageContext, t } from '../index';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <footer className="bg-gradient position-relative overflow-hidden border-top" style={{background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)'}}>
      <div className="container py-5 position-relative animate-fade-in">
        <div className="row gy-4 gy-lg-0">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-flex align-items-center gap-3 text-decoration-none text-dark mb-4">
              <img src="/images/logo.png" alt="Aaradhyadharma Foundation" width="60" height="60" className="rounded-circle shadow-sm" />
              <div>
                <h5 className="fw-semibold mb-0">Aaradhyadharma</h5>
                <small className="fw-semibold mb-0">Foundation</small>
              </div>
            </Link>
            <p className="fw-normal mb-3">Serving humanity, protecting animals, and spreading dharma with compassion across communities in India.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{color: '#1877f2'}}>
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm" style={{width: '40px', height: '40px', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <i className="bi bi-facebook fs-5"></i>
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{color: '#1da1f2'}}>
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm" style={{width: '40px', height: '40px', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <i className="bi bi-twitter fs-5"></i>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{color: '#e4405f'}}>
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm" style={{width: '40px', height: '40px', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <i className="bi bi-instagram fs-5"></i>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{color: '#0077b5'}}>
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm" style={{width: '40px', height: '40px', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <i className="bi bi-linkedin fs-5"></i>
                </div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{color: '#ff0000'}}>
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm" style={{width: '40px', height: '40px', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <i className="bi bi-youtube fs-5"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-semibold text-dark mb-3">
              {t(lang, 'footer.explore')}
              <div className="bg-primary rounded-pill mt-2" style={{width: '30px', height: '3px'}}></div>
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-dark text-opacity-75 text-decoration-none hover-primary">{t(lang, 'footer.links.home')}</Link></li>
              <li className="mb-2"><Link to="/adopt" className="text-dark text-opacity-75 text-decoration-none hover-primary">{t(lang, 'footer.links.adopt')}</Link></li>
              <li className="mb-2"><Link to="/donate" className="text-dark text-opacity-75 text-decoration-none hover-primary">{t(lang, 'footer.links.donate')}</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-dark text-opacity-75 text-decoration-none hover-primary">{t(lang, 'footer.links.contact')}</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-semibold text-dark mb-3">
              {t(lang, 'footer.programs')}
              <div className="bg-success rounded-pill mt-2" style={{width: '30px', height: '3px'}}></div>
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/programs/animal-welfare" className="text-dark text-opacity-75 text-decoration-none hover-primary small">{t(lang, 'sections.animalWelfare')}</Link></li>
              <li className="mb-2"><Link to="/programs/orphanage-support" className="text-dark text-opacity-75 text-decoration-none hover-primary small">{t(lang, 'sections.orphanageSupport')}</Link></li>
              <li className="mb-2"><Link to="/programs/needy-assistance" className="text-dark text-opacity-75 text-decoration-none hover-primary small">{t(lang, 'sections.needyAssistance')}</Link></li>
              <li className="mb-2"><Link to="/programs/animal-rescue" className="text-dark text-opacity-75 text-decoration-none hover-primary small">{t(lang, 'sections.animalRescue')}</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h6 className="fw-semibold text-dark mb-3">
              {t(lang, 'footer.newsletter')}
              <div className="bg-warning rounded-pill mt-2" style={{width: '30px', height: '3px'}}></div>
            </h6>
            <p className="text-dark text-opacity-75 mb-3 small">{t(lang, 'footer.newsletterBlurb')}</p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="email" className="form-control border-2 rounded-start-pill" placeholder={t(lang, 'footer.emailPlaceholder')} />
                <button className="btn btn-primary rounded-end-pill px-3" type="submit">
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-top bg-white bg-opacity-50 py-3">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <div className="text-muted small">
              © {new Date().getFullYear()} Aaradhyadharma Foundation. All rights reserved.
            </div>
            <div className="d-flex gap-3">
              <Link to="#" className="text-muted text-decoration-none small hover-primary">{t(lang, 'footer.privacy')}</Link>
              <span className="text-muted">•</span>
              <Link to="#" className="text-muted text-decoration-none small hover-primary">{t(lang, 'footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
