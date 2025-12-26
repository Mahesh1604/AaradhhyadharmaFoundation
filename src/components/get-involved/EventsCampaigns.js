import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../../index';

const EventsCampaigns = () => {
  const { lang } = useContext(LanguageContext);

  const t = useMemo(() => ({
    title: lang === 'HI' ? 'इवेंट्स और कैंपेन' : 'Events & Campaigns',
    subtitle: lang === 'HI' ? 'आगामी गतिविधियाँ और पहल' : 'Upcoming activities and initiatives',
    upcoming: lang === 'HI' ? 'आगामी कार्यक्रम' : 'Upcoming Events',
    past: lang === 'HI' ? 'पिछले कार्यक्रम' : 'Past Events',
    cta: lang === 'HI' ? 'स्वयंसेवक के रूप में शामिल हों' : 'Join as Volunteer'
  }), [lang]);

  const containerStyle = { marginTop: '5.5rem', marginBottom: '2rem' };
  const cardStyle = { boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '12px', border: 'none' };

  const sampleEvents = [
    { id: 1, title: 'Animal Rescue Drive', date: '2025-09-10', location: 'Bhopal' },
    { id: 2, title: 'Orphanage Visit', date: '2025-10-05', location: 'Indore' },
  ];

  return (
    <div className="container" style={containerStyle}>
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">{t.title}</h1>
          <p className="text-center text-muted">{t.subtitle}</p>
        </div>
      </div>
      <div className="row g-3">
        {sampleEvents.map(ev => (
          <div key={ev.id} className="col-md-6">
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title mb-1">{ev.title}</h5>
                <p className="text-muted mb-2"><i className="bi bi-calendar-event me-2"></i>{ev.date} · <i className="bi bi-geo-alt ms-2 me-2"></i>{ev.location}</p>
                <button className="btn btn-outline-primary btn-sm">{t.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2 className="h4">{t.past}</h2>
          <p className="text-muted">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCampaigns;


