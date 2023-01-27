import React, { useState, useEffect } from 'react';

function Footer() {

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentYear = new Date().getFullYear();
      if (year !== currentYear) {
        setYear(currentYear);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [year]);
  
  return (
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__copyright">
            © {year} Vittorio Busatta - Réalisation par <a href="">Vittorio</a>
          </p>

          <p className="footer__mentions">
            Mentions légales - Conditions générales de vente
          </p>
        </div>
      </footer>
  );
}

export default Footer;
