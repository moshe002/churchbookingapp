import React, { useState, useEffect } from 'react';
import './Index.css';

import { BiCaretUp } from 'react-icons/bi';

import Homepage from './pages/homePage';
import Bookingpage from './pages/bookingPage';
import Masspage from './pages/liveMassPage';
import AboutUspage from './pages/aboutUsPage';

import Header from './components/Header';

// PrayBook - A church prayer booking app
// for scripts Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process

function App() {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
      return () => {
        window.removeEventListener("scroll", checkScrollTop);
      };
  }, [showScroll]);

  return ( 
    <>
      {showScroll 
        && (
          <button
            className="fixed bottom-10 right-16 z-10 p-3 rounded-full bg-gray-400 text-black hover:bg-black hover:text-white duration-150"
            onClick={scrollTop}
            title="Scroll To Top"
          >
            <BiCaretUp className='text-2xl text-center' /> 
          </button>
      )}
      <Header />
      <Homepage />
      <Bookingpage />
      <Masspage />
      <AboutUspage />
    </>
  );
}

// npm start (app migrated to vite from cra (Create React App))
// do ctrl + q to end process and development

export default App;
