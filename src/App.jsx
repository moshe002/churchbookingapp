import './Index.css';

import Routing from './routes/routes'

// PrayBook - A church prayer booking app
// for scripts Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process

function App() {
  return ( 
    <div>
      <Routing />
    </div>
  );
}

// npm start (app migrated to vite from cra (Create React App))
// do ctrl + q to end process and development

export default App;
