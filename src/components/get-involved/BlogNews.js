import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../../index';

const BlogNews = () => {
  const { lang } = useContext(LanguageContext);

  const t = useMemo(() => ({
    title: lang === 'HI' ? 'ब्लॉग / समाचार' : 'Blog / News',
    subtitle: lang === 'HI' ? 'कहानियाँ, अपडेट और प्रेरणा' : 'Stories, updates, and inspiration',
    readMore: lang === 'HI' ? 'और पढ़ें' : 'Read More'
  }), [lang]);

  const containerStyle = { marginTop: '5.5rem', marginBottom: '2rem' };
  const cardStyle = { boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '12px', border: 'none', height: '100%' };

  const posts = [
    { id: 1, title: 'A rescue that changed lives', excerpt: 'We rescued 12 puppies and found loving homes...', date: '2025-08-01' },
    { id: 2, title: 'New orphanage support initiative', excerpt: 'Launching education kits for 200 kids...', date: '2025-07-15' }
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
        {posts.map(post => (
          <div key={post.id} className="col-md-6">
            <div className="card h-100" style={cardStyle}>
              <div className="card-body d-flex flex-column">
                <span className="text-muted small mb-1"><i className="bi bi-calendar3 me-2"></i>{post.date}</span>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.excerpt}</p>
                <div className="mt-auto">
                  <button className="btn btn-outline-secondary btn-sm">{t.readMore}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogNews;


