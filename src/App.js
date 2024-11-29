import React, { useState } from 'react';
import SteeringWheel from './components/SteeringWheel';
import Screen from './components/Screen';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  
  return (
    <div className="App">
      <Screen section={activeSection} /> 
      <SteeringWheel onButtonClick={setActiveSection} />
    </div>
  );
}
export default App;
