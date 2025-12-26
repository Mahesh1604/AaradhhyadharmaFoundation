import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../index';
import Navbar from '../Navbar';

const FAQ = () => {
  const { lang } = useContext(LanguageContext);
  const T = (en, hi) => (lang === 'HI' ? hi : en);
  const [openCategory, setOpenCategory] = useState('general');

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingTop: '100px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  };

  const sectionStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '3rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const subtitleStyle = {
    color: '#6c757d',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const categoryTabsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  };

  const tabButtonStyle = {
    padding: '0.75rem 1.5rem',
    border: '2px solid #007bff',
    backgroundColor: 'transparent',
    color: '#007bff',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500'
  };

  const activeTabStyle = {
    ...tabButtonStyle,
    backgroundColor: '#007bff',
    color: '#ffffff'
  };

  const faqItemStyle = {
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    marginBottom: '1rem',
    overflow: 'hidden'
  };

  const faqQuestionStyle = {
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '600',
    color: '#2c3e50',
    transition: 'background-color 0.3s ease'
  };

  const faqAnswerStyle = {
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    color: '#6c757d',
    lineHeight: '1.6',
    borderTop: '1px solid #e9ecef'
  };

  const faqData = {
    general: [
      {
        question: T('What is Aaradhyadharma Foundation?', 'आराध्यधर्म फाउंडेशन क्या है?'),
        answer: T(
          'Aaradhyadharma Foundation is a non-profit organization dedicated to serving humanity, protecting animals, and spreading the message of dharma (righteousness). We work towards creating a compassionate world through various programs including animal rescue, child care, and community support.',
          'आराध्यधर्म फाउंडेशन एक गैर-लाभकारी संगठन है जो मानवता की सेवा, पशुओं की रक्षा और धर्म (धार्मिकता) का संदेश फैलाने के लिए समर्पित है। हम पशु बचाव, बाल देखभाल और सामुदायिक सहायता सहित विभिन्न कार्यक्रमों के माध्यम से एक करुणामय दुनिया बनाने की दिशा में काम करते हैं।'
        )
      },
      {
        question: T('How can I contact the foundation?', 'मैं फाउंडेशन से कैसे संपर्क कर सकता हूं?'),
        answer: T(
          'You can contact us through our emergency helpline at +91 1800 123 4567, email us at info@aaradhyadharma.org, or visit any of our centers. For specific inquiries, please check our contact page for detailed information.',
          'आप हमारी आपातकालीन हेल्पलाइन +91 1800 123 4567 पर, हमें info@aaradhyadharma.org पर ईमेल करके, या हमारे किसी भी केंद्र पर जाकर हमसे संपर्क कर सकते हैं। विशिष्ट पूछताछ के लिए, कृपया विस्तृत जानकारी के लिए हमारा संपर्क पेज देखें।'
        )
      },
      {
        question: T('Is the foundation registered and legal?', 'क्या फाउंडेशन पंजीकृत और कानूनी है?'),
        answer: T(
          'Yes, Aaradhyadharma Foundation is a legally registered non-profit organization under the Societies Registration Act. We have all necessary certifications and work in compliance with government regulations.',
          'हां, आराध्यधर्म फाउंडेशन सोसाइटी पंजीकरण अधिनियम के तहत एक कानूनी रूप से पंजीकृत गैर-लाभकारी संगठन है। हमारे पास सभी आवश्यक प्रमाणपत्र हैं और सरकारी नियमों का पालन करते हुए काम करते हैं।'
        )
      }
    ],
    animal: [
      {
        question: T('How do you rescue animals?', 'आप पशुओं को कैसे बचाते हैं?'),
        answer: T(
          'We have a dedicated rescue team that responds to emergency calls 24/7. When we receive a report about an injured or distressed animal, our team immediately reaches the location with proper equipment and veterinary support to rescue and provide immediate care.',
          'हमारे पास एक समर्पित बचाव टीम है जो 24/7 आपातकालीन कॉल का जवाब देती है। जब हमें किसी घायल या परेशान पशु की रिपोर्ट मिलती है, तो हमारी टीम तुरंत उचित उपकरणों और पशु चिकित्सा समर्थन के साथ स्थान पर पहुंचती है ताकि बचाव और तत्काल देखभाल प्रदान कर सके।'
        )
      },
      {
        question: T('What types of animals do you help?', 'आप किस प्रकार के पशुओं की मदद करते हैं?'),
        answer: T(
          'We help all types of animals including stray dogs, cats, cows, birds, and other domestic and wild animals in distress. Our focus is on providing care to any animal that needs help, regardless of species.',
          'हम सभी प्रकार के पशुओं की मदद करते हैं जिनमें आवारा कुत्ते, बिल्लियां, गायें, पक्षी और परेशानी में फंसे अन्य घरेलू और जंगली जानवर शामिल हैं। हमारा ध्यान किसी भी प्रजाति के बावजूद मदद की जरूरत वाले किसी भी पशु की देखभाल प्रदान करने पर है।'
        )
      },
      {
        question: T('Can I adopt an animal from your shelter?', 'क्या मैं आपके आश्रय से कोई पशु गोद ले सकता हूं?'),
        answer: T(
          'Yes, we have an adoption program for rescued animals. After proper medical care and rehabilitation, animals that are healthy and ready for adoption are made available. You can visit our shelters or contact us for more information about the adoption process.',
          'हां, हमारे पास बचाए गए पशुओं के लिए एक गोद लेने का कार्यक्रम है। उचित चिकित्सा देखभाल और पुनर्वास के बाद, स्वस्थ और गोद लेने के लिए तैयार पशुओं को उपलब्ध कराया जाता है। आप हमारे आश्रयों में जा सकते हैं या गोद लेने की प्रक्रिया के बारे में अधिक जानकारी के लिए हमसे संपर्क कर सकते हैं।'
        )
      }
    ],
    children: [
      {
        question: T('How do you help orphaned children?', 'आप अनाथ बच्चों की कैसे मदद करते हैं?'),
        answer: T(
          'We provide comprehensive care including shelter, food, education, and emotional support to orphaned children. We work with registered orphanages and also run our own children\'s homes where children receive love, care, and opportunities for a better future.',
          'हम अनाथ बच्चों को आश्रय, भोजन, शिक्षा और भावनात्मक समर्थन सहित व्यापक देखभाल प्रदान करते हैं। हम पंजीकृत अनाथालयों के साथ काम करते हैं और अपने स्वयं के बच्चों के घर भी चलाते हैं जहां बच्चों को प्यार, देखभाल और बेहतर भविष्य के अवसर मिलते हैं।'
        )
      },
      {
        question: T('What is the adoption process for children?', 'बच्चों के लिए गोद लेने की प्रक्रिया क्या है?'),
        answer: T(
          'Child adoption follows strict legal procedures as per Indian law. Prospective parents must meet eligibility criteria, complete background checks, and go through a legal process. We work with authorized adoption agencies and ensure all adoptions are conducted legally and ethically.',
          'बच्चों को गोद लेने की प्रक्रिया भारतीय कानून के अनुसार सख्त कानूनी प्रक्रियाओं का पालन करती है। संभावित माता-पिता को पात्रता मानदंडों को पूरा करना होगा, पृष्ठभूमि जांच पूरी करनी होगी, और कानूनी प्रक्रिया से गुजरना होगा। हम अधिकृत गोद लेने वाली एजेंसियों के साथ काम करते हैं और सुनिश्चित करते हैं कि सभी गोद लेने की प्रक्रिया कानूनी और नैतिक रूप से की जाए।'
        )
      },
      {
        question: T('How can I sponsor a child\'s education?', 'मैं किसी बच्चे की शिक्षा का प्रायोजन कैसे कर सकता हूं?'),
        answer: T(
          'You can sponsor a child\'s education through our sponsorship program. This includes school fees, books, uniforms, and other educational expenses. Contact us for more details about our sponsorship programs and how you can make a difference in a child\'s life.',
          'आप हमारे प्रायोजन कार्यक्रम के माध्यम से किसी बच्चे की शिक्षा का प्रायोजन कर सकते हैं। इसमें स्कूल फीस, किताबें, वर्दी और अन्य शैक्षिक खर्च शामिल हैं। हमारे प्रायोजन कार्यक्रमों और आप किसी बच्चे के जीवन में कैसे बदलाव ला सकते हैं, इसके बारे में अधिक जानकारी के लिए हमसे संपर्क करें।'
        )
      }
    ],
    donation: [
      {
        question: T('How can I donate to the foundation?', 'मैं फाउंडेशन को कैसे दान कर सकता हूं?'),
        answer: T(
          'You can donate through our website, bank transfer, or by visiting our centers. We accept both one-time and recurring donations. All donations are tax-deductible and we provide proper receipts for your contributions.',
          'आप हमारी वेबसाइट, बैंक ट्रांसफर, या हमारे केंद्रों पर जाकर दान कर सकते हैं। हम एक बार के और आवर्ती दोनों प्रकार के दान स्वीकार करते हैं। सभी दान कर-कटौती योग्य हैं और हम आपके योगदान के लिए उचित रसीदें प्रदान करते हैं।'
        )
      },
      {
        question: T('Where does my donation money go?', 'मेरा दान का पैसा कहां जाता है?'),
        answer: T(
          'Your donations are used for animal rescue operations, medical care for animals, food and shelter for children, educational programs, and maintaining our facilities. We maintain complete transparency and provide regular reports on how funds are utilized.',
          'आपके दान का उपयोग पशु बचाव अभियानों, पशुओं की चिकित्सा देखभाल, बच्चों के लिए भोजन और आश्रय, शैक्षिक कार्यक्रमों और हमारी सुविधाओं के रखरखाव के लिए किया जाता है। हम पूर्ण पारदर्शिता बनाए रखते हैं और धन का उपयोग कैसे किया गया है, इस पर नियमित रिपोर्ट प्रदान करते हैं।'
        )
      },
      {
        question: T('Can I donate in kind (food, medicines, etc.)?', 'क्या मैं वस्तु के रूप में दान कर सकता हूं (भोजन, दवाएं, आदि)?'),
        answer: T(
          'Yes, we accept in-kind donations such as food, medicines, blankets, toys, and other essential items. Please contact us to coordinate the donation and ensure we receive items that are most needed at the time.',
          'हां, हम भोजन, दवाएं, कंबल, खिलौने और अन्य आवश्यक वस्तुओं जैसे वस्तु के रूप में दान स्वीकार करते हैं। कृपया दान का समन्वय करने और सुनिश्चित करने के लिए हमसे संपर्क करें कि हमें उस समय सबसे ज्यादा जरूरी वस्तुएं मिलें।'
        )
      }
    ],
    volunteer: [
      {
        question: T('How can I become a volunteer?', 'मैं स्वयंसेवक कैसे बन सकता हूं?'),
        answer: T(
          'You can register as a volunteer through our website or by visiting any of our centers. We have various volunteer opportunities including animal care, child care, administrative work, and community outreach. Training is provided for all volunteers.',
          'आप हमारी वेबसाइट के माध्यम से या हमारे किसी भी केंद्र पर जाकर स्वयंसेवक के रूप में पंजीकरण कर सकते हैं। हमारे पास पशु देखभाल, बाल देखभाल, प्रशासनिक कार्य और सामुदायिक आउटरीच सहित विभिन्न स्वयंसेवक अवसर हैं। सभी स्वयंसेवकों के लिए प्रशिक्षण प्रदान किया जाता है।'
        )
      },
      {
        question: T('What skills do I need to volunteer?', 'स्वयंसेवक बनने के लिए मुझे कौन से कौशल की आवश्यकता है?'),
        answer: T(
          'The most important skill is compassion and willingness to help. Specific skills depend on the type of work you want to do. For animal care, basic animal handling knowledge is helpful. For child care, patience and love for children are essential. We provide training for all necessary skills.',
          'सबसे महत्वपूर्ण कौशल करुणा और मदद करने की इच्छा है। विशिष्ट कौशल इस बात पर निर्भर करते हैं कि आप किस प्रकार का काम करना चाहते हैं। पशु देखभाल के लिए, बुनियादी पशु प्रबंधन ज्ञान सहायक होता है। बाल देखभाल के लिए, धैर्य और बच्चों के लिए प्यार आवश्यक है। हम सभी आवश्यक कौशलों के लिए प्रशिक्षण प्रदान करते हैं।'
        )
      },
      {
        question: T('Can I volunteer remotely or online?', 'क्या मैं दूर से या ऑनलाइन स्वयंसेवक बन सकता हूं?'),
        answer: T(
          'Yes, we have remote volunteer opportunities including social media management, content creation, fundraising, and administrative support. You can contribute your skills from anywhere in the world to support our mission.',
          'हां, हमारे पास सोशल मीडिया प्रबंधन, सामग्री निर्माण, धन उगाहने और प्रशासनिक समर्थन सहित दूरस्थ स्वयंसेवक अवसर हैं। आप दुनिया में कहीं से भी अपने कौशल का योगदान कर सकते हैं ताकि हमारे मिशन का समर्थन कर सकें।'
        )
      }
    ]
  };

  const categories = [
    { id: 'general', name: T('General', 'सामान्य'), icon: 'bi-info-circle' },
    { id: 'animal', name: T('Animal Welfare', 'पशु कल्याण'), icon: 'bi-heart-pulse' },
    { id: 'children', name: T('Children', 'बच्चे'), icon: 'bi-person-heart' },
    { id: 'donation', name: T('Donations', 'दान'), icon: 'bi-cash-coin' },
    { id: 'volunteer', name: T('Volunteering', 'स्वयंसेवा'), icon: 'bi-people' }
  ];

  return (
    <div style={pageStyle}>
      <Navbar />
      <div style={containerStyle}>
        <section style={sectionStyle}>
          <h1 style={titleStyle}>
            {T('Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न')}
          </h1>
          <p style={subtitleStyle}>
            {T('Find answers to common questions about our foundation and services', 'हमारे फाउंडेशन और सेवाओं के बारे में सामान्य प्रश्नों के उत्तर खोजें')}
          </p>

          <div style={categoryTabsStyle}>
            {categories.map(category => (
              <button
                key={category.id}
                style={openCategory === category.id ? activeTabStyle : tabButtonStyle}
                onClick={() => setOpenCategory(category.id)}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.name}
              </button>
            ))}
          </div>

          <div>
            {faqData[openCategory].map((faq, index) => (
              <div key={index} style={faqItemStyle}>
                <div style={faqQuestionStyle}>
                  <span>{faq.question}</span>
                  <i className="bi bi-chevron-down"></i>
                </div>
                <div style={faqAnswerStyle}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div style={{...sectionStyle, marginTop: '3rem'}}>
            <h2 style={{...titleStyle, fontSize: '2rem'}}>
              <i className="bi bi-envelope me-2"></i>
              {T('Still Have Questions?', 'अभी भी प्रश्न हैं?')}
            </h2>
            <p style={{...subtitleStyle, marginBottom: '2rem'}}>
              {T('If you couldn\'t find the answer you were looking for, please contact us directly', 'यदि आपको वह उत्तर नहीं मिला जिसकी आप तलाश कर रहे थे, तो कृपया सीधे हमसे संपर्क करें')}
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
              <div style={{textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                <i className="bi bi-telephone" style={{fontSize: '2rem', color: '#007bff', marginBottom: '1rem'}}></i>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>{T('Call Us', 'हमें कॉल करें')}</h4>
                <p style={{color: '#6c757d'}}>+91 1800 123 4567</p>
              </div>
              <div style={{textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                <i className="bi bi-envelope" style={{fontSize: '2rem', color: '#28a745', marginBottom: '1rem'}}></i>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>{T('Email Us', 'हमें ईमेल करें')}</h4>
                <p style={{color: '#6c757d'}}>info@aaradhyadharma.org</p>
              </div>
              <div style={{textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                <i className="bi bi-chat" style={{fontSize: '2rem', color: '#dc3545', marginBottom: '1rem'}}></i>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>{T('Live Chat', 'लाइव चैट')}</h4>
                <p style={{color: '#6c757d'}}>{T('Available 24/7', '24/7 उपलब्ध')}</p>
              </div>
            </div>
          </div>
        </section>
             </div>
     </div>
   );
 };

export default FAQ;
