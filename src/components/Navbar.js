import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, LanguageContext } from '../index';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  // Theme context available but not used currently
  useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);
  const T = (en, hi) => (lang === 'HI' ? hi : en);

  const handleDropdownClick = (e) => { e.preventDefault(); };
  const closeDropdown = () => {
    const dropdowns = document.querySelectorAll('.dropdown-menu.show');
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
      const toggle = dropdown.previousElementSibling;
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px);} to { opacity: 1; transform: translateY(0);} }
      .dropdown-menu { transition: opacity 0.15s linear, transform 0.15s linear; }
      .dropdown-menu.show { opacity: 1; transform: translateY(0); }
      .btn-link { text-decoration: none !important; }
      .btn-link:hover { background-color: rgba(13, 110, 253, 0.1) !important; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-blur shadow-sm border-bottom my-3 mx-2 mx-lg-4 rounded-4 py-2 animate-fade-in">
      <div className="container-fluid px-3">
        <Link to="/" className="navbar-brand fw-bold text-dark text-decoration-none d-flex align-items-center gap-3">
          <img src="/images/logo.png" alt="Aaradhyadharma Foundation" width="45" height="45" className="rounded-circle" />
          <span className="fs-5">Aaradhyadharma Foundation</span>
        </Link>

        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark px-3 py-2 rounded-2 d-flex align-items-center gap-2" to="/" onClick={closeDropdown}>
                <i className="bi bi-house-door fs-6"></i>
                <span>{T('Home','होम')}</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link fw-semibold text-dark px-3 py-2 rounded-2 d-flex align-items-center gap-2 border-0 text-decoration-none" id="aboutDropdown" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleDropdownClick}>
                <i className="bi bi-info-circle fs-6"></i>
                <span>{T('About Us','हमारे बारे में')}</span>
              </button>
              <ul className="dropdown-menu border-0 shadow-lg rounded-3 mt-2" aria-labelledby="aboutDropdown">
                <li><Link className="dropdown-item py-2 px-3 rounded-2 d-flex align-items-center gap-2" to="/mission" onClick={closeDropdown}><i className="bi bi-bullseye text-primary"></i><span>{T('Our Mission & Vision','हमारा मिशन और विजन')}</span></Link></li>
                <li><Link className="dropdown-item py-2 px-3 rounded-2 d-flex align-items-center gap-2" to="/team" onClick={closeDropdown}><i className="bi bi-people text-success"></i><span>{T('Team & Founders','टीम और संस्थापक')}</span></Link></li>
                <li><Link className="dropdown-item py-2 px-3 rounded-2 d-flex align-items-center gap-2" to="/locations" onClick={closeDropdown}><i className="bi bi-geo-alt text-warning"></i><span>{T('Locations','स्थान')}</span></Link></li>
                <li><Link className="dropdown-item py-2 px-3 rounded-2 d-flex align-items-center gap-2" to="/faq" onClick={closeDropdown}><i className="bi bi-question-circle text-info"></i><span>FAQ</span></Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link fw-semibold text-dark px-3 py-2 rounded-2 d-flex align-items-center gap-2 border-0 text-decoration-none" id="programsDropdown" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleDropdownClick}>
                <i className="bi bi-collection fs-6"></i>
                <span>{T('Programs','कार्यक्रम')}</span>
              </button>
              <ul className="dropdown-menu border-0 shadow-lg rounded-3 mt-2" aria-labelledby="programsDropdown">
                <li>
                  <Link className="dropdown-item py-3 px-3 rounded-2" to="/programs/animal-welfare" onClick={closeDropdown}>
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-heart-pulse text-danger fs-5 mt-1"></i>
                      <div>
                        <div className="fw-semibold">Animal Welfare</div>
                        <small className="text-muted">Medical care, shelter & rehabilitation for animals</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-3 px-3 rounded-2" to="/programs/orphanage-support" onClick={closeDropdown}>
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-house-heart text-success fs-5 mt-1"></i>
                      <div>
                        <div className="fw-semibold">Orphanage Support</div>
                        <small className="text-muted">Essential resources & care for orphanages</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-3 px-3 rounded-2" to="/programs/needy-assistance" onClick={closeDropdown}>
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-people-fill text-warning fs-5 mt-1"></i>
                      <div>
                        <div className="fw-semibold">Needy People Assistance</div>
                        <small className="text-muted">Food, medical aid & essential support services</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-3 px-3 rounded-2" to="/programs/animal-rescue" onClick={closeDropdown}>
                    <div className="d-flex align-items-start gap-2">
                      <i className="bi bi-shield-fill-exclamation text-danger fs-5 mt-1"></i>
                      <div>
                        <div className="fw-semibold">Animal Rescue</div>
                        <small className="text-muted">Emergency response & 24/7 rescue operations</small>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link fw-semibold text-dark px-3 py-2 rounded-2 d-flex align-items-center gap-2 border-0 text-decoration-none" id="getInvolvedDropdown" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleDropdownClick}>
                <i className="bi bi-people-heart fs-6"></i>
                <span>{T('Get Involved','जुड़ें')}</span>
              </button>
              <ul className="dropdown-menu border-0 shadow-lg rounded-3 mt-2" aria-labelledby="getInvolvedDropdown">
                <li><Link className="dropdown-item py-2 px-3" to="/volunteer" onClick={closeDropdown}><i className="bi bi-person-raised-hand me-2 text-primary"></i>{T('Volunteer','स्वयंसेवक')}</Link></li>
<li><Link className="dropdown-item py-2 px-3" to="/partner" onClick={closeDropdown}><i className="bi bi-hand-thumbs-up me-2 text-success"></i>{T('Partner With Us','साझेदार बनें')}</Link></li>
                <li><Link className="dropdown-item py-2 px-3" to="/contact" onClick={closeDropdown}><i className="bi bi-envelope me-2 text-info"></i>{T('Contact','संपर्क')}</Link></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
<Link to="/donate" className="btn btn-outline-secondary btn-sm rounded-pill px-3" onClick={closeDropdown}>
                {T('Donate','दान करें')}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 dropdown-toggle d-flex align-items-center gap-2" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle"></i>
                <span className="d-none d-md-inline">{T('Account','खाता')}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-3 mt-2" aria-labelledby="userDropdown">
                <li><Link className="dropdown-item py-2 px-3" to="/login" onClick={closeDropdown}><i className="bi bi-box-arrow-in-right me-2 text-primary"></i>{T('Login','लॉगिन')}</Link></li>
                <li><Link className="dropdown-item py-2 px-3" to="/register" onClick={closeDropdown}><i className="bi bi-person-plus me-2 text-success"></i>{T('Sign Up','साइन अप')}</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item py-2 px-3" to="/profile" onClick={closeDropdown}><i className="bi bi-person me-2 text-info"></i>{T('My Profile','मेरी प्रोफाइल')}</Link></li>
                <li><Link className="dropdown-item py-2 px-3" to="/settings" onClick={closeDropdown}><i className="bi bi-gear me-2 text-secondary"></i>{T('Settings','सेटिंग्स')}</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 dropdown-toggle d-flex align-items-center gap-2" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-globe"></i>
                <span>{lang}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-3 mt-2" aria-labelledby="langDropdown">
                <li><button className="dropdown-item py-2 px-3" onClick={() => setLang('EN')}>EN • English</button></li>
                <li><button className="dropdown-item py-2 px-3" onClick={() => setLang('HI')}>HI • हिंदी</button></li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-secondary btn-sm rounded-circle p-2" onClick={() => setShowSearch(!showSearch)} aria-label="Search" title="Search">
                <i className="bi bi-search"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {showSearch && (
        <div className="position-absolute top-100 end-0 p-3 bg-white shadow-lg rounded-3 border-0 me-2 me-lg-4 mt-2" style={{zIndex: 1050, minWidth: '300px', animation: 'fadeIn 0.2s'}}>
          <form className="d-flex gap-2">
            <input className="form-control border-2 rounded-pill" type="search" placeholder={T('Search programs, articles...','प्रोग्राम, लेख खोजें...')} aria-label="Search" autoFocus />
            <button className="btn btn-primary rounded-pill px-3" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
