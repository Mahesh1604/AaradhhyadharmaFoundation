import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../index';

const Login = () => {
  const { lang } = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const T = (en, hi) => (lang === 'HI' ? hi : en);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 position-relative" style={{ 
      backgroundImage: 'url(/images/foundation.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)'
      }}></div>
      <div className="w-100 position-relative" style={{ maxWidth: '840px', marginTop: '-12px', zIndex: 1 }}>
        <div className="d-flex flex-column flex-lg-row rounded-4 shadow-lg overflow-hidden" style={{ maxHeight: '580px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(10px)' }}>
          {/* Left decorative image (uses existing logo as placeholder) */}
          <div className="d-none d-lg-flex align-items-center justify-content-start p-0" style={{ width: '34%' }}>
            <img src="/images/logo.png" alt="Decorative" className="w-100 h-100 rounded-start-4" style={{ objectFit: 'contain', padding: '8px', backgroundColor: '#ffffff' }} />
          </div>

          {/* Right - Login Form */}
          <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4 p-lg-5" style={{ background: 'transparent' }}>
            <div className="w-100" style={{ maxWidth: '28rem' }}>
              <div className="mb-2">
                <h1 className="fw-bold mb-1" style={{ fontSize: '1.25rem', background: 'linear-gradient(90deg,#8C36EA,#6F65FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Aaradhyadharma Foundation</h1>
                <h2 className="fw-semibold" style={{ fontSize: '1.6rem', color: '#000' }}>{T('Sign In Form', 'साइन इन फॉर्म')}</h2>
              </div>

              <form onSubmit={handleSubmit} className="fw-semibold" style={{ fontSize: '13px', lineHeight: '1.25', fontFamily: 'Poppins, sans-serif' }}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label mb-1">{T('Email', 'ईमेल')} <span className="text-danger">*</span></label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={T('Enter your email address', 'अपना ईमेल पता दर्ज करें')} required className="form-control" />
                </div>

                <div className="mb-2">
                  <label htmlFor="password" className="form-label mb-1">{T('Password', 'पासवर्ड')} <span className="text-danger">*</span></label>
                  <div className="position-relative">
                    <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={T('Enter your password', 'अपना पासवर्ड दर्ज करें')} required className="form-control pe-5" />
                    <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)} className="position-absolute top-50 end-0 translate-middle-y btn btn-link text-secondary text-decoration-none px-3">
                      <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                    </button>
                  </div>
                  <div className="mt-1 text-start">
                    <Link to="/forgot-password" className="text-primary text-decoration-none">{T('Forgot Password?', 'पासवर्ड भूल गए?')}</Link>
                  </div>
                </div>

                <button type="submit" className="btn w-100 text-white fw-semibold shadow" style={{ background: 'linear-gradient(90deg,#6f42c1,#6f65ff)' }}>
                  {T('Sign In', 'साइन इन')}
                </button>

                <div className="position-relative my-3">
                  <div className="position-absolute top-50 start-0 end-0 translate-middle-y" aria-hidden>
                    <div style={{ borderTop: '1px solid #e5e7eb' }}></div>
                  </div>
                  <div className="position-relative d-flex justify-content-center">
                    <span className="px-3 bg-white text-muted fw-semibold" style={{ fontSize: '11px' }}>{T('OR CONTINUE WITH', 'या जारी रखें')}</span>
                  </div>
                </div>

                <button type="button" className="btn w-100 text-white fw-semibold shadow d-flex align-items-center justify-content-center gap-2" style={{ background: 'linear-gradient(90deg,#6f42c1,#6f65ff)' }}>
                  <i className="bi bi-google"></i>
                  <span>{T('Sign in with Google', 'गूगल से साइन इन करें')}</span>
                </button>

                <div className="text-center mt-3">
                  <p className="text-muted fw-semibold" style={{ fontSize: '12px' }}>
                    {T("don't have an account?", 'खाता नहीं है?')}{' '}
                    <Link to="/register" className="text-primary text-decoration-none fw-semibold">{T('Register', 'रजिस्टर करें')}</Link>
                  </p>
                </div>
              </form>

              <div className="mt-3 text-center">
                <p className="fw-semibold" style={{ fontSize: '12px' }}>
                  {T('Need Help ? Contact', 'मदद चाहिए? संपर्क करें')} <a href="mailto:support@ninjadam.com" className="text-primary text-decoration-none">support@ninjadam.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
