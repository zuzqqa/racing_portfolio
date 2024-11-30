import React, { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div>
      <h1>Witamy na mojej stronie portfolio!</h1>
      <p>Scrollowanie jest zawsze zablokowane.</p>
      <Footer />
    </div>
  );
}
export default App;
