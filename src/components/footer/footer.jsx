import React, {useState, useEffect} from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__copyright">
          <span>Copyright © {currentYear}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
