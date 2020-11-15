import { useState, useEffect, useLayoutEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ViewPortMode from './contexts/ViewPortMode';
import debounce from 'lodash/debounce';

function App() {

  const [viewPortMode, setViewPortMode] = useState({  mode: 'D', 
                                                      windowWidth: 0
                                                    });                                                 

  function setViewPort() {
      let tmpMode = viewPortMode.mode
      if (window.innerWidth <= 768) {
        tmpMode = 'S';
      } else if (window.innerWidth <= 1024) {
        tmpMode = 'M';
      } else if (window.innerWidth <= 1280) {
        tmpMode = 'L';
      } else {
        tmpMode = 'D';
      }
      setViewPortMode({ mode: tmpMode, windowWidth: window.innerWidth});
  }

  useEffect( _ => {
    window.addEventListener('resize', debounce(setViewPort, 100));
    return _ => {
      window.removeEventListener('resize', debounce(setViewPort, 100));
    }
  }, []);

  useLayoutEffect( _ => {
    document.addEventListener('DOMContentLoaded', setViewPortMode);
    return _ => {
      document.addEventListener('DOMContentLoaded', setViewPortMode);
    }
  }, []);
  
  return (
      <>        
        <ViewPortMode.Provider value={viewPortMode}>
            <Header />
            <Main />
        </ViewPortMode.Provider>

        <Footer />    
      </>
  );
}

export default App;