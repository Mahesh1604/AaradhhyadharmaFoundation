import React from 'react';

export default function ScrollToTop() {
  const { useEffect } = React;
  const { useLocation } = require('react-router-dom');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
