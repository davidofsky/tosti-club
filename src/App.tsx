import React, { useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import useLocalStorage from 'use-local-storage';
import Home from './Pages/Home';
import Settings from './Pages/Modals/Settings';
import './Styles/App.css'

function App() {

  const [storedDarkMode, setStoredDarkMode] = useLocalStorage('darkMode', 'disabled')

  const [darkMode, setDarkMode] = useState((storedDarkMode === 'disabled')? false : true);

  useEffect(() => {
    setStoredDarkMode(darkMode? 'enabled' : 'disabled')
  }, [darkMode])

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="App" id={darkMode? "dark" : "light"}>
        <Home settingsPage={<Settings darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
