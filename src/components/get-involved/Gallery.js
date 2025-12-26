import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../../index';

const Gallery = () => {
  const { lang } = useContext(LanguageContext);

  const t = useMemo(() => ({
    title: lang === 'HI' ? 'गैलरी' : 'Gallery',
    subtitle: lang === 'HI' ? 'हमारे कार्य की झलकियाँ' : 'Highlights of our work'
  }), [lang]);

  const containerStyle = { marginTop: '5.5rem', marginBottom: '2rem' };

  const images = [
    '/images/founder/img1.jpeg',
    '/images/founder/img2.jpeg',
    '/images/founder/img3.jpg',
    '/images/founder/img4.jpg',
    '/images/founder/img5.jpg',
    '/images/founder/img6.jpg',
    '/images/founder/img7.jpg'
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
        {images.map((src, idx) => (
          <div key={idx} className="col-6 col-md-4 col-lg-3">
            <div className="ratio ratio-1x1 rounded overflow-hidden" style={{backgroundColor: '#f2f2f2'}}>
              <img src={src} alt={`gallery-${idx}`} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


