import React, { useEffect } from 'react';

function App() {
  // turn off scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
  }, []);
  
  return (
    <div>
      <h1>Witamy na mojej stronie portfolio!</h1>
      <p>Scrollowanie jest zawsze zablokowane.</p>
    </div>
  );
}
export default App;
