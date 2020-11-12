import { useState, useEffect, useLayoutEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import Lottie from 'lottie-web';
// import '@lottiefiles/lottie-player';
// import test from '../animations/data.json'
// import test2 from 'https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json'
// import json from '../animations/gradient.json';
// const bg = JSON.parse(json);

// const test = 


const debounce = require('lodash/debounce');

function App() {

  const [isMobileMode, setIsMobileMode] = useState(false);

  function setViewPortMode() {
      (window.innerWidth <= 768) ? setIsMobileMode(true) : setIsMobileMode(false);

  }

  // document.querySelector('.page').style.backgroundImage = {bg};

  useEffect( _ => {
    window.addEventListener('resize', debounce(setViewPortMode, 100));
    // document.addEventListener('DOMContentLoaded', setBackground);
    return _ => {
      window.removeEventListener('resize', debounce(setViewPortMode, 100));
      // document.addEventListener('DOMContentLoaded', setBackground);
    }
  }, []);

  // function setBackground() {
  //   Lottie.loadAnimation({
  //     container:  document.querySelector('.animation'), // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: 'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json' // the path to the animation json
  //   });
  // }

  useLayoutEffect( _ => {
    document.addEventListener('DOMContentLoaded', setViewPortMode);
    // document.addEventListener('DOMContentLoaded', setBackground);
    return _ => {
      document.addEventListener('DOMContentLoaded', setViewPortMode);
      // document.addEventListener('DOMContentLoaded', setBackground);
    }
  }, []);
  // console.log(test)
  // console.log(test2)
  
  return (
      <>        
      {/* <lottie-player
              autoplay
              loop
              mode="normal"
              src={test}
              style={{width: '320px', height: '600px'}}
            >
            </lottie-player>
        <div className='animation'>
          
         </div> */}
        <Header isMobileMode={isMobileMode} />
        <Main isMobileMode={isMobileMode}/>
        <Footer />    
      </>
  );
}

export default App;