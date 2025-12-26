import React, { useContext, useEffect } from 'react';
import HomeSections from '../components/HomeSections';
import { LanguageContext } from '../index';

const Home = () => {
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    document.body.style.paddingTop = '0';
    
    return () => { 
      document.body.style.paddingTop = '';
    };
  }, []);

  return (
    <>
      <main className="container-fluid position-relative d-flex align-items-center" style={{ 
        minHeight: '100vh',
        backgroundImage: 'url(/images/foundation.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)'
        }}></div>
        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <section className="text-center py-4 my-4">
            <h1 className="display-4 fw-semibold mb-3 lh-base animate-fade-glow" style={{color: '#1a1a1a', textShadow: '2px 2px 4px rgba(255,255,255,0.5)', animationDelay: '0.1s'}}>
              <span className="d-inline-flex align-items-center justify-content-center flex-wrap gap-2">
                {lang === 'HI'
                  ? 'मानवता की सेवा · पशु संरक्षण · धर्म का प्रसार'
                  : 'Serving Humanity · Protecting Animals · Spreading Dharma'}
              </span>
            </h1>
            <p className="fs-5 mb-4 mx-auto animate-fade-in" style={{ maxWidth: '750px', color: '#2d2d2d', textShadow: '1px 1px 2px rgba(255,255,255,0.5)', lineHeight: '1.4', animationDelay: '0.3s' }}>
              {lang === 'HI'
                ? 'आराध्यधर्म फाउंडेशन जीवन को संवारने, पशुओं को बचाने, अनाथों की देखभाल करने और धर्म के माध्यम से करुणा फैलाने के लिए समर्पित है।'
                : 'Aaradhyadharma Foundation is dedicated to uplifting lives, rescuing animals, caring for orphans, and spreading compassion through dharma.'}
            </p>
          </section>

          <section className="row justify-content-center g-4 mb-5 mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="card stats-card h-100 border-0 shadow-lg rounded-3 hover-lift" style={{background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(8px)'}}>
                <div className="card-body p-3 text-center">
                  <div className="h2 fw-bold text-primary mb-2 d-flex align-items-center justify-content-center gap-2">
                    <i className="bi bi-heart-pulse fs-3"></i>
                    <span>2,500+</span>
                  </div>
                  <h6 className="text-muted fw-semibold mb-1">Animals Rescued</h6>
                  <small className="text-secondary">Making a difference in animal welfare</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card stats-card h-100 border-0 shadow-lg rounded-3 hover-lift" style={{background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(8px)'}}>
                <div className="card-body p-3 text-center">
                  <div className="h2 fw-bold text-success mb-2 d-flex align-items-center justify-content-center gap-2">
                    <i className="bi bi-person-heart fs-3"></i>
                    <span>1,200+</span>
                  </div>
                  <h6 className="text-muted fw-semibold mb-1">Children Adopted</h6>
                  <small className="text-secondary">Creating loving families</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card stats-card h-100 border-0 shadow-lg rounded-3 hover-lift" style={{background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(8px)'}}>
                <div className="card-body p-3 text-center">
                  <div className="h2 fw-bold text-warning mb-2 d-flex align-items-center justify-content-center gap-2">
                    <i className="bi bi-people-fill fs-3"></i>
                    <span>5,000+</span>
                  </div>
                  <h6 className="text-muted fw-semibold mb-1">Lives Impacted</h6>
                  <small className="text-secondary">Building stronger communities</small>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <HomeSections />
    </>
  );
};

export default Home;
