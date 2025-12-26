import React, { useContext, useMemo, useState } from 'react';
import { LanguageContext } from '../index';

const causesEN = [
  { label: 'Animal Feed', value: 'animal-feed' },
  { label: 'Orphanage Funds', value: 'orphanage-funds' },
  { label: 'Medical Help', value: 'medical-help' },
  { label: 'General Support', value: 'general' },
];
const causesHI = [
  { label: 'पशु आहार', value: 'animal-feed' },
  { label: 'अनाथालय निधि', value: 'orphanage-funds' },
  { label: 'चिकित्सा सहायता', value: 'medical-help' },
  { label: 'सामान्य सहयोग', value: 'general' },
];

const currencies = ['INR', 'USD', 'EUR', 'GBP'];

const Donate = () => {
  const { lang } = useContext(LanguageContext);
  const [donationType, setDonationType] = useState('one-time');
  const [cause, setCause] = useState('animal-feed');
  const [currency, setCurrency] = useState('INR');
  const [amount, setAmount] = useState('');

  // Inline styles for enhanced visual appeal
  const containerStyle = {
    marginTop: '2rem',
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
    padding: '2rem'
  };

  const cardTitleStyle = {
    color: '#2c3e50',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const formLabelStyle = {
    fontWeight: '500',
    color: '#495057',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const formControlStyle = {
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  };

  const radioGroupStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem'
  };

  const radioItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const donateButtonStyle = {
    width: '100%',
    padding: '1rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#dc3545',
    color: '#ffffff',
    transition: 'background-color 0.3s ease',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const disabledButtonStyle = {
    ...donateButtonStyle,
    backgroundColor: '#6c757d',
    cursor: 'not-allowed'
  };

  const alertStyle = {
    borderRadius: '8px',
    border: 'none',
    padding: '1rem',
    backgroundColor: '#d1ecf1',
    color: '#0c5460',
    borderLeft: '4px solid #17a2b8'
  };

  const transparencyCardStyle = {
    ...cardStyle,
    marginTop: '2rem'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    marginBottom: '1.5rem'
  };

  const listItemStyle = {
    padding: '0.5rem 0',
    borderBottom: '1px solid #e9ecef',
    color: '#6c757d',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const viewReportsButtonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: '2px solid #007bff',
    backgroundColor: 'transparent',
    color: '#007bff',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const t = useMemo(() => ({
    pageTitle: lang === 'HI' ? 'आराध्यधर्म फाउंडेशन को दान करें' : 'Donate to Aaradhyadharma Foundation',
    chooseDonation: lang === 'HI' ? 'अपना दान चुनें' : 'Choose Your Donation',
    donationType: lang === 'HI' ? 'दान का प्रकार' : 'Donation Type',
    oneTime: lang === 'HI' ? 'एक बार' : 'One-time',
    monthly: lang === 'HI' ? 'मासिक' : 'Monthly',
    specificCause: lang === 'HI' ? 'विशेष कारण' : 'Specific Cause',
    currency: lang === 'HI' ? 'मुद्रा' : 'Currency',
    amount: lang === 'HI' ? 'राशि' : 'Amount',
    amountPlaceholder: lang === 'HI' ? 'राशि दर्ज करें' : 'Enter amount',
    donateNowSoon: lang === 'HI' ? 'अभी दान करें (जल्द ही PayPal/Razorpay)' : 'Donate Now (PayPal/Razorpay integration coming soon)',
    intlDonors: lang === 'HI' ? 'अंतर्राष्ट्रीय दाता:' : 'International Donors:',
    intlMsg: lang === 'HI'
      ? 'हम कई मुद्राओं का समर्थन करते हैं। सुरक्षित लेनदेन के लिए PayPal और Razorpay जल्द उपलब्ध होंगे।'
      : 'We support multiple currencies. Payment gateways like PayPal and Razorpay will be available soon for secure transactions.',
    transparency: lang === 'HI' ? 'दान पारदर्शिता' : 'Donation Transparency',
    transparencyMsg: lang === 'HI'
      ? 'हम पारदर्शिता के प्रति प्रतिबद्ध हैं। सभी दान का रिकॉर्ड रखा जाता है और नियमित रूप से रिपोर्ट किया जाता है। आप हमारे नवीनतम वित्तीय रिपोर्ट देख सकते हैं और समझ सकते हैं कि आपका योगदान कैसे फर्क ला रहा है।'
      : 'We are committed to transparency. All donations are tracked and regularly reported. You can view our latest financial reports and see how your contribution is making a difference.',
    monthlyReports: lang === 'HI' ? 'मासिक दान रिपोर्ट' : 'Monthly donation reports',
    breakdownByCause: lang === 'HI' ? 'कारण के अनुसार विभाजन' : 'Breakdown by cause',
    impactStories: lang === 'HI' ? 'प्रभाव कहानियाँ और अपडेट' : 'Impact stories and updates',
    viewReports: lang === 'HI' ? 'रिपोर्ट देखें' : 'View Reports',
  }), [lang]);

  const causes = lang === 'HI' ? causesHI : causesEN;

  return (
    <div className="container my-5" style={containerStyle}>
      <h1 style={titleStyle}>
        <i className="bi bi-heart-fill text-danger me-3"></i>
        {t.pageTitle}
      </h1>
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card" style={cardStyle}>
            <h2 style={cardTitleStyle}>
              <i className="bi bi-cash-coin text-success"></i>
              {t.chooseDonation}
            </h2>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-credit-card"></i>
                {t.donationType}
              </label>
              <div style={radioGroupStyle}>
                <div style={radioItemStyle}>
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="donationType" 
                    id="oneTime" 
                    value="one-time" 
                    checked={donationType === 'one-time'} 
                    onChange={() => setDonationType('one-time')} 
                  />
                  <label className="form-check-label" htmlFor="oneTime">{t.oneTime}</label>
                </div>
                <div style={radioItemStyle}>
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="donationType" 
                    id="monthly" 
                    value="monthly" 
                    checked={donationType === 'monthly'} 
                    onChange={() => setDonationType('monthly')} 
                  />
                  <label className="form-check-label" htmlFor="monthly">{t.monthly}</label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-heart-pulse"></i>
                {t.specificCause}
              </label>
              <select 
                className="form-select" 
                value={cause} 
                onChange={e => setCause(e.target.value)}
                style={formControlStyle}
              >
                {causes.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-currency-exchange"></i>
                {t.currency}
              </label>
              <select 
                className="form-select" 
                value={currency} 
                onChange={e => setCurrency(e.target.value)}
                style={formControlStyle}
              >
                {currencies.map(cur => (
                  <option key={cur} value={cur}>{cur}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-cash-stack"></i>
                {t.amount}
              </label>
              <input 
                type="number" 
                className="form-control" 
                value={amount} 
                onChange={e => setAmount(e.target.value)} 
                placeholder={t.amountPlaceholder} 
                min="1" 
                style={formControlStyle}
              />
            </div>
            <div className="mb-4">
              <button 
                className="btn btn-danger btn-lg w-100" 
                disabled 
                style={disabledButtonStyle}
              >
                <i className="bi bi-lock"></i>
                {t.donateNowSoon}
              </button>
            </div>
            <div className="alert alert-info" style={alertStyle}>
              <i className="bi bi-info-circle-fill me-2"></i>
              <strong>{t.intlDonors}</strong> {t.intlMsg}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card" style={transparencyCardStyle}>
            <h2 style={cardTitleStyle}>
              <i className="bi bi-graph-up text-info"></i>
              {t.transparency}
            </h2>
            <p style={{color: '#6c757d', marginBottom: '1.5rem'}}>
              {t.transparencyMsg}
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <i className="bi bi-calendar-check text-success"></i>
                {t.monthlyReports}
              </li>
              <li style={listItemStyle}>
                <i className="bi bi-pie-chart text-primary"></i>
                {t.breakdownByCause}
              </li>
              <li style={listItemStyle}>
                <i className="bi bi-journal-text text-info"></i>
                {t.impactStories}
              </li>
            </ul>
            <button onClick={() => alert('Reports coming soon!')} className="btn btn-outline-primary" style={viewReportsButtonStyle}>
              <i className="bi bi-file-earmark-text"></i>
              {t.viewReports}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
