import './Index.css';

import Homepage from './pages/homePage';
import Bookingpage from './pages/bookingPage';
import Masspage from './pages/liveMassPage';
import AboutUspage from './pages/aboutUsPage';

import Header from './components/Header';

//import Routing from './routes/routes'

// PrayBook - A church prayer booking app
// for scripts Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process

function App() {
  return ( 
    <>
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
