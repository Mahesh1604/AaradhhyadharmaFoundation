import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../index';

const Input = ({ label, type = 'text', placeholder, required = false, name, id, value, onChange, autoComplete }) => {
  const inputId = id || name;
  return (
    <div>
      <label htmlFor={inputId} className="form-label mb-1">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="form-control"
      />
    </div>
  );
};

const Register = () => {
  const { lang } = useContext(LanguageContext);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '' });
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  
  const T = (en, hi) => (lang === 'HI' ? hi : en);
  const submit = (e) => {
    e.preventDefault();
    alert(`Registered: ${form.firstName} ${form.lastName} / ${form.email} / ${form.company}`);
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
          {/* Left - Registration Form */}
          <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4 p-lg-5" style={{ background: 'transparent' }}>
            <div className="w-100" style={{ maxWidth: '28rem' }}>
              <div className="mb-2">
                <h1 className="fw-bold mb-1" style={{ fontSize: '1.25rem', background: 'linear-gradient(90deg,#8C36EA,#6F65FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Aaradhyadharma Foundation</h1>
                <h2 className="fw-semibold" style={{ fontSize: '1.6rem', color: '#000' }}>{T('Registration Form', 'पंजीकरण फॉर्म')}</h2>
              </div>

              <form onSubmit={submit} className="fw-semibold" style={{ fontSize: '13px', lineHeight: '1.25', fontFamily: 'Poppins, sans-serif' }}>
                <div className="mb-3"><Input label={T('First Name', 'पहला नाम')} name="firstName" required placeholder={T('Enter your first name', 'अपना पहला नाम दर्ज करें')} value={form.firstName} onChange={update} autoComplete="given-name" /></div>
                <div className="mb-3"><Input label={T('Last Name', 'अंतिम नाम')} name="lastName" required placeholder={T('Enter your last name', 'अपना अंतिम नाम दर्ज करें')} value={form.lastName} onChange={update} autoComplete="family-name" /></div>
                <div className="mb-3"><Input label={T('Email', 'ईमेल')} type="email" name="email" required placeholder={T('Enter your email address', 'अपना ईमेल पता दर्ज करें')} value={form.email} onChange={update} autoComplete="email" /></div>
                <div className="mb-4"><Input label={T('Company Name', 'कंपनी का नाम')} name="company" required placeholder={T('Enter your company name', 'अपनी कंपनी का नाम दर्ज करें')} value={form.company} onChange={update} autoComplete="organization" /></div>

                <button type="submit" className="btn w-100 text-white fw-semibold shadow" style={{ background: 'linear-gradient(90deg,#6f42c1,#6f65ff)' }}>
                  {T('Register', 'रजिस्टर करें')}
                </button>

                <div className="text-center mt-3">
                  <p className="text-muted fw-semibold" style={{ fontSize: '12px' }}>
                    {T('Already have an account?', 'पहले से ही खाता है?')}{' '}
                    <Link to="/login" className="text-primary text-decoration-none fw-semibold">{T('Sign In', 'साइन इन')}</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right decorative image (uses existing logo as placeholder) */}
          <div className="d-none d-lg-flex align-items-center justify-content-end p-0" style={{ width: '34%' }}>
            <img src="/images/logo.png" alt="Registration" className="w-100 h-100 rounded-end-4" style={{ objectFit: 'contain', padding: '8px', backgroundColor: '#ffffff' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
