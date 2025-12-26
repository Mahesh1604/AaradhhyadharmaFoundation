# Aaradhyadharma Foundation Website

A modern, responsive React website for Aaradhyadharma Foundation - dedicated to serving humanity, protecting animals, and spreading dharma.

## 🚀 Features

### Core Features
- ✅ Responsive design for all devices
- ✅ Bilingual support (English & Hindi)
- ✅ Modern animations and transitions
- ✅ Interactive navigation with dropdowns
- ✅ Beautiful gradient background
- ✅ Fast loading and optimized performance

### Pages & Components
1. **Home Page**
   - Hero section with animated text
   - Statistics cards (Animals Rescued, Children Adopted, Lives Impacted)
   - 4 Program cards with images and details
   - Call-to-action section

2. **Navigation**
   - About Us (Mission/Vision, Team, Locations, FAQ)
   - Programs (Animal Welfare, Orphanage Support, Needy Assistance, Animal Rescue)
   - Get Involved (Volunteer, Partner, Contact, Login)
   - Quick actions (Adopt, Donate)
   - Language switcher (EN/HI)
   - Search functionality

3. **Footer**
   - Social media links (Facebook, Twitter, Instagram, LinkedIn, YouTube)
   - Quick links and programs
   - Newsletter signup
   - Contact information

## 📁 Project Structure

```
src/
├── components/
│   ├── about-us/         # About pages
│   ├── get-involved/     # Volunteer, Gallery, etc.
│   ├── programs/         # Program detail pages
│   ├── Navbar.js         # Navigation component
│   ├── Footer.js         # Footer with social links
│   ├── HomeSections.js   # Main content sections
│   ├── Donate.js         # Donation page
│   └── ...
├── layouts/
│   └── MainLayout.jsx    # Main layout wrapper
├── pages/
│   └── Home.jsx          # Home page
├── styles/
│   ├── index.css         # Main styles with animations
│   └── App.css           # App specific styles
├── assets/
│   └── images/           # Images and logos
├── App.js                # Main app component
└── index.js              # Entry point with providers
```

## 🎨 Styling & Animations

### CSS Features
- **Fast Animations**: 0.2-0.5s transitions
- **Hover Effects**: Cards lift, images zoom
- **Smooth Scrolling**: Hardware-accelerated
- **Gradient Background**: Animated multi-layer gradient
- **Glass Morphism**: Subtle blur effects

### Animation Classes
- `animate-fade-in` - Fade in animation (0.4s)
- `animate-slide-up` - Slide up animation (0.5s)
- `animate-fade-glow` - Glow fade-in (0.6s)
- `hover-lift` - Lift effect on hover
- `animate-pulse` - Pulse animation

## 🛠️ Technologies

- **React** 19.1.1
- **React Router DOM** 6.x
- **Bootstrap** 5.x
- **Bootstrap Icons**
- **React Scripts** 5.0.1

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🌐 Available Routes

- `/` - Home page
- `/volunteer` - Volunteer registration
- `/donate` - Donation page
- `/adopt` - Adoption page
- `/contact` - Contact form
- `/mission` - Mission & Vision
- `/team` - Team & Founders
- `/locations` - Our Locations
- `/faq` - Frequently Asked Questions
- `/programs/*` - Program detail pages

## 🎯 Key Components

### Navbar
- Fixed top navigation
- Blur effect on scroll
- Dropdown menus with icons
- Language switcher
- Search functionality

### HomeSections
- 4 program cards with:
  - High-quality images from Unsplash
  - Icon indicators
  - Feature lists
  - Learn more buttons
- Call-to-action card with gradient

### Footer
- Social media icons with hover animations
- Newsletter signup
- Quick links navigation
- Copyright information

## 🚀 Performance Optimizations

1. **Fast Animations**: All animations under 0.5s
2. **Hardware Acceleration**: GPU-accelerated transforms
3. **Lazy Loading**: Images load on demand
4. **Code Splitting**: Route-based code splitting
5. **Optimized Images**: Proper sizing and formats

## 🎨 Color Palette

- Primary Purple: #667eea
- Secondary Purple: #764ba2
- Pink: #f093fb
- Red/Danger: #dc3545
- Green/Success: #28a745
- Yellow/Warning: #ffc107

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: 768px - 992px
- Large Desktop: > 992px

## 🌍 Internationalization

Supports English (EN) and Hindi (HI) with dynamic content switching.

## 📝 Environment Variables

Create `.env` file:
```
REACT_APP_API_URL=your_api_url
REACT_APP_CONTACT_EMAIL=foundation@example.com
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License

© 2025 Aaradhyadharma Foundation. All rights reserved.

## 🐛 Known Issues

None currently. Report issues via GitHub.

## 📞 Support

For support, email: AaradhyadharmaFoundation@gmail.com

## 🙏 Acknowledgments

- Images: Unsplash
- Icons: Bootstrap Icons
- Framework: React & Bootstrap
