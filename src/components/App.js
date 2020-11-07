import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const [mobileMode, setMobileMode] = useState(false);

  function setViewPortMode() {
      (window.innerWidth <= 768) ? setMobileMode(true) : setMobileMode(false);
  }

  useEffect(_ => {
    document.addEventListener('DOMContentLoaded', setViewPortMode);
    window.addEventListener('resize', setViewPortMode);
    return _ => {
      document.removeEventListener('DOMContentLoaded', setViewPortMode);
      window.removeEventListener('resize', setViewPortMode);
    }
  }, []);
  
  return (

      <>
        <Header isMobileMode={mobileMode}/>
        <Main isMobileMode={mobileMode}/>
        <Footer />    
      </>
  );
}

export default App;