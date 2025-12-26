import React, { useContext, useMemo, useState } from 'react';
import { LanguageContext } from '../index';
import '../styles/get-involved.css';

const localAdmins = [
  { district: 'Delhi', tehsil: 'Central', name: 'Amit Sharma', phone: '9876543210', email: 'amit@foundation.org' },
  { district: 'Mumbai', tehsil: 'Andheri', name: 'Priya Singh', phone: '9123456780', email: 'priya@foundation.org' },
  // Add more as needed
];

const Contact = () => {
  const { lang } = useContext(LanguageContext);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [search, setSearch] = useState('');
  const [filteredAdmins, setFilteredAdmins] = useState(localAdmins);
  const [submitted, setSubmitted] = useState(false);

  const T = useMemo(() => ({
    title: lang === 'HI' ? 'हमसे संपर्क करें' : 'Contact Us',
    subtitle: lang === 'HI' ? 'हम आपसे सुनना पसंद करेंगे।' : "We'd love to hear from you.",
    formTitle: lang === 'HI' ? 'संपर्क फ़ॉर्म' : 'Contact Form',
    name: lang === 'HI' ? 'नाम' : 'Name',
    email: lang === 'HI' ? 'ईमेल' : 'Email',
    phone: lang === 'HI' ? 'फ़ोन' : 'Phone',
    message: lang === 'HI' ? 'संदेश' : 'Message',
    send: lang === 'HI' ? 'संदेश भेजें' : 'Send Message',
    thanks: lang === 'HI' ? 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।' : 'Thank you for contacting us! We will get back to you soon.',
    directory: lang === 'HI' ? 'स्थानीय प्रशासक निर्देशिका' : 'Local Admin Directory',
    searchPlaceholder: lang === 'HI' ? 'जिले या तहसील से खोजें' : 'Search by district or tehsil',
    noAdmins: lang === 'HI' ? 'कोई प्रशासक नहीं मिला।' : 'No admins found.',
    intlSupport: lang === 'HI' ? 'अंतर्राष्ट्रीय सहायता' : 'International Support',
    globalHelpline: lang === 'HI' ? 'वैश्विक हेल्पलाइन' : 'Global Helpline',
    liveChat: lang === 'HI' ? 'लाइव चैट' : 'Live Chat',
    startChat: lang === 'HI' ? 'चैट शुरू करें' : 'Start Chat'
  }), [lang]);

  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  const handleSearch = e => {
    const value = e.target.value;
    setSearch(value);
    setFilteredAdmins(
      localAdmins.filter(admin =>
        admin.district.toLowerCase().includes(value.toLowerCase()) ||
        admin.tehsil.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Inline styles for enhanced visual appeal
  const containerStyle = {
    marginTop: '5.5rem',
    marginBottom: '2rem'
  };

  const titleStyle = {
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: '2.5rem',
    fontWeight: '600'
  };

  const cardStyle = {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#ffffff',
    height: '100%'
  };

  const cardBodyStyle = {
    padding: '2rem'
  };

  const cardTitleStyle = {
    color: '#2c3e50',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const formLabelStyle = {
    fontWeight: '500',
    color: '#495057',
    marginBottom: '0.5rem'
  };

  const formControlStyle = {
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  };

  const submitButtonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const listGroupItemStyle = {
    border: '1px solid #e9ecef',
    padding: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    marginBottom: '0.5rem'
  };

  const alertStyle = {
    borderRadius: '8px',
    border: 'none',
    padding: '1rem'
  };

  const contactInfoStyle = {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px'
  };

  const contactInfoItemStyle = {
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const searchInputStyle = {
    ...formControlStyle,
    paddingLeft: '2.5rem'
  };

  const searchIconStyle = {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6c757d',
    zIndex: 10
  };

  return (
    <div className="container gi-container my-5">
      <div className="gi-hero text-center mb-4">
        <div className="gi-hero-content">
          <i className="bi bi-envelope-heart gi-hero-icon"></i>
          <h1 className="mb-2">{T.title}</h1>
          <p className="gi-hero-subtitle">{T.subtitle}</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h2 style={cardTitleStyle}>
                <i className="bi bi-chat-dots text-primary"></i>
                {T.formTitle}
              </h2>
              {submitted ? (
                <div className="alert alert-success" style={alertStyle}>
                  <i className="bi bi-check-circle-fill me-2"></i>
                  {T.thanks}
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label" style={formLabelStyle}>
                      <i className="bi bi-person me-2"></i>{T.name}
                    </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name" 
                      value={form.name} 
                      onChange={handleFormChange} 
                      required 
                      style={formControlStyle}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={formLabelStyle}>
                      <i className="bi bi-envelope me-2"></i>{T.email}
                    </label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email" 
                      value={form.email} 
                      onChange={handleFormChange} 
                      required 
                      style={formControlStyle}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={formLabelStyle}>
                      <i className="bi bi-telephone me-2"></i>{T.phone}
                    </label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleFormChange} 
                      required 
                      style={formControlStyle}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={formLabelStyle}>
                      <i className="bi bi-chat-text me-2"></i>{T.message}
                    </label>
                    <textarea 
                      className="form-control" 
                      name="message" 
                      value={form.message} 
                      onChange={handleFormChange} 
                      rows="3" 
                      required
                      style={formControlStyle}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={submitButtonStyle}>
                    <i className="bi bi-send"></i>
                    {T.send}
                  </button>
                </form>
              )}
              <div style={contactInfoStyle}>
                <p style={contactInfoItemStyle}>
                  <i className="bi bi-envelope text-primary"></i>
                  <strong>Email:</strong> info@foundation.org
                </p>
                <p style={contactInfoItemStyle}>
                  <i className="bi bi-telephone text-primary"></i>
                  <strong>Phone:</strong> +91-12345-67890
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h2 style={cardTitleStyle}>
                <i className="bi bi-people text-success"></i>
                {T.directory}
              </h2>
              <div className="mb-3 position-relative">
                <i className="bi bi-search" style={searchIconStyle}></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder={T.searchPlaceholder}
                  value={search}
                  onChange={handleSearch}
                  style={searchInputStyle}
                />
              </div>
              <ul className="list-group" style={{listStyle: 'none', padding: '0'}}>
                {filteredAdmins.length === 0 ? (
                  <li className="list-group-item" style={listGroupItemStyle}>
                    <i className="bi bi-exclamation-circle text-warning me-2"></i>
                    {T.noAdmins}
                  </li>
                ) : (
                  filteredAdmins.map((admin, idx) => (
                    <li className="list-group-item" key={idx} style={listGroupItemStyle}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                        <i className="bi bi-person-badge text-primary"></i>
                        <strong style={{color: '#2c3e50'}}>{admin.name}</strong>
                      </div>
                      <div style={{color: '#6c757d', fontSize: '0.9rem', paddingLeft: '1.5rem'}}>
                        <div style={{marginBottom: '0.25rem'}}>
                          <i className="bi bi-geo-alt me-1"></i>
                          {admin.district}, {admin.tehsil}
                        </div>
                        <div style={{marginBottom: '0.25rem'}}>
                          <i className="bi bi-envelope me-1"></i>
                          {admin.email}
                        </div>
                        <div>
                          <i className="bi bi-telephone me-1"></i>
                          {admin.phone}
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <h2 style={cardTitleStyle}>
                <i className="bi bi-globe text-info"></i>
                {T.intlSupport}
              </h2>
              <p style={{color: '#6c757d', marginBottom: '1rem'}}>
                {lang === 'HI' ? 'यदि आप भारत के बाहर से संपर्क कर रहे हैं, तो कृपया नीचे हमारी वैश्विक हेल्पलाइन या चैट सपोर्ट का उपयोग करें:' : 'If you are contacting us from outside India, please use our global helpline or chat support below:'}
              </p>
              <ul style={{listStyle: 'none', padding: '0'}}>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <i className="bi bi-telephone-fill text-success"></i>
                  <strong>{T.globalHelpline}:</strong> +1-800-FOUNDATION
                </li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <i className="bi bi-envelope-fill text-primary"></i>
                  <strong>Email:</strong> global@foundation.org
                </li>
                <li style={{marginBottom: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <i className="bi bi-chat-dots-fill text-info"></i>
                  <strong>{T.liveChat}:</strong> 
                  <button onClick={() => alert('Chat feature coming soon!')} className="btn btn-outline-primary btn-sm" style={{marginLeft: '0.5rem', borderRadius: '6px'}}>
                    <i className="bi bi-chat-dots me-1"></i>
                    {T.startChat}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
