import React, { useEffect } from 'react';
import Footer from './components/Footer';
import "./styles/App.css";

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div className='app'>

      <Footer />
    </div>
  );
}
export default App;
